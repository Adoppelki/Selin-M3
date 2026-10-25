#!/usr/bin/env python3
"""Erzeugt aus data/protokolle.json die Website-Dateien protokolle.js und analyse.js
(Format laut README der Website). Ausgabe: website/data/protokolle.js, website/data/analyse.js
Aufruf: python3 scripts/build_website_data.py [Zielordner]"""
import json, os, sys, collections

base = os.path.join(os.path.dirname(__file__), "..")
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(base, "website", "data")
os.makedirs(out, exist_ok=True)
d = json.load(open(os.path.join(base, "data", "protokolle.json"), encoding="utf-8"))
P = d["pruefer"]
ORDER = ["willuweit", "alesina", "griewank", "kebir", "hinrichs"]
ORDER += [k for k in P if k not in ORDER]
FACH_ORDER = {"Innere Medizin": 0, "Chirurgie": 1, "Dermatologie": 2, "Neurologie": 3}

def as_text(x):
    return x if isinstance(x, str) else json.dumps(x, ensure_ascii=False)

def lst(x):
    return [as_text(i) for i in (x or [])]

protos = []
for p in d["protokolle"]:
    m, pr = p.get("muendlich", {}), p.get("praktisch", {})
    t = []
    def add(label, v):
        if v:
            t.append(f"## {label}\n" + (v if isinstance(v, str) else "\n".join("- " + as_text(i) for i in v)))
    add("Vorgespräch", p.get("vorgespraech"))
    add("Ablauf", p.get("ablauf"))
    add("Praktische Prüfung: Patienten", pr.get("patienten"))
    add("Praktische Prüfung: Untersuchung", pr.get("untersuchung"))
    add("Praktische Prüfung: Fragen", pr.get("fragen"))
    add("Ausgefallene Frage", p.get("ausgefallene_frage"))
    add("Bücher", p.get("buecher"))
    add("Atmosphäre", p.get("atmosphaere"))
    add("Kommission", p.get("kommission"))
    add("Tipps", p.get("tipps"))
    add("Note", p.get("note"))
    if not p.get("vollstaendig", True):
        t.append("## Hinweis\nDieses Protokoll ist unvollständig oder schlecht lesbar.")
    pm = P[p["pruefer_id"]]
    protos.append({
        "id": p["id"],
        "titel": f'{p["fach"]} bei {pm["name"]}' + (" (Reserve)" if "Reserve" in pm.get("rolle", "") else ""),
        "datum": p.get("datum_text") or p.get("datum") or "",
        "ort": p.get("ort") or "",
        "fach": p["fach"],
        "pruefer": [pm["name"]],
        "themen": lst(m.get("themen")),
        "faelle": [{"titel": f} for f in lst(m.get("fallbeispiele"))],
        "fragen": lst(m.get("fragen")),
        "text": "\n\n".join(t),
    })
# Selins Prüfer zuerst, dann nach Datum absteigend
rank = {k: i for i, k in enumerate(ORDER)}
pid = {p["id"]: p["pruefer_id"] for p in d["protokolle"]}
protos.sort(key=lambda x: (rank[pid[x["id"]]], x["datum"] and 0))

stamp = "// Automatisch erzeugt von scripts/build_website_data.py (Protokoll-Branch), nicht von Hand ändern\n"
with open(os.path.join(out, "protokolle.js"), "w", encoding="utf-8") as fh:
    fh.write(stamp + "window.SELIN_PROTOKOLLE = ")
    json.dump(protos, fh, ensure_ascii=False, indent=1)
    fh.write(";\n")

# Analyse
cnt = collections.defaultdict(collections.Counter)
fach_cnt = collections.defaultdict(collections.Counter)
per = collections.defaultdict(list)
for p in d["protokolle"]:
    per[p["pruefer_id"]].append(p)
    for th in p["muendlich"].get("themen", []):
        key = th.strip()
        cnt[p["pruefer_id"]][key] += 1
        fach_cnt[p["fach"]][key] += 1

hinw = {
 "willuweit": "Selins Prüfer in Innere. Im Vorgespräch gesagt: Gastroenterologie/Hepatologie muss komplett sitzen, in den übrigen Gebieten alle großen Innere-Themen. Die Fälle beginnen mit einem Symptom (Ikterus, Oberbauchschmerz, Müdigkeit mit Juckreiz, Durchfall) und springen gern in eine Notfall-Differenzialdiagnose. Serologie lesen und erklären kam vor. Nur 5 Protokolle (2024–2026).",
 "alesina": "Selins Prüfer in Chirurgie. Im Vorgespräch gesagt: Jeder der 3 Prüflinge bekommt einen Onkologie-Fall und einen Allgemeinchirurgie-Fall. Achtung: Es liegen nur Protokolle von 2016 bis 2020 vor, neuere fehlen.",
 "griewank": "Selins Prüfer in Dermatologie. 7 Protokolle von 2015 bis 2025.",
 "kebir": "Selins Prüfer in Neurologie. 9 Protokolle von 2023 bis 2026.",
 "hinrichs": "RESERVE: springt nur ein, falls der eingeteilte Chirurg ausfällt. Sein Themenkatalog dient als Versicherung, nicht als Schwerpunkt.",
}
pruefer = []
for k in ORDER:
    if k not in per: continue
    pm = P[k]
    name = pm["name"] + (" (Reserve)" if k == "hinrichs" else "")
    pruefer.append({
        "name": name, "fach": pm["fach"], "anzahlProtokolle": len(per[k]),
        "topThemen": [{"thema": t, "anzahl": n} for t, n in cnt[k].most_common(8)],
        "faelle": [f for p in per[k] for f in lst(p["muendlich"].get("fallbeispiele"))][:6],
        "hinweise": hinw.get(k, pm.get("schwerpunkt", "")),
    })
themen = []
for fach in sorted(fach_cnt, key=lambda f: FACH_ORDER.get(f, 9)):
    for t, n in fach_cnt[fach].most_common(10):
        themen.append({"thema": t, "fach": fach, "anzahl": n})
faelle = []
for k in ORDER[:4]:
    for p in per.get(k, []):
        for f in lst(p["muendlich"].get("fallbeispiele")):
            faelle.append({"titel": f[:90], "fach": p["fach"], "haeufigkeit": 1, "beschreibung": f"{P[k]['name']}, {p.get('datum_text') or p.get('datum')}: {f}"})
szen = [
 {"titel": "Willuweit: Symptom → Differenzialdiagnose → Notfall", "beschreibung": "Beispiel 2026-06: Diffuse Oberbauchschmerzen → biliäre Pankreatitis → im Verlauf SpO2-Abfall (Sepsis, Pneumonie, Lungenembolie). Immer laut Differenzialdiagnosen strukturieren und sagen, wie man sie ausschließt."},
 {"titel": "Alesina: Onkologie-Fall und Allgemeinchirurgie-Fall", "beschreibung": "Laut Vorgespräch bekommt jeder Prüfling beide Fallarten. Je einen Ablauf von Diagnostik über Therapie bis Nachsorge vorbereiten."},
]
with open(os.path.join(out, "analyse.js"), "w", encoding="utf-8") as fh:
    fh.write(stamp + "window.SELIN_ANALYSE = ")
    json.dump({"stand": "25.10.2026", "themen": themen, "pruefer": pruefer, "faelle": faelle, "szenarien": szen}, fh, ensure_ascii=False, indent=1)
    fh.write(";\n")
print(len(protos), "Protokolle,", len(themen), "Themen,", len(faelle), "Fälle")
