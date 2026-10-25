// Innere Medizin: Lernskripte mit Karteikarten (Frage/Antwort). Quelle: Skriptgenerator im Protokoll-Branch.
// Aufbau siehe README.md, Abschnitt "Datenformate".
window.SELIN_SKRIPTE = ([
  {
    "id": "innere-akute-pankreatitis",
    "titel": "Akute (biliäre) Pankreatitis",
    "fach": "Innere Medizin",
    "kurz": "- Häufigste Ursachen: **Gallensteine** und **Alkohol**, dann Hypertriglyzeridämie (> 1000 mg/dl), Hyperkalzämie, post-ERCP, Medikamente, autoimmun\n- Diagnose: **2 von 3** (typischer Oberbauchschmerz mit Gürtelschmerz, Lipase/Amylase > 3× oberer Normwert, typische Bildgebung)\n- Schweregrad nach Atlanta 2012: leicht, mittelschwer, schwer (persistierendes Organversagen > 48 h)\n- Therapie: Volumen, Analgesie, frühe orale/enterale Ernährung; ERCP nur bei Cholangitis oder persistierender Obstruktion\n\n**Prüfstatus:** Standardwissen nach Leitlinie, nicht Zeile für Zeile gegen den Volltext geprüft. Zahlen und Zeitfenster vor der Prüfung in Amboss/Leitlinie gegenlesen.",
    "fragen": [
      {
        "frage": "Wie stellen Sie die Diagnose einer akuten Pankreatitis?",
        "antwort": "2 von 3 Kriterien:\n- typischer Oberbauchschmerz (gürtelförmig, oft in den Rücken)\n- Lipase (oder Amylase) > 3× oberer Normwert; Lipase ist spezifischer\n- typische Bildgebung (Sonographie, CT/MRT)\nBildgebung ist bei klarer Klinik und Labor initial nicht zwingend nötig."
      },
      {
        "frage": "Nennen Sie die Ursachen. Wie finden Sie die biliäre Genese?",
        "antwort": "- Gallensteine (häufig), Alkohol (häufig)\n- Hypertriglyzeridämie (> 1000 mg/dl), Hyperkalzämie\n- post-ERCP, Medikamente (z. B. Azathioprin, Valproat), Trauma, autoimmun (IgG4), Tumor/Papillenstenose, Infektion\n**Biliär:** ALT > 150 U/l spricht stark für biliäre Ursache, außerdem Cholestase-Parameter und Sonographie (Steine, erweiterter DHC)."
      },
      {
        "frage": "Wie teilen Sie den Schweregrad ein?",
        "antwort": "Revidierte Atlanta-Klassifikation:\n- **leicht:** kein Organversagen, keine lokalen/systemischen Komplikationen\n- **mittelschwer:** transientes Organversagen (< 48 h) und/oder lokale Komplikationen\n- **schwer:** persistierendes Organversagen (> 48 h)\nScores: BISAP, Ranson, APACHE II; ein Zeichen für schweren Verlauf ist eine Hämokonzentration (Hkt) und ein hoher Harnstoff/BUN."
      },
      {
        "frage": "Wie therapieren Sie in den ersten 24–48 Stunden?",
        "antwort": "- Analgesie (Opioide sind erlaubt, nicht unterlassen)\n- **Volumentherapie** mit kristalloiden Lösungen (balanciert, z. B. Ringer-Laktat), zielgerichtet und nicht überzogen (Gefahr Überwässerung, Lungenödem)\n- **frühe enterale/orale Ernährung** nach Verträglichkeit, keine „Nahrungskarenz“\n- **keine** prophylaktische Antibiotikagabe\n- Überwachung bei mittelschwer/schwer auf Intensiv/IMC"
      },
      {
        "frage": "Wann ERCP bei biliärer Pankreatitis?",
        "antwort": "- **Mit Cholangitis:** ERCP mit Steinextraktion/Papillotomie zeitnah (innerhalb 24 h)\n- Persistierende Obstruktion/Cholestase ohne Cholangitis: ERCP nach Verlauf, ggf. vorher EUS/MRCP\n- Ohne Cholangitis und ohne Obstruktion: **keine** routinemäßige frühe ERCP"
      },
      {
        "frage": "Wann erfolgt die Cholezystektomie?",
        "antwort": "- Leichte biliäre Pankreatitis: **im selben stationären Aufenthalt** (Rezidivrisiko hoch)\n- Mittelschwer/schwer mit Nekrosen oder Flüssigkeitsansammlungen: verzögert, bis sich die Entzündung beruhigt hat\n- Nicht operable Patienten: Papillotomie als Rezidivprophylaxe"
      },
      {
        "frage": "Welche lokalen Komplikationen kennen Sie?",
        "antwort": "- akute peripankreatische Flüssigkeitsansammlung\n- Pseudozyste (> 4 Wochen, umkapselt)\n- Nekrosen: sterile oder **infizierte Nekrose** (Fieber, Gaseinschlüsse im CT)\n- Blutung (Pseudoaneurysma), Milzvenenthrombose, Duodenalstenose, abdominelles Kompartmentsyndrom"
      },
      {
        "frage": "Infizierte Nekrose: Was tun Sie?",
        "antwort": "- Antibiotika (z. B. Carbapenem; Penetration ins Pankreas beachten)\n- Drainage/Nekrosektomie nach **Step-up-Prinzip**: zuerst endoskopische oder perkutane Drainage, dann minimal-invasive Nekrosektomie\n- Intervention wenn möglich verzögert (ca. ab 4 Wochen, wenn die Nekrose abgegrenzt ist, „walled-off“)"
      },
      {
        "frage": "Der Patient wird am 2. Tag zunehmend dyspnoeisch, SpO2 fällt. Differenzialdiagnosen und wie schließen Sie sie aus?",
        "antwort": "- **Pleuraerguss/ARDS** als Pankreatitis-Komplikation (Röntgen/Sono Thorax, Blutgasanalyse)\n- **Pneumonie:** Klinik, Infektparameter, Röntgen/CT\n- **Sepsis** (z. B. Cholangitis, infizierte Nekrose): qSOFA/SOFA, Laktat, Blutkulturen\n- **Lungenembolie:** Wells-Score, D-Dimere, CT-Angiographie; Echo (RV-Belastung)\n- **Überwässerung/Lungenödem** unter Volumentherapie\nVorgehen: BGA, Röntgen/Thoraxsono, Laktat, Blutkulturen, Echo."
      },
      {
        "frage": "Wann CT? Was zeigt es?",
        "antwort": "- Initial nicht routinemäßig; CT mit Kontrastmittel ca. **ab 72 h** bzw. bei klinischer Verschlechterung/unklarer Diagnose\n- Zeigt Nekrosen (fehlende Kontrastmittelaufnahme), Flüssigkeit, Gas, Gefäßkomplikationen\n- Frühes CT unterschätzt das Ausmaß der Nekrose"
      }
    ]
  },
  {
    "id": "innere-chronische-pankreatitis",
    "titel": "Chronische Pankreatitis",
    "fach": "Innere Medizin",
    "kurz": "- Hauptursache **Alkohol** (plus Rauchen), weitere: hereditär (PRSS1), autoimmun, Hypertriglyzeridämie, obstruktiv\n- Trias aus Schmerz, **exokriner Insuffizienz** (Steatorrhö) und **endokriner Insuffizienz** (Typ-3c-Diabetes)\n- Therapie: Alkohol-/Nikotinstopp, Enzymsubstitution, Schmerztherapie, Intervention bei Gangstenosen\n\n**Prüfstatus:** Standardwissen, nicht gegen Volltext geprüft.",
    "fragen": [
      {
        "frage": "Ursachen der chronischen Pankreatitis (TIGAR-O)?",
        "antwort": "- **T**oxisch/metabolisch: Alkohol, Rauchen, Hyperkalzämie, Hypertriglyzeridämie\n- **I**diopathisch\n- **G**enetisch: PRSS1, SPINK1, CFTR\n- **A**utoimmun (IgG4)\n- **R**ezidivierend/schwere akute Pankreatitis\n- **O**bstruktiv: Tumor, Pancreas divisum, Stenosen"
      },
      {
        "frage": "Wie sieht die klassische Symptomatik aus?",
        "antwort": "- Rezidivierende bis chronische Oberbauchschmerzen\n- Steatorrhö (erst bei Verlust von > 90 % der exokrinen Funktion), Gewichtsverlust, Mangel fettlöslicher Vitamine (A, D, E, K)\n- Diabetes mellitus Typ 3c (pankreopriv): Insulinmangel plus Glukagonmangel, Hypoglykämieneigung"
      },
      {
        "frage": "Welche Diagnostik veranlassen Sie?",
        "antwort": "- Bildgebung: Sono, CT, **MRT/MRCP**, Endosonographie (EUS): Verkalkungen, unregelmäßig erweiterter Gang („Kette von Seen“), Parenchymatrophie\n- **Elastase im Stuhl** (erniedrigt bei exokriner Insuffizienz)\n- Labor: Lipase im Schub oft nicht mehr deutlich erhöht, HbA1c/Glukose, Vitamin D, Ernährungsstatus"
      },
      {
        "frage": "Wie therapieren Sie die Schmerzen und die Insuffizienz?",
        "antwort": "- Absolute **Alkohol- und Nikotinkarenz**\n- **Pankreasenzyme** zu den Mahlzeiten (lipasehaltig, kapselweise zu den Mahlzeiten verteilt); ggf. PPI zusätzlich\n- Schmerz: WHO-Stufenschema; Opioide so sparsam wie möglich; Neuropathie-Schmerzmittel\n- Endokrin: Insulin\n- Interventionell/operativ bei Gangstein oder Stenose: endoskopisch (ERCP, ESWL), chirurgisch (Duodenum-erhaltende Kopfresektion nach Beger/Frey, Whipple)"
      },
      {
        "frage": "Welche Komplikationen drohen?",
        "antwort": "- Pseudozysten, Gangstein, Duodenal- und DHC-Stenose (Ikterus)\n- Milzvenenthrombose mit Linksseiten-Portale-Hypertension (Fundusvarizen)\n- **Pankreaskarzinom** (erhöhtes Risiko, besonders bei hereditärer Form)\n- Mangelernährung, Osteoporose"
      },
      {
        "frage": "Wie unterscheiden Sie Pankreaskarzinom von Pseudotumor bei chronischer Pankreatitis?",
        "antwort": "- Schwierig: Bildgebung (Multiphasen-CT, MRT), **Endosonographie mit Feinnadelpunktion**\n- Warnzeichen: neuer Ikterus, Gewichtsverlust, neuer Diabetes, Schmerzänderung, CA 19-9 stark erhöht (cave: auch bei Cholestase erhöht)"
      }
    ]
  },
  {
    "id": "innere-pankreaskarzinom",
    "titel": "Pankreaskarzinom",
    "fach": "Innere Medizin",
    "kurz": "- Meist duktales Adenokarzinom, Kopf 60–70 %\n- Spät symptomatisch: schmerzloser Ikterus, Gewichtsverlust, Rückenschmerz, neuer Diabetes\n- Kurativ nur durch Resektion (Whipple) plus adjuvante Chemotherapie, 5-Jahres-Überleben gesamt < 10 %\n- Palliativ: Chemotherapie, ERCP-Stent bei Ikterus, Schmerztherapie\n\n**Prüfstatus:** Standardwissen. Therapieschemata und Dosen bitte gegen aktuelle Leitlinie prüfen. Reine Dosierungen sind bewusst weggelassen.",
    "fragen": [
      {
        "frage": "Welche Risikofaktoren und Präkanzerosen kennen Sie?",
        "antwort": "- Rauchen (wichtigster), chronische Pankreatitis, Diabetes, Adipositas\n- Hereditär: BRCA2, Peutz-Jeghers, FAMMM (CDKN2A), Lynch, hereditäre Pankreatitis\n- Präkanzerosen: **IPMN** (Hauptgang-Typ besonders), muzinös-zystische Neoplasie, PanIN"
      },
      {
        "frage": "Was sind typische Symptome und Befunde?",
        "antwort": "- **Schmerzloser Ikterus** (Kopfkarzinom), Courvoisier-Zeichen (tastbare, schmerzlose, vergrößerte Gallenblase)\n- Gewichtsverlust, Rückenschmerz (Plexusinfiltration), Appetitverlust\n- Neu aufgetretener Diabetes, Steatorrhö\n- Thrombosen (Trousseau: Thrombophlebitis migrans)"
      },
      {
        "frage": "Wie gehen Sie diagnostisch vor?",
        "antwort": "- Sono (Gangerweiterung, Raumforderung), dann **Multiphasen-CT** (Thorax/Abdomen) zur Gefäßbeziehung und Staging\n- Endosonographie mit Feinnadelpunktion bei unklarem Befund oder vor Neoadjuvanz/Palliation (Histologie)\n- CA 19-9: **Verlaufsparameter**, kein Screening; falsch niedrig bei Lewis-negativen, falsch hoch bei Cholestase\n- MRCP bei Gangveränderungen"
      },
      {
        "frage": "Wie wird die Resektabilität eingeteilt?",
        "antwort": "- **Resektabel:** keine Gefäßinfiltration (oder minimal), keine Fernmetastasen\n- **Borderline resektabel:** begrenzte Gefäßbeteiligung (V. portae/V. mesenterica superior, A. hepatica), häufig Neoadjuvanz\n- **Lokal fortgeschritten (irresektabel):** ausgedehnte arterielle Ummauerung (> 180°)\n- **Metastasiert:** Leber, Peritoneum, Lunge"
      },
      {
        "frage": "Wie operieren Sie ein Kopfkarzinom? Wie geht es danach weiter?",
        "antwort": "- **Whipple-Operation** (partielle Duodenopankreatektomie, auch pyloruserhaltend, PPPD)\n- Kauda/Korpus: Linksresektion mit Splenektomie\n- **Adjuvante Chemotherapie** über etwa 6 Monate (bei gutem Allgemeinzustand mFOLFIRINOX, sonst Gemcitabin-basiert)\n- Komplikationen der OP: Pankreasfistel, verzögerte Magenentleerung, Blutung"
      },
      {
        "frage": "Was bieten Sie bei inoperablem, metastasiertem Karzinom an?",
        "antwort": "- Systemische Palliativchemotherapie je nach Allgemeinzustand: **FOLFIRINOX** oder Gemcitabin + nab-Paclitaxel; sonst Gemcitabin-Monotherapie; molekulare Testung (z. B. BRCA)\n- Ikterus/Cholestase: **ERCP mit Stent** (Metallstent bei längerer Prognose)\n- Magenausgangsstenose: Duodenalstent oder Gastroenterostomie\n- Schmerz: WHO-Schema, ggf. Plexus-coeliacus-Neurolyse\n- Enzymsubstitution, Ernährung, frühe Palliativversorgung"
      }
    ]
  },
  {
    "id": "innere-ikterus-cholestase",
    "titel": "Ikterus und Cholestase",
    "fach": "Innere Medizin",
    "kurz": "- Ikterus ab Bilirubin ca. 2–2,5 mg/dl sichtbar (Skleren zuerst)\n- Einteilung **prä-, intra-, posthepatisch**, im Labor: unkonjugiert vs. konjugiert und Enzymmuster\n- Cholestase: **AP und γGT** führend, Bilirubin direkt ↑, Juckreiz, acholischer Stuhl, dunkler Urin\n- Wichtigster erster Schritt: **Sonographie** (Gallenwege erweitert?)\n\n**Prüfstatus:** Standardwissen.",
    "fragen": [
      {
        "frage": "Wie gliedern Sie die Ursachen eines Ikterus?",
        "antwort": "- **Prähepatisch:** Hämolyse (indirektes Bilirubin ↑, LDH ↑, Haptoglobin ↓, Retikulozyten ↑)\n- **Intrahepatisch:** hepatozellulär (Hepatitis, Zirrhose, Toxine: ALT/AST ↑) oder intrahepatisch cholestatisch (PBC, Medikamente, Schwangerschaftscholestase)\n- **Posthepatisch:** Steine, Tumor (Pankreaskopf, Gallenwege), PSC-Stenosen, Cholangitis\n- Angeborene Formen: Morbus Meulengracht (unkonjugiert), Crigler-Najjar, Dubin-Johnson, Rotor (konjugiert)"
      },
      {
        "frage": "Welche Laborparameter helfen Ihnen bei der Einordnung?",
        "antwort": "- **Cholestase:** AP, γGT, direktes Bilirubin ↑\n- **Zellschaden:** ALT, AST (De-Ritis-Quotient AST/ALT > 1 bei Alkohol, fortgeschrittener Schädigung)\n- **Synthese:** INR/Quick, Albumin, Cholinesterase\n- **Hämolyse:** LDH, Haptoglobin, Retikulozyten, freies Hb, Coombs-Test\n- Differenzierung der AP: AP-Isoenzyme oder γGT (γGT ↑ spricht für Leber/Galle, nicht Knochen)"
      },
      {
        "frage": "Wie gehen Sie bei einem neu aufgetretenen Ikterus vor?",
        "antwort": "1. Anamnese (Schmerz, Fieber, Medikamente, Alkohol, Reisen, Juckreiz, Stuhl-/Urinfarbe, Gewichtsverlust) und Untersuchung\n2. Labor (siehe oben), Hepatitis-Serologie, ggf. Autoantikörper\n3. **Sonographie:** erweiterte Gallenwege? Steine? Raumforderung?\n4. **Ja, erweitert:** MRCP oder Endosonographie, dann ERCP therapeutisch\n5. **Nein:** hepatische Ursache abklären (Serologie, AMA, ANA, Eisen, Kupfer, ggf. Biopsie)"
      },
      {
        "frage": "Was bedeutet Courvoisier-Zeichen?",
        "antwort": "Tastbare, schmerzlose, vergrößerte Gallenblase bei Ikterus. Spricht für Verschluss des DHC **durch Tumor** (z. B. Pankreaskopf), weil die Gallenblase noch dehnungsfähig ist. Bei Steinen ist sie meist vernarbt und schrumpft."
      },
      {
        "frage": "Wie erklären Sie Juckreiz bei Cholestase? Wie behandeln Sie ihn?",
        "antwort": "Ablagerung bzw. Anstieg pruritogener Substanzen (u. a. Gallensäuren, Autotaxin/Lysophosphatidsäure); Pathophysiologie nicht vollständig geklärt.\nStufen: Cholestyramin (Abstand zu anderen Medikamenten) → Rifampicin → Naltrexon → Sertralin; Behandlung der Ursache (Drainage). UDCA bessert den Juckreiz meist nicht gut."
      },
      {
        "frage": "Differenzialdiagnosen von Müdigkeit/Erschöpfung plus Pruritus?",
        "antwort": "- Anämie/Eisenmangel, Hypothyreose (Hashimoto)\n- Cholestatische Lebererkrankung: **PBC** (typisch Frau mittleren Alters), PSC\n- Niereninsuffizienz (urämischer Pruritus), Polycythaemia vera, Lymphom (Hodgkin), Diabetes, Medikamente\nErster Schritt: großes Blutbild, Ferritin, TSH, Kreatinin, Leberwerte inkl. AP."
      }
    ]
  },
  {
    "id": "innere-cholangitis-choledocholithiasis",
    "titel": "Cholangitis und Choledocholithiasis",
    "fach": "Innere Medizin",
    "kurz": "- **Charcot-Trias:** Fieber/Schüttelfrost, Ikterus, rechtsseitiger Oberbauchschmerz\n- **Reynolds-Pentade:** zusätzlich Hypotonie und Bewusstseinstrübung (schwere Cholangitis)\n- Therapie: **Antibiose plus Gallendrainage** (ERCP)\n- Tokyo 2018: A systemische Entzündung, B Cholestase, C Bildgebung; Verdacht = A + (B oder C), gesichert = A + B + C\n\n**Prüfstatus:** Diagnosekriterien Tokyo 2018 abgerufen; Rest Standardwissen.",
    "fragen": [
      {
        "frage": "Was ist die Charcot-Trias, was die Reynolds-Pentade?",
        "antwort": "- Charcot: Fieber (± Schüttelfrost), Ikterus, Schmerz im rechten Oberbauch\n- Reynolds: + Hypotonie/Schock + Verwirrtheit; Zeichen der schweren (septischen) Cholangitis\nDie Trias ist nur in einer Minderheit der Fälle vollständig, deshalb die Tokyo-Kriterien."
      },
      {
        "frage": "Wie lauten die Tokyo-Kriterien 2018?",
        "antwort": "- **A Systemische Entzündung:** Fieber/Schüttelfrost, Entzündungsparameter (Leukozyten, CRP)\n- **B Cholestase:** Ikterus, abnorme Leberwerte (AP, γGT, AST, ALT)\n- **C Bildgebung:** Gangerweiterung, Ätiologie (Stein, Striktur, Stent)\n- **Verdacht:** ein Kriterium aus A **plus** eines aus B oder C\n- **Gesichert:** je ein Kriterium aus A, B und C"
      },
      {
        "frage": "Welche Erreger und welche Antibiotika?",
        "antwort": "- Erreger: E. coli, Klebsiella, Enterokokken, Anaerobier\n- Typisch: Piperacillin/Tazobactam oder Ceftriaxon + Metronidazol, bei schwerem Verlauf/Risikofaktoren breiter (Carbapenem); lokale Resistenzlage und Antibiogramm beachten\n- **Blutkulturen vor Antibiose**"
      },
      {
        "frage": "Wie schnell muss drainiert werden?",
        "antwort": "- Schwere Cholangitis (Organversagen): **notfallmäßig** Drainage, stabilisierend parallel\n- Mittelschwer: frühe Drainage (innerhalb von 24–48 h)\n- Leicht: oft Ansprechen auf Antibiose, Drainage bei fehlendem Ansprechen\nVerfahren: **ERCP mit Papillotomie und Steinextraktion**, bei Tumorstenose Stent; sonst perkutan transhepatisch (PTCD)"
      },
      {
        "frage": "Wie schätzen Sie die Wahrscheinlichkeit einer Choledocholithiasis ein?",
        "antwort": "Nach ASGE 2019:\n- **Hoch:** Stein im DHC in Bildgebung, oder klinische Cholangitis, oder Bilirubin > 4 mg/dl plus erweiterter DHC → direkt ERCP\n- **Mittel:** auffällige Leberwerte, Alter > 55, erweiterter DHC → EUS oder MRCP\n- **Niedrig:** unauffällig → Cholezystektomie, ggf. intraoperative Cholangiographie"
      },
      {
        "frage": "Cholezystitis: Klinik und Vorgehen?",
        "antwort": "- Dauerschmerz rechter Oberbauch > 6 h, Fieber, Murphy-Zeichen, Leukozytose; Sono: Wandverdickung, Steine, Flüssigkeit, Sonographisches Murphy-Zeichen\n- Antibiose, Analgesie und **frühe laparoskopische Cholezystektomie** (idealerweise innerhalb von 72 h bzw. früh nach Diagnose)\n- Komplikationen: Gangrän, Perforation, Empyem, Mirizzi-Syndrom"
      }
    ]
  },
  {
    "id": "innere-pbc-psc-aih",
    "titel": "PBC, PSC und Autoimmunhepatitis",
    "fach": "Innere Medizin",
    "kurz": "- **PBC:** Frauen 40–60, AP ↑, IgM ↑, **AMA (M2)**, Juckreiz/Müdigkeit, Therapie **UDCA**\n- **PSC:** meist Männer, oft mit **Colitis ulcerosa**, p-ANCA, Perlschnurbild in MRCP, Cholangiokarzinomrisiko\n- **AIH:** Frauen, Transaminasen ↑, IgG ↑, ANA/SMA/LKM, Interface-Hepatitis, Therapie Steroid + Azathioprin\n- Overlap-Syndrome beachten: nicht nur AMA bestimmen\n\n**Prüfstatus:** Standardwissen. Zweitlinientherapien der PBC ändern sich schnell (Zulassungen/Rücknahmen): vor der Prüfung gegenlesen.",
    "fragen": [
      {
        "frage": "Patientin, 40 Jahre, Müdigkeit und Juckreiz, AP stark erhöht, AST/ALT leicht erhöht. Woran denken Sie, was veranlassen Sie?",
        "antwort": "Primär biliäre Cholangitis (PBC).\n- Sono (Gallenwege unauffällig, Ausschluss Obstruktion)\n- **AMA** (Anti-mitochondriale AK, v. a. M2; in ca. 90–95 % positiv), IgM\n- Bei AMA-Positivität plus cholestatischer Konstellation ist eine Biopsie meist nicht nötig\n- Bei AMA-negativ: Anti-gp210, Anti-sp100, ggf. Biopsie; ANA, SMA, IgG zum Ausschluss einer AIH/Overlap"
      },
      {
        "frage": "Warum bestimmen Sie nicht nur AMA?",
        "antwort": "Wegen **Overlap-Syndromen** (PBC/AIH). Dann Transaminasen und IgG deutlich erhöht, ANA/SMA positiv, Interface-Hepatitis in der Biopsie (Paris-Kriterien). Therapie dann UDCA plus Immunsuppression. Außerdem: AMA-negative PBC gibt es, und AMA kommen auch bei Gesunden vor."
      },
      {
        "frage": "Wie therapieren Sie die PBC? Wie wirkt UDCA?",
        "antwort": "- **UDCA** 13–15 mg/kg/Tag lebenslang; verbessert Cholestaseparameter und verzögert den Verlauf\n- Ansprechen nach 12 Monaten prüfen (z. B. Paris-II-, Barcelona-Kriterien)\n- UDCA wirkt **choleretisch** und zytoprotektiv, verdrängt toxische Gallensäuren. Der **Juckreiz** wird dadurch meist **nicht** gebessert, der Verlauf wird nicht komplett gestoppt\n- Bei unzureichendem Ansprechen: Zweitlinie (z. B. PPAR-Agonisten wie Fibrate, Elafibranor, Seladelpar; Obeticholsäure ist wegen Sicherheitsproblemen in der EU nicht mehr verfügbar), Stand prüfen\n- Endstadium: Lebertransplantation"
      },
      {
        "frage": "Welche Erkrankungen sind mit PBC assoziiert?",
        "antwort": "Autoimmunerkrankungen: **Hashimoto-Thyreoiditis**, Sjögren-Syndrom, Sklerodermie (CREST), Zöliakie, rheumatoide Arthritis. Folgen der Cholestase: Osteoporose, Fettlöslicher-Vitamin-Mangel, Hypercholesterinämie, Xanthelasmen."
      },
      {
        "frage": "Wie unterscheiden Sie PSC von PBC?",
        "antwort": "- PSC: eher **Männer** (30–50), **CED** (v. a. Colitis ulcerosa) in 60–80 %, p-ANCA, **MRCP/ERCP**: perlschnurartige Stenosen und Dilatationen der intra- und extrahepatischen Gallenwege\n- PBC: Frauen, AMA, kleine intrahepatische Gallengänge, in der Bildgebung unauffällig\n- PSC: UDCA verbessert die Prognose **nicht** sicher (Hochdosis schädlich)"
      },
      {
        "frage": "Welches onkologische Risiko haben PBC- und PSC-Patienten?",
        "antwort": "- **PSC:** Cholangiokarzinom (Lebenszeitrisiko etwa 10–15 %), Gallenblasen- und **Kolonkarzinom** (bei CED: jährliche Koloskopie), HCC bei Zirrhose\n- **PBC:** HCC bei fortgeschrittener Fibrose/Zirrhose (Surveillance alle 6 Monate); sonst kein stark erhöhtes Cholangiokarzinomrisiko\nBei plötzlicher Verschlechterung der PSC an Cholangiokarzinom denken (CA 19-9, Bildgebung)."
      },
      {
        "frage": "Diagnostik und Therapie der Autoimmunhepatitis?",
        "antwort": "- Frauen, Transaminasen ↑, **IgG ↑**, ANA/SMA (Typ 1), LKM-1 (Typ 2), SLA\n- **Leberbiopsie:** Interface-Hepatitis, Plasmazellen\n- Therapie: **Prednisolon**, zur Erhaltung **Azathioprin** (Steroidsparend); Ausschluss anderer Ursachen (Viren, Medikamente, Wilson)\n- Rückfälle beim Absetzen häufig"
      }
    ]
  },
  {
    "id": "innere-leberzirrhose",
    "titel": "Leberzirrhose, Komplikationen und TIPS",
    "fach": "Innere Medizin",
    "kurz": "- Ursachen: Alkohol, Virushepatitis B/C, **MASLD/NASH**, AIH, PBC/PSC, Hämochromatose, Wilson, α1-Antitrypsin-Mangel\n- Schweregrad: **Child-Pugh** (Bilirubin, Albumin, INR, Aszites, Enzephalopathie) und **MELD**\n- Komplikationen: Aszites, SBP, hepatorenales Syndrom, hepatische Enzephalopathie, Ösophagusvarizenblutung, HCC\n- **TIPS:** portosystemischer Shunt, v. a. bei refraktärem Aszites und Rezidivblutung\n\n**Prüfstatus:** Standardwissen nach EASL/DGVS; Details wie Albumindosen vor der Prüfung kontrollieren.",
    "fragen": [
      {
        "frage": "Ursachen und Diagnostik der Leberzirrhose?",
        "antwort": "- Ursachen: Alkohol, HBV/HCV, MASLD/NASH, AIH, PBC/PSC, Hämochromatose, Morbus Wilson, α1-Antitrypsin-Mangel, Budd-Chiari, Herzinsuffizienz (kardiale Zirrhose)\n- Klinik: Spider naevi, Palmarerythem, Caput medusae, Aszites, Gynäkomastie, Leberhautzeichen\n- Diagnostik: Sono (knotige Oberfläche, Aszites, Splenomegalie), Elastographie, Labor (Albumin, INR, Thrombozyten ↓), Gastroskopie auf Varizen, ggf. Biopsie"
      },
      {
        "frage": "Wie ordnen Sie die Prognose ein (Child-Pugh, MELD)?",
        "antwort": "- **Child-Pugh:** Bilirubin, Albumin, INR (Quick), Aszites, Enzephalopathie; Klassen A (5–6), B (7–9), C (10–15)\n- **MELD:** Bilirubin, INR, Kreatinin (± Natrium); bestimmt die Dringlichkeit auf der Transplantationsliste\n- Dekompensation (Aszites, Blutung, Enzephalopathie, Ikterus) verschlechtert die Prognose deutlich"
      },
      {
        "frage": "Wie behandeln Sie Aszites?",
        "antwort": "- Natriumarme Kost (ca. 5–6 g Kochsalz/Tag), keine Flüssigkeitsrestriktion außer bei schwerer Hyponatriämie\n- **Spironolacton** (± Furosemid), Kontrolle von Natrium, Kalium und Kreatinin\n- Großvolumenpunktion bei Spannungsaszites mit **Albuminsubstitution** (ca. 6–8 g pro entferntem Liter bei > 5 l)\n- Therapierefraktär: **TIPS** oder Transplantationsevaluation\n- Diagnostische Punktion: Zellzahl, Albumin, Eiweiß, Kultur; **SAAG ≥ 1,1 g/dl** spricht für portale Hypertension"
      },
      {
        "frage": "Was ist eine spontan bakterielle Peritonitis (SBP)?",
        "antwort": "- Infektion des Aszites ohne chirurgische Ursache, Diagnose: **neutrophile Granulozyten ≥ 250/µl** im Aszites\n- Klinik: Fieber, Bauchschmerz, aber oft diskret, Verschlechterung der Nierenfunktion/Enzephalopathie\n- Therapie: **Cefotaxim bzw. Ceftriaxon** plus **Albumin** (Nierenschutz, Tag 1 und Tag 3)\n- Sekundärprophylaxe (z. B. Norfloxacin/Ciprofloxacin oder Rifaximin je nach Leitlinie), bei Varizenblutung Antibiotikaprophylaxe"
      },
      {
        "frage": "Hepatorenales Syndrom: Definition und Therapie?",
        "antwort": "- Funktionelles Nierenversagen bei Zirrhose durch splanchnische Vasodilatation und renale Vasokonstriktion, Ausschluss von Schock, Nephrotoxinen, Nierenerkrankung, Diuretika-Pause\n- Therapie: **Albumin plus Terlipressin** (alternativ Noradrenalin auf Intensiv), Transplantation als definitive Therapie"
      },
      {
        "frage": "Hepatische Enzephalopathie: Stadien und Therapie?",
        "antwort": "- West-Haven-Stadien I–IV (Schlafumkehr, Verwirrtheit, Somnolenz, Koma), Flapping Tremor\n- Auslöser suchen: GI-Blutung, Infektion, Elektrolyte (Hypokaliämie), Obstipation, Sedativa, Diuretika, TIPS\n- Therapie: **Lactulose**, Rifaximin als Zusatz/Prophylaxe; Ammoniak diagnostisch von begrenztem Wert"
      },
      {
        "frage": "Wie verhindern Sie Varizenblutungen?",
        "antwort": "- Screening-Gastroskopie bei Zirrhose, Primärprophylaxe bei mittleren/großen Varizen: **nicht-selektiver Betablocker (Carvedilol, Propranolol)** oder Gummibandligatur\n- Sekundärprophylaxe nach Blutung: Betablocker + Ligatur\n- Ziel HVPG-Senkung; klinisch signifikante portale Hypertension: HVPG ≥ 10 mmHg"
      },
      {
        "frage": "Was ist ein TIPS, wann setzen Sie ihn ein und wann nicht?",
        "antwort": "- **Transjugulärer intrahepatischer portosystemischer Shunt:** Stent von einem Pfortaderast in eine Lebervene, senkt den Portaldruck\n- Indikationen: **refraktärer/rezidivierender Aszites**, Rezidivblutung trotz Therapie, Notfall bei nicht beherrschbarer Varizenblutung, hohes Rezidivrisiko (frühzeitiger „Pre-emptive“-TIPS bei Child-Pugh C 10–13 oder B mit aktiver Blutung)\n- Kontraindikationen: schwere/rezidivierende hepatische Enzephalopathie, Rechtsherzinsuffizienz, pulmonale Hypertonie, ausgeprägte Leberinsuffizienz (z. B. Bilirubin > 5 mg/dl), unkontrollierte Infektion\n- Nebenwirkung: **Enzephalopathie**, Shunt-Stenose/-Thrombose"
      },
      {
        "frage": "Was gehört zur HCC-Surveillance?",
        "antwort": "- Bei Zirrhose: **Sonographie alle 6 Monate** (± AFP)\n- Befund unklar: Multiphasen-CT/MRT; typische Zeichen: Arterielle Kontrastierung und Washout\n- Therapie nach BCLC-Stadium: Resektion, Ablation, TACE, Transplantation (Mailand-Kriterien), systemisch (Atezolizumab + Bevacizumab, Sorafenib/Lenvatinib)"
      }
    ]
  },
  {
    "id": "innere-hepatitiden",
    "titel": "Virushepatitiden, Hepatitis B Serologie",
    "fach": "Innere Medizin",
    "kurz": "- **HBsAg:** Infektion (akut oder chronisch)\n- **Anti-HBc IgM:** akute Infektion; **Anti-HBc gesamt:** Kontakt mit dem Virus (bleibt lebenslang)\n- **Anti-HBs:** Immunität (geimpft oder ausgeheilt)\n- **HBeAg und HBV-DNA:** Replikation/Infektiosität\n- Chronisch = HBsAg-positiv > 6 Monate\n\n**Prüfstatus:** Serologie-Konstellationen sind Standardwissen und sicher; Therapiedetails bitte gegen aktuelle Leitlinie prüfen.",
    "fragen": [
      {
        "frage": "Wie interpretieren Sie HBsAg +, Anti-HBc IgM +, Anti-HBs −?",
        "antwort": "**Akute Hepatitis B.** HBsAg zeigt Infektion, Anti-HBc IgM die Frischinfektion, Anti-HBs fehlt noch. Zeitlich folgt: HBsAg verschwindet, Anti-HBs steigt (Serokonversion)."
      },
      {
        "frage": "Chronische Hepatitis B: Serologie und Definition?",
        "antwort": "- HBsAg + > 6 Monate, **Anti-HBc IgG +**, Anti-HBc IgM −/niedrig, Anti-HBs −\n- HBeAg + und hohe HBV-DNA: replikative Phase, hohe Infektiosität\n- Chronifizierungsrate: Erwachsene etwa 5–10 %, Neugeborene und Säuglinge bis ca. 90 %"
      },
      {
        "frage": "Was bedeutet HBsAg −, Anti-HBc +, Anti-HBs +?",
        "antwort": "**Ausgeheilte Hepatitis B** mit Immunität. Wichtig: bei Immunsuppression (Rituximab, hochdosierte Steroide, Chemotherapie) kann das Virus **reaktivieren** (cccDNA in der Leber) — deshalb vor Immunsuppression Anti-HBc/HBsAg bestimmen."
      },
      {
        "frage": "Und nur Anti-HBs +?",
        "antwort": "**Geimpft.** Impferfolg bei Anti-HBs ≥ 100 IE/l (≥ 10 IE/l gilt als Schutzgrenze, Auffrischung dann nach Leitlinie)."
      },
      {
        "frage": "Was bedeutet isoliertes Anti-HBc?",
        "antwort": "Mögliche Erklärungen: Immunitätsfenster der akuten Infektion (HBsAg bereits negativ, Anti-HBs noch nicht nachweisbar, Anti-HBc IgM +), ausgeheilte Infektion mit abgefallenem Anti-HBs, okkulte Hepatitis B (HBV-DNA +), falsch positiv. Abklärung mit Anti-HBc IgM, HBV-DNA, Kontrolle."
      },
      {
        "frage": "Wie therapieren Sie die chronische Hepatitis B?",
        "antwort": "- Nukleos(t)id-Analoga mit hoher Resistenzbarriere: **Entecavir, Tenofovir (TDF/TAF)**; meist langfristig\n- PEG-Interferon in ausgewählten Fällen (zeitlich begrenzt)\n- Ziel: HBV-DNA supprimieren, ALT normalisieren, HCC und Zirrhose verhindern; HBsAg-Verlust selten\n- Indikation nach Viruslast, ALT, Fibrose, Familien-/HCC-Anamnese\n- Neugeborenen HBsAg-positiver Mütter: **aktive und passive Impfung** innerhalb von 12 h"
      },
      {
        "frage": "Was ist Hepatitis D?",
        "antwort": "Defektes RNA-Virus, benötigt **HBsAg** (nur bei HBV-Infektion): Simultaninfektion oder Superinfektion. Schlechtere Prognose. Diagnostik: Anti-HDV, HDV-RNA. Therapie: PEG-Interferon, Bulevirtid (Eintrittshemmer)."
      },
      {
        "frage": "Hepatitis A, C und E im Überblick?",
        "antwort": "- **HAV:** fäkal-oral, Reise, selbstlimitierend, Anti-HAV IgM, Impfung, nie chronisch\n- **HCV:** parenteral, oft chronisch (ca. 70–80 %), Anti-HCV + HCV-RNA, Therapie mit **DAA (z. B. Sofosbuvir/Velpatasvir)** über 8–12 Wochen, Heilungsrate (SVR) > 95 %\n- **HEV:** fäkal-oral/Zoonose (Genotyp 3, Schwein), selbstlimitierend, bei Immunsuppression chronisch; schwerer Verlauf bei Schwangeren (Genotyp 1)"
      }
    ]
  },
  {
    "id": "innere-gi-blutung",
    "titel": "Obere gastrointestinale Blutung",
    "fach": "Innere Medizin",
    "kurz": "- Ursachen: **Ulkus** (häufigste), Varizen, Erosionen, Mallory-Weiss, Tumor, Angiodysplasie, Dieulafoy\n- Sofortmaßnahmen: Kreislauf stabilisieren, Zugänge, Labor/Kreuzblut, **Endoskopie innerhalb 24 h**\n- **Forrest-Klassifikation** bestimmt die endoskopische Therapie\n- Varizenblutung: **Terlipressin, Antibiose, Ligatur**; bei Versagen Ballon/Stent und TIPS\n\n**Prüfstatus:** Nicht-variköser Teil an ESGE 2021 geprüft; variköser Teil Standardwissen.",
    "fragen": [
      {
        "frage": "Wie gehen Sie bei Hämatemesis und Teerstuhl vor?",
        "antwort": "1. ABC, 2 großlumige Zugänge, Volumen, Monitoring; Labor (Hb, Gerinnung, Kreuzblut, Kreatinin/Harnstoff)\n2. Risikostratifizierung (**Glasgow-Blatchford-Score**)\n3. Transfusion **restriktiv**: Zielwert Hb etwa 7–8 g/dl (höher bei KHK)\n4. **Gastroskopie innerhalb 24 h** nach Stabilisierung\n5. Antikoagulation/Antithrombotika anpassen; bei Verdacht auf Varizen **sofort** Terlipressin und Antibiotikum"
      },
      {
        "frage": "Erläutern Sie die Forrest-Klassifikation und die Konsequenz.",
        "antwort": "- **Ia** spritzend, **Ib** sickernd: aktive Blutung → endoskopische Therapie\n- **IIa** sichtbarer Gefäßstumpf, **IIb** Koagel: Therapie (Koagel abtragen und behandeln)\n- **IIc** Hämatin auf Ulkusgrund, **III** Ulkusgrund sauber: keine endoskopische Therapie nötig, PPI\nHochrisikostigmata: Ia, Ib, IIa, IIb."
      },
      {
        "frage": "Welche endoskopischen Verfahren kennen Sie?",
        "antwort": "- Adrenalininjektion (nie als Monotherapie, sondern mit zweitem Verfahren)\n- **Mechanisch:** Hämoclips (Over-the-scope-Clips bei Therapieversagen)\n- **Thermisch:** Kontaktkoagulation, Argon-Plasma-Koagulation\n- Hämostatische Pulver (als Rescue)\n- Interventionelle Radiologie (Embolisation) oder Chirurgie bei Versagen"
      },
      {
        "frage": "Welche medikamentöse Therapie gilt?",
        "antwort": "- **PPI** hochdosiert nach erfolgreicher Endoskopie (ESGE: intravenös hochdosiert über etwa 72 h, danach oral); PPI vor Endoskopie kann gegeben werden, ersetzt sie aber nicht\n- **Helicobacter pylori** testen und eradizieren\n- Tranexamsäure wird nicht empfohlen (HALT-IT)\n- ASS zur Sekundärprophylaxe nach Möglichkeit rasch fortsetzen; Marcumar: PPSB/Vitamin K; DOAC pausieren, Antidot bei lebensbedrohlicher Blutung"
      },
      {
        "frage": "Wie behandeln Sie eine Ösophagusvarizenblutung?",
        "antwort": "- Stabilisierung, restriktive Transfusion\n- **Terlipressin** (oder Somatostatin/Octreotid) so früh wie möglich, 2–5 Tage\n- **Antibiotikaprophylaxe** (z. B. Ceftriaxon bis zu 7 Tage)\n- Endoskopie: **Gummibandligatur** (Varizen), bei Fundusvarizen Histoacryl-Injektion\n- Bei Versagen: Ballonsonde (Sengstaken-Blakemore/Linton-Nachlas) oder selbstexpandierender Metallstent als Überbrückung, dann **TIPS**\n- Zusätzlich: Lactulose zur Enzephalopathieprophylaxe\n- Sekundärprophylaxe: Betablocker + Ligatur"
      },
      {
        "frage": "Welche Ursachen kennen Sie für eine Blutung ohne Ulkus und Varizen?",
        "antwort": "- Mallory-Weiss-Läsion (Riss nach Erbrechen), Boerhaave bei Ruptur (Mackler-Trias)\n- Erosive Gastritis/Ösophagitis (NSAR, Alkohol, Stress)\n- Dieulafoy-Läsion, Angiodysplasie/GAVE, Tumor\n- Aortoenterale Fistel (nach Aortenprothese)\n- Hämobilie, Hämosuccus pancreaticus"
      },
      {
        "frage": "Wie senken Sie das Ulkusrisiko bei Patienten unter ASS/NSAR?",
        "antwort": "PPI-Prophylaxe bei Risikofaktoren (Alter > 65, Ulkusanamnese, Antikoagulation, Kortikosteroide, duale Plättchenhemmung), H. pylori testen und behandeln, NSAR möglichst vermeiden."
      }
    ]
  },
  {
    "id": "innere-ced",
    "titel": "Chronisch entzündliche Darmerkrankungen",
    "fach": "Innere Medizin",
    "kurz": "- **Crohn:** gesamter GI-Trakt (v. a. terminales Ileum), diskontinuierlich, transmural, Fisteln/Stenosen, Granulome\n- **Colitis ulcerosa:** Rektum beginnend, kontinuierlich aufsteigend, nur Mukosa/Submukosa, blutig-schleimige Durchfälle\n- Diagnostik: **Ileokoloskopie mit Stufenbiopsien**, Calprotectin, CRP, bei Crohn Dünndarm: MR-Enterographie (MR-Sellink)\n- Extraintestinale Manifestationen: Gelenke, Haut, Augen, PSC\n\n**Prüfstatus:** Standardwissen. Neue Substanzen (JAK-Inhibitoren, IL-23-Hemmer) und Zulassungen vor der Prüfung gegenlesen.",
    "fragen": [
      {
        "frage": "Unterschiede Morbus Crohn und Colitis ulcerosa?",
        "antwort": "**Crohn:** Mund bis Anus, diskontinuierlich („skip lesions“), transmural, terminales Ileum, Fisteln, Stenosen, Abszesse, Granulome, Pflastersteinrelief, Aphthen, oft Perianalbefall, Rauchen verschlechtert\n**CU:** nur Kolon, Rektum immer betroffen, kontinuierlich, mukosal, Kryptenabszesse, Pseudopolypen, blutig-schleimige Diarrhö, Tenesmen, Rauchen eher protektiv, PSC-Assoziation\nBeide: schubweiser Verlauf, Alter 20–40."
      },
      {
        "frage": "Welche extraintestinalen Manifestationen kennen Sie?",
        "antwort": "- Gelenke: periphere/axiale Arthritis, Sakroiliitis, Spondylitis\n- Haut: **Erythema nodosum** (Unterschenkel), **Pyoderma gangraenosum**, orale Aphthen\n- Augen: Uveitis, Iritis, Episkleritis\n- Leber/Galle: **PSC** (v. a. CU), Cholelithiasis\n- Sonstige: Nierensteine (Oxalat bei Crohn), Thrombosen, Anämie, Osteoporose, Amyloidose"
      },
      {
        "frage": "Wie sichern Sie die Diagnose?",
        "antwort": "- Anamnese (Stuhlfrequenz, Blut, Gewicht, Fieber, Familie, Reisen), Untersuchung (Perianalbereich!)\n- Labor: CRP, Blutbild, Eisen/Ferritin, Albumin, **Calprotectin im Stuhl** (Entzündung vs. Reizdarm)\n- **Stuhl auf Erreger** (Salmonellen, Campylobacter, C. difficile) vor Diagnose CED\n- **Ileokoloskopie mit Stufenbiopsien** (Histologie)\n- Dünndarm: MR-Enterographie/MR-Sellink, Sonographie; Kapselendoskopie nur nach Stenoseausschluss"
      },
      {
        "frage": "Was ist MR-Sellink, wann nutzen Sie es?",
        "antwort": "MR-Enterographie/-Enteroklysma mit Kontrastierung des Dünndarms zur Beurteilung von Wandverdickung, Stenosen, Fisteln und Abszessen **ohne Strahlenbelastung**. Einsatz: Morbus Crohn bei Dünndarmbefall, Komplikationen, Verlauf."
      },
      {
        "frage": "Wie therapieren Sie einen Schub der Colitis ulcerosa?",
        "antwort": "- Leicht bis mittelschwer, distal: **5-ASA (Mesalazin)** rektal (Suppositorien/Klysma) ± oral\n- Ausgedehnt/mittelschwer: Mesalazin oral, Budesonid MMX, systemische Steroide bei fehlendem Ansprechen\n- Schwer: stationär, intravenöse Steroide, bei Steroidversagen **Infliximab** oder Ciclosporin (Rescue); toxisches Megakolon beachten\n- Erhaltung: Mesalazin, Azathioprin, Biologika (TNF-Antikörper, Vedolizumab, Ustekinumab) oder JAK-Inhibitoren (Sicherheitswarnungen beachten)\n- Kolektomie bei Therapieversagen, Karzinom, Megakolon"
      },
      {
        "frage": "Wie therapieren Sie Morbus Crohn?",
        "antwort": "- Schub: Steroide (Budesonid bei ileozökalem Befall), bei komplizierten Verläufen früh Biologika (TNF-Antikörper, Ustekinumab, Vedolizumab)\n- Erhaltung: Azathioprin/Methotrexat, Biologika; **Rauchstopp**\n- Mesalazin hat bei Crohn nur begrenzten Nutzen\n- Operativ bei Stenosen, Fisteln, Abszessen: Resektion sparsam, Strikturoplastik; Rezidiv bei Anastomose häufig\n- Ernährung: Eisen-, B12-Substitution, ggf. enterale Ernährung"
      },
      {
        "frage": "Was müssen Sie vor Beginn eines Biologikums/Immunsuppression abklären?",
        "antwort": "- **Tuberkulose** (IGRA, Röntgen Thorax)\n- Hepatitis B (und C), HIV\n- Impfstatus (Varizellen, Pneumokokken, Influenza, HPV), Lebendimpfstoffe vorher\n- Ausschluss aktiver Infektionen und Abszessen; Tumoranamnese\n- Thiopurine: TPMT-Aktivität (Myelosuppression)"
      },
      {
        "frage": "Welches Tumorrisiko besteht?",
        "antwort": "Colitis ulcerosa (und Crohn-Kolitis): kolorektales Karzinom, Risiko steigt mit Dauer (ab etwa 8 Jahre nach Erstdiagnose), Ausdehnung, PSC. Überwachungskoloskopien in festen Intervallen (Chromoendoskopie/Stufenbiopsien). Dünndarmkarzinom bei Crohn, Lymphom unter Thiopurinen, Hautkrebs unter Immunsuppression."
      },
      {
        "frage": "Patient mit rezidivierenden unblutigen Durchfällen, oralen Aphthen, Effloreszenzen an den Beinen, Blässe. Wie gehen Sie vor?",
        "antwort": "Verdacht CED (Crohn) und Alternativen (Zöliakie, Infektion, Reizdarm, Laktoseintoleranz).\n- Anämie: mikrozytär = Eisenmangel (Blutverlust, Malabsorption), makrozytär = B12-/Folatmangel (terminales Ileum, Zöliakie)\n- Labor, Calprotectin, Stuhl auf Erreger, Zöliakie-Serologie (tTG-IgA + Gesamt-IgA)\n- Koloskopie mit Ileumintubation und Biopsien, **Gastroskopie mit Duodenalbiopsien**, MR-Sellink\n- Beinbefunde: Erythema nodosum (CED) oder Dermatitis herpetiformis (Zöliakie)"
      }
    ]
  },
  {
    "id": "innere-zoeliakie",
    "titel": "Zöliakie",
    "fach": "Innere Medizin",
    "kurz": "- Immunvermittelte Enteropathie auf **Gluten** bei genetischer Veranlagung (**HLA-DQ2/DQ8**)\n- Autoantigen: **Gewebstransglutaminase (tTG)**\n- Diagnostik: **tTG-IgA + Gesamt-IgA** unter glutenhaltiger Kost, Duodenalbiopsie (Zottenatrophie, Kryptenhyperplasie, intraepitheliale Lymphozyten)\n- Therapie: **lebenslang glutenfrei**\n\n**Prüfstatus:** Standardwissen.",
    "fragen": [
      {
        "frage": "Wie entsteht die Zöliakie? Welche HLA-Assoziation?",
        "antwort": "Gliadin (Glutenanteil) wird durch **tTG deamidiert**, bindet an **HLA-DQ2 (> 90 %) oder HLA-DQ8** auf APC; CD4-T-Zellen lösen eine Entzündung der Dünndarmmukosa aus, mit Zottenatrophie und Kryptenhyperplasie. Der HLA-Typ ist notwendig, aber nicht hinreichend: negatives HLA-DQ2/DQ8 schließt Zöliakie praktisch aus (hoher negativer Vorhersagewert), ein positiver Befund beweist sie nicht."
      },
      {
        "frage": "Wie diagnostizieren Sie die Zöliakie?",
        "antwort": "1. Serologie **unter glutenhaltiger Ernährung**: **tTG-IgA** plus **Gesamt-IgA** (ggf. Endomysium-AK, deamidierte Gliadin-Peptid-AK)\n2. Bei **IgA-Mangel**: tTG-IgG bzw. DGP-IgG\n3. **Duodenalbiopsie** (mehrere, auch Bulbus): Marsh-Klassifikation: intraepitheliale Lymphozyten, Kryptenhyperplasie, Zottenatrophie\n4. Kinder: bei tTG-IgA ≥ 10× oberer Normwert und positivem EMA kann in definierten Fällen auf die Biopsie verzichtet werden (ESPGHAN)\n5. Vorher keine glutenfreie Diät beginnen"
      },
      {
        "frage": "Welche Getreide darf der Patient essen, welche nicht?",
        "antwort": "- **Verboten:** Weizen (inkl. Dinkel, Kamut, Grünkern), Roggen, Gerste (auch Malz); Hafer nur als zertifiziert glutenfreier Hafer\n- **Erlaubt:** Mais, Reis, Hirse, Buchweizen, Amaranth, Quinoa, Teff; Kartoffeln, Hülsenfrüchte\n- Auf versteckte Gluten in Fertigprodukten, Soßen, Medikamenten achten; Kontamination"
      },
      {
        "frage": "Welche Symptome und Assoziationen kennen Sie?",
        "antwort": "- Klassisch: Diarrhö, Steatorrhö, Gewichtsverlust, Blähungen; oft oligosymptomatisch\n- Extraintestinal: Eisenmangelanämie, Osteoporose, erhöhte Transaminasen, Aphthen, Zahnschmelzdefekte, Infertilität, Neuropathie, Müdigkeit\n- Assoziiert: **Typ-1-Diabetes, Hashimoto**, Autoimmunhepatitis, PBC, selektiver IgA-Mangel, Down-Syndrom, Turner-Syndrom\n- Haut: **Dermatitis herpetiformis Duhring**"
      },
      {
        "frage": "Was ist die Dermatitis herpetiformis Duhring?",
        "antwort": "Intensiv juckende, gruppierte Bläschen und Papeln, v. a. an **Streckseiten** (Ellenbogen, Knie, Gesäß), mit Zöliakie assoziiert. Diagnostik: Hautbiopsie, **IgA-Ablagerungen in den dermalen Papillenspitzen** (direkte Immunfluoreszenz). Therapie: **glutenfreie Diät** und Dapson (schnelle Juckreizlinderung; Methämoglobin und Hämolyse beachten, G6PD prüfen)."
      },
      {
        "frage": "Welche Komplikationen drohen?",
        "antwort": "- Refraktäre Zöliakie (Beschwerden trotz strikter Diät > 12 Monate)\n- **EATL** (Enteropathie-assoziiertes T-Zell-Lymphom), Dünndarmadenokarzinom\n- Ulzerative Jejunoileitis, Hyposplenismus\n- Mangelzustände (Eisen, Folat, B12, Vitamin D, Calcium, Zink), Osteoporose\nKontrollen: Serologie (Diätcompliance), DEXA, Vitamine."
      }
    ]
  }
]);
