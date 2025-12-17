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
    short: "Berechnung gemäß Abiturrichtlinien (ARI).",
    content: `
        <h3>Berechnung der Klausurnoten</h3>
       <p class="intro-text"><em>Die Note setzt sich aus Bewertungseinheiten (BE) und einer vorher festgelegten Gewichtung der Kompetenzen zusammen.</em></p>

        <h4>1. Ermittlung der BE (Bewertungseinheiten)</h4>
        <ul>
            <li><strong>Schreiben (Writing):</strong>
                Hier gibt es maximal <strong>25 BE</strong>. Diese teilen sich auf in:
                <br>&rarr; 60% Sprache (max. 15 BE)
                <br>&rarr; 40% Inhalt (max. 10 BE)
            </li>
            <li><strong>Hör-/Leseverstehen:</strong>
               Hier werden "Items" (Rohpunkte) vergeben (1 Punkt pro Aufgabenteil). Diese werden per Tabelle in BE umgerechnet (z.B. entsprechen 100% der Rohpunkte 20 BE).
            </li>
            <li><strong>Sprachmittlung (Mediation):</strong>
                Maximal 10 BE.
            </li>
        </ul>

        <h4>2. Das Rechenbeispiel</h4>
        <p>In diesem Beispiel hat die Lehrkraft folgende Gewichtung festgelegt: <strong>Hörverstehen 35%, Leseverstehen 15%, Schreiben 50%</strong>.</p>
        
        <div class="table-wrap">
        <table class="grading-table" style="font-size: 0.9em;">
            <thead>
                <tr>
                    <th>Kompetenz</th>
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
                    <td>35% (0,35)</td>
                    <td>85 * 0,35</td>
                    <td><strong>29,75</strong></td>
                </tr>
                <tr>
                    <td><strong>Leseverstehen</strong></td>
                    <td>10 von 10</td>
                    <td>100%</td>
                    <td>15% (0,15)</td>
                    <td>100 * 0,15</td>
                   <td><strong>15,00</strong></td>
                </tr>
                <tr>
                    <td><strong>Schreiben</strong></td>
                    <td>20 von 25</td>
                    <td>80%</td>
                    <td>50% (0,50)</td>
                    <td>80 * 0,5</td>
                    <td><strong>40,00</strong></td>
                </tr>
                <tr style="background-color: #e2e8f0; font-weight: bold;">
                    <td>GESAMT</td>
                    <td></td>
                    <td></td>
                    <td>100%</td>
                    <td>Summe</td>
                    <td>84,75</td>
                </tr>
            </tbody>
        </table>
        </div>

        <div class="highlight-box" style="background: #fffbeb; border: 1px solid #fcd34d; color: #92400e; margin-top: 10px;">
            <strong>⚠️ Wichtig: Nicht runden!</strong><br>
            Es wird nicht auf- oder abgerundet. Die Ergebnisse gehen mit allen Kommastellen in die Berechnung ein.
        </div>

        <h4>3. Die Endnote</h4>
        <p>Der Gesamtwert (hier <strong>84,75</strong>) wird nun anhand der Tabelle aus den Abiturrichtlinien (ARI, Seite 21) in Notenpunkte umgewandelt.</p>
        
        <p><strong>Ergebnis: 12 Punkte (Note 2+)</strong></p>
        
        <p style="font-size: 0.8rem; margin-top: 10px;">
            <em>(Auszug Tabelle: Ab 95% = 15 Pkt, Ab 90% = 14 Pkt ... Ab 80% = 12 Pkt)</em>
        </p>

        <p style="font-size: 0.8rem; color: #666; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
            Quelle: <a href="https://www.bildung.bremen.de/sixcms/media.php/13/HandreichungFS.pdf" target="_blank" style="color: #666; text-decoration: underline;">Moderne Fremdsprachen - Handreichung zu den Abiturrichtlinien</a>
        </p>
    `
}
// 5. MÜNDLICHE PRÜFUNG (NEU)
{
  title: "Mündliche Abiturprüfung",
  cat: "Grading",
  short: "Ablauf & Bewertungskriterien (Beispiel 2025).",
  content: `
      <h3>Ablauf der mündlichen Abiturprüfung</h3>
      
      <div style="background-color: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 10px; margin-bottom: 15px; font-size: 0.9rem; color: #333;">
          <strong>Wichtig:</strong> Dieser Ablauf beschreibt den typischen Prüfungstag für Schülerinnen und Schüler.
      </div>

      <h4>1. Vor der Prüfung</h4>
      <ul>
          <li>Ihr geht zur richtigen Zeit zum richtigen Raum.</li>
          <li>Tretet in den Raum ein, auch wenn die Tür zu ist.</li>
          <li>Geht zur aufsichtführenden Lehrkraft, nennt euren Namen (damit ihr anwesend seid und die richtige Aufgabe später bekommt).</li>
          <li>Gebt euer Handy ab (am besten mit Namen draufgeklebt oder so).</li>
          <li>Ihr bekommt dann zu eurer euch zugewiesenen Anfangszeit die vorzubereitende Aufgabe zugeteilt. Entweder geht es um das 1. Abiturschwerpunktthema oder das 2. (Aber nicht beide).</li>
          <li>Dann habt ihr <strong>20 min</strong> Zeit, die Aufgabe (und das dazugehörige Material) durchzulesen, zu bearbeiten und Notizen dazu zu machen.</li>
          <li><strong>Ziel:</strong> Einen ca. 10–12 min „Vortrag“ über eure Lösungsideen der Aufgaben halten zu können.</li>
      </ul>

      <h4>2. Während der Prüfung</h4>
      <ul>
          <li>Ihr werdet zum Ende der Vorbereitungszeit abgeholt. Danach setzen wir uns alle in den Prüfungsraum.</li>
          <li><strong>Gesundheitsfrage:</strong> Ihr werdet befragt, ob ihr gesundheitlich in der Lage seid, die Prüfung zu absolvieren – antwortet wahrheitsgemäß. Wenn ihr „nein“ sagt, wird die Prüfung abgebrochen (Arzt/Attest nötig), ansonsten gilt die Prüfung bei schlechter Leistung als nicht bestanden.</li>
          <li><strong>Teil 1 (Vortrag):</strong> Fangt mit eurem „Vortrag“ (der Beantwortung der Aufgaben) an. Dieser sollte ca. 10–12 min dauern. Danach werden euch noch ca. 5–7 min Rückfragen dazu gestellt.</li>
          <li><strong>Teil 2 (Prüfungsgespräch):</strong> Überleitung auf das 2. Abiturschwerpunktthema. Hierzu habt ihr <strong>keine Vorbereitungszeit</strong>. Ich stelle eine Frage / gebe einen Impuls, ihr dürft kurz überlegen (es ist dann still), dann antwortet ihr. Die Prüfung dauert somit insgesamt 20–25 min.</li>
      </ul>

      <h4>3. Nach der Prüfung</h4>
      <ul>
          <li>Ihr geht während der Noten-Besprechung wieder in den Vorbereitungsraum (Handyverbot!).</li>
          <li><strong>Beratung:</strong> Der Fachausschuss legt die Note fest. (Bei Nichteinigung wird gemittelt).</li>
          <li><strong>Verkündung:</strong> Ihr werdet wieder reingeholt. Die Note und die wesentlichen Gründe werden kurz mitgeteilt. <strong>Es gibt keine Möglichkeit für Nachfragen.</strong></li>
          <li>Ihr wartet wieder im Vorbereitungsraum, bis der letzte Prüfling mit der gleichen Aufgabe fertig ist. Erst dann bekommt ihr die Handys zurück und dürft gehen.</li>
      </ul>

      <hr style="margin: 30px 0; border-top: 1px solid #ccc;">

      <h3>Bewertungsraster (Beispiel 2025)</h3>
      <p class="intro-text"><em>Hierbei handelt es sich um einen beispielhaften und generischen Erwartungshorizont aus dem Jahr 2025.</em></p>

      <div class="table-wrap">
      <table class="grading-table" style="font-size: 0.85em;">
          <thead>
              <tr>
                  <th style="width: 15%;">Note</th>
                  <th>Fachliche Leistungen<br><span style="font-weight:normal; font-size:0.8em;">(Kenntnisse, Anwendung, Urteil)</span></th>
                  <th>Kommunikative Leistung<br><span style="font-weight:normal; font-size:0.8em;">(Darstellung, Sprache)</span></th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td><strong>1<br>Sehr gut</strong></td>
                  <td>In allen Teilen hervorragend gelöst, sehr fundiert und umfassend. Differenzierte Detailkenntnisse, umfassende Methodenkenntnis, eigenständige Ansätze, Originalität, umfassende Problemsicht.</td>
                  <td>Sehr klar gegliedert, sehr flüssiger Vortrag, treffender Gebrauch der Fachsprache, überzeugende Argumentation, besondere Dialogfähigkeit.</td>
              </tr>
              <tr>
                  <td><strong>2<br>Gut</strong></td>
                  <td>In allen Teilen gelöst, fundiert, sicher und umfangreich. Kaum Ungenauigkeiten, problemgemäße Methodenkenntnis, passende Ansätze, differenzierte Problemsicht.</td>
                  <td>Klar gegliedert, flüssiger Vortrag, nahezu fehlerfreier Gebrauch der Fachsprache, schlüssige Argumentation, gute Gesprächsfähigkeit.</td>
              </tr>
              <tr>
                  <td><strong>3<br>Befriedigend</strong></td>
                  <td>Weitgehend gelöst (teils mit leichten Hilfen), im Allgemeinen sicher. Kleinere Ungenauigkeiten, solide Methodenkenntnis, angemessene Problemsicht.</td>
                  <td>Insgesamt zusammenhängender Vortrag, wenig Redundanz, meist schlüssige Argumentation, im Allgemeinen richtiger Sprachgebrauch.</td>
              </tr>
              <tr>
                  <td><strong>4<br>Ausreichend</strong></td>
                  <td>In vielen Teilen mit Einschränkungen oder deutlichen Hilfen gelöst. Grundkenntnisse vorhanden, einige Sachfehler, teilweise oberflächlich.</td>
                  <td>Nicht konsequent gegliedert, zögerlich, deutliche Redundanz, einige Mängel in der Fachsprache und im Sprachgebrauch.</td>
              </tr>
              <tr>
                  <td><strong>5<br>Mangelhaft</strong></td>
                  <td>Nur zum geringen Teil gelöst, kaum Eingehen auf Hilfen. Wenige Grundkenntnisse, weitgehend oberflächlich, schwerwiegende Mängel, meist falsche Lösungen.</td>
                  <td>Kaum differenziert und gegliedert, falsche Begriffe, erhebliche Mängel in der Fachsprache, deutliche Mängel im Sprachgebrauch.</td>
              </tr>
              <tr>
                  <td><strong>6<br>Ungenügend</strong></td>
                  <td>Keine Erfüllung der geforderten Leistung. Keine Grundkenntnisse, große Verständnismängel. Kein brauchbarer Arbeitsansatz.</td>
                  <td>Ungegliedert, unbeholfen, stockend. Grobe Verstöße gegen den angemessenen Sprachgebrauch. Kein Eingehen auf Hilfen.</td>
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
  // Event feuern
  window.dispatchEvent(new Event('gradingLoaded'));
}