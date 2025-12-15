// data-grading.js
// Enthält die vollständigen Bewertungsraster für Schreiben und Mediation.

const gradingContent = [
    {
        title: "Benotung: Schreiben (Sprache)",
        cat: "Grading",
        short: "Bewertungsraster: Sprachliche Qualität (Darstellungsleistung).",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Schreiben (Sprache)</h3>
            <p>Dieses Raster bewertet die "Darstellungsleistung".</p>
            
            <div class="table-wrap">
            <table class="grading-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>Unterkategorie</th>
                  <th>15-13 BE (Sehr gut)</th>
                  <th>12,5-10,5 BE (Gut)</th>
                  <th>10-8,5 BE (Befriedigend)</th>
                  <th>8-5,5 BE (Ausreichend)</th>
                  <th>5-2 BE (Mangelhaft)</th>
                  <th>1,5-0 BE (Ungenügend)</th>
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
        title: "Benotung: Schreiben (Inhalt)",
        cat: "Grading",
        short: "Bewertungsraster: Inhaltliche Qualität.",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Schreiben (Inhalt)</h3>
            
            <div class="table-wrap">
            <table class="grading-table">
                <thead>
                    <tr>
                        <th>Kategorie</th>
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
                        <td>Aufgabenerfüllung</td>
                        <td>Aufgabe vollständig, differenziert und operatorgerecht bearbeitet. Keine Redundanz.</td>
                        <td>Aufgabe vollständig und operatorgerecht bearbeitet.</td>
                        <td>Aufgabe weitgehend vollständig und im Wesentlichen operatorgerecht.</td>
                        <td>Aufgabe in Ansätzen erfüllt, teilweise operatorgerecht.</td>
                        <td>Aufgabe kaum erfüllt, kaum operatorgerecht, irrelevante Infos.</td>
                        <td>Aufgabe nicht erfüllt.</td>
                    </tr>
                    <tr>
                        <td>Verständlichkeit & Struktur</td>
                        <td>Durchgehend sachgerecht, logisch und sehr klar strukturiert.</td>
                        <td>Sachgerecht, logisch und klar strukturiert.</td>
                        <td>Weitgehend sachgerecht und strukturiert.</td>
                        <td>Ansatzweise sachgerecht und strukturiert.</td>
                        <td>Wenig strukturiert, Sprünge in der Logik.</td>
                        <td>Unstrukturiert und unlogisch.</td>
                    </tr>
                    <tr>
                        <td>Analyse (AFB II)</td>
                        <td>Detailliertes und umfassendes Deuten von Form & Wirkung. Belege (Zitate) korrekt.</td>
                        <td>Umfassendes Deuten von Form & Wirkung. Belege vorhanden.</td>
                        <td>Deuten von Form & Wirkung im Wesentlichen gelungen.</td>
                        <td>Ansatzweise richtiges Deuten.</td>
                        <td>Fehlerhaftes Deuten. Zitate fehlen/falsch.</td>
                        <td>Keine Analyseleistung.</td>
                    </tr>
                    <tr>
                        <td>Argumentation (AFB III)</td>
                        <td>Differenziert, widerspruchsfrei, überzeugend begründet. Vielschichtig.</td>
                        <td>Widerspruchsfrei, überzeugend begründet.</td>
                        <td>Weitgehend widerspruchsfrei, begründet.</td>
                        <td>Teilweise nachvollziehbar, Begründungen einfach.</td>
                        <td>Widersprüchlich, einseitig, kaum begründet.</td>
                        <td>Keine Argumentation.</td>
                    </tr>
                    <tr>
                        <td>Kreatives Schreiben</td>
                        <td>Eigenständige, sehr kreative und in jeder Hinsicht schlüssige Verarbeitung.</td>
                        <td>Weitgehend eigenständige, kreative und nachvollziehbare Verarbeitung.</td>
                        <td>Im Wesentlichen eigenständige, zum Teil kreative Verarbeitung.</td>
                        <td>Ansatzweise eigenständige Verarbeitung.</td>
                        <td>Kaum eigenständig, kaum kreativ, unlogisch.</td>
                        <td>Thema verfehlt.</td>
                    </tr>
                    <tr>
                        <td>Reflexion</td>
                        <td>Umfassende Reflexion und sehr überzeugende Begründung.</td>
                        <td>Schlüssige Reflexion und überzeugende Begründung.</td>
                        <td>Im Wesentlichen noch schlüssige Reflexion.</td>
                        <td>Meist angemessene Reflexion.</td>
                        <td>Kaum reflektiert, kaum Begründung (Wiederholung des Textes).</td>
                        <td>Keine Reflexion.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Benotung: Sprachmittlung (Mediation)",
        cat: "Grading",
        short: "Bewertungsraster: Sprachmittlung (Inhalt & Sprache).",
        content: `
            <h3>Bewertungskriterien: Kompetenzbereich Sprachmittlung</h3>
            
            <div class="table-wrap">
            <table class="grading-table">
              <thead>
                <tr>
                  <th>Kategorie</th>
                  <th>15-13 BE</th>
                  <th>12,5-10,5 BE</th>
                  <th>10-8,5 BE</th>
                  <th>8-7 BE</th>
                  <th>6,5-5,5 BE</th>
                  <th>5-4 BE</th>
                  <th>3,5-1,5 BE</th>
                  <th>1-0 BE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Informationsverarbeitung</td>
                  <td>alle relevanten Infos vollständig und äußerst präzise erfasst</td>
                  <td>alle relevanten Infos vollständig und präzise erfasst</td>
                  <td>alle relevanten Infos vollständig und präzise wiedergegeben</td>
                  <td>alle relevanten Infos im Wesentlichen erfasst</td>
                  <td>Infos mehrheitlich erfasst und überwiegend treffend</td>
                  <td>Infos nur teilweise erfasst und z.T. ungenau</td>
                  <td>Infos ansatzweise erfasst, lückenhaft oder falsch</td>
                  <td>Infos nicht erfasst</td>
                </tr>
                <tr>
                  <td>Adressatenbezug & Textsorte</td>
                  <td>äußerst treffend auf Empfänger zugeschnitten; Konventionen perfekt eingehalten</td>
                  <td>sehr treffend auf Empfänger zugeschnitten; Konventionen eingehalten</td>
                  <td>treffend auf Empfänger zugeschnitten; Konventionen eingehalten</td>
                  <td>Adressatenbezug erkennbar; Konventionen weitgehend eingehalten</td>
                  <td>Adressatenbezug im Wesentlichen erkennbar</td>
                  <td>Adressatenbezug kaum erkennbar; Textsorte im Ansatz getroffen</td>
                  <td>Adressatenbezug weitgehend fehlend; Textsorte verfehlt</td>
                  <td>Kein Bezug; falsche Textsorte</td>
                </tr>
                <tr>
                  <td>Interkulturelle Kompetenz</td>
                  <td>Kulturelle Begriffe präzise und überaus zielführend erläutert</td>
                  <td>Kulturelle Begriffe präzise und zielführend erläutert</td>
                  <td>Kulturelle Begriffe verständlich erläutert</td>
                  <td>Kulturelle Begriffe meist verständlich erläutert</td>
                  <td>Erläuterungen im Wesentlichen nachvollziehbar</td>
                  <td>Ansatzweise Erklärungen vorhanden</td>
                  <td>Erläuterungen missverständlich oder fehlend</td>
                  <td>Keine Erläuterungen</td>
                </tr>
                <tr>
                  <td>Strategien (Kompensation)</td>
                  <td>überaus eigenständiger Text; besonders geschickte Paraphrasen</td>
                  <td>sehr eigenständiger Text; geschickte Paraphrasen</td>
                  <td>eigenständiger Text; gelungene Nutzung von Strategien</td>
                  <td>weitgehend eigenständiger Text; Strategien genutzt</td>
                  <td>zumeist eigenständiger Text; im Wesentlichen gelungen</td>
                  <td>im Ansatz eigenständig; ansatzweise gelungen</td>
                  <td>stellenweise wörtlich übersetzt; kaum Strategien</td>
                  <td>nahezu wörtlich übersetzt (unverständlich)</td>
                </tr>
                <tr>
                  <td>Sprache (Wortschatz/Grammatik)</td>
                  <td>durchgängig korrekt, variabel, idiomatisch, differenziert</td>
                  <td>nahezu durchgängig korrekt, variabel, idiomatisch</td>
                  <td>weitgehend korrekt, variabel, treffende Wortwahl</td>
                  <td>größtenteils korrekt, einfache aber treffende Wortwahl</td>
                  <td>weitgehend korrekt, einfache Wortwahl, verständlich</td>
                  <td>teils fehlerhaft, wenig variabel, begrenzt</td>
                  <td>sehr einfach, häufig fehlerhaft, deutlich begrenzt</td>
                  <td>unverständlich, schwerwiegend fehlerhaft</td>
                </tr>
              </tbody>
            </table>
            </div>
        `
    }
];

// Sicherstellen, dass das globale Array existiert und Daten pushen
if(window.contentData) {
    window.contentData.push(...gradingContent);
    // Event feuern, falls data-grading nach app.js geladen wird (Sicherheitsnetz)
    window.dispatchEvent(new Event('gradingLoaded'));
}