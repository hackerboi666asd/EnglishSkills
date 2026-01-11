# Copilot Instructions - EnglishSkills Project

## 🚨 WICHTIGSTE REGEL

**❌ NIEMALS den Inhalt bestehender Karten ändern**, es sei denn, der Nutzer fordert dies **explizit** mit konkretem Bezug zu einer bestimmten Kachel/Karte (z.B. "verbessere die Summary-Karte" oder "füge bei Outline XYZ hinzu").

- Keine stilistischen Verbesserungen
- Keine Umformulierungen
- Keine Korrekturen (außer ausdrücklich gewünscht)
- Der Inhalt in `data-skills.js` und `data-grading.js` ist **heilig**

---

## 📁 Projektstruktur

```
EnglishSkills/
├── index.html          # Hauptseite mit Header und Kategorie-Karten
├── app.js              # Logik: Filter, Rendering, Modal
├── style.css           # Alle Styles
├── data-skills.js      # Content-Daten für AFB I-III und Tools
├── data-grading.js     # Content-Daten für Benotung
└── copilot-instructions.md  # Diese Datei
```

### Datei-Verantwortlichkeiten

- **index.html**: HTML-Struktur, Kategorie-Buttons (AFB I/II/III, Tools, Benotung)
- **app.js**: 
  - Filter-Logik (`filterContent()`)
  - Card-Rendering (`renderCards()`)
  - Modal-System (`openModal()`, `closeModal()`)
  - Sortierung der Karten nach Kategorie
- **style.css**: Komplettes Styling inkl. Kategorie-Farben
- **data-skills.js**: Array `skillsContent` mit allen Lernkarten
- **data-grading.js**: Array `gradingContent` mit Benotungs-Infos

---

## ➕ Neue Karten hinzufügen

### Schema für neue Karten

Neue Einträge werden in `data-skills.js` oder `data-grading.js` hinzugefügt:

```javascript
{
    title: "Name der Skill/Methode",
    cat: "AFB I",  // oder: AFB II, AFB III, Tools, Grading
    short: "Kurzbeschreibung (1 Satz für die Kachel)",
    content: `
        <h3>Überschrift</h3>
        <p>Haupt-Content mit HTML...</p>
        
        <h4>Unterüberschrift</h4>
        <ul>
            <li>Listenpunkt</li>
        </ul>
        
        <!-- Tabellen mit .table-wrap umschließen -->
        <div class="table-wrap">
        <table>
            <tr><td>Zelle 1</td><td>Zelle 2</td></tr>
        </table>
        </div>
    `
}
```

### Verfügbare Kategorien (cat)

- `"AFB I"` - Comprehension (Reproduktion)
- `"AFB II"` - Analysis (Analyse)
- `"AFB III"` - Evaluation (Bewertung)
- `"Tools"` - Hilfsmittel & Methoden
- `"Grading"` - Benotung & Bewertungskriterien

**Wichtig**: Diese Namen EXAKT verwenden (inkl. Groß-/Kleinschreibung)!

---

## 🎨 Styling-Richtlinien

### Kategorie-Farben

Definiert in `style.css` und `app.js`:

| Kategorie | Farbe | Hex-Code |
|-----------|-------|----------|
| AFB I | Grün | `#10b981` |
| AFB II | Lila | `#8b5cf6` |
| AFB III | Rot | `#ef4444` |
| Tools | Cyan | `#06b6d4` |
| Grading | Pink | `#ec4899` |

### CSS-Klassen für Content

- `.intro-text` - Einleitungstext (kursiv)
- `.highlight-box` - Hervorgehobene Box (z.B. für Warnungen)
- `.table-wrap` - Umschließt Tabellen für Responsive-Verhalten
- `.badge` - Kleine farbige Labels

### Highlight-Box Beispiel

```html
<div class="highlight-box" style="background: #f0fdf4; border: 1px solid #86efac; color: #166534;">
    <strong>⚠️ Hinweis:</strong><br>
    Text hier...
</div>
```

---

## 🔄 Sortier-Reihenfolge

Die Karten werden in folgender Reihenfolge angezeigt (festgelegt in `app.js`):

1. **AFB I** (Comprehension)
2. **AFB II** (Analysis)
3. **AFB III** (Evaluation)
4. **Tools** (Hilfsmittel)
5. **Grading** (Benotung)

Diese Reihenfolge ist im `sortOrder`-Objekt in `app.js` definiert und sollte **nicht geändert** werden, außer ausdrücklich gewünscht.

---

## 🔧 Technische Details

### Filter-System

- Standard: `currentFilter = 'none'` → keine Karten sichtbar
- Beim Klick auf eine Kategorie: Filter wird gesetzt
- Erneuter Klick auf gleiche Kategorie: Toggle zurück zu `'none'`

### Modal-System

- Öffnet sich per `openModal(index)` mit Index aus `window.contentData`
- `window.contentData` wird aus `skillsContent` und `gradingContent` kombiniert
- Schließen: Klick außerhalb, ESC-Taste oder X-Button

### Daten-Loading

```javascript
window.contentData = [];  // Globales Array (index.html)
// Wird gefüllt durch data-skills.js und data-grading.js
// Sortierung erfolgt in app.js beim window.onload
```

---

## ✅ Dos and Don'ts

### ✅ DO

- UI/UX-Verbesserungen (Buttons, Layout, Animationen)
- Neue Funktionen (z.B. Suche, Dark Mode)
- Bugfixes
- Neue Karten hinzufügen (wenn gewünscht)
- Styling-Anpassungen

### ❌ DON'T

- Bestehende Karten-Inhalte ändern (außer explizit gefordert)
- Kategorie-Namen ändern (`AFB I`, nicht `AFB 1`)
- Sortier-Reihenfolge ändern (außer gewünscht)
- Farbschema ändern (außer gewünscht)

---

## 🌐 Sprach-Mix

Das Projekt nutzt bewusst einen Mix aus Deutsch und Englisch:
- **Deutsche UI**: Header, Kategorie-Beschreibungen, Benotung
- **Englische Inhalte**: Die Skills/Methods selbst (da Englischunterricht)
- **Deutsche Hilfe-Texte**: Bremen-Links, Tipps

Dies ist Absicht und soll **beibehalten** werden.
