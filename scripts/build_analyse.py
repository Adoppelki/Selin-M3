#!/usr/bin/env python3
"""Erzeugt data/analyse.js aus der Protokoll-Datenbank (protokolle.json).

Aufruf:  python3 scripts/build_analyse.py [pfad/zu/protokolle.json]

Zählregel: Ein Thema zählt einmal pro Protokoll, egal wie oft es darin vorkommt.
Themen entstehen aus Suchmustern (unten), damit verschiedene Schreibweisen desselben Themas
zusammengezählt werden. "Mündlich" = Themen, Fälle und Fragen der mündlichen Prüfung,
"Am Bett" = Untersuchungen, Fragen und Patienten im praktischen Teil.
Priorität: A = mindestens 3 Protokolle oder 2 Protokolle mit mindestens 2 seit Oktober 2024,
B = 2 Protokolle, C = 1 Protokoll.
"""
import json, re, sys, pathlib

root = pathlib.Path(__file__).resolve().parent.parent
src = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "/mnt/project-files/protokolle-analyse/data/protokolle.json")
db = json.loads(src.read_text(encoding="utf-8"))
texte = json.loads((root / "scripts" / "analyse-texte.json").read_text(encoding="utf-8"))
P = db["protokolle"]
PR = db["pruefer"]
RECENT = "2024-10"

