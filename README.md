# Selin M3

Lernbegleiter-Website für Selins M3 (Praxis 30.11.2026, mündlich 01.12.2026).
Reine statische Seite (HTML/CSS/JS), gehostet über GitHub Pages. Kein Build-Schritt.

## Aufbau

- `index.html` – Gerüst und Navigation
- `css/style.css` – Design (ruhig-hell)
- `js/app.js` – gesamte Logik (Start, Heute, Fächer, Kalender, Fokus, Protokolle, Analyse, Untersuchung, Skripte, Sicherung)
- `data/` – **Inhalte, die bearbeitet werden dürfen**
- `icons/` – Symbol für Dock / Home-Bildschirm

Persönliche Daten (To-dos, Häkchen, Kalender, Notizen, Fokuszeiten) liegen nur im Browser
(`localStorage`, Schlüssel `selinM3.v1`) und lassen sich unter „Sicherung“ als JSON exportieren/importieren.
Änderungen an `data/` überschreiben diese Daten nicht.

## Inhalte ändern

| Datei | Inhalt |
| --- | --- |
| `data/sprueche.js` | Tagessprüche (einer pro Tag, rotierend) |
| `data/faecher.js` | Fächer und Themenlisten der Gesamtübersicht |
| `data/untersuchung.js` | Untersuchungs-Bereiche und ihre Punkte auf der Figur |
| `data/protokolle.js` | Digitalisierte Protokolle |
| `data/analyse.js` | Auswertung der Protokolle |
| `data/skripte.js` | Lernskripte mit Fragen und Antworten |

Hinweis: Themen werden über ihren Namen erkannt. Wird ein Thema umbenannt, beginnt sein Status neu.

## Datenformate

Alle Textfelder sind reiner Text. In `text`, `kurz` und `antwort` geht einfaches Markdown:
Zeilen mit `- ` werden Listen, `**fett**` wird fett, `## Überschrift` wird hervorgehoben.

### `data/protokolle.js`

```js
window.SELIN_PROTOKOLLE = [
  {
    id: "2025-11-innere-mueller-1",        // eindeutig
    titel: "Innere bei Dr. Müller",        // optional, sonst Fach + Datum
    datum: "2025-11",                      // frei, z. B. "2025-11" oder "Herbst 2025"
    ort: "Uniklinik ...",                  // optional
    fach: "Innere Medizin",                // Innere Medizin | Chirurgie | Dermatologie | Neurologie | Wahlfach ...
    pruefer: ["Dr. Müller"],               // String oder Liste
    themen: ["Pankreatitis", "EKG"],       // Schlagworte
    faelle: [{ titel: "Oberbauchschmerz", beschreibung: "58 J., ..." }], // oder einfache Strings
    fragen: [{ frage: "Ranson-Kriterien?", antwort: "..." }],          // oder einfache Strings
    text: "Originaltext des Protokolls"    // optional
  }
];
```

### `data/analyse.js`

```js
window.SELIN_ANALYSE = {
  stand: "25.10.2026",
  themen: [{ thema: "Pankreatitis", fach: "Innere Medizin", anzahl: 8 }],
  pruefer: [{
    name: "Dr. Müller", fach: "Innere Medizin", anzahlProtokolle: 6,
    topThemen: [{ thema: "EKG", anzahl: 4 }],
    faelle: ["Thoraxschmerz"],              // oder { titel }
    hinweise: "Fragt gern nach Leitlinien."
  }],
  faelle: [{ titel: "Akutes Abdomen", fach: "Chirurgie", haeufigkeit: 7, beschreibung: "..." }],
  szenarien: [{ titel: "Schockraum", beschreibung: "..." }]
};
```

### `data/skripte.js`

```js
window.SELIN_SKRIPTE = [
  {
    id: "pankreatitis",                    // eindeutig, bleibt gleich (für das Häkchen „durchgearbeitet“)
    titel: "Akute Pankreatitis",
    fach: "Innere Medizin",
    kurz: "**Definition** ...\n- Punkt\n- Punkt",
    fragen: [{ frage: "Welche Ursachen kennen Sie?", antwort: "- Gallensteine\n- Alkohol" }]
  }
];
```

## Lokal ansehen

```sh
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Karteikarten

Die Karteikarten werden automatisch aus den Skripten erzeugt: Jedes Skript (`data/skripte*.js`) ist ein Thema,
jede `frage`/`antwort` darin eine Karte. Das Feld `fach` bestimmt den Reiter (Innere Medizin, Chirurgie, Dermatologie, Neurologie).

Weitere Fächer oder Themen ergänzen: entweder in `data/skripte.js` eintragen oder eine neue Datei
`data/skripte-<fach>.js` mit `window.SELIN_SKRIPTE = (window.SELIN_SKRIPTE || []).concat([ ... ]);` anlegen und in `index.html`
nach `data/skripte.js` einbinden. Die Karten-ID entsteht aus der Skript-`id` und dem Fragetext,
Fortschritt bleibt also bei Textänderungen an den Antworten erhalten (nicht aber bei geänderten Fragen).

## Zwischenspeicher (Cache)

In `index.html` hängt an CSS und Skripten `?v=...`. Wer Dateien ändert und sofort überall die neue Version sehen will,
erhöht diese Version (z. B. `20261025b`). Ohne das kann der Browser bis zu ca. 10 Minuten die alte Fassung zeigen.
