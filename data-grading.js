// data-grading.js
// Version: Final (Exakt nach User-Uploads)

const gradingContent = [
    {
        title: "Bewertungskriterien: Schreiben (Sprache)",
        cat: "Grading",
        short: "Kompetenzbereich Schreiben: Sprache (Darstellungsleistung)",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Schreiben: Sprache</h3>
            <div class="table-wrap">
            <table class="grading-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Unterkategorie</th>
                  <th>15-13 BE</th>
                  <th>12,5-10,5 BE</th>
                  <th>10-8,5 BE</th>
                  <th>8-5,5 BE</th>
                  <th>5-2 BE</th>
                  <th>1,5-0 BE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="3">Kommunikative Textgestaltung</td>
                  <td>Textaufbau</td>
                  <td>durchgängig zielgerichteter, strukturierter, kohärenter Text; geschickter Gebrauch von Verknüpfungsmitteln</td>
                  <td>zielgerichteter, strukturierter, kohärenter Text; angemessener Gebrauch von Verknüpfungsmitteln</td>
                  <td>noch zielgerichteter, nicht durchgängig strukturierter Text; weitgehend angemessener Gebrauch von Verknüpfungsmitteln</td>
                  <td>ansatzweise strukturierter Text; meist verständlich; Gebrauch von Verknüpfungsmitteln einfach, aber verständlich</td>
                  <td>weitgehend unstrukturierter und inkohärenter Text; Gebrauch von Verknüpfungsmitteln kaum vorhanden / fehlerhaft</td>
                  <td>völlig unstrukturierter und inkohärenter Text; Gebrauch von Verknüpfungsmitteln nicht vorhanden</td>
                </tr>
                <tr>
                  <td>Textsortenspezifik</td>
                  <td>besonders überzeugende und treffende Umsetzung der Textsortenmerkmale</td>
                  <td>überzeugende und treffende Umsetzung der Textsortenmerkmale</td>
                  <td>teilweise gelungene Umsetzung der Textsortenmerkmale</td>
                  <td>in Ansätzen gelungene Umsetzung der Textsortenmerkmale</td>
                  <td>weitgehend fehlende Textsortenmerkmale</td>
                  <td>Textsortenmerkmale nicht erkennbar</td>
                </tr>
                <tr>
                  <td>Adressatenbezug</td>
                  <td>durchgängig situationsangemessen und äußerst treffend</td>
                  <td>situationsangemessen und treffend</td>
                  <td>Situationsangemessenheit teilweise gegeben</td>
                  <td>Situationsangemessenheit in Ansätzen gegeben</td>
                  <td>weitgehend fehlende Situationsangemessenheit</td>
                  <td>keine Situationsangemessenheit</td>
                </tr>
                <tr>
                  <td rowspan="3">Ausdrucksvermögen / Sprachrichtigkeit</td>
                  <td>Wortschatz</td>
                  <td>besonders präzise, differenzierte und idiomatische Wortwahl; sehr abwechslungsreich</td>
                  <td>präzise, differenzierte und idiomatische Wortwahl; abwechslungsreich</td>
                  <td>treffende, verständliche Wortwahl; allgemeiner Wortschatz; teils Wiederholungen</td>
                  <td>Wortwahl noch treffend; eingeschränkter Wortschatz; Wiederholungen</td>
                  <td>deutlich eingeschränkte Wortwahl; stört Verständnis; häufig falsche Worte</td>
                  <td>Wortwahl unpassend; Verständnis massiv gestört</td>
                </tr>
                <tr>
                  <td>Satzbau</td>
                  <td>durchgängig variabler und funktionaler Satzbau; komplexe Strukturen (Hypotaxe)</td>
                  <td>variabler und funktionaler Satzbau; komplexe Strukturen</td>
                  <td>teilweise variabler und funktionaler Satzbau; einfachere Strukturen überwiegen</td>
                  <td>einfacher Satzbau; wenig Variation; aber verständlich</td>
                  <td>sehr einfacher, teilweise sprachuntypischer Satzbau; Syntaxfehler</td>
                  <td>unverständlicher Satzbau</td>
                </tr>
                <tr>
                  <td>Korrektheit</td>
                  <td>hohes Maß an Korrektheit in Grammatik und Orthografie; nur vereinzelte Fehler</td>
                  <td>gutes Maß an Korrektheit; Fehler beeinträchtigen Lesefluss nicht</td>
                  <td>im Wesentlichen korrekt; Fehler beeinträchtigen das Verständnis kaum</td>
                  <td>Fehler treten häufiger auf; beeinträchtigen Verständnis stellenweise</td>
                  <td>Häufung elementarer Fehler; Verständnis oft beeinträchtigt</td>
                  <td>Verständnis durch Fehler fast unmöglich</td>
                </tr>
              </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Bewertungskriterien: Schreiben (Inhalt)",
        cat: "Grading",
        short: "Kompetenzbereich Schreiben: Inhalt",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Schreiben: Inhalt</h3>
            <div class="table-wrap">
            <table class="grading-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Anforderung (Ideal 15-13 BE)</th>
                  <th>Ausreichend / Mangelhaft (5-2 BE)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Aufgabenerfüllung</td>
                  <td>Aufgabe vollständig, differenziert und operatorgerecht bearbeitet. Keine Redundanz.</td>
                  <td>Aufgabe nur in Ansätzen / kaum erfüllt. Irrelevante Informationen.</td>
                </tr>
                <tr>
                  <td>Verständlichkeit</td>
                  <td>Durchgehend sachgerecht, logisch und sehr klar strukturiert.</td>
                  <td>Wenig strukturiert, Sprünge in der Logik.</td>
                </tr>
                <tr>
                  <td>Analyse (AFB II)</td>
                  <td>Detailliertes Deuten von Form & Wirkung. Belege (Zitate) korrekt eingebunden.</td>
                  <td>Fehlerhaftes Deuten. Zitate fehlen oder falsch.</td>
                </tr>
                <tr>
                  <td>Argumentation (AFB III)</td>
                  <td>Differenziert, widerspruchsfrei, überzeugend begründet. Vielschichtig.</td>
                  <td>Widersprüchlich, einseitig, kaum begründet.</td>
                </tr>
                <tr>
                  <td>Kreatives Schreiben</td>
                  <td>Eigenständige, sehr kreative und in jeder Hinsicht schlüssige Verarbeitung.</td>
                  <td>Kaum eigenständig, in sehr geringem Maße kreativ, unlogisch.</td>
                </tr>
                <tr>
                  <td>Reflexion</td>
                  <td>Umfassende Reflexion und sehr überzeugende Begründung.</td>
                  <td>Kaum reflektiert, kaum oder keine Begründung (oft Wiederholung des Textes).</td>
                </tr>
              </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Bewertungskriterien: Sprachmittlung",
        cat: "Grading",
        short: "Kompetenzbereich Sprachmittlung (Mediation)",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Sprachmittlung</h3>
            <div class="table-wrap">
            <table class="grading-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>10–8,5 BE</th>
                  <th>8–7 BE</th>
                  <th>6,5–5,5 BE</th>
                  <th>5–4 BE</th>
                  <th>3,5–1,5 BE</th>
                  <th>1–0 BE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Informationsverarbeitung</td>
                  <td>alle im Sinne der Aufgabenstellung relevanten Informationen vollständig erfasst und präzise wiedergegeben</td>
                  <td>alle im Sinne der Aufgabenstellung relevanten Informationen im Wesentlichen erfasst</td>
                  <td>Informationen mehrheitlich erfasst und überwiegend treffend wiedergegeben</td>
                  <td>Informationen nur teilweise erfasst und z. T. ungenau wiedergegeben</td>
                  <td>Informationen nur ansatzweise erfasst, lückenhaft oder falsch wiedergegeben</td>
                  <td>Informationen nicht erfasst</td>
                </tr>
                <tr>
                  <td>Adressatenbezug und Textsorte</td>
                  <td>äußerst treffend auf den Adressaten zugeschnitten; Textsortenkonventionen perfekt eingehalten</td>
                  <td>treffend auf den Adressaten zugeschnitten; Textsortenkonventionen eingehalten</td>
                  <td>Adressatenbezug erkennbar; Textsortenkonventionen weitgehend eingehalten</td>
                  <td>Adressatenbezug im Wesentlichen erkennbar; Textsorte im Ansatz getroffen</td>
                  <td>Adressatenbezug kaum erkennbar; Textsorte verfehlt</td>
                  <td>kein Adressatenbezug; Textsorte verfehlt</td>
                </tr>
                <tr>
                  <td>Interkulturelle Kompetenz</td>
                  <td>kulturelle Begriffe bzw. Sachverhalte präzise und überaus zielführend erläutert</td>
                  <td>kulturelle Begriffe bzw. Sachverhalte verständlich erläutert</td>
                  <td>Erläuterungen im Wesentlichen nachvollziehbar</td>
                  <td>ansatzweise Erklärungen vorhanden</td>
                  <td>Erläuterungen missverständlich oder fehlend</td>
                  <td>keine Erläuterungen</td>
                </tr>
                <tr>
                  <td>Sprache</td>
                  <td>nahezu durchgängig korrekte, variable sprachliche Strukturen und Konnektoren, differenzierte, präzise und idiomatische Wortwahl</td>
                  <td>weitgehend korrekte und abwechslungsreiche sprachliche Strukturen und Konnektoren, zumeist treffende Wortwahl</td>
                  <td>größtenteils korrekte sprachliche Strukturen und Konnektoren, einfache und verständliche Wortwahl</td>
                  <td>teils fehlerhafte, einfache, wenig variable sprachliche Strukturen und Konnektoren, begrenzte und fehlerhafte Wortwahl</td>
                  <td>sehr einfache und häufig fehlerhafte sprachliche Strukturen und Konnektoren, deutlich begrenzte Wortwahl</td>
                  <td>unverständliche, schwerwiegend fehlerhafte Zielsprache</td>
                </tr>
                <tr>
                  <td>Strategien / Umgang mit der Textvorlage</td>
                  <td>überaus eigenständiger idiomatischer Text, besonders geschickte Nutzung von Kompensationsstrategien (Paraphrasen, Hyperonyme etc.)</td>
                  <td>weitgehend eigenständig produzierter und idiomatischer Text, überwiegend geschickte Nutzung von Kompensationsstrategien</td>
                  <td>zumeist eigenständig produzierter Text, im Wesentlichen gelungene Nutzung von Kompensationsstrategien</td>
                  <td>im Ansatz eigenständig produzierter Text, ansatzweise gelungene Nutzung von Kompensationsstrategien</td>
                  <td>stellenweise wörtlich übersetzter und somit sprachuntypischer Text, kaum Kompensationsstrategien</td>
                  <td>nahezu wörtlich übersetzter und unverständlicher Text, keine Kompensationsstrategien</td>
                </tr>
              </tbody>
            </table>
            </div>
        `
    }
];

// In das globale Array pushen
if(window.contentData) {
    window.contentData.push(...gradingContent);
    // Event feuern, falls data-grading nach app.js geladen wird
    window.dispatchEvent(new Event('gradingLoaded'));
}