# ---------- Suchmuster ----------
# (Bezeichnung, Muster); pro Prüfer, damit gleiche Namen bei zwei Chirurgen zusammengefasst werden können.
THEMEN = {
    "willuweit": [
        ("Ikterus, Cholestase, Leberlabor", r"ikterus|cholestase|leberlabor|pruritus"),
        ("Obere GI-Blutung", r"gi-blutung"),
        ("Pankreatitis und Pankreaskarzinom", r"pankreatitis|pankreaskarzinom"),
        ("Leberzirrhose, TIPS", r"zirrhose|tips"),
        ("Chronisch entzündliche Darmerkrankungen", r"chronisch entzündliche|crohn"),
        ("Autoimmune Lebererkrankungen (PBC, PSC, AIH)", r"pbc|psc|autoimmunhepatitis"),
        ("Zöliakie, Dermatitis herpetiformis", r"zöliakie|duhring"),
        ("Hepatitis-B-Serologie", r"hepatitis b"),
        ("STEMI", r"stemi"),
        ("DD SpO2-Abfall (Sepsis, Pneumonie, LAE)", r"spo2"),
        ("Anämiediagnostik", r"anämie"),
        ("Hashimoto", r"hashimoto"),
    ],
    "alesina": [
        ("Ikterus (chirurgisch vs. internistisch)", r"ikterus"),
        ("Pankreaskopf-Karzinom, Whipple-OP", r"whipple|pankreaskopf"),
        ("Divertikulose, Divertikulitis", r"divertikul"),
        ("Hernien (Leisten-, Zwerchfellhernie)", r"hernie"),
        ("Ösophagus- und Magenkarzinom", r"magen-ca|magenkarzinom|ösophaguskarzinom"),
        ("Kolorektales Karzinom", r"kolorektal"),
        ("Cholangiozelluläres Karzinom, Klatskin-Tumor", r"klatskin|cholangiozellul"),
        ("Gallenblase (Cholezystitis)", r"cholezyst"),
        ("Schilddrüsenknoten", r"schilddrüse"),
        ("Akutes Abdomen, Notaufnahme", r"notaufnahme|unterbauchschmerzen"),
        ("Dysphagie, Ösophagusdivertikel", r"dysphagie|ösophagusdivertikel"),
    ],
    "hinrichs": [
        ("Schilddrüse (Hyperthyreose, Basedow, OP, N. recurrens)", r"hyperthyreose|basedow|struma|schilddrüsen-op|laryngeus"),
        ("Kolon- und Rektumkarzinom", r"kolon|rektumkarzinom|darmkrebs|colon-ca"),
        ("Gallenwege (Cholezystolithiasis, Cholezystitis, ERCP)", r"cholezyst|choledoch|cholelith|ercp"),
        ("Hernien (Leisten-, Schenkel-, Zwerchfellhernie)", r"hernie"),
        ("Ileus, akutes Abdomen", r"ileus|akutes abdomen"),
        ("Crohn und Colitis ulcerosa", r"crohn|colitis"),
        ("Pankreaskarzinom, biliäre Pankreatitis", r"pankreaskarzinom|pankreatitis"),
        ("Nebennierenrinden-Tumoren", r"nebennieren"),
    ],
    "griewank": [
        ("Psoriasis", r"psoria"),
        ("Hauttumoren (Melanom, aktinische Keratose, PEK)", r"melanom|hautkrebs|hauttumor|keratose|keratoakanthom"),
        ("Allergien (Typ I-IV, Tests, Insektengift)", r"allerg|prick|insektenstich"),
        ("Urtikaria", r"urtikaria"),
        ("Atopische Dermatitis, Neurodermitis", r"atopisch|neurodermitis"),
        ("Bullöse Erkrankungen (Pemphigus, Pemphigoid)", r"pemphig|bullös"),
        ("Mycosis fungoides", r"mycosis"),
    ],
    "kebir": [
        ("Status epilepticus", r"status epilepticus|krampf|epileptisch"),
        ("Schlaganfall und intrazerebrale Blutung", r"schlaganfall|\bicb\b|nihss|ischämisch|hemiparese|wortfindung"),
        ("Priorisierung in der Notaufnahme", r"priorisier"),
        ("Multiple Sklerose", r"\bms\b|multiple sklerose|retrobulbär"),
        ("GBS, Miller-Fisher, Polyneuropathie", r"gbs|miller|pnp"),
        ("Myasthenia gravis", r"myasthenia"),
        ("Hirntumore", r"gliom|glioblastom|hirntumor"),
        ("Liquorpunktion", r"liquor"),
        ("Transiente globale Amnesie", r"amnesie"),
        ("Pupillen, Hirnstammreflexe", r"pupill|hirnstamm|lichtreflex"),
        ("Neurologische Untersuchung (Hirnnerven, Reflexe, Kraft)", r"hirnnerv|patellarsehnenreflex|romberg|kraftgrade|babinski"),
        ("Antikoagulation antagonisieren (DOAK, Andexanet, PPSB)", r"doak|andexanet|antidot|ppsb"),
    ],
}
BETT = {
    "willuweit": [
        ("Lunge", r"lunge"),
        ("Abdomen", r"abdomen"),
        ("Herz, Klappenvitien", r"herz|klappenvitien|aortenvitien"),
        ("Nabelhernie, Aszites", r"nabelhernie|umbilikalhernie|aszites"),
        ("Pulsstatus, Ödeme, TVT-Zeichen", r"puls|ödem|tvt"),
        ("Hirnnerven, Fazialisparese", r"hirnnerv|fazialis"),
    ],
    "alesina": [
        ("Abdomen untersuchen", r"abdomen"),
        ("Pulsstatus, pAVK, Gefäßauskultation", r"puls|pavk|aorta"),
        ("Leber, Aszites", r"leber|aszites"),
        ("Appendizitiszeichen, Murphy", r"appendizitis|murphy"),
    ],
    "hinrichs": [
        ("Abdomen komplett untersuchen", r"abdomen"),
        ("Name des Bauchschnitts", r"(?<!ab)schnitt|laparotomie|appendix-op-narbe"),
        ("Appendizitiszeichen", r"appendizitis"),
        ("Pulsstatus, Gefäße", r"puls"),
        ("Ödeme, TVT-Zeichen", r"ödem|tvt"),
        ("Lymphknoten (Virchow, Hals, axillär)", r"virchow|lymphknoten"),
        ("Lunge, Pneumothorax", r"pneumothorax|lunge"),
        ("Herz, Klappenvitien", r"herz|klappen"),
        ("TAVI", r"tavi"),
        ("Schilddrüse untersuchen", r"schilddrüse"),
        ("Milz, Splenomegalie", r"splenomegalie|milz"),
        ("Caput medusae, Leberhautzeichen", r"caput|leberhaut"),
        ("Murphy- und Courvoisier-Zeichen", r"murphy|courvoisier"),
    ],
    "griewank": [],
    "kebir": [],
}
# Fallmuster: nur Texte des Feldes "fallbeispiele"; das erste passende Muster gewinnt.
FAELLE = {
    "innere": [
        ("Chronische Durchfälle, V. a. CED, Zöliakie", r"ced|durchfälle"),
        ("Gastrointestinale Blutung", r"gi-blutung"),
        ("Oberbauchschmerzen, Pankreatitis, Notfall-DD", r"oberbauchschmerz"),
        ("Juckreiz und Müdigkeit, PBC", r"juckreiz|erschöpfung"),
        ("Serologie lesen, Hepatitis B, Ikterus", r"serologie"),
        ("STEMI", r"stemi"),
    ],
    "chirurgie": [
        ("Kolon-/Rektumkarzinom: Vorsorge bis OP", r"vorsorge|karzinom 15 cm|colon-ca|kolonkarzinom|tertial"),
        ("Hyperthyreose, Struma, Schilddrüsenknoten", r"hyperthyreose|struma|tachykardie und gewichtsverlust|schilddrüsenknoten"),
        ("Oberbauchschmerz, Gallenwege", r"oberbauchschmerz|cholezystolithiasis"),
        ("Akutes Abdomen in der Notaufnahme", r"notaufnahme|erbrechen"),
        ("Magenkarzinom, Dysphagie (Onkologie-Fall)", r"magen-ca|schluckbeschwerden"),
        ("Schmerzloser Ikterus", r"ikterus"),
        ("Leistenschwellung, Divertikulose", r"leisten|divertikulose"),
    ],
    "derma": [
        ("Exanthem, Psoriasis guttata", r"exanthem"),
        ("Blickdiagnose: Bild und Differenzialdiagnose", r"bild"),
        ("Auffälliger Nävus, Schuppen am Kopf (Hauttumor)", r"nävus|glatze"),
        ("Insektenstich, Allergie", r"insektenstich"),
        ("Säugling mit schuppender Haut (Ekzem)", r"säugling"),
        ("Offene Stellen am Unterschenkel", r"unterschenkel"),
        ("Älterer Patient, Juckreiz ohne Besserung (Mycosis fungoides)", r"juckenden"),
    ],
    "neuro": [
        ("Notaufnahme: zwei Patienten priorisieren", r"zwei patienten|allein in der notaufnahme|gleichzeitig"),
        ("Krampfender Patient (Status epilepticus)", r"krampf|krampft"),
        ("Plötzliche Sprach- oder Gedächtnisstörung (Schlaganfall)", r"wortfindung|durcheinander"),
        ("Sehstörung bei jungem Patienten (MS)", r"sehstörung"),
        ("Gangunsicherheit, Adduktionsschwäche (GBS, Miller-Fisher)", r"adduktion"),
        ("Schluckstörung, Zungenzuckungen (Myasthenia)", r"schluck"),
    ],
}
FACH_ID = {"Innere Medizin": "innere", "Chirurgie": "chirurgie", "Dermatologie": "derma", "Neurologie": "neuro"}


