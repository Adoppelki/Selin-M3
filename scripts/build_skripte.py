#!/usr/bin/env python3
"""Baut aus skripte/quelle/<fach>/*.json:
- skripte/<fach>/<id>.md          (Lesefassung mit Quellen und Prüfstatus)
- skripte/skripte-<fach>.js       (Websiteformat window.SELIN_SKRIPTE)
- skripte/karteikarten-<fach>.tsv (Anki-Import: Vorderseite, Rückseite, Tags)
Aufruf: python3 scripts/build_skripte.py [fach]   (Standard: innere)
"""
import glob, json, os, sys

fach = sys.argv[1] if len(sys.argv) > 1 else "innere"
root = os.path.join(os.path.dirname(__file__), "..", "skripte")
topics = []
seen = set()
# Neues Format (durchgehendes Skript) hat Vorrang vor dem alten Kurzformat
for d in (fach + "2", fach):
    for f in sorted(glob.glob(os.path.join(root, "quelle", d, "*.json"))):
        if os.path.basename(f).startswith("spezialwissen"):
            continue
        for t in json.load(open(f, encoding="utf-8")):
            if t["id"] not in seen:
                seen.add(t["id"])
                topics.append(t)

spez = {}
# alle spezialwissen*.json, später Dateien überschreiben frühere (gleiche id)
for sp in sorted(glob.glob(os.path.join(root, "quelle", fach + "2", "spezialwissen*.json"))):
    spez.update(json.load(open(sp, encoding="utf-8")))
missing = [t["id"] for t in topics if t["id"] not in spez]
print("ohne Spezialwissen:", missing)

def body(t):
    """Langtext einer Seite: neues Feld 'skript' (plus 'fakten'), sonst altes 'kurz'."""
    if "skript" not in t:
        return t["kurz"]
    s = t["skript"]
    if t.get("fakten"):
        s += "\n\n## Kernfakten zum Merken\n" + "\n".join("- " + x for x in t["fakten"])
    return s

def antwort(q):
    a = q["antwort"]
    if q.get("protokoll"):
        a += "\n\n**Im Protokoll:** " + q["protokoll"]
    return a

ids = [t["id"] for t in topics]
assert len(ids) == len(set(ids)), "doppelte id"

os.makedirs(os.path.join(root, fach), exist_ok=True)
for t in topics:
    L = [f"# {t['titel']}", "",
         f"Priorität {t['prio']} · {t['bereich']} · Prüfungsbezug: {t['protokoll_bezug']}", "",
         f"**Prüfstatus:** {t['status']}", "", body(t), "", "## Typische Prüferfragen mit Antwort", ""]
    spezial_md = spez.get(t["id"])
    for i, q in enumerate(t["fragen"], 1):
        L += [f"### {i}. {q['frage']}", "", antwort(q), ""]
    if spezial_md:
        L += ["## Spezialwissen (Facharzt-Niveau)", "", spezial_md, ""]
    L += ["## Quellen", ""] + [f"- {s}" for s in t["quellen"]] + [""]
    open(os.path.join(root, fach, t["id"] + ".md"), "w", encoding="utf-8").write("\n".join(L))

web = [{"id": t["id"], "titel": t["titel"], "fach": t["fach"],
        "kurz": body(t) + "\n\n## Prüfstatus\n" + t["status"],
        "spezial": spez.get(t["id"], ""),
        "fragen": [{"frage": q["frage"], "antwort": antwort(q)} for q in t["fragen"]]} for t in topics]
with open(os.path.join(root, f"skripte-{fach}.js"), "w", encoding="utf-8") as fh:
    fh.write("// Automatisch erzeugt von scripts/build_skripte.py, nicht von Hand ändern\n")
    fh.write("window.SELIN_SKRIPTE = (window.SELIN_SKRIPTE || []).concat(")
    json.dump(web, fh, ensure_ascii=False, indent=2)
    fh.write(");\n")

def cell(s):
    return s.replace("\t", " ").replace("\n", "<br>")
with open(os.path.join(root, f"karteikarten-{fach}.tsv"), "w", encoding="utf-8") as fh:
    for t in topics:
        tag = t["id"].replace("-", "_")
        for q in t["fragen"]:
            fh.write(f"{cell(q['frage'])}\t{cell(antwort(q))}\t{tag}\n")
print(len(topics), "Themen,", sum(len(t["fragen"]) for t in topics), "Karten")
