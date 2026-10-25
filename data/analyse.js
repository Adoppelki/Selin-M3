// Auswertung der Protokolle, erzeugt mit scripts/build_analyse.py, nicht von Hand ändern.
// Aufbau und Zählregeln siehe README.md.
window.SELIN_ANALYSE = {
 "stand": "25.10.2026",
 "anzahlProtokolle": 41,
 "hinweis": "Gezählt wird, in wie vielen Protokollen ein Thema vorkam (einmal pro Protokoll). Protokolle sind Berichte von Prüflingen und können Fehler enthalten.",
 "pruefer": [
  {
   "id": "willuweit",
   "name": "Prof. Dr. Willuweit",
   "fach": "innere",
   "schwerpunkt": "Gastroenterologie / Hepatologie",
   "rolle": "eingeteilt",
   "anzahlProtokolle": 5,
   "zeitraum": "2024-05 bis 2026-06",
   "hinweise": "Selins Prüfer in Innere. Im Vorgespräch gesagt: Gastroenterologie/Hepatologie muss komplett sitzen, in den übrigen Gebieten alle großen Innere-Themen. Die Fälle beginnen mit einem Symptom (Ikterus, Oberbauchschmerz, Müdigkeit mit Juckreiz, Durchfall) und springen gern in eine Notfall-Differenzialdiagnose. Serologie lesen und erklären kam vor. Nur 5 Protokolle (2024–2026)."
  },
  {
   "id": "alesina",
   "name": "Dr. Alesina",
   "fach": "chirurgie",
   "schwerpunkt": "Allgemein- und Viszeralchirurgie (Huyssens-Stift)",
   "rolle": "eingeteilt",
   "anzahlProtokolle": 7,
   "zeitraum": "2016-05 bis 2020-05",
   "hinweise": "Selins Prüfer in Chirurgie. Im Vorgespräch gesagt: Jeder der 3 Prüflinge bekommt einen Onkologie-Fall und einen Allgemeinchirurgie-Fall. Achtung: Es liegen nur Protokolle von 2016 bis 2020 vor, neuere fehlen."
  },
  {
   "id": "griewank",
   "name": "Prof. Dr. Klaus Georg Griewank",
   "fach": "derma",
   "schwerpunkt": "Dermatologie (Histodermatologe)",
   "rolle": "eingeteilt",
   "anzahlProtokolle": 7,
   "zeitraum": "2015-05 bis 2025-11",
   "hinweise": "Selins Prüfer in Dermatologie. 7 Protokolle von 2015 bis 2025."
  },
  {
   "id": "hinrichs",
   "name": "Dr. Hinrichs",
   "fach": "chirurgie",
   "schwerpunkt": "Allgemein- und Viszeralchirurgie (oft Vertretung für Prof. Walz), Orthopädie/Unfall ausgeschlossen",
   "rolle": "reserve",
   "anzahlProtokolle": 13,
   "zeitraum": "2021-11 bis 2026-05",
   "hinweise": "RESERVE: springt nur ein, falls der eingeteilte Chirurg ausfällt. Sein Themenkatalog dient als Versicherung, nicht als Schwerpunkt."
  },
  {
   "id": "kebir",
   "name": "PD Dr. Kebir",
   "fach": "neuro",
   "schwerpunkt": "Neurologische Notfälle (ZNA), Neuroonkologie/Hirntumore",
   "rolle": "eingeteilt",
   "anzahlProtokolle": 9,
   "zeitraum": "2023-12 bis 2026-06",
   "hinweise": "Selins Prüfer in Neurologie. 9 Protokolle von 2023 bis 2026."
  }
 ],
 "themen": [
  {
   "thema": "Ikterus, Cholestase, Leberlabor",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 3,
   "protokolle": [
    "willuweit-2024-05",
    "willuweit-2025-12",
    "willuweit-2026-06-b"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Anämiediagnostik",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 2,
   "protokolle": [
    "willuweit-2026-06-b",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Chronisch entzündliche Darmerkrankungen",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 2,
   "protokolle": [
    "willuweit-2024-05",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06",
   "prio": "B"
  },
  {
   "thema": "Pankreatitis und Pankreaskarzinom",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 2,
   "protokolle": [
    "willuweit-2025-12",
    "willuweit-2026-06-a"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Obere GI-Blutung",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 2,
   "protokolle": [
    "willuweit-2024-05",
    "willuweit-2025-12"
   ],
   "zuletzt": "2025-12-02",
   "prio": "B"
  },
  {
   "thema": "Autoimmune Lebererkrankungen (PBC, PSC, AIH)",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2026-06-b"
   ],
   "zuletzt": "2026-06-01",
   "prio": "C"
  },
  {
   "thema": "DD SpO2-Abfall (Sepsis, Pneumonie, LAE)",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2026-06-a"
   ],
   "zuletzt": "2026-06-01",
   "prio": "C"
  },
  {
   "thema": "Hashimoto",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2026-06-b"
   ],
   "zuletzt": "2026-06-01",
   "prio": "C"
  },
  {
   "thema": "Zöliakie, Dermatitis herpetiformis",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06",
   "prio": "C"
  },
  {
   "thema": "Leberzirrhose, TIPS",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2025-12"
   ],
   "zuletzt": "2025-12-02",
   "prio": "C"
  },
  {
   "thema": "Hepatitis-B-Serologie",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2024-05"
   ],
   "zuletzt": "2024-05",
   "prio": "C"
  },
  {
   "thema": "STEMI",
   "art": "mündlich",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2024-05"
   ],
   "zuletzt": "2024-05",
   "prio": "C"
  },
  {
   "thema": "Hernien (Leisten-, Zwerchfellhernie)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 3,
   "protokolle": [
    "alesina-2016-05",
    "alesina-2019-11",
    "alesina-2019-12"
   ],
   "zuletzt": "2019-12-04",
   "prio": "A"
  },
  {
   "thema": "Ikterus (chirurgisch vs. internistisch)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 3,
   "protokolle": [
    "alesina-2016-05",
    "alesina-2017-05-a",
    "alesina-2018-12"
   ],
   "zuletzt": "2018-12-10",
   "prio": "A"
  },
  {
   "thema": "Pankreaskopf-Karzinom, Whipple-OP",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 3,
   "protokolle": [
    "alesina-2016-05",
    "alesina-2017-05-a",
    "alesina-2018-12"
   ],
   "zuletzt": "2018-12-10",
   "prio": "A"
  },
  {
   "thema": "Divertikulose, Divertikulitis",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 2,
   "protokolle": [
    "alesina-2019-12",
    "alesina-2020-05"
   ],
   "zuletzt": "2020-05-20",
   "prio": "B"
  },
  {
   "thema": "Ösophagus- und Magenkarzinom",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 2,
   "protokolle": [
    "alesina-2017-05-b",
    "alesina-2019-11"
   ],
   "zuletzt": "2019-11-11",
   "prio": "B"
  },
  {
   "thema": "Akutes Abdomen, Notaufnahme",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2020-05"
   ],
   "zuletzt": "2020-05-20",
   "prio": "C"
  },
  {
   "thema": "Dysphagie, Ösophagusdivertikel",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2019-11"
   ],
   "zuletzt": "2019-11-11",
   "prio": "C"
  },
  {
   "thema": "Cholangiozelluläres Karzinom, Klatskin-Tumor",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2018-12"
   ],
   "zuletzt": "2018-12-10",
   "prio": "C"
  },
  {
   "thema": "Gallenblase (Cholezystitis)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2017-05-a"
   ],
   "zuletzt": "2017-05-03",
   "prio": "C"
  },
  {
   "thema": "Schilddrüsenknoten",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2017-05-a"
   ],
   "zuletzt": "2017-05-03",
   "prio": "C"
  },
  {
   "thema": "Kolorektales Karzinom",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2016-05"
   ],
   "zuletzt": "2016-05-23",
   "prio": "C"
  },
  {
   "thema": "Hauttumoren (Melanom, aktinische Keratose, PEK)",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 4,
   "protokolle": [
    "griewank-2015-05",
    "griewank-2024-05",
    "griewank-2024-12",
    "griewank-2025-11"
   ],
   "zuletzt": "2025-11-26",
   "prio": "A"
  },
  {
   "thema": "Allergien (Typ I-IV, Tests, Insektengift)",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 3,
   "protokolle": [
    "griewank-2015-05",
    "griewank-2024-12",
    "griewank-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "A"
  },
  {
   "thema": "Psoriasis",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 3,
   "protokolle": [
    "griewank-2015-05",
    "griewank-2025-05-b",
    "griewank-2025-herbst"
   ],
   "zuletzt": "2025-10",
   "prio": "A"
  },
  {
   "thema": "Atopische Dermatitis, Neurodermitis",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 2,
   "protokolle": [
    "griewank-2015-05",
    "griewank-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "B"
  },
  {
   "thema": "Bullöse Erkrankungen (Pemphigus, Pemphigoid)",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 2,
   "protokolle": [
    "griewank-2015-05",
    "griewank-2024-05"
   ],
   "zuletzt": "2024-05-07",
   "prio": "B"
  },
  {
   "thema": "Mycosis fungoides",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 1,
   "protokolle": [
    "griewank-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "C"
  },
  {
   "thema": "Urtikaria",
   "art": "mündlich",
   "fach": "derma",
   "pruefer": "griewank",
   "anzahl": 1,
   "protokolle": [
    "griewank-2025-11"
   ],
   "zuletzt": "2025-11-26",
   "prio": "C"
  },
  {
   "thema": "Kolon- und Rektumkarzinom",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 5,
   "protokolle": [
    "hinrichs-2024-05",
    "hinrichs-2024-11-06",
    "hinrichs-2024-12",
    "hinrichs-2025-05",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Schilddrüse (Hyperthyreose, Basedow, OP, N. recurrens)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 4,
   "protokolle": [
    "hinrichs-2021-11-18",
    "hinrichs-2022-11-03",
    "hinrichs-2023-11",
    "hinrichs-2025-11-26"
   ],
   "zuletzt": "2025-11-26",
   "prio": "A"
  },
  {
   "thema": "Ileus, akutes Abdomen",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 2,
   "protokolle": [
    "hinrichs-undatiert-lind",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "B"
  },
  {
   "thema": "Gallenwege (Cholezystolithiasis, Cholezystitis, ERCP)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 2,
   "protokolle": [
    "hinrichs-2021-11-17",
    "hinrichs-2025-11-11"
   ],
   "zuletzt": "2025-11-11",
   "prio": "B"
  },
  {
   "thema": "Pankreaskarzinom, biliäre Pankreatitis",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 2,
   "protokolle": [
    "hinrichs-2021-11-17",
    "hinrichs-2025-11-11"
   ],
   "zuletzt": "2025-11-11",
   "prio": "B"
  },
  {
   "thema": "Hernien (Leisten-, Schenkel-, Zwerchfellhernie)",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 2,
   "protokolle": [
    "hinrichs-2024-05",
    "hinrichs-undatiert-lind"
   ],
   "zuletzt": "2024-05-07",
   "prio": "B"
  },
  {
   "thema": "Nebennierenrinden-Tumoren",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 1,
   "protokolle": [
    "hinrichs-2025-11-26"
   ],
   "zuletzt": "2025-11-26",
   "prio": "C"
  },
  {
   "thema": "Crohn und Colitis ulcerosa",
   "art": "mündlich",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 1,
   "protokolle": [
    "hinrichs-2024-12"
   ],
   "zuletzt": "2024-12-10",
   "prio": "C"
  },
  {
   "thema": "Schlaganfall und intrazerebrale Blutung",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 5,
   "protokolle": [
    "kebir-2023-12",
    "kebir-2024-05-b",
    "kebir-2024-12",
    "kebir-2025-05-b",
    "kebir-2025-herbst"
   ],
   "zuletzt": "2025-10",
   "prio": "A"
  },
  {
   "thema": "Status epilepticus",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 3,
   "protokolle": [
    "kebir-2025-05-b",
    "kebir-2025-11",
    "kebir-2026-06"
   ],
   "zuletzt": "2026-06-10",
   "prio": "A"
  },
  {
   "thema": "Neurologische Untersuchung (Hirnnerven, Reflexe, Kraft)",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 3,
   "protokolle": [
    "kebir-2024-05-a",
    "kebir-2024-05-b",
    "kebir-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "A"
  },
  {
   "thema": "Priorisierung in der Notaufnahme",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 3,
   "protokolle": [
    "kebir-2023-12",
    "kebir-2024-05-b",
    "kebir-2025-05-b"
   ],
   "zuletzt": "2025-05-14",
   "prio": "A"
  },
  {
   "thema": "Hirntumore",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2025-11",
    "kebir-2026-06"
   ],
   "zuletzt": "2026-06-10",
   "prio": "A"
  },
  {
   "thema": "Pupillen, Hirnstammreflexe",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2024-05-b",
    "kebir-2026-06"
   ],
   "zuletzt": "2026-06-10",
   "prio": "B"
  },
  {
   "thema": "GBS, Miller-Fisher, Polyneuropathie",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2024-05-a",
    "kebir-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "B"
  },
  {
   "thema": "Antikoagulation antagonisieren (DOAK, Andexanet, PPSB)",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2023-12",
    "kebir-2024-05-b"
   ],
   "zuletzt": "2024-05-07",
   "prio": "B"
  },
  {
   "thema": "Liquorpunktion",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2024-05-a",
    "kebir-2024-12"
   ],
   "zuletzt": "2024-12-10",
   "prio": "B"
  },
  {
   "thema": "Multiple Sklerose",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 2,
   "protokolle": [
    "kebir-2024-05-a",
    "kebir-2024-12"
   ],
   "zuletzt": "2024-12-10",
   "prio": "B"
  },
  {
   "thema": "Myasthenia gravis",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 1,
   "protokolle": [
    "kebir-2025-05-a"
   ],
   "zuletzt": "2025-05",
   "prio": "C"
  },
  {
   "thema": "Transiente globale Amnesie",
   "art": "mündlich",
   "fach": "neuro",
   "pruefer": "kebir",
   "anzahl": 1,
   "protokolle": [
    "kebir-2024-12"
   ],
   "zuletzt": "2024-12-10",
   "prio": "C"
  }
 ],
 "bett": [
  {
   "thema": "Lunge",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 5,
   "protokolle": [
    "willuweit-2024-05",
    "willuweit-2025-12",
    "willuweit-2026-06-a",
    "willuweit-2026-06-b",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Abdomen",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 4,
   "protokolle": [
    "willuweit-2025-12",
    "willuweit-2026-06-a",
    "willuweit-2026-06-b",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Herz, Klappenvitien",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 3,
   "protokolle": [
    "willuweit-2024-05",
    "willuweit-2025-12",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06",
   "prio": "A"
  },
  {
   "thema": "Nabelhernie, Aszites",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 3,
   "protokolle": [
    "willuweit-2026-06-a",
    "willuweit-2026-06-b",
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Pulsstatus, Ödeme, TVT-Zeichen",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 2,
   "protokolle": [
    "willuweit-2025-12",
    "willuweit-2026-06-b"
   ],
   "zuletzt": "2026-06-01",
   "prio": "A"
  },
  {
   "thema": "Hirnnerven, Fazialisparese",
   "art": "am Bett",
   "fach": "innere",
   "pruefer": "willuweit",
   "anzahl": 1,
   "protokolle": [
    "willuweit-2026-06-c"
   ],
   "zuletzt": "2026-06",
   "prio": "C"
  },
  {
   "thema": "Pulsstatus, pAVK, Gefäßauskultation",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 2,
   "protokolle": [
    "alesina-2019-11",
    "alesina-2019-12"
   ],
   "zuletzt": "2019-12-04",
   "prio": "B"
  },
  {
   "thema": "Abdomen untersuchen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2019-12"
   ],
   "zuletzt": "2019-12-04",
   "prio": "C"
  },
  {
   "thema": "Appendizitiszeichen, Murphy",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2019-12"
   ],
   "zuletzt": "2019-12-04",
   "prio": "C"
  },
  {
   "thema": "Leber, Aszites",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "alesina",
   "anzahl": 1,
   "protokolle": [
    "alesina-2019-11"
   ],
   "zuletzt": "2019-11-11",
   "prio": "C"
  },
  {
   "thema": "Abdomen komplett untersuchen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 8,
   "protokolle": [
    "hinrichs-2022-11-03",
    "hinrichs-2023-11",
    "hinrichs-2024-12",
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11",
    "hinrichs-2025-11-26",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Herz, Klappenvitien",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 7,
   "protokolle": [
    "hinrichs-2024-05",
    "hinrichs-2024-11-06",
    "hinrichs-2024-12",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11",
    "hinrichs-2025-11-26",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Lunge, Pneumothorax",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 6,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11",
    "hinrichs-2025-herbst",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Pulsstatus, Gefäße",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 6,
   "protokolle": [
    "hinrichs-2022-11-03",
    "hinrichs-2023-11",
    "hinrichs-2024-05",
    "hinrichs-2024-12",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11"
   ],
   "zuletzt": "2025-11-11",
   "prio": "A"
  },
  {
   "thema": "Ödeme, TVT-Zeichen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 6,
   "protokolle": [
    "hinrichs-2022-11-03",
    "hinrichs-2023-11",
    "hinrichs-2024-05",
    "hinrichs-2025-05",
    "hinrichs-2025-11-26",
    "hinrichs-2025-herbst"
   ],
   "zuletzt": "2025-11-26",
   "prio": "A"
  },
  {
   "thema": "Appendizitiszeichen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 5,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2025-11-26",
    "hinrichs-2025-herbst"
   ],
   "zuletzt": "2025-11-26",
   "prio": "A"
  },
  {
   "thema": "Lymphknoten (Virchow, Hals, axillär)",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 5,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11",
    "hinrichs-2025-11-26"
   ],
   "zuletzt": "2025-11-26",
   "prio": "A"
  },
  {
   "thema": "Milz, Splenomegalie",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 4,
   "protokolle": [
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2025-11-26",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Murphy- und Courvoisier-Zeichen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 4,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-undatiert-lind",
    "hinrichs-2025-11-26",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Name des Bauchschnitts",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 4,
   "protokolle": [
    "hinrichs-2022-11-03",
    "hinrichs-2023-11",
    "hinrichs-2025-herbst",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "TAVI",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 4,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11",
    "hinrichs-2025-herbst"
   ],
   "zuletzt": "2025-11-11",
   "prio": "A"
  },
  {
   "thema": "Schilddrüse untersuchen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 3,
   "protokolle": [
    "hinrichs-undatiert-lind",
    "hinrichs-2025-05",
    "hinrichs-2026-05"
   ],
   "zuletzt": "2026-05-12",
   "prio": "A"
  },
  {
   "thema": "Caput medusae, Leberhautzeichen",
   "art": "am Bett",
   "fach": "chirurgie",
   "pruefer": "hinrichs",
   "anzahl": 3,
   "protokolle": [
    "hinrichs-2024-12",
    "hinrichs-2025-05",
    "hinrichs-2025-11-11"
   ],
   "zuletzt": "2025-11-11",
   "prio": "A"
  }
 ],
 "faelle": [
  {
   "muster": "Kolon-/Rektumkarzinom: Vorsorge bis OP",
   "fach": "chirurgie",
   "anzahl": 5,
   "beispiele": [
    {
     "protokoll": "hinrichs-2024-05",
     "pruefer": "Dr. Hinrichs",
     "datum": "7. und 8.05.2024",
     "text": "65-jähriger Patient mit in der Koloskopie gesichertem Karzinom 15 cm über der Anokutanlinie"
    },
    {
     "protokoll": "hinrichs-2024-11-06",
     "pruefer": "Dr. Hinrichs",
     "datum": "06.11.2024",
     "text": "Einstieg als Vorsorge-Gespräch mit dem Prüfer als „Patient“"
    },
    {
     "protokoll": "hinrichs-2024-12",
     "pruefer": "Dr. Hinrichs",
     "datum": "10./11.12.2024",
     "text": "Patient mit gesichertem Colon-CA 30 cm ab Anokutanlinie"
    },
    {
     "protokoll": "hinrichs-2025-05",
     "pruefer": "Dr. Hinrichs",
     "datum": "06./07.05.2025",
     "text": "Prüfer-Einstieg: „Ich habe meinen 50. Geburtstag gefeiert, meine Frau sagt, ich soll zur Vorsorge“"
    },
    {
     "protokoll": "hinrichs-2025-05",
     "pruefer": "Dr. Hinrichs",
     "datum": "06./07.05.2025",
     "text": "65-Jähriger mit Kolonkarzinom 20 cm ab Anokutanlinie"
    },
    {
     "protokoll": "hinrichs-2026-05",
     "pruefer": "Dr. Hinrichs",
     "datum": "12./13.05.2026",
     "text": "Wähle dir ein Thema aus deinem Chirurgie-Tertial"
    }
   ]
  },
  {
   "muster": "Hyperthyreose, Struma, Schilddrüsenknoten",
   "fach": "chirurgie",
   "anzahl": 4,
   "beispiele": [
    {
     "protokoll": "alesina-2017-05-a",
     "pruefer": "Dr. Alesina",
     "datum": "3./4.05.2017",
     "text": "Patient mit Schilddrüsenknoten – Procedere"
    },
    {
     "protokoll": "hinrichs-2021-11-18",
     "pruefer": "Dr. Hinrichs",
     "datum": "18.11.2021",
     "text": "Patientin mit typischer Hyperthyreosesymptomatik"
    },
    {
     "protokoll": "hinrichs-2022-11-03",
     "pruefer": "Dr. Hinrichs",
     "datum": "03.11.2022",
     "text": "Junge Frau mit Herzrasen und Palpitationen, ansonsten gesund, Struma in der körperlichen Untersuchung"
    },
    {
     "protokoll": "hinrichs-2023-11",
     "pruefer": "Dr. Hinrichs",
     "datum": "28./29.11.2023",
     "text": "Frau kommt mit Tachykardie und Gewichtsverlust"
    }
   ]
  },
  {
   "muster": "Notaufnahme: zwei Patienten priorisieren",
   "fach": "neuro",
   "anzahl": 3,
   "beispiele": [
    {
     "protokoll": "kebir-2023-12",
     "pruefer": "PD Dr. Kebir",
     "datum": "06.12.2023",
     "text": "Zwei Patienten in der Notaufnahme: ältere Dame mit Hemiparese, Mann in Polizeibegleitung, der rumbrüllt und aggressiv ist. Wen zuerst? → die Frau"
    },
    {
     "protokoll": "kebir-2024-05-b",
     "pruefer": "PD Dr. Kebir",
     "datum": "07./08.05.2024",
     "text": "Sie sind allein in der Notaufnahme: 40-jähriger Soporöser und 70-jähriger mit Hemiparese rechts"
    },
    {
     "protokoll": "kebir-2025-05-b",
     "pruefer": "PD Dr. Kebir",
     "datum": "14./15.05.2025",
     "text": "Fallsituation: Schlaganfall/ICB-Patient und Patient mit epileptischem Anfall gleichzeitig"
    }
   ]
  },
  {
   "muster": "Oberbauchschmerz, Gallenwege",
   "fach": "chirurgie",
   "anzahl": 3,
   "beispiele": [
    {
     "protokoll": "alesina-2017-05-a",
     "pruefer": "Dr. Alesina",
     "datum": "3./4.05.2017",
     "text": "Patient mit rechtsseitigem Oberbauchschmerz (Cholezystitis)"
    },
    {
     "protokoll": "hinrichs-2025-11-11",
     "pruefer": "Dr. Hinrichs",
     "datum": "11./12.11.2025",
     "text": "47-jährige Patientin mit Oberbauchschmerzen"
    },
    {
     "protokoll": "hinrichs-2025-herbst",
     "pruefer": "Dr. Hinrichs",
     "datum": "Herbst 2025",
     "text": "Patientin mit Cholezystolithiasis"
    }
   ]
  },
  {
   "muster": "Akutes Abdomen in der Notaufnahme",
   "fach": "chirurgie",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "alesina-2020-05",
     "pruefer": "Dr. Alesina",
     "datum": "20.05.2020",
     "text": "Patient mit linksseitigen Bauchschmerzen in der Notaufnahme"
    },
    {
     "protokoll": "hinrichs-undatiert-lind",
     "pruefer": "Dr. Hinrichs",
     "datum": "unbekannt (Seite 1 fehlt)",
     "text": "84-jährige Patientin kommt mit Erbrechen in die Notaufnahme (kolikartige Bauchschmerzen, sonorer Klopfschall)"
    }
   ]
  },
  {
   "muster": "Auffälliger Nävus, Schuppen am Kopf (Hauttumor)",
   "fach": "derma",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "griewank-2024-05",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "07./08.05.2024",
     "text": "Älterer Herr mit Schuppen auf der Glatze"
    },
    {
     "protokoll": "griewank-2024-12",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "10./11.12.2024",
     "text": "Patient mit auffälligem Nävus"
    }
   ]
  },
  {
   "muster": "Blickdiagnose: Bild und Differenzialdiagnose",
   "fach": "derma",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "griewank-2015-05",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "27./28.05.2015",
     "text": "Je ein Bild + DD, dann ein großes Thema"
    },
    {
     "protokoll": "griewank-2025-11",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "26./27.11.2025",
     "text": "Bild einer Urtikaria"
    }
   ]
  },
  {
   "muster": "Chronische Durchfälle, V. a. CED, Zöliakie",
   "fach": "innere",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "willuweit-2024-05",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "Mai 2024",
     "text": "Prüfling 3: CED"
    },
    {
     "protokoll": "willuweit-2026-06-c",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "06.2026",
     "text": "Patient mit rezidivierenden unblutigen Durchfällen, oralen Aphthen, Effloreszenzen an den Beinen, Blässe → V. a. CED → Koloskopie blande, mikrozytäre Anämie, Zottenatrophie → Zöliakie"
    }
   ]
  },
  {
   "muster": "Exanthem, Psoriasis guttata",
   "fach": "derma",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "griewank-2025-05-b",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "14./15.05.2025",
     "text": "Patient mit makulopapulösem Exanthem"
    },
    {
     "protokoll": "griewank-2025-herbst",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "Herbst 2025",
     "text": "Junge Patientin mit papulösem Exanthem"
    }
   ]
  },
  {
   "muster": "Krampfender Patient (Status epilepticus)",
   "fach": "neuro",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "kebir-2025-11",
     "pruefer": "PD Dr. Kebir",
     "datum": "26./27.11.2025",
     "text": "ZNA-Szene: Eine Pflegerin fängt an zu krampfen"
    },
    {
     "protokoll": "kebir-2026-06",
     "pruefer": "PD Dr. Kebir",
     "datum": "10./11.06.2026",
     "text": "Patient wird mit dem RTW in die ZNA gebracht und krampft"
    }
   ]
  },
  {
   "muster": "Magenkarzinom, Dysphagie (Onkologie-Fall)",
   "fach": "chirurgie",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "alesina-2017-05-b",
     "pruefer": "Dr. Alesina",
     "datum": "4./5.5.2017",
     "text": "Patient kommt in die Sprechstunde mit Magen-Ca: OP-Planung, Staging, Untersuchungsmethoden, OP-Ablauf"
    },
    {
     "protokoll": "alesina-2019-11",
     "pruefer": "Dr. Alesina",
     "datum": "11./12.11.2019",
     "text": "45-jährige Patientin mit Schluckbeschwerden"
    }
   ]
  },
  {
   "muster": "Plötzliche Sprach- oder Gedächtnisstörung (Schlaganfall)",
   "fach": "neuro",
   "anzahl": 2,
   "beispiele": [
    {
     "protokoll": "kebir-2024-12",
     "pruefer": "PD Dr. Kebir",
     "datum": "10./11.12.2024",
     "text": "Mann in Begleitung der Ehefrau, spricht plötzlich durcheinander und erinnert sich an vieles nicht mehr"
    },
    {
     "protokoll": "kebir-2025-herbst",
     "pruefer": "PD Dr. Kebir",
     "datum": "Herbst 2025",
     "text": "Patient mit seit 3 h bestehender Wortfindungsstörung"
    }
   ]
  },
  {
   "muster": "Gangunsicherheit, Adduktionsschwäche (GBS, Miller-Fisher)",
   "fach": "neuro",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "kebir-2024-05-a",
     "pruefer": "PD Dr. Kebir",
     "datum": "7. und 8.05.2024",
     "text": "20-jähriger Patient in der Notaufnahme mit Adduktionsschwäche links und Gangunsicherheit, keine Sensibilitätsausfälle"
    }
   ]
  },
  {
   "muster": "Gastrointestinale Blutung",
   "fach": "innere",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "willuweit-2024-05",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "Mai 2024",
     "text": "Prüfling 1: GI-Blutung"
    }
   ]
  },
  {
   "muster": "Insektenstich, Allergie",
   "fach": "derma",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "griewank-2024-12",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "10./11.12.2024",
     "text": "Patient vor einigen Wochen wegen Insektenstich mit Cortison behandelt"
    }
   ]
  },
  {
   "muster": "Juckreiz und Müdigkeit, PBC",
   "fach": "innere",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "willuweit-2026-06-b",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "01.+02.06.2026",
     "text": "40-jährige Patientin mit Erschöpfung, Müdigkeit und Juckreiz → AP stark, AST/ALT leicht erhöht → PBC"
    }
   ]
  },
  {
   "muster": "Leistenschwellung, Divertikulose",
   "fach": "chirurgie",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "alesina-2019-12",
     "pruefer": "Dr. Alesina",
     "datum": "4./5.12.2019",
     "text": "Patient vom ersten Tag mit Divertikulose als Nebenbefund"
    },
    {
     "protokoll": "alesina-2019-12",
     "pruefer": "Dr. Alesina",
     "datum": "4./5.12.2019",
     "text": "Patient mit Leistenschwellung"
    }
   ]
  },
  {
   "muster": "Oberbauchschmerzen, Pankreatitis, Notfall-DD",
   "fach": "innere",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "willuweit-2026-06-a",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "01.+02.06.2026",
     "text": "Diffuse Oberbauchschmerzen → biliäre Pankreatitis → im Verlauf SpO2-Abfall (DD)"
    }
   ]
  },
  {
   "muster": "Offene Stellen am Unterschenkel",
   "fach": "derma",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "griewank-2024-05",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "07./08.05.2024",
     "text": "45-jährige Frau mit offenen Stellen an beiden Unterschenkeln"
    }
   ]
  },
  {
   "muster": "STEMI",
   "fach": "innere",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "willuweit-2024-05",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "Mai 2024",
     "text": "Prüfling 4: STEMI"
    }
   ]
  },
  {
   "muster": "Schluckstörung, Zungenzuckungen (Myasthenia)",
   "fach": "neuro",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "kebir-2025-05-a",
     "pruefer": "PD Dr. Kebir",
     "datum": "Mai 2025",
     "text": "40-jähriger Patient mit Schluckstörungen und Zungenzuckungen in der Notaufnahme"
    }
   ]
  },
  {
   "muster": "Schmerzloser Ikterus",
   "fach": "chirurgie",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "alesina-2017-05-a",
     "pruefer": "Dr. Alesina",
     "datum": "3./4.05.2017",
     "text": "Schmerzloser Ikterus"
    }
   ]
  },
  {
   "muster": "Sehstörung bei jungem Patienten (MS)",
   "fach": "neuro",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "kebir-2024-12",
     "pruefer": "PD Dr. Kebir",
     "datum": "10./11.12.2024",
     "text": "25-jähriger Mann mit Sehstörungen, beim Augenarzt unauffällig"
    }
   ]
  },
  {
   "muster": "Serologie lesen, Hepatitis B, Ikterus",
   "fach": "innere",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "willuweit-2024-05",
     "pruefer": "Prof. Dr. Willuweit",
     "datum": "Mai 2024",
     "text": "Prüfling 2: Serologie, aus der man eine Hepatitis B erkennen und erklären soll, dazu Ikterus"
    }
   ]
  },
  {
   "muster": "Säugling mit schuppender Haut (Ekzem)",
   "fach": "derma",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "griewank-2025-05-a",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "Mai 2025",
     "text": "Eltern mit 6 Monate altem Säugling mit schuppender Hauterscheinung"
    }
   ]
  },
  {
   "muster": "Älterer Patient, Juckreiz ohne Besserung (Mycosis fungoides)",
   "fach": "derma",
   "anzahl": 1,
   "beispiele": [
    {
     "protokoll": "griewank-2025-05-a",
     "pruefer": "Prof. Dr. Klaus Georg Griewank",
     "datum": "Mai 2025",
     "text": "Älterer Patient mit juckenden Hauterscheinungen ohne Besserung unter Kortison"
    }
   ]
  }
 ],
 "szenarien": [
  {
   "titel": "Willuweit: Symptom → Differenzialdiagnose → Notfall",
   "beschreibung": "Beispiel 2026-06: Diffuse Oberbauchschmerzen → biliäre Pankreatitis → im Verlauf SpO2-Abfall (Sepsis, Pneumonie, Lungenembolie). Immer laut Differenzialdiagnosen strukturieren und sagen, wie man sie ausschließt."
  },
  {
   "titel": "Alesina: Onkologie-Fall und Allgemeinchirurgie-Fall",
   "beschreibung": "Laut Vorgespräch bekommt jeder Prüfling beide Fallarten. Je einen Ablauf von Diagnostik über Therapie bis Nachsorge vorbereiten."
  }
 ]
};
