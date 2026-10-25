# Auswertungsschema für M3-Protokolle

So wird jedes Protokoll (Runde 1 und alle folgenden) ausgewertet. Jeder Punkt ist ein Feld in `data/protokolle.json`, damit die Website die Bereiche „Protokolle“ und „Analyse“ direkt daraus füllen kann.

| # | Auswertungspunkt | Wozu er Selin hilft |
|---|---|---|
| 1 | **Stammdaten**: Fach, Prüfer, Datum, Ort, Note | Aktuelle Protokolle zählen mehr als alte (ab 2024 doppelt gewichtet). |
| 2 | **Kommission** (alle vier Prüfer) | Zeigt, welche Protokolle zu Selins tatsächlicher Kommission passen. |
| 3 | **Vorgespräch**: Eingrenzungen und Ausschlüsse | Was sicher nicht drankommt, spart Lernzeit. |
| 4 | **Themenhäufigkeit je Prüfer** | Rangliste der Lieblingsthemen, Grundlage für die Lernskripte. |
| 5 | **Fallbeispiele / Einstiegsszenarien** (Leitsymptom → Diagnose → Weiterführung) | Selin übt die typischen Fallketten laut durch. |
| 6 | **Typische Detailfragen** (Klassifikationen, Scores, Zahlen) | Liste „muss sitzen“ je Thema. |
| 7 | **Ausgefallene Fragen** | Sternchenfragen, damit nichts überrascht. |
| 8 | **Fragestil und Atmosphäre** | Wie man antwortet: ausführlich erzählen oder knapp. |
| 9 | **Praktischer Teil**: Station, Patientengut, Untersuchungsaufgaben, Fragen am Bett | Speist den Bereich „Körperliche Untersuchung“ (Hirnnerven, Herz, Lunge, Abdomen …). |
| 10 | **Ablauf Tag 1 / Tag 2** (Uhrzeiten, Arztbrief, Vorstellung) | Kein Stress durch Unbekanntes am Prüfungstag. |
| 11 | **Tipps und Fallstricke** | Aus Fehlern anderer lernen (z. B. Hände desinfizieren). |
| 12 | **Lernquellen** | Was die Prüflinge empfehlen. |
| 13 | **Ableitung**: Top-Themen je Fach mit Priorität A/B/C | Direkte Vorlage für die Skripte und die To-do-Liste auf der Website. |

## Zählregeln
- Ein Thema zählt einmal pro Protokoll, egal wie oft es darin vorkommt.
- Themen werden auf Oberbegriffe zusammengefasst (z. B. „schmerzloser Ikterus“ und „DD Ikterus“ → Ikterus).
- Gewicht: Protokolle ab 2024 zählen 2, ältere 1.
- Priorität A = in mindestens 3 Protokollen oder in den letzten 2 Jahren mehrfach; B = 2×; C = 1×.
- Duplikate (gleiche Seite doppelt eingereicht) werden erkannt und nur einmal gezählt.
