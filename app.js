// DOM Elements
const grid = document.getElementById('grid');
const modal = document.getElementById('modalOverlay');
const btns = document.querySelectorAll('.filter-btn');

// --- Render Function ---
function renderCards(filter) {
    grid.innerHTML = '';
    
    // Zugriff auf das globale Daten-Array 'window.contentData'
    // Wir sortieren es optional, damit Tools am Ende stehen, oder lassen es so.
    
    window.contentData.forEach((item, index) => {
        // Filter-Logik
        const match = filter === 'all' 
                   || item.cat === filter 
                   || (filter === 'Tools' && item.cat === 'Tools'); // Falls Tools erweitert wird

        if (match) {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('data-cat', item.cat);
            
            // Badge Farbe ermitteln
            let bColor = '#ccc';
            if(item.cat.includes('I')) bColor = 'var(--afb1)';
            if(item.cat.includes('II')) bColor = 'var(--afb2)';
            if(item.cat.includes('III')) bColor = 'var(--afb3)';
            if(item.cat === 'Tools') bColor = 'var(--tools)';
            if(item.cat === 'Grading') bColor = 'var(--grading)';

            card.innerHTML = `
                <span class="badge" style="background:${bColor}">${item.cat}</span>
                <h3>${item.title}</h3>
                <p>${item.short}</p>
                <div class="card-link" style="color:${bColor}">Guide öffnen</div>
            `;
            
            card.onclick = () => openModal(index);
            grid.appendChild(card);
        }
    });
}

// --- Modal Functions ---
function openModal(index) {
    const item = window.contentData[index];
    document.getElementById('mTitle').innerText = item.title;
    document.getElementById('mCat').innerText = item.cat;
    document.getElementById('mBody').innerHTML = item.content;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Scrollen im Hintergrund verhindern
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// --- Event Listeners ---
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCards(btn.getAttribute('data-filter'));
    });
});

// Modal Close Triggers
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
document.querySelector('.close-modal').addEventListener('click', closeModal);

// --- Init ---
// Kleines Timeout, damit die anderen Skripte sicher geladen sind
setTimeout(() => {
    renderCards('all');
}, 50);
