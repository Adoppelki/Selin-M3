# Innere: Auswertung Willuweit und Stand der Skripte

Datenbasis: 5 Protokolle Willuweit (2024-05 bis 2026-06), alle Gastro/Hepatologie plus je ein kurzer Kardio- oder Differenzialdiagnose-Anteil. Das ist wenig, deshalb gilt Willuwits Ansage aus dem Vorgespräch (alle Gastro-Themen müssen sitzen, bei den anderen Gebieten alle großen Themen) stärker als jede Häufigkeitsstatistik.

## Themen aus den Protokollen (Zahl der Protokolle, in denen das Thema vorkam)

| Thema | Protokolle | Skript |
|---|---|---|
| Ikterus / Cholestase / Leberlabor | 3 | innere-ikterus-cholestase |
| Obere GI-Blutung (Forrest, Varizen, alle Therapieoptionen) | 2 | innere-gi-blutung |
| Biliäre / akute Pankreatitis | 2 | innere-akute-pankreatitis |
| Chronische Pankreatitis, Pankreaskarzinom | 1 | innere-chronische-pankreatitis, innere-pankreaskarzinom |
| Leberzirrhose, TIPS | 1 | innere-leberzirrhose |
| Hepatitis B Serologie | 1 | innere-hepatitiden |
| CED (Crohn/CU, EIM, MR-Sellink) | 2 | innere-ced |
| PBC/AIH/PSC, Overlap | 1 | innere-pbc-psc-aih |
| Zöliakie, Dermatitis herpetiformis | 1 | innere-zoeliakie |
| STEMI, SpO2-Abfall-DD (Sepsis/Pneumonie/LAE), Hashimoto, Anämie | je 1 | Phase 2 |

## Muster in Willuweits Prüfung

- Fall beginnt mit einem Symptom (Ikterus, Oberbauchschmerz, Müdigkeit/Juckreiz, Durchfall), dann Ausweitung der Differenzialdiagnosen und Diagnostik.
- Er springt gern von der Gastro in eine Notfall-Differenzialdiagnose (SpO2-Abfall → Sepsis/Pneumonie/LAE) und fragt „alle Therapiemöglichkeiten“.
- Serologie lesen und erklären (Hepatitis B) kam explizit vor.
- Er fragt nach Assoziationen (PBC → Hashimoto, Zöliakie → Duhring, PSC → CED) und onkologischem Risiko.

## Stand der Skripte (Phase 1)

11 Themen, 80 Karten in `skripte/quelle/innere/`. Ausgabe: `skripte/innere/*.md`, `skripte/skripte-innere.js` (Websiteformat), `skripte/karteikarten-innere.tsv` (Anki). Neu bauen mit `python3 scripts/build_skripte.py`.

## Ehrlicher Prüfstatus

- Aus einer gelesenen Quelle geprüft: ESGE 2021 (nicht-variköse Blutung), Tokyo-2018-Kriterien (Cholangitis), EASL-Teile zur dekompensierten Zirrhose.
- Alles andere ist Standardwissen nach den jeweiligen Leitlinien, deren Volltexte (AWMF, Thieme, NCBI) für mich nicht abrufbar waren. Jede Seite trägt deshalb einen Prüfstatus.
- Zahlen, Zeitfenster und Zweitlinientherapien (z. B. PBC, CED-Biologika, HCC-Systemtherapie) bitte in Amboss oder der aktuellen Leitlinie gegenlesen.
- Es gibt keine Dosierungen in den Karten.

## Noch offen

- Phase 2: Kardiologie (STEMI/ACS, Herzinsuffizienz, Vorhofflimmern, Hypertonie, Endokarditis, Lungenembolie), Pneumologie (Pneumonie, COPD, Asthma), Nephro, Endokrinologie (Diabetes, Schilddrüse inkl. Hashimoto), Hämatologie/Onkologie (Anämie), Rheumatologie, Infektiologie/Sepsis, Notfälle. Zusätzlich Gastro-Rest: Reflux/Achalasie/Ösophaguskarzinom, Helicobacter/Ulkus, Divertikulitis, Kolonkarzinom/Polypen, Hämochromatose/Wilson, HCC, MASLD, Reizdarm/Malassimilation.
- Abgleich der Themenliste mit `data/faecher.js` der Website.

## Update Phase 2a

Neu: STEMI/ACS, Lungenembolie, Sepsis (alle aus Willuweit-Protokollen). Jede Karte trägt jetzt eine Zeile „Beleg“: **Leitlinie** (in einer abgerufenen Quelle gelesen) oder **Standardwissen** (nicht gegen die Leitlinie geprüft). Die Primärtexte (ESC-Tabellen, AWMF) sind für mich nicht abrufbar; Zusammenfassungen von ESC PE 2019 und SSC 2021 und die Einleitung von ESC ACS 2023 konnte ich lesen. Anämie, Hashimoto und Pneumonie sind noch nicht geschrieben, weil ich dafür keine abrufbare Leitlinie hatte.
