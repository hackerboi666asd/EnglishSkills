// data-grading.js
// Version: FINAL FIXED (Row Headers are TH, Content is TD)

const gradingContent = [
  // 1. SCHREIBEN (SPRACHE)
  {
      title: "Bewertungskriterien: Schreiben (Sprache)",
      cat: "Grading",
      short: "Sprachliche Darstellungsleistung (15-0 BE).",
      content: `
          <h3>Kompetenzbereich Schreiben: Sprache</h3>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #ffc107; padding: 10px; margin-bottom: 15px; font-size: 0.9rem; color: #333;">
              <strong>Hinweis:</strong> Die Anwendung der folgenden Kriterien unterliegt der Entscheidung der jeweiligen Lehrkraft und kann je nach Aufgabenstellung variieren.
          </div>

          <p>Bewertung der Darstellungsleistung.</p>
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
                <th rowspan="3">Kommunikative Textgestaltung</th>
                <th>Textaufbau</th>
                <td>durchgängig zielgerichteter, strukturierter, kohärenter Text; geschickter Gebrauch von Verknüpfungsmitteln</td>
                <td>zielgerichteter, strukturierter, kohärenter Text; angemessener Gebrauch von Verknüpfungsmitteln</td>
                <td>noch zielgerichteter, nicht durchgängig strukturierter Text; weitgehend angemessener Gebrauch von Verknüpfungsmitteln</td>
                <td>ansatzweise strukturierter Text; meist verständlich; Gebrauch von Verknüpfungsmitteln einfach, aber verständlich</td>
                <td>weitgehend unstrukturierter und inkohärenter Text; Gebrauch von Verknüpfungsmitteln kaum vorhanden / fehlerhaft</td>
                <td>völlig unstrukturierter und inkohärenter Text; Gebrauch von Verknüpfungsmitteln nicht vorhanden</td>
              </tr>
              <tr>
                <th>Textsortenspezifik</th>
                <td>besonders überzeugende und treffende Umsetzung der Textsortenmerkmale</td>
                <td>überzeugende und treffende Umsetzung der Textsortenmerkmale</td>
                <td>teilweise gelungene Umsetzung der Textsortenmerkmale</td>
                <td>in Ansätzen gelungene Umsetzung der Textsortenmerkmale</td>
                <td>weitgehend fehlende Textsortenmerkmale</td>
                <td>Textsortenmerkmale nicht erkennbar</td>
              </tr>
              <tr>
                <th>Adressatenbezug</th>
                <td>durchgängig situationsangemessen und äußerst treffend</td>
                <td>situationsangemessen und treffend</td>
                <td>Situationsangemessenheit teilweise gegeben</td>
                <td>Situationsangemessenheit in Ansätzen gegeben</td>
                <td>weitgehend fehlende Situationsangemessenheit</td>
                <td>keine Situationsangemessenheit</td>
              </tr>
              <tr>
                <th rowspan="3">Ausdrucksvermögen / Sprachrichtigkeit</th>
                <th>Wortschatz</th>
                <td>besonders präzise, differenzierte und idiomatische Wortwahl; sehr abwechslungsreich</td>
                <td>präzise, differenzierte und idiomatische Wortwahl; abwechslungsreich</td>
                <td>treffende, verständliche Wortwahl; allgemeiner Wortschatz; teils Wiederholungen</td>
                <td>Wortwahl noch treffend; eingeschränkter Wortschatz; Wiederholungen</td>
                <td>deutlich eingeschränkte Wortwahl; stört Verständnis; häufig falsche Worte</td>
                <td>Wortwahl unpassend; Verständnis massiv gestört</td>
              </tr>
              <tr>
                <th>Satzbau</th>
                <td>durchgängig variabler und funktionaler Satzbau; komplexe Strukturen (Hypotaxe)</td>
                <td>variabler und funktionaler Satzbau; komplexe Strukturen</td>
                <td>teilweise variabler und funktionaler Satzbau; einfachere Strukturen überwiegen</td>
                <td>einfacher Satzbau; wenig Variation; aber verständlich</td>
                <td>sehr einfacher, teilweise sprachuntypischer Satzbau; Syntaxfehler</td>
                <td>unverständlicher Satzbau</td>
              </tr>
              <tr>
                <th>Korrektheit</th>
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
          
          <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (vom 01.10.2015)</a>
          </p>
      `
  },

  // 2. SCHREIBEN (INHALT)
  {
      title: "Bewertungskriterien: Schreiben (Inhalt)",
      cat: "Grading",
      short: "Inhaltliche Leistung (Vollständige Tabelle).",
      content: `
          <h3>Kompetenzbereich Schreiben: Inhalt</h3>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #ffc107; padding: 10px; margin-bottom: 15px; font-size: 0.9rem; color: #333;">
              <strong>Hinweis:</strong> Die Anwendung der folgenden Kriterien unterliegt der Entscheidung der jeweiligen Lehrkraft und kann je nach Aufgabenstellung variieren.
          </div>

          <p>Bewertung der inhaltlichen Leistung nach AFB und Aufgabenart.</p>
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
                <th>Aufgabenerfüllung</th>
                <td>Aufgabe vollständig, differenziert und operatorgerecht bearbeitet. Keine Redundanz.</td>
                <td>Aufgabe vollständig und operatorgerecht bearbeitet.</td>
                <td>Aufgabe weitgehend vollständig und im Wesentlichen operatorgerecht.</td>
                <td>Aufgabe in Ansätzen erfüllt, teilweise operatorgerecht.</td>
                <td>Aufgabe kaum erfüllt, kaum operatorgerecht, irrelevante Infos.</td>
                <td>Aufgabe nicht erfüllt.</td>
              </tr>
              <tr>
                <th>Verständlichkeit & Struktur</th>
                <td>Durchgehend sachgerecht, logisch und sehr klar strukturiert.</td>
                <td>Sachgerecht, logisch und klar strukturiert.</td>
                <td>Weitgehend sachgerecht und strukturiert.</td>
                <td>Ansatzweise sachgerecht und strukturiert.</td>
                <td>Wenig strukturiert, Sprünge in der Logik.</td>
                <td>Unstrukturiert und unlogisch.</td>
              </tr>
              <tr>
                <th>Analyse (AFB II)</th>
                <td>detailliertes und umfassendes Deuten der sprachlichen Form und ihrer Wirkung; Belege (Zitate) korrekt und funktional</td>
                <td>umfassendes Deuten der sprachlichen Form und ihrer Wirkung; Belege vorhanden</td>
                <td>Deuten der sprachlichen Form und ihrer Wirkung im Wesentlichen gelungen; Belege meist vorhanden</td>
                <td>ansatzweise richtiges Deuten der sprachlichen Form und ihrer Wirkung; Belege lückenhaft</td>
                <td>fehlerhaftes Deuten; Zitate fehlen oder falsch</td>
                <td>keine Analyseleistung</td>
              </tr>
              <tr>
                <th>Argumentation (AFB III)</th>
                <td>differenziert, widerspruchsfrei, überzeugend begründet; vielschichtig und gedanklich stringent</td>
                <td>widerspruchsfrei, überzeugend begründet; gedanklich stringent</td>
                <td>weitgehend widerspruchsfrei, begründet; im Wesentlichen nachvollziehbar</td>
                <td>teilweise nachvollziehbar, Begründungen einfach; Brüche in der Argumentation</td>
                <td>widersprüchlich, einseitig, kaum begründet; Argumentation kaum nachvollziehbar</td>
                <td>fehlende Argumentation; keine Schlussfolgerungen / eigene Meinung</td>
              </tr>
              <tr>
                <th>Kreatives Schreiben</th>
                <td>eigenständige, sehr kreative und in jeder Hinsicht schlüssige Verarbeitung</td>
                <td>weitgehend eigenständige, kreative und nachvollziehbare Verarbeitung</td>
                <td>im Wesentlichen eigenständige, zum Teil kreative und meist nachvollziehbare Verarbeitung</td>
                <td>ansatzweise eigenständige, noch kreative und noch nachvollziehbare Verarbeitung</td>
                <td>kaum eigenständige, in sehr geringem Maße kreative und an wenigen Stellen nachvollziehbare Verarbeitung</td>
                <td>keine eigenständige, keine kreative und eine nicht nachvollziehbare Verarbeitung</td>
              </tr>
              <tr>
                <th>Reflexion</th>
                <td>umfassende Reflexion und sehr überzeugende Begründung</td>
                <td>schlüssige Reflexion und überzeugende Begründung</td>
                <td>im Wesentlichen noch schlüssige Reflexion und in Teilen überzeugende Begründung</td>
                <td>meist angemessene Reflexion und ansatzweise reflektierte Begründung</td>
                <td>kaum reflektiert und kaum oder keine Begründung (oft Wiederholung des Textes)</td>
                <td>keine Reflexion, keine Begründung (Wiederholung des Textes)</td>
              </tr>
            </tbody>
          </table>
          </div>

          <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (vom 01.10.2015)</a>
          </p>
      `
  },

  // 3. SPRACHMITTLUNG (MEDIATION)
  {
      title: "Bewertungskriterien: Sprachmittlung (Mediation)",
      cat: "Grading",
      short: "Bewertung Mediation (Inhalt & Sprache).",
      content: `
          <h3>Kompetenzbereich Sprachmittlung</h3>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #ffc107; padding: 10px; margin-bottom: 15px; font-size: 0.9rem; color: #333;">
              <strong>Hinweis:</strong> Die Anwendung der folgenden Kriterien unterliegt der Entscheidung der jeweiligen Lehrkraft und kann je nach Aufgabenstellung variieren.
          </div>

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
                <th>Informationsverarbeitung</th>
                <td>alle im Sinne der Aufgabenstellung relevanten Informationen vollständig erfasst und präzise wiedergegeben</td>
                <td>alle im Sinne der Aufgabenstellung relevanten Informationen nahezu vollständig erfasst und treffend wiedergegeben</td>
                <td>die im Sinne der Aufgabenstellung relevanten Informationen mehrheitlich erfasst und überwiegend treffend wiedergegeben</td>
                <td>einige im Sinne der Aufgabenstellung relevanten Informationen erfasst und wiedergegeben, z.T. ungenau bzw. unvollständig</td>
                <td>die im Sinne der Aufgabenstellung relevanten Informationen ansatzweise erfasst und lückenhaft, falsch oder sinnentstellend wiedergegeben</td>
                <td>die im Sinne der Aufgabenstellung relevanten Aussagen nicht erfasst bzw. falsch und überwiegend unverständlich wiedergegeben</td>
              </tr>
              <tr>
                <th>Adressatenbezug / Situationsangemessenheit</th>
                <td>Adressatenbezug äußerst treffend und durchgängig situationsangemessen</td>
                <td>Adressatenbezug treffend und überwiegend situationsangemessen</td>
                <td>Adressatenbezug und Situationsangemessenheit im Wesentlichen berücksichtigt</td>
                <td>Adressatenbezug und Situationsangemessenheit ansatzweise erkennbar</td>
                <td>weitgehend fehlender Adressatenbezug und weitgehend fehlende Situationsangemessenheit</td>
                <td>kein Adressatenbezug und nicht situationsangemessen</td>
              </tr>
              <tr>
                <th>Textsortenmerkmale</th>
                <td>besonders überzeugende Umsetzung der Textsortenmerkmale</td>
                <td>überwiegend überzeugende Umsetzung der Textsortenmerkmale</td>
                <td>teilweise gelungene Umsetzung der Textsortenmerkmale</td>
                <td>im Ansatz vorhandene Umsetzung der Textsortenmerkmale</td>
                <td>weitgehend fehlende Textsortenmerkmale</td>
                <td>keine Textsortenmerkmale</td>
              </tr>
              <tr>
                <th>kulturspezifische Erläuterungen</th>
                <td>relevante kulturspezifische Erläuterungen präzise formuliert, überaus zielführend</td>
                <td>relevante kulturspezifische Erläuterungen nachvollziehbar formuliert, zielführend</td>
                <td>relevante kulturspezifische Erläuterungen im Wesentlichen nachvollziehbar formuliert, teils zielführend</td>
                <td>relevante kulturspezifische Erläuterungen ansatzweise gegeben, teils missverständlich bzw. nicht zielführend</td>
                <td>kulturspezifische Erläuterungen missverständlich formuliert bzw. nicht zielführend</td>
                <td>keine bzw. irrelevante kulturspezifischen Erläuterungen</td>
              </tr>
              <tr>
                <th>Textorganisation und Lesbarkeit</th>
                <td>klare und logische Darstellung/ Gliederung; hervorragend lesbar</td>
                <td>weitgehend logische und zusammenhängende Darstellung / Gliederung; problemlos lesbar</td>
                <td>meist logische und zusammenhängende Darstellung / Gliederung; zumeist problemlos lesbar</td>
                <td>im Ansatz logische und zusammenhängende Darstellung / Gliederung; stellenweise schwer lesbar</td>
                <td>wenig zusammenhängende Darstellung / Gliederung; Lesbarkeit an zahlreichen Stellen stark beeinträchtigt</td>
                <td>zusammenhangslose Darstellung; Lesbarkeit sehr stark beeinträchtigt</td>
              </tr>
              <tr>
                <th>Korrektheit der Zielsprache</th>
                <td>nahezu durchgängig korrekte, variable sprachliche Strukturen und Konnektoren, differenzierte, präzise und idiomatische Wortwahl</td>
                <td>weitgehend korrekte und abwechslungsreiche sprachliche Strukturen und Konnektoren, zumeist treffende Wortwahl</td>
                <td>größtenteils korrekte sprachliche Strukturen und Konnektoren, einfache und verständliche Wortwahl</td>
                <td>teils fehlerhafte, einfache, wenig variable sprachliche Strukturen und Konnektoren, begrenzte und fehlerhafte Wortwahl</td>
                <td>sehr einfache und häufig fehlerhafte sprachliche Strukturen und Konnektoren, deutlich begrenzte Wortwahl</td>
                <td>unverständliche, schwerwiegend fehlerhafte Zielsprache</td>
              </tr>
              <tr>
                <th>Strategien / Umgang mit der Textvorlage</th>
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

          <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (vom 01.10.2015)</a>
          </p>
      `
  },

  // 4. NOTENBERECHNUNG (NEU)
  {
    title: "Notenberechnung (Sek II)",
    cat: "Grading",
    short: "Wie die Endnote entsteht (Rohpunkte &rarr; BE &rarr; Note).",
    content: `
        <h3>Berechnung der Klausurnoten (Sek II)</h3>
        
        <div style="background-color: #f8f9fa; border-left: 4px solid #17a2b8; padding: 10px; margin-bottom: 15px; font-size: 0.9rem; color: #333;">
            <strong>Begriffserklärung:</strong><br>
            <strong>Rohpunkte</strong> = Deine "echten" Punkte (z.B. 24 richtige Kreuze).<br>
            <strong>BE</strong> = Bewertungseinheiten (Standardisierte Punkte).
        </div>

        <h4>Schritt 1: Von Rohpunkten zu BE</h4>
        <p>Im <strong>Hör- und Leseverstehen</strong> zählen deine richtigen Kreuze (Rohpunkte). Diese werden nach einer festen Tabelle in maximal 20 BE umgerechnet.</p>
        <div class="table-wrap">
        <table style="width: 100%; font-size: 0.9em; border-collapse: collapse; text-align: center;">
            <tr style="background: #e2e8f0;"><th>Anteil Rohpunkte</th><th>Erreichte BE</th></tr>
            <tr><td>100 %</td><td>20 BE</td></tr>
            <tr><td>95 %</td><td>19 BE</td></tr>
            <tr><td>90 %</td><td>18 BE</td></tr>
            <tr><td>...</td><td>...</td></tr>
            <tr><td>45 %</td><td>09 BE (glatt 4)</td></tr>
            <tr><td>< 20 %</td><td>00 BE</td></tr>
        </table>
        </div>
        <p style="font-size: 0.8rem;">(Diese Tabelle gilt nur für Hör-/Leseverstehen. Beim Schreiben gibt es die BE direkt.)</p>

        <h4>Schritt 2: Das Rechenbeispiel</h4>
        <p>Nun wird dein Ergebnis mit der <strong>Gewichtung</strong> verrechnet (hier im Beispiel: 40% Hörverstehen, 60% Schreiben).</p>
        
        <div class="table-wrap">
        <table class="grading-table" style="font-size: 0.9em;">
            <thead>
                <tr>
                    <th>Teilbereich</th>
                    <th>Erreichte BE</th>
                    <th>Prozent</th>
                    <th>Gewichtung</th>
                    <th>Rechnung</th>
                    <th>Wert</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Hörverstehen</strong></td>
                    <td>17 von 20</td>
                    <td>85%</td>
                    <td>40% (0,4)</td>
                    <td>85 * 0,4</td>
                    <td><strong>34,0</strong></td>
                </tr>
                <tr>
                    <td><strong>Schreiben</strong></td>
                    <td>20 von 25</td>
                    <td>80%</td>
                    <td>60% (0,6)</td>
                    <td>80 * 0,6</td>
                    <td><strong>48,0</strong></td>
                </tr>
                <tr style="background-color: #e2e8f0; font-weight: bold;">
                    <td>GESAMT</td>
                    <td></td>
                    <td></td>
                    <td>100%</td>
                    <td>Summe</td>
                    <td>82,0</td>
                </tr>
            </tbody>
        </table>
        </div>

        <h4>Schritt 3: Die Note (00-15 P)</h4>
        <p>Der Gesamtwert (hier 82,0) wird in Notenpunkte umgewandelt:<br>
        <strong>82,0 entspricht 12 Notenpunkten (2+).</strong></p>
        <p style="font-size: 0.85rem; color: #555;">(Orientierung: >95 = 15P | >85 = 13P | >80 = 12P | >70 = 10P | >55 = 07P | >45 = 05P)</p>

        <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
            Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichung Fremdsprachen (ARI)</a>
        </p>
    `
}
];

// In das globale Array pushen
if(window.contentData) {
  window.contentData.push(...gradingContent);
  // Event feuern
  window.dispatchEvent(new Event('gradingLoaded'));
}