def txt_mund(p):
    m = p["muendlich"]
    t = " ".join(m["themen"] + m["fallbeispiele"] + m["fragen"])
    # Themen, die nur angekündigt, aber nicht mehr gefragt wurden, zählen nicht
    return re.sub(r"[^.]*sollte noch gefragt werden[^.]*", "", t)


def txt_bett(p):
    k = p["praktisch"]
    return " ".join(k["untersuchung"] + k["fragen"] + k["patienten"])


def prio(n, daten):
    recent = sum(1 for d in daten if d and d >= RECENT)
    if n >= 3 or (n == 2 and recent >= 2):
        return "A"
    return "B" if n == 2 else "C"


def zaehle(pid, regeln, textfn, art):
    out = []
    ps = [p for p in P if p["pruefer_id"] == pid]
    for name, rx in regeln:
        r = re.compile(rx, re.I)
        treffer = [p for p in ps if r.search(textfn(p))]
        if not treffer:
            continue
        daten = [p.get("datum") for p in treffer]
        out.append({
            "thema": name, "art": art, "fach": FACH_ID[PR[pid]["fach"]], "pruefer": pid,
            "anzahl": len(treffer), "protokolle": [p["id"] for p in treffer],
            "zuletzt": max([d for d in daten if d] or [""]) or None,
            "prio": prio(len(treffer), daten),
        })
    out.sort(key=lambda t: (-t["anzahl"], t["zuletzt"] and -int(t["zuletzt"][:4]), t["thema"]))
    return out


