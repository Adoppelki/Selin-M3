// Körperliche Untersuchung: Bereiche zum Abhaken, nach Fach sortiert (fach = id aus faecher.js).
// "punkte" legt fest, wo der Bereich auf der Figur erscheint:
// seite "vorne" oder "hinten", x/y im Koordinatensystem der Figur (Breite 200, Höhe 440).
// Achtung: Die id bleibt gleich, sonst startet der Fortschritt dieses Bereichs neu.
window.SELIN_UNTERSUCHUNG = [
  // Neurologie
  { id: "hirnnerven", name: "Hirnnerven", fach: "neuro", punkte: [{ seite: "vorne", x: 100, y: 34 }] },
  { id: "meningismus", name: "Meningismus", fach: "neuro", punkte: [{ seite: "hinten", x: 100, y: 74 }] },
  { id: "motorik", name: "Motorik & Reflexe", fach: "neuro", punkte: [{ seite: "vorne", x: 118, y: 332 }] },
  { id: "sensibilitaet", name: "Sensibilität", fach: "neuro", punkte: [{ seite: "vorne", x: 120, y: 384 }] },
  { id: "koordination", name: "Koordination & Gang", fach: "neuro", punkte: [{ seite: "hinten", x: 118, y: 420 }] },

  // Innere Medizin
  { id: "hals", name: "Hals, Schilddrüse & Lymphknoten", fach: "innere", punkte: [{ seite: "vorne", x: 100, y: 80 }] },
  { id: "lunge", name: "Lunge", fach: "innere", punkte: [{ seite: "vorne", x: 80, y: 122 }, { seite: "hinten", x: 120, y: 128 }] },
  { id: "herz", name: "Herz", fach: "innere", punkte: [{ seite: "vorne", x: 114, y: 134 }] },
  { id: "abdomen", name: "Abdomen", fach: "innere", punkte: [{ seite: "vorne", x: 100, y: 188 }] },
  { id: "nierenlager", name: "Nierenlager", fach: "innere", punkte: [{ seite: "hinten", x: 80, y: 196 }] },
  { id: "puls", name: "Gefäße & Pulsstatus", fach: "innere", punkte: [{ seite: "vorne", x: 158, y: 250 }] },

  // Chirurgie
  { id: "leiste", name: "Leiste & Bruchpforten", fach: "chirurgie", punkte: [{ seite: "vorne", x: 82, y: 236 }] },
  { id: "schulter", name: "Schulter", fach: "chirurgie", punkte: [{ seite: "vorne", x: 54, y: 98 }] },
  { id: "hand", name: "Hand & Ellenbogen", fach: "chirurgie", punkte: [{ seite: "vorne", x: 40, y: 266 }] },
  { id: "wirbelsaeule", name: "Wirbelsäule", fach: "chirurgie", punkte: [{ seite: "hinten", x: 100, y: 160 }] },
  { id: "huefte", name: "Hüfte", fach: "chirurgie", punkte: [{ seite: "vorne", x: 122, y: 236 }] },
  { id: "knie", name: "Knie", fach: "chirurgie", punkte: [{ seite: "vorne", x: 82, y: 332 }] },
  { id: "sprunggelenk", name: "Sprunggelenk & Fuß", fach: "chirurgie", punkte: [{ seite: "vorne", x: 82, y: 414 }] },

  // Dermatologie
  { id: "haut", name: "Haut (Dermatologischer Status)", fach: "derma", punkte: [{ seite: "hinten", x: 150, y: 176 }] },
  { id: "haare", name: "Haare & Kopfhaut", fach: "derma", punkte: [{ seite: "hinten", x: 100, y: 22 }] },
  { id: "schleimhaut", name: "Mund & Schleimhäute", fach: "derma", punkte: [{ seite: "vorne", x: 100, y: 46 }] },
  { id: "naegel", name: "Nägel & Hände", fach: "derma", punkte: [{ seite: "vorne", x: 40, y: 272 }] }
];
