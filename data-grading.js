// data-grading.js
// Version: FINAL with Disclaimer & Source

const gradingContent = [
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
          
          <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (01.10.2015)</a>
          </p>
      `
  },
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
                <td>detailliertes und umfassendes Deuten der sprachlichen Form und ihrer Wirkung; Belege (Zitate) korrekt und funktional</td>
                <td>umfassendes Deuten der sprachlichen Form und ihrer Wirkung; Belege vorhanden</td>
                <td>Deuten der sprachlichen Form und ihrer Wirkung im Wesentlichen gelungen; Belege meist vorhanden</td>
                <td>ansatzweise richtiges Deuten der sprachlichen Form und ihrer Wirkung; Belege lückenhaft</td>
                <td>fehlerhaftes Deuten; Zitate fehlen oder falsch</td>
                <td>keine Analyseleistung</td>
              </tr>
              <tr>
                <td>Argumentation (AFB III)</td>
                <td>differenziert, widerspruchsfrei, überzeugend begründet; vielschichtig und gedanklich stringent</td>
                <td>widerspruchsfrei, überzeugend begründet; gedanklich stringent</td>
                <td>weitgehend widerspruchsfrei, begründet; im Wesentlichen nachvollziehbar</td>
                <td>teilweise nachvollziehbar, Begründungen einfach; Brüche in der Argumentation</td>
                <td>widersprüchlich, einseitig, kaum begründet; Argumentation kaum nachvollziehbar</td>
                <td>fehlende Argumentation; keine Schlussfolgerungen / eigene Meinung</td>
              </tr>
              <tr>
                <td>Kreatives Schreiben</td>
                <td>eigenständige, sehr kreative und in jeder Hinsicht schlüssige Verarbeitung</td>
                <td>weitgehend eigenständige, kreative und nachvollziehbare Verarbeitung</td>
                <td>im Wesentlichen eigenständige, zum Teil kreative und meist nachvollziehbare Verarbeitung</td>
                <td>ansatzweise eigenständige, noch kreative und noch nachvollziehbare Verarbeitung</td>
                <td>kaum eigenständige, in sehr geringem Maße kreative und an wenigen Stellen nachvollziehbare Verarbeitung</td>
                <td>keine eigenständige, keine kreative und eine nicht nachvollziehbare Verarbeitung</td>
              </tr>
              <tr>
                <td>Reflexion</td>
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
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (01.10.2015)</a>
          </p>
      `
  },
  {
      title: "Bewertungskriterien: Sprachmittlung",
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
                <td>Informationsverarbeitung</td>
                <td>alle im Sinne der Aufgabenstellung relevanten Informationen vollständig erfasst und präzise wiedergegeben</td>
                <td>alle im Sinne der Aufgabenstellung relevanten Informationen nahezu vollständig erfasst und treffend wiedergegeben</td>
                <td>die im Sinne der Aufgabenstellung relevanten Informationen mehrheitlich erfasst und überwiegend treffend wiedergegeben</td>
                <td>einige im Sinne der Aufgabenstellung relevanten Informationen erfasst und wiedergegeben, z.T. ungenau bzw. unvollständig</td>
                <td>die im Sinne der Aufgabenstellung relevanten Informationen ansatzweise erfasst und lückenhaft, falsch oder sinnentstellend wiedergegeben</td>
                <td>die im Sinne der Aufgabenstellung relevanten Aussagen nicht erfasst bzw. falsch und überwiegend unverständlich wiedergegeben</td>
              </tr>
              <tr>
                <td>Adressatenbezug / Situationsangemessenheit</td>
                <td>Adressatenbezug äußerst treffend und durchgängig situationsangemessen</td>
                <td>Adressatenbezug treffend und überwiegend situationsangemessen</td>
                <td>Adressatenbezug und Situationsangemessenheit im Wesentlichen berücksichtigt</td>
                <td>Adressatenbezug und Situationsangemessenheit ansatzweise erkennbar</td>
                <td>weitgehend fehlender Adressatenbezug und weitgehend fehlende Situationsangemessenheit</td>
                <td>kein Adressatenbezug und nicht situationsangemessen</td>
              </tr>
              <tr>
                <td>Textsortenmerkmale</td>
                <td>besonders überzeugende Umsetzung der Textsortenmerkmale</td>
                <td>überwiegend überzeugende Umsetzung der Textsortenmerkmale</td>
                <td>teilweise gelungene Umsetzung der Textsortenmerkmale</td>
                <td>im Ansatz vorhandene Umsetzung der Textsortenmerkmale</td>
                <td>weitgehend fehlende Textsortenmerkmale</td>
                <td>keine Textsortenmerkmale</td>
              </tr>
              <tr>
                <td>kulturspezifische Erläuterungen</td>
                <td>relevante kulturspezifische Erläuterungen präzise formuliert, überaus zielführend</td>
                <td>relevante kulturspezifische Erläuterungen nachvollziehbar formuliert, zielführend</td>
                <td>relevante kulturspezifische Erläuterungen im Wesentlichen nachvollziehbar formuliert, teils zielführend</td>
                <td>relevante kulturspezifische Erläuterungen ansatzweise gegeben, teils missverständlich bzw. nicht zielführend</td>
                <td>kulturspezifische Erläuterungen missverständlich formuliert bzw. nicht zielführend</td>
                <td>keine bzw. irrelevante kulturspezifischen Erläuterungen</td>
              </tr>
              <tr>
                <td>Textorganisation und Lesbarkeit</td>
                <td>klare und logische Darstellung/ Gliederung; hervorragend lesbar</td>
                <td>weitgehend logische und zusammenhängende Darstellung / Gliederung; problemlos lesbar</td>
                <td>meist logische und zusammenhängende Darstellung / Gliederung; zumeist problemlos lesbar</td>
                <td>im Ansatz logische und zusammenhängende Darstellung / Gliederung; stellenweise schwer lesbar</td>
                <td>wenig zusammenhängende Darstellung / Gliederung; Lesbarkeit an zahlreichen Stellen stark beeinträchtigt</td>
                <td>zusammenhangslose Darstellung; Lesbarkeit sehr stark beeinträchtigt</td>
              </tr>
              <tr>
                <td>Korrektheit der Zielsprache</td>
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

          <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
              Basierend auf: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Handreichungen zu den Abiturrichtlinien (01.10.2015)</a>
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