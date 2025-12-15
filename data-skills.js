// data-skills.js
// Hier laden wir die Methoden, Skills und Operatoren in das globale Array.

const skillsContent = [
    /* --- AFB I --- */
    {
        title: "Summary",
        cat: "AFB I",
        short: "Wiedergabe der Hauptinhalte (1/3 Länge, neutral).",
        content: `
            <h3>How to write a Summary</h3>
            <p>Eine Summary fasst die wichtigsten Inhalte eines Textes kurz und sachlich zusammen. Sie ist die Basis für fast jede Klausur.</p>
            
            <div class="highlight-box">
                <strong>Die Goldenen Regeln:</strong><br>
                ✅ <strong>Simple Present:</strong> Immer im Präsens schreiben.<br>
                ✅ <strong>Own Words:</strong> Löse dich vom Originaltext.<br>
                ✅ <strong>Neutral:</strong> Keine eigene Meinung ("I think"), keine Analyse.<br>
                ❌ <strong>No Quotes:</strong> Keine Zitate, keine direkte Rede.<br>
                ❌ <strong>Short:</strong> Nur ca. 1/3 der Originallänge.
            </div>

            <h4>1. Der Einleitungssatz (Introductory Sentence)</h4>
            <p>Muss enthalten: <em>Title, Author, Text Type, Date of Publication, Source</em> und die <em>Main Idea</em> (Kernthema).</p>
            <p><em>Beispiel:</em><br>
            "The newspaper article 'Climate Change', written by Jane Doe and published in The Guardian on 12th May 2023, deals with the severe consequences of global warming."</p>

            <h4>2. Der Hauptteil (Main Part)</h4>
            <p>Fasse die Sinnabschnitte (paragraphs) logisch zusammen. Beantworte die W-Fragen (Who, What, Where, When, Why).</p>
            <p><strong>Nützliche Verben (Reporting Verbs):</strong><br>
            The author <em>claims, states, suggests, explains, describes, criticizes, points out, argues...</em></p>
            
            <p><strong>Verknüpfungen (Connectives):</strong><br>
            <em>Furthermore, In addition, However, On the one hand... on the other hand, Consequently.</em></p>
        `
    },
    {
        title: "Outline",
        cat: "AFB I",
        short: "Gezielte Informationsentnahme (Fokus-Aspekt).",
        content: `
            <h3>Writing an Outline</h3>
            <p>Im Gegensatz zur Summary (ganzer Text) fokussiert sich die Outline auf einen <strong>spezifischen Aspekt</strong> der Aufgabenstellung.</p>
            <p><em>Beispiel-Aufgabe: "Outline the author's arguments regarding the economic crisis."</em></p>

            <h4>Vorgehensweise</h4>
            <ol>
                <li><strong>Scan & Filter:</strong> Suche gezielt nach Schlüsselwörtern (Keywords) aus der Aufgabe. Alles andere (z.B. Infos über das Wetter oder die Kindheit des Autors) lässt du weg!</li>
                <li><strong>Structure:</strong>
                    <ul>
                        <li>Einleitungssatz (wie bei Summary).</li>
                        <li>Hauptteil: Gib die relevanten Infos logisch geordnet wieder.</li>
                    </ul>
                </li>
                <li><strong>Form:</strong> Nutze ganze Sätze (Running Text), es sei denn, der Operator lautet explizit "list" oder "bullet points".</li>
            </ol>
            <p><strong>Wichtig:</strong> Auch hier gilt <em>Simple Present</em> und <em>keine Zitate</em>.</p>
        `
    },

    /* --- AFB II --- */
    {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyse einer Figur (Grid-Method & P.E.E.).",
        content: `
            <h3>Characterization</h3>
            <p>Du analysierst das Wesen einer Figur anhand von dem, was sie tut, sagt und was andere über sie sagen.</p>

            <h4>1. Vorbereitung: Die Grid-Methode</h4>
            <p>Erstelle auf einem Schmierblatt eine Tabelle, bevor du schreibst:</p>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Kategorie</th><th>Evidence (Textstelle/Zitat)</th><th>Rückschluss (Adjektiv)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Appearance</strong></td><td>"wore a dirty shirt" (l. 5)</td><td>neglected, poor</td></tr>
                        <tr><td><strong>Behavior</strong></td><td>"screamed at the teacher" (l. 12)</td><td>aggressive, disrespectful</td></tr>
                        <tr><td><strong>Language</strong></td><td>"uses slang, short sentences"</td><td>uneducated, informal</td></tr>
                        <tr><td><strong>Relationships</strong></td><td>"nobody sat next to him" (l. 30)</td><td>isolated, lonely</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>2. Aufbau des Essays (The P.E.E. Chain)</h4>
            <ul>
                <li><strong>Introduction:</strong> Name, Alter, Rolle (Protagonist/Antagonist), Beziehung zu anderen.</li>
                <li><strong>Body Paragraphs:</strong> Nutze die P.E.E. Formel für jede Eigenschaft:
                    <br><strong>P</strong>oint: Behauptung ("He is aggressive.")
                    <br><strong>E</strong>vidence: Beleg/Zitat ("This becomes clear when he screams... (l. 12).")
                    <br><strong>E</strong>xplanation: Erklärung ("This shows his lack of respect.")
                </li>
                <li><strong>Conclusion:</strong> Fazit. Ist die Figur <em>static</em> (unverändert) oder <em>dynamic</em> (entwickelt sich)?</li>
            </ul>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Erzählperspektive und Wirkung (Point of View).",
        content: `
            <h3>Analyzing Narrative Perspective</h3>
            <p>Analysiere nicht nur, <em>wer</em> erzählt, sondern <em>welchen Effekt</em> das auf den Leser hat.</p>

            <div class="table-wrap">
            <table>
                <thead><tr><th>Typ</th><th>Erkennungsmerkmal</th><th>Wirkung (Effect)</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>First-Person Narrator</strong><br>(Ich-Erzähler)</td>
                        <td>"I", "me", "my"</td>
                        <td>Subjektiv. Erzeugt Nähe und Identifikation. Leser sieht alles durch seine "Brille". Kann unzuverlässig sein.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Omniscient</strong><br>(Auktorial/Allwissend)</td>
                        <td>"He/She". Kennt Gedanken <strong>aller</strong> Figuren.</td>
                        <td>Wirkt objektiv, vertrauenswürdig. Hat den Überblick ("God-like view"). Kann werten und kommentieren.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Limited</strong><br>(Personal)</td>
                        <td>"He/She". Kennt nur Gedanken <strong>einer</strong> Figur.</td>
                        <td>Fokus auf einer Person ("Reflector figure"). Leser fühlt mit ihr, weiß aber nicht mehr als sie. Erzeugt Spannung.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Objective</strong><br>(Neutral)</td>
                        <td>Wie eine Kamera. Nur Handlungen/Dialoge.</td>
                        <td>Neutral, distanziert. Keine Einblicke in Gefühle. Der Leser muss selbst urteilen.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Style, Tone & Register",
        cat: "AFB II",
        short: "Sprachanalyse: Wortwahl, Tonfall & Stilmittel.",
        content: `
            <h3>Language Analysis</h3>
            <p>Verbinde immer das Merkmal mit der Wirkung: <strong>Feature + Quote + Effect.</strong></p>

            <h4>1. Register (Sprachebene)</h4>
            <ul>
                <li><strong>Formal:</strong> Passiv, komplexe Sätze (Hypotaxe), gehobenes Vokabular. <em>(Wirkung: seriös, distanziert, objektiv)</em>.</li>
                <li><strong>Informal / Colloquial:</strong> Umgangssprache, Slang, Kurzformen ("can't"), direkte Anrede. <em>(Wirkung: authentisch, jugendlich, emotional)</em>.</li>
            </ul>

            <h4>2. Tone (Tonfall)</h4>
            <p>Adjektive zur Beschreibung: <em>optimistic, pessimistic, critical, sarcastic, ironic, aggressive, emotional, serious, humorous, warning, matter-of-fact (sachlich).</em></p>

            <h4>3. Stylistic Devices (Glossary)</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Metaphor</strong></td><td>Bildlicher Vergleich ("Time is money").</td><td>Erzeugt Kopfkino.</td></tr>
                <tr><td><strong>Simile</strong></td><td>Vergleich mit "like/as" ("Strong as a lion").</td><td>Veranschaulicht.</td></tr>
                <tr><td><strong>Anaphora</strong></td><td>Wiederholung am Satzanfang.</td><td>Betonung, Eindringlichkeit.</td></tr>
                <tr><td><strong>Personification</strong></td><td>Dinge werden vermenschlicht.</td><td>Lebendigkeit.</td></tr>
                <tr><td><strong>Rhetorical Question</strong></td><td>Scheinfrage.</td><td>Bezieht den Leser ein.</td></tr>
                <tr><td><strong>Enumeration</strong></td><td>Aufzählung.</td><td>Zeigt Fülle/Vielfalt.</td></tr>
            </table>
            </div>
        `
    },

    /* --- AFB III --- */
    {
        title: "Comment",
        cat: "AFB III",
        short: "Eigene Meinung argumentativ darlegen (Einseitig).",
        content: `
            <h3>Writing a Comment</h3>
            <p>Hier äußerst du <strong>deine eigene Meinung</strong> zu einer Streitfrage. Du darfst subjektiv sein und musst nicht beide Seiten gleich behandeln.</p>

            <h4>Structure</h4>
            <ol>
                <li><strong>Introduction:</strong>
                    <br>- <strong>Hook:</strong> Zitat, Frage oder aktuelles Ereignis als Einstieg.
                    <br>- <strong>Thesis:</strong> Deine klare Meinung ("In my opinion, ...").
                </li>
                <li><strong>Body (Argumentation):</strong>
                    <br>- Ein Argument pro Absatz!
                    <br>- Aufbau: <strong>Statement</strong> (Behauptung) &rarr; <strong>Explanation</strong> (Erklärung) &rarr; <strong>Example</strong> (Beispiel).
                    <br>- <em>Tipp:</em> Nutze "Rebuttal" (Entkräftung): Nenne ein Gegenargument ("Some say...") und zerstöre es sofort ("...but they are wrong because...").
                </li>
                <li><strong>Conclusion:</strong>
                    <br>- Zusammenfassung (andere Worte!).
                    <br>- Ausblick oder Appell ("We must act now").
                </li>
            </ol>
        `
    },
    {
        title: "Discussion",
        cat: "AFB III",
        short: "Erörterung von Pro und Contra (Zweiseitig).",
        content: `
            <h3>Writing a Discussion</h3>
            <p>Du musst <strong>beide Seiten</strong> (Pro & Contra) beleuchten, bevor du urteilst. Objektivität ist wichtig.</p>

            <h4>The Sandwich Method (Empfohlen)</h4>
            <ol>
                <li><strong>Intro:</strong> Thema vorstellen.</li>
                <li><strong>Contra-Seite:</strong> Alle Argumente der Seite, die du <em>nicht</em> unterstützt (vom Stärksten zum Schwächsten).</li>
                <li><strong>Turning Point:</strong> "However...", "On the other hand..."</li>
                <li><strong>Pro-Seite:</strong> Alle Argumente deiner Seite (vom Schwächsten zum Stärksten). &rarr; Das stärkste Argument bleibt im Gedächtnis.</li>
                <li><strong>Conclusion:</strong> Wäge ab und fälle ein begründetes Urteil.</li>
            </ol>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Zeitungsartikel: Headline, Lead, Body.",
        content: `
            <h3>Writing a Newspaper Article</h3>
            <p>Nutze das Prinzip der <strong>Inverted Pyramid</strong>: Das Wichtigste zuerst.</p>

            <h4>Elemente</h4>
            <ul>
                <li><strong>Headline:</strong> Kurz, knackig ("Climate Crisis Escalates").</li>
                <li><strong>Byline:</strong> "By [Dein Name]".</li>
                <li><strong>Place line:</strong> Ort des Geschehens (z.B. "BREMEN - ...").</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Lead Paragraph:</strong> Der erste Absatz muss die <strong>W-Fragen</strong> beantworten (Who, What, Where, When).</li>
                <li><strong>Body:</strong> Hintergründe (Why, How). Nutze Zitate von (erfundenen) Experten ("According to Dr. Smith..."). Nutze Zwischenüberschriften (Cross-headings).</li>
                <li><strong>Conclusion:</strong> Folgen und Ausblick.</li>
            </ol>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Rede schreiben: Audience & Rhetoric.",
        content: `
            <h3>Writing a Speech</h3>
            <p>Eine Rede muss emotional und hörerorientiert sein.</p>

            <h4>Key Elements</h4>
            <ul>
                <li><strong>Audience:</strong> Sprich sie direkt an ("Dear fellow students..."). Passe den Ton an (Lehrer = formal, Schüler = locker).</li>
                <li><strong>Rhetoric:</strong> Nutze "We"-Formen (Gemeinschaftsgefühl), Anaphern und rhetorische Fragen.</li>
            </ul>

            <h4>Structure</h4>
            <ul>
                <li><strong>Intro:</strong> Begrüßung. "Hook" um Aufmerksamkeit zu wecken (Witz, Schock, Frage). Nenne das Thema.</li>
                <li><strong>Body:</strong> Strukturiere klar ("First of all...", "Secondly..."). Argumentiere überzeugend.</li>
                <li><strong>Conclusion:</strong> Fasse zusammen. Beende mit einem starken <strong>Call to Action</strong> ("Let's change the world today!"). Danke dem Publikum.</li>
            </ul>
        `
    },
    {
        title: "Formal Letter / Email",
        cat: "AFB III",
        short: "Formelle Korrespondenz.",
        content: `
            <h3>Formal Letter & Email</h3>
            
            <h4>Layout</h4>
            <p><strong>Letter:</strong> Deine Adresse (rechts), Empfänger (links), Datum, Betreffzeile (Subject).<br>
            <strong>Email:</strong> Subject Line ist entscheidend!</p>

            <h4>Salutations (Anrede & Gruß)</h4>
            <div class="table-wrap">
            <table>
                <tr><td>Name unbekannt</td><td>Dear Sir or Madam</td><td>Yours faithfully</td></tr>
                <tr><td>Name bekannt</td><td>Dear Mr Smith</td><td>Yours sincerely</td></tr>
            </table>
            </div>

            <h4>Regeln</h4>
            <ul>
                <li>Keine Short forms (I'm -> I am).</li>
                <li>Höflich aber präzise ("I am writing to apply for...", "I would like to complain about...").</li>
            </ul>
        `
    },
    {
        title: "Blog Entry",
        cat: "AFB III",
        short: "Subjektiv, kreativ, interaktiv.",
        content: `
            <h3>Writing a Blog Entry</h3>
            <p>Ein Blog ist persönlich und interaktiv.</p>
            <ul>
                <li><strong>Titel:</strong> Kreativ und einladend.</li>
                <li><strong>Ton:</strong> Persönlich ("I"-Perspektive), oft etwas lockerer, aber themenabhängig.</li>
                <li><strong>Interaktion:</strong> Sprich den Leser an ("Have you ever...?", "What do you think?").</li>
                <li><strong>Struktur:</strong> Einleitung (Hook), Hauptteil (Gedanken/Erlebnisse), Schluss (Fazit + Aufforderung zum Kommentieren).</li>
            </ul>
        `
    },

    /* --- TOOLS --- */
    {
        title: "Mediation",
        cat: "Tools",
        short: "Sprachmittlung DE -> EN (Strategien).",
        content: `
            <h3>Mediation Strategies</h3>
            <p>Übertragung von Informationen für einen bestimmten Adressaten. <strong>Keine wörtliche Übersetzung!</strong></p>

            <h4>Vorgehen</h4>
            <ol>
                <li><strong>Analyse:</strong> Wer ist der Empfänger? Was braucht er? (Filtere irrelevante Infos raus!).</li>
                <li><strong>Textsorte:</strong> Schreibe den geforderten Text (z.B. eine Email an einen Freund über einen deutschen Artikel).</li>
            </ol>
            
            <h4>Compensation Strategies (Wenn dir Vokabeln fehlen)</h4>
            <ul>
                <li><strong>Paraphrase:</strong> Umschreibe das Wort.</li>
                <li><strong>Generalize:</strong> "Bratwurst & Schnitzel" -> "hearty German meat dishes".</li>
                <li><strong>Explain:</strong> "Abitur" -> "German school leaving exams".</li>
            </ul>
        `
    },
    {
        title: "Listening Skills",
        cat: "Tools",
        short: "Pre-, While- und Post-Listening.",
        content: `
            <h3>Listening Guide</h3>
            
            <h4>1. Pre-Listening</h4>
            <p>Lies die Fragen <strong>bevor</strong> das Audio startet! Markiere Keywords. Überlege: Welches Thema? Welche Wörter erwartest du?</p>

            <h4>2. While-Listening</h4>
            <p>Höre beim ersten Mal auf den Gesamtzusammenhang (Gist).<br>
            Achte auf <strong>Signposts</strong> (Signalwörter) wie "But", "However", "Most importantly" – hier folgen oft die Antworten.<br>
            Mache Notizen (Zahlen, Namen), keine ganzen Sätze.</p>

            <h4>3. Post-Listening</h4>
            <p>Ergänze deine Notizen. Prüfe bei Lückentexten die Grammatik (passt das Wort in den Satz?).</p>
        `
    },
    {
        title: "Speaking Skills",
        cat: "Tools",
        short: "Redemittel für Bildbeschreibung & Diskussion.",
        content: `
            <h3>Speaking Phrases</h3>

            <h4>Picture Description</h4>
            <p>"The picture shows/depicts...", "In the foreground/background...", "On the left/right...", "The atmosphere is...", "This symbolizes..."</p>

            <h4>Discussion</h4>
            <ul>
                <li><strong>Agree:</strong> "I totally agree.", "You have a point there."</li>
                <li><strong>Disagree:</strong> "I see your point, but...", "I'm afraid I disagree.", "I look at it differently."</li>
                <li><strong>Stalling (Zeit gewinnen):</strong> "That's an interesting question.", "Let me think about that for a second."</li>
            </ul>
        `
    },
    {
        title: "Checklist: Peer Review",
        cat: "Tools",
        short: "Text vor Abgabe prüfen.",
        content: `
            <h3>Writing Checklist</h3>
            <ul>
                <li>⬜ <strong>Structure:</strong> Einleitung, Hauptteil, Schluss? Absätze gemacht?</li>
                <li>⬜ <strong>Task:</strong> Operator beachtet? (z.B. keine Analyse in der Summary).</li>
                <li>⬜ <strong>Logic:</strong> Linking Words (Therefore, However) genutzt?</li>
                <li>⬜ <strong>Language:</strong> Simple Present (bei Analyse)? Keine Short Forms? False Friends gecheckt?</li>
            </ul>
        `
    },
    {
        title: "Operatoren (Vollständig)",
        cat: "Tools",
        short: "Alle Operatoren (AFB I, II, III).",
        content: `
            <h3>Official List of Operators</h3>
            <div class="table-wrap">
            <table>
                <thead><tr><th>Operator</th><th>AFB</th><th>Definition</th></tr></thead>
                <tbody>
                    <tr><td>Outline</td><td>I</td><td>Give the main features/structure, omitting details.</td></tr>
                    <tr><td>Point out / State</td><td>I</td><td>Identify sth. and present it clearly.</td></tr>
                    <tr><td>Present</td><td>I</td><td>(Re)structure sth. and write it down.</td></tr>
                    <tr><td>Summarize</td><td>I</td><td>Give a concise account of main points.</td></tr>
                    <tr><td>Describe / Depict</td><td>I/II</td><td>Give a detailed account of what sth. is like.</td></tr>
                    <tr><td>Analyse / Examine</td><td>II</td><td>Look in detail, explain meaning/structure.</td></tr>
                    <tr><td>Characterize</td><td>II</td><td>Detailed account of typical qualities of a person.</td></tr>
                    <tr><td>Compare / Contrast</td><td>II</td><td>Show similarities/differences.</td></tr>
                    <tr><td>Explain</td><td>II</td><td>Make clear by giving reasons/causes.</td></tr>
                    <tr><td>Illustrate / Show</td><td>II</td><td>Use examples to explain.</td></tr>
                    <tr><td>Interpret</td><td>II</td><td>Analyse content/form to establish meaning.</td></tr>
                    <tr><td>Relate</td><td>II</td><td>Establish a connection between things.</td></tr>
                    <tr><td>Assess / Evaluate</td><td>III</td><td>Express well-founded opinion after consideration.</td></tr>
                    <tr><td>Comment</td><td>III</td><td>State opinion clearly, giving evidence.</td></tr>
                    <tr><td>Discuss</td><td>III</td><td>Investigate by argument (Pro/Con).</td></tr>
                    <tr><td>Justify</td><td>III</td><td>Make decision understandable by solid reasons.</td></tr>
                    <tr><td>Reflect on</td><td>III</td><td>Express thoughts carefully and deeply.</td></tr>
                    <tr><td>Create / Imagine</td><td>III</td><td>Produce a text based on a task.</td></tr>
                </tbody>
            </table>
            </div>
        `
    }
];

// In das globale Array pushen
if(window.contentData) {
    window.contentData.push(...skillsContent);
}