themen, bett = [], []
for pid in PR:
    themen += zaehle(pid, THEMEN.get(pid, []), txt_mund, "mündlich")
    bett += zaehle(pid, BETT.get(pid, []), txt_bett, "am Bett")

# Fallmuster je Fach
faelle = []
for fid, regeln in FAELLE.items():
    compiled = [(n, re.compile(rx, re.I)) for n, rx in regeln]
    gruppen = {n: [] for n, _ in compiled}
    uebrig = []
    for p in P:
        if FACH_ID[p["fach"]] != fid:
            continue
        for f in p["muendlich"]["fallbeispiele"]:
            ziel = next((n for n, r in compiled if r.search(f)), None)
            bsp = {"protokoll": p["id"], "pruefer": PR[p["pruefer_id"]]["name"], "datum": p.get("datum_text") or p.get("datum") or "ohne Datum", "text": f}
            (gruppen[ziel] if ziel else uebrig).append(bsp)
    for n, bsp in gruppen.items():
        if not bsp:
            continue
        ids = sorted({b["protokoll"] for b in bsp})
        faelle.append({"muster": n, "fach": fid, "anzahl": len(ids), "beispiele": bsp})
    if uebrig:
        ids = sorted({b["protokoll"] for b in uebrig})
        faelle.append({"muster": "Weitere Fälle", "fach": fid, "anzahl": len(ids), "beispiele": uebrig, "sonstige": True})
faelle.sort(key=lambda f: (f.get("sonstige", False), -f["anzahl"], f["muster"]))

# Prüferkarten
pruefer = []
for pid, v in PR.items():
    ps = [p for p in P if p["pruefer_id"] == pid]
    daten = sorted(p["datum"] for p in ps if p.get("datum"))
    rolle = "reserve" if v["rolle"].lower().startswith("reserve") else "eingeteilt"
    name = v["name"] + (" (Reserve)" if rolle == "reserve" else "")
    pruefer.append({
        "id": pid, "name": v["name"], "fach": FACH_ID[v["fach"]], "schwerpunkt": v.get("schwerpunkt", ""),
        "rolle": rolle, "anzahlProtokolle": len(ps),
        "zeitraum": (daten[0][:7] + " bis " + daten[-1][:7]) if daten else None,
        "hinweise": texte["hinweise"].get(name) or texte["hinweise"].get(v["name"]) or "",
    })

out = {
    "stand": "25.10.2026",
    "anzahlProtokolle": len(P),
    "hinweis": "Gezählt wird, in wie vielen Protokollen ein Thema vorkam (einmal pro Protokoll). Protokolle sind Berichte von Prüflingen und können Fehler enthalten.",
    "pruefer": pruefer,
    "themen": themen,
    "bett": bett,
    "faelle": faelle,
    "szenarien": texte["szenarien"],
}
text = ("// Auswertung der Protokolle, erzeugt mit scripts/build_analyse.py, nicht von Hand ändern.\n"
        "// Aufbau und Zählregeln siehe README.md.\n"
        "window.SELIN_ANALYSE = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n")
(root / "data" / "analyse.js").write_text(text, encoding="utf-8")
print(len(themen), "Themen,", len(bett), "Bett-Themen,", len(faelle), "Fallmuster ->", root / "data" / "analyse.js")
for t in themen + bett:
    print(f'{t["pruefer"]:10} {t["art"]:9} {t["anzahl"]}x {t["prio"]} {t["thema"]}  zuletzt {t["zuletzt"]}')
for f in faelle:
    print(f'FALL {f["fach"]:9} {f["anzahl"]}x {f["muster"]} ({len(f["beispiele"])} Fälle)')
