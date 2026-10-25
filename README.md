# Selin M3 – Protokolle und Analyse

Digitalisierte M3-Prüfungsprotokolle (Uniklinik Essen), sortiert nach Fach und Prüfer, plus Auswertung.

- `data/protokolle.json` – alle Protokolle strukturiert (Quelle für die Website-Bereiche „Protokolle“ und „Analyse“)
- `protokolle/<fach>/<pruefer>/` – lesbare Fassung je Protokoll, erzeugt mit `python3 scripts/build_markdown.py`
- `analyse/auswertungsschema.md` – nach welchen Punkten ausgewertet wird
- `analyse/runde-1.md`, `analyse/runde-2-3.md` – Analyse der Runden; `analyse/gesamtuebersicht.md` – Kommission, Prioritäten, Lücken

Neue Runde: Einträge mit `"runde": 2` in `data/protokolle.json` ergänzen, Skript laufen lassen, Analyse fortschreiben.
