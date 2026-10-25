"""Erzeugt aus data/protokolle.json je Protokoll eine Markdown-Datei unter protokolle/<fach>/<pruefer>/."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent


def slug(text):
    text = text.lower().replace("ä", "ae").replace("ö", "oe").replace("ü", "ue").replace("ß", "ss")
    return re.sub(r"[^a-z0-9]+", "-", text).strip("-")


def liste(items):
    return "\n".join(f"- {i}" for i in items) if items else "- (keine Angabe)"


def main():
    data = json.loads((ROOT / "data" / "protokolle.json").read_text(encoding="utf-8"))
    out = ROOT / "protokolle"
    for p in data["protokolle"]:
        pr = data["pruefer"][p["pruefer_id"]]
        m, k = p["muendlich"], p["praktisch"]
        md = f"""# {pr['name']} ({p['fach']}) – {p['datum_text']}

Runde {p['runde']} · Ort: {p['ort']} · Note: {p.get('note') or '–'} · Quelle: {p['quelle']}{'' if p['vollstaendig'] else ' · *Protokoll unvollständig (Seite fehlt)*'}

## Vorgespräch
{p['vorgespraech'] or '–'}

## Mündlicher Teil
**Themen**
{liste(m['themen'])}

**Fallbeispiele / Szenarien**
{liste(m['fallbeispiele'])}

**Gestellte Fragen**
{liste(m['fragen'])}

## Praktischer Teil
**Patienten**
{liste(k['patienten'])}

**Untersuchung**
{liste(k['untersuchung'])}

**Fragen am Bett**
{liste(k['fragen'])}
"""
        if p.get("ablauf"):
            md += f"\n**Ablauf**\n{p['ablauf']}\n"
        md += f"""
## Außergewöhnlichste Frage
{p.get('ausgefallene_frage') or '–'}

## Atmosphäre
{p.get('atmosphaere') or '–'}

## Kommission
{liste(p['kommission'])}

## Tipps
{p.get('tipps') or '–'}

## Buchempfehlungen
{liste(p['buecher'])}
"""
        ziel = out / slug(p["fach"]) / p["pruefer_id"]
        ziel.mkdir(parents=True, exist_ok=True)
        (ziel / f"{p['id']}.md").write_text(md, encoding="utf-8")
    print(f"{len(data['protokolle'])} Protokolle geschrieben")


if __name__ == "__main__":
    main()
