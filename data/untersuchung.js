// Körperliche Untersuchung: Bereiche zum Abhaken, nach Fach sortiert (fach = id aus faecher.js).
// "punkte" legt fest, wo der Bereich auf der Figur erscheint (mehrere Punkte pro Bereich möglich):
// seite "vorne" oder "hinten", x/y im Koordinatensystem der Figur (Breite 200, Höhe 440).
// Achtung: Die id bleibt gleich, sonst startet der Fortschritt dieses Bereichs neu.
window.SELIN_UNTERSUCHUNG = [
  // Neurologie
  { id: "hirnnerven", name: "Hirnnerven", fach: "neuro", punkte: [{ seite: "vorne", x: 100, y: 36 }] },
  { id: "meningismus", name: "Meningismus", fach: "neuro", punkte: [{ seite: "hinten", x: 100, y: 68 }] },
  { id: "motorik", name: "Motorik & Reflexe", fach: "neuro", punkte: [{ seite: "vorne", x: 162, y: 150 }, { seite: "vorne", x: 122, y: 300 }] },
  { id: "sensibilitaet", name: "Sensibilität", fach: "neuro", punkte: [{ seite: "vorne", x: 160, y: 204 }, { seite: "vorne", x: 122, y: 372 }] },
  { id: "koordination", name: "Koordination & Gang", fach: "neuro", punkte: [{ seite: "hinten", x: 78, y: 416 }, { seite: "hinten", x: 122, y: 416 }] },

  // Innere Medizin
  { id: "hals", name: "Hals, Schilddrüse & Lymphknoten", fach: "innere", punkte: [{ seite: "vorne", x: 90, y: 74 }] },
  { id: "lunge", name: "Lunge", fach: "innere", punkte: [{ seite: "vorne", x: 80, y: 112 }, { seite: "vorne", x: 120, y: 112 }, { seite: "hinten", x: 82, y: 128 }, { seite: "hinten", x: 118, y: 128 }] },
  { id: "herz", name: "Herz", fach: "innere", punkte: [{ seite: "vorne", x: 112, y: 136 }] },
  { id: "abdomen", name: "Abdomen", fach: "innere", punkte: [{ seite: "vorne", x: 86, y: 176 }, { seite: "vorne", x: 114, y: 176 }, { seite: "vorne", x: 86, y: 214 }, { seite: "vorne", x: 114, y: 214 }] },
  { id: "nierenlager", name: "Nierenlager", fach: "innere", punkte: [{ seite: "hinten", x: 84, y: 196 }, { seite: "hinten", x: 116, y: 196 }] },
  { id: "puls", name: "Gefäße & Pulsstatus", fach: "innere", punkte: [{ seite: "vorne", x: 112, y: 74 }, { seite: "vorne", x: 166, y: 240 }, { seite: "vorne", x: 122, y: 400 }] },

  // Chirurgie
  { id: "leiste", name: "Leiste & Bruchpforten", fach: "chirurgie", punkte: [{ seite: "vorne", x: 84, y: 240 }, { seite: "vorne", x: 116, y: 240 }] },
  { id: "schulter", name: "Schulter", fach: "chirurgie", punkte: [{ seite: "vorne", x: 62, y: 98 }, { seite: "vorne", x: 138, y: 98 }] },
  { id: "hand", name: "Hand & Ellenbogen", fach: "chirurgie", punkte: [{ seite: "vorne", x: 38, y: 172 }, { seite: "vorne", x: 162, y: 172 }, { seite: "vorne", x: 34, y: 262 }, { seite: "vorne", x: 166, y: 262 }] },
  { id: "wirbelsaeule", name: "Wirbelsäule", fach: "chirurgie", punkte: [{ seite: "hinten", x: 100, y: 96 }, { seite: "hinten", x: 100, y: 150 }, { seite: "hinten", x: 100, y: 204 }] },
  { id: "huefte", name: "Hüfte", fach: "chirurgie", punkte: [{ seite: "vorne", x: 72, y: 232 }, { seite: "vorne", x: 128, y: 232 }] },
  { id: "knie", name: "Knie", fach: "chirurgie", punkte: [{ seite: "vorne", x: 78, y: 336 }, { seite: "vorne", x: 122, y: 336 }] },
  { id: "sprunggelenk", name: "Sprunggelenk & Fuß", fach: "chirurgie", punkte: [{ seite: "vorne", x: 78, y: 408 }, { seite: "vorne", x: 122, y: 408 }] },

  // Dermatologie
  { id: "haut", name: "Haut (Dermatologischer Status)", fach: "derma", punkte: [{ seite: "vorne", x: 100, y: 206 }, { seite: "hinten", x: 128, y: 164 }] },
  { id: "haare", name: "Haare & Kopfhaut", fach: "derma", punkte: [{ seite: "hinten", x: 100, y: 20 }] },
  { id: "schleimhaut", name: "Mund & Schleimhäute", fach: "derma", punkte: [{ seite: "vorne", x: 100, y: 50 }] },
  { id: "naegel", name: "Nägel & Hände", fach: "derma", punkte: [{ seite: "vorne", x: 32, y: 282 }, { seite: "vorne", x: 168, y: 282 }] }
];
