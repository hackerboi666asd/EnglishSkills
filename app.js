// app.js
// Version: 2.0 (Compatible with Header Cards & Buttons)

// 1. GLOBALE VARIABLEN
let currentFilter = 'none'; // Starte mit 'none' statt 'all'
let searchQuery = ''; // Suchbegriff
let isMobileView = false; // Mobile-Status
const grid = document.getElementById('grid');
const modalOverlay = document.getElementById('modalOverlay');

// 2. INITIALISIERUNG
// Wir warten kurz, bis die Daten geladen sind, und SORTIEREN sie dann.
window.onload = function() {
    
    // Die gewünschte Reihenfolge festlegen
    const sortOrder = { 
        'AFB I': 1, 
        'AFB II': 2, 
        'AFB III': 3, 
        'Kompetenzen': 4, 
        'Grading': 5 
    };

    // Das Daten-Array sortieren
    window.contentData.sort((a, b) => {
        // Hole den Wert für die Kategorie (z.B. 2 für AFB II)
        // Falls eine Kategorie unbekannt ist, bekommt sie den Wert 99 (ganz hinten)
        let valA = sortOrder[a.cat] || 99;
        let valB = sortOrder[b.cat] || 99;
        
        return valA - valB;
    });

    console.log("App gestartet. Einträge geladen und sortiert:", window.contentData.length);
    renderCards();
    
    // Suchfunktion initialisieren
    initSearch();
    
    // Mobile-Detection
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
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
    let itemsWithRelevance = [];

    // Bei Suchbegriff: Alle Karten mit Relevanz-Score
    if (searchQuery) {
        window.contentData.forEach((item, index) => {
            const relevance = calculateRelevance(item, searchQuery);
            if (relevance > 0) {
                itemsWithRelevance.push({ item, index, relevance });
            }
        });
        
        // Nach Relevanz sortieren (höchste zuerst)
        itemsWithRelevance.sort((a, b) => b.relevance - a.relevance);
    } else {
        // Ohne Suche: Normale Filter-Logik
        window.contentData.forEach((item, index) => {
            const match = currentFilter === 'all' || currentFilter === 'none' || item.cat === currentFilter;
            if (match || currentFilter === 'none') {
                itemsWithRelevance.push({ item, index, relevance: 0 });
            }
        });
    }

    itemsWithRelevance.forEach(({ item, index }) => {
        // Filter-Logik: Bei Suche ignorieren wir den Kategorie-Filter
        // Bei leerem Suchfeld und currentFilter='none' zeigen wir NICHTS an
        const match = searchQuery ? true : (currentFilter === 'all' || item.cat === currentFilter);

        if (match) {
            foundCount++;
            
            // Kachel erstellen
            const card = document.createElement('div');
            card.className = 'skill-card'; 
            
            // Farbe für den kleinen Badge bestimmen
            let badgeColor = '#94a3b8'; 
            if(item.cat.includes('I')) badgeColor = '#10b981';   
            if(item.cat.includes('II')) badgeColor = '#8b5cf6';  
            if(item.cat.includes('III')) badgeColor = '#ef4444'; 
            if(item.cat === 'Kompetenzen') badgeColor = '#06b6d4';     
            if(item.cat === 'Grading') badgeColor = '#ec4899';

            let displayCat = item.cat === 'Grading' ? 'Bewertungskriterien' : item.cat;
            
            // Highlight bei Suche
            const highlightedTitle = searchQuery ? highlightText(item.title, searchQuery) : item.title;
            const highlightedShort = searchQuery ? highlightText(item.short, searchQuery) : item.short;
                        
            // HTML Inhalt der Kachel
            card.innerHTML = `
            <div style="margin-bottom: 10px;">
                <span class="badge" style="background:${badgeColor}; color:white; padding:4px 8px; border-radius:4px; font-size:0.75rem; font-weight:bold;">
                    ${displayCat}
                </span>
            </div>
            <h3>${highlightedTitle}</h3>
            <p>${highlightedShort}</p>
        `;
            
            // Klick-Event für Modal
            card.onclick = () => openModal(index);
            
            // Hover Animation per JS
            card.style.transition = "transform 0.2s";
            card.onmouseenter = () => card.style.transform = "translateY(-4px)";
            card.onmouseleave = () => card.style.transform = "translateY(0)";

            grid.appendChild(card);
        }
    });

    // Suchergebnis-Zähler aktualisieren
    const searchCounter = document.getElementById('searchCounter');
    if (searchCounter) {
        if (searchQuery) {
            searchCounter.textContent = `${foundCount} Karte${foundCount !== 1 ? 'n' : ''} gefunden`;
            searchCounter.style.display = 'block';
        } else {
            searchCounter.style.display = 'none';
        }
    }

    // Leere-Meldung anzeigen
    if (foundCount === 0) {
        if (searchQuery) {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px; font-size: 1.1rem;">
                <strong>🔍 Keine Ergebnisse für "${searchQuery}"</strong><br>
                <span style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px; display: block;">Versuche es mit anderen Suchbegriffen.</span>
            </p>`;
        } else if (currentFilter === 'none') {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px; font-size: 1.1rem;">
                <strong>👆 Wähle oben eine Kategorie aus</strong><br>
                <span style="font-size: 0.9rem; opacity: 0.8; margin-top: 10px; display: block;">Klicke auf eine der Karten (AFB I, AFB II, AFB III, Tools oder Benotung), um die Inhalte anzuzeigen.</span>
            </p>`;
        } else {
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">
                Keine Inhalte für die Kategorie "${currentFilter}" gefunden.
            </p>`;
        }
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

    // LOGIK: Toggle (Klick auf das Gleiche = Reset auf 'none')
    if (currentFilter === category && category !== 'none') {
        currentFilter = 'none';
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

// Zentrale Click-Handler für Kategorie-Karten (Desktop + Mobile)
window.handleCategoryClick = function(category, element) {
    if (isMobileView) {
        filterContentMobile(category, element);
    } else {
        filterContent(category, element);
    }
};

// 5. MODAL FUNKTIONEN
function openModal(index) {
    const item = window.contentData[index];
    if(!item) return;

    // Inhalt füllen
    document.getElementById('mTitle').innerText = item.title;
    
    // Anzeige von Grading zu Bewertungskriterien ändern
    document.getElementById('mCat').innerText = item.cat === 'Grading' ? 'Bewertungskriterien' : item.cat;
    
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

// 6. SUCHFUNKTION
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        
        // Bei Suche: Filter zurücksetzen und alle Accordions schließen
        if (searchQuery) {
            if (isMobileView) {
                // Mobile Accordions schließen
                document.querySelectorAll('.afb-card').forEach(el => {
                    el.classList.remove('active');
                    const accordion = el.nextElementSibling;
                    if (accordion && accordion.classList.contains('mobile-accordion')) {
                        accordion.remove();
                    }
                });
            }
        } else {
            // Suchfeld gelöscht: Filter auf 'none' zurücksetzen
            currentFilter = 'none';
            // Alle aktiven Kategorie-Markierungen entfernen
            document.querySelectorAll('.afb-card').forEach(el => el.classList.remove('active'));
            if (isMobileView) {
                // Mobile Accordions schließen
                document.querySelectorAll('.mobile-accordion').forEach(acc => acc.remove());
            }
        }
        
        renderCards();
    });
}

// Highlight-Funktion für Suchbegriffe
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Relevanz-Score berechnen
function calculateRelevance(item, query) {
    if (!query) return 0;
    
    let score = 0;
    const lowerQuery = query.toLowerCase();
    
    // Titel-Match (höchste Priorität)
    if (item.title.toLowerCase().includes(lowerQuery)) score += 100;
    
    // Beschreibung-Match (mittlere Priorität)
    if (item.short.toLowerCase().includes(lowerQuery)) score += 50;
    
    // Content-Match (niedrigste Priorität)
    const contentText = item.content.replace(/<[^>]*>/g, '').toLowerCase();
    if (contentText.includes(lowerQuery)) score += 10;
    
    return score;
}

// 7. MOBILE-DETECTION
function checkMobileView() {
    isMobileView = window.innerWidth <= 768;
    const afbExplainer = document.querySelector('.afb-explainer');
    
    if (isMobileView && afbExplainer) {
        // Mobile: Accordion-Modus aktivieren
        afbExplainer.style.flexDirection = 'column';
    } else if (afbExplainer) {
        // Desktop: Normal-Modus
        afbExplainer.style.flexDirection = 'row';
    }
}

// 8. MOBILE ACCORDION-NAVIGATION
window.filterContentMobile = function(category, element) {
    if (!isMobileView) {
        // Desktop: Normale Filterung
        filterContent(category, element);
        return;
    }
    
    // Mobile: Accordion-Logik
    const wasActive = element.classList.contains('active');
    
    // Alle schließen und Accordions entfernen
    document.querySelectorAll('.afb-card').forEach(el => {
        el.classList.remove('active');
        const accordion = el.nextElementSibling;
        if (accordion && accordion.classList.contains('mobile-accordion')) {
            accordion.remove();
        }
    });
    
    // Grid verstecken auf Mobile im Accordion-Modus
    grid.innerHTML = '';
    
    if (!wasActive) {
        // Öffnen
        element.classList.add('active');
        currentFilter = category;
        
        // Accordion erstellen
        const accordion = document.createElement('div');
        accordion.className = 'mobile-accordion';
        
        // Schließen-Button hinzufügen
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-accordion-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            element.classList.remove('active');
            accordion.remove();
            currentFilter = 'none';
            grid.innerHTML = '';
        };
        accordion.appendChild(closeBtn);
        
        // Gefilterte Karten erstellen
        const filteredItems = window.contentData.filter(item => item.cat === category);
        
        if (filteredItems.length === 0) {
            accordion.innerHTML += '<p style="text-align:center; color:#64748b; padding:20px;">Keine Inhalte gefunden.</p>';
        } else {
            filteredItems.forEach((item) => {
                const originalIndex = window.contentData.indexOf(item);
                const card = createMiniCard(item, originalIndex);
                accordion.appendChild(card);
            });
        }
        
        element.after(accordion);
        
        // Smooth scroll
        setTimeout(() => {
            accordion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // Schließen
        currentFilter = 'none';
    }
};

function createMiniCard(item, index) {
    const card = document.createElement('div');
    card.className = 'mobile-mini-card';
    
    let badgeColor = '#94a3b8'; 
    if(item.cat.includes('I')) badgeColor = '#10b981';   
    if(item.cat.includes('II')) badgeColor = '#8b5cf6';  
    if(item.cat.includes('III')) badgeColor = '#ef4444'; 
    if(item.cat === 'Kompetenzen') badgeColor = '#06b6d4';     
    if(item.cat === 'Grading') badgeColor = '#ec4899';
    
    card.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.short}</p>
    `;
    
    card.onclick = () => openModal(index);
    
    return card;
}