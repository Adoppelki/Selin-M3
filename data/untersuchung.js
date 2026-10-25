// Körperliche Untersuchung: Bereiche zum Abhaken.
// "punkte" legt fest, wo der Bereich auf der Figur erscheint:
// seite "vorne" oder "hinten", x/y im Koordinatensystem der Figur (Breite 200, Höhe 440).
window.SELIN_UNTERSUCHUNG = [
  { id: "hirnnerven", name: "Hirnnerven", gruppe: "Neurologie", punkte: [{ seite: "vorne", x: 100, y: 34 }] },
  { id: "meningismus", name: "Meningismus", gruppe: "Neurologie", punkte: [{ seite: "hinten", x: 100, y: 74 }] },
  { id: "motorik", name: "Motorik & Reflexe", gruppe: "Neurologie", punkte: [{ seite: "vorne", x: 118, y: 332 }] },
  { id: "sensibilitaet", name: "Sensibilität", gruppe: "Neurologie", punkte: [{ seite: "vorne", x: 120, y: 384 }] },
  { id: "koordination", name: "Koordination & Gang", gruppe: "Neurologie", punkte: [{ seite: "hinten", x: 118, y: 420 }] },
  { id: "hals", name: "Hals, Schilddrüse & Lymphknoten", gruppe: "Kopf & Hals", punkte: [{ seite: "vorne", x: 100, y: 80 }] },
  { id: "lunge", name: "Lunge", gruppe: "Thorax", punkte: [{ seite: "vorne", x: 80, y: 122 }, { seite: "hinten", x: 120, y: 128 }] },
  { id: "herz", name: "Herz", gruppe: "Thorax", punkte: [{ seite: "vorne", x: 114, y: 134 }] },
  { id: "abdomen", name: "Abdomen", gruppe: "Abdomen", punkte: [{ seite: "vorne", x: 100, y: 188 }] },
  { id: "leiste", name: "Leiste & Bruchpforten", gruppe: "Abdomen", punkte: [{ seite: "vorne", x: 82, y: 236 }] },
  { id: "nierenlager", name: "Nierenlager", gruppe: "Abdomen", punkte: [{ seite: "hinten", x: 80, y: 196 }] },
  { id: "rektal", name: "Digital-rektale Untersuchung", gruppe: "Abdomen", punkte: [{ seite: "hinten", x: 100, y: 248 }] },
  { id: "puls", name: "Gefäße & Pulsstatus", gruppe: "Gefäße", punkte: [{ seite: "vorne", x: 158, y: 250 }] },
  { id: "schulter", name: "Schulter", gruppe: "Bewegungsapparat", punkte: [{ seite: "vorne", x: 54, y: 98 }] },
  { id: "hand", name: "Hand & Ellenbogen", gruppe: "Bewegungsapparat", punkte: [{ seite: "vorne", x: 40, y: 266 }] },
  { id: "wirbelsaeule", name: "Wirbelsäule", gruppe: "Bewegungsapparat", punkte: [{ seite: "hinten", x: 100, y: 160 }] },
  { id: "huefte", name: "Hüfte", gruppe: "Bewegungsapparat", punkte: [{ seite: "vorne", x: 122, y: 236 }] },
  { id: "knie", name: "Knie", gruppe: "Bewegungsapparat", punkte: [{ seite: "vorne", x: 82, y: 332 }] },
  { id: "sprunggelenk", name: "Sprunggelenk & Fuß", gruppe: "Bewegungsapparat", punkte: [{ seite: "vorne", x: 82, y: 414 }] },
  { id: "haut", name: "Haut (Dermatologischer Status)", gruppe: "Haut", punkte: [{ seite: "hinten", x: 150, y: 176 }] }
];
