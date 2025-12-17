// app.js
// Version: 2.0 (Compatible with Header Cards & Buttons)

// 1. GLOBALE VARIABLEN
let currentFilter = 'all';
const grid = document.getElementById('grid');
const modalOverlay = document.getElementById('modalOverlay');

// 2. INITIALISIERUNG
// Wir warten kurz, bis data-skills.js und data-grading.js geladen sind
window.onload = function() {
    console.log("App gestartet. Einträge geladen:", window.contentData.length);
    renderCards();
};

// 3. RENDER FUNKTION (Erstellt die Kacheln)
function renderCards() {
    grid.innerHTML = ''; // Grid leeren

    // Sicherheitscheck, falls Daten fehlen
    if (!window.contentData || window.contentData.length === 0) {
        grid.innerHTML = '<p style="text-align:center; padding:20px;">Daten werden geladen...</p>';
        return;
    }

    let foundCount = 0;

    window.contentData.forEach((item, index) => {
        // Filter-Logik: Zeigen wir dieses Item an?
        const match = currentFilter === 'all' || item.cat === currentFilter;

        if (match) {
            foundCount++;
            
            // Kachel erstellen
            const card = document.createElement('div');
            card.className = 'skill-card'; // Muss zur CSS-Klasse passen
            
            // Farbe für den kleinen Badge bestimmen
            let badgeColor = '#94a3b8'; 
            if(item.cat.includes('I')) badgeColor = '#10b981';   
            if(item.cat.includes('II')) badgeColor = '#8b5cf6';  
            if(item.cat.includes('III')) badgeColor = '#ef4444'; 
            if(item.cat === 'Tools') badgeColor = '#06b6d4';     
            if(item.cat === 'Grading') badgeColor = '#ec4899';

            let displayCat = item.cat === 'Grading' ? 'Benotung' : item.cat;
                        
            // HTML Inhalt der Kachel
            card.innerHTML = `
            <div style="margin-bottom: 10px;">
                <span class="badge" style="background:${badgeColor}; color:white; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">
                    ${displayCat}
                </span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.short}</p>
        `;
            
            // Klick-Event für Modal (WICHTIG: Wir übergeben den Original-Index!)
            card.onclick = () => openModal(index);
            
            // Hover Animation per JS (falls CSS fehlt)
            card.style.transition = "transform 0.2s";
            card.onmouseenter = () => card.style.transform = "translateY(-4px)";
            card.onmouseleave = () => card.style.transform = "translateY(0)";

            grid.appendChild(card);
        }
    });

    // Leere-Meldung anzeigen
    if (foundCount === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">
            Keine Inhalte für die Kategorie "${currentFilter}" gefunden.
        </p>`;
    }
}

// 4. FILTER FUNKTION (Wird aus HTML aufgerufen)
// Diese Funktion muss global verfügbar sein, daher window.filterContent
window.filterContent = function(category, element) {
    
    // UI RESET: Alle "active" Klassen entfernen
    document.querySelectorAll('.afb-card').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.filter-btn').forEach(el => {
        // Inline Styles resetten (falls Button genutzt wurde)
        el.style.background = ""; 
        el.style.color = "";
        el.classList.remove('active');
    });

    // LOGIK: Toggle (Klick auf das Gleiche = Reset auf 'all')
    if (currentFilter === category && category !== 'all') {
        currentFilter = 'all';
    } else {
        currentFilter = category;
        
        // UI SETZEN: Das angeklickte Element aktiv markieren
        if (category !== 'all' && element) {
            if (element.classList.contains('afb-card')) {
                element.classList.add('active');
            } else {
                // Es ist ein Button
                element.style.background = "#334155";
                element.style.color = "white";
                element.classList.add('active');
            }
        }
    }

    // Neu rendern
    renderCards();
};

// 5. MODAL FUNKTIONEN
function openModal(index) {
    const item = window.contentData[index];
    if(!item) return;

    // Inhalt füllen
    document.getElementById('mTitle').innerText = item.title;
    
    // Anzeige von Grading zu Benotung ändern
    document.getElementById('mCat').innerText = item.cat === 'Grading' ? 'Benotung' : item.cat;
    
    document.getElementById('mBody').innerHTML = item.content;
    
    // Öffnen
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden'; 
}

// Global verfügbar machen für den Schließen-Button im HTML
window.closeModal = function() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
};

// Event Listener für Modal (Klick daneben & Escape Taste)
if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeModal();
    }
});