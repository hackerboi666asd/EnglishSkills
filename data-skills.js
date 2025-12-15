// data-skills.js
// Version: 2.0 (Tools in English, Expanded Operators & Skills)

const skillsContent = [
    /* ============================================================
       AFB I: COMPREHENSION (Updated based on files)
       ============================================================ */
    {
        title: "Summary",
        cat: "AFB I",
        short: "Wiedergabe der Hauptinhalte (1/3 Länge, neutral).",
        content: `
            <h3>How to write a Summary</h3>
            <p>Eine Summary fasst die wichtigsten Inhalte eines Textes kurz und sachlich zusammen. Ziel ist es, den Text auf ca. <strong>1/3 der Originallänge</strong> zu kürzen.</p>
            
            <div class="highlight-box">
                <strong>Checklist: The "Must-Dos"</strong><br>
                ✅ <strong>Simple Present:</strong> Schreibe konsequent im Präsens.<br>
                ✅ <strong>Own Words:</strong> Löse dich vom Originaltext.<br>
                ✅ <strong>Neutral:</strong> Keine eigene Meinung ("I think"), keine Analyse.<br>
                ✅ <strong>Connectives:</strong> Nutze Verknüpfungswörter für den Lesefluss.
            </div>

            <h4>1. Preparation (Before writing)</h4>
            <ul>
                <li>Lies den Text sorgfältig und schlage unbekannte Wörter nach.</li>
                <li>Markiere Schlüsselwörter (Key words) und wichtige Fakten.</li>
                <li>Streiche alles Unwichtige (Details, Ausschmückungen).</li>
            </ul>

            <h4>2. Writing (The Structure)</h4>
            <p><strong>Introduction:</strong><br>
            Nenne <em>Text type, Title, Author, Main Idea</em> (Kernthema) in einem Satz.<br>
            <em>"The article '...' by ..., published in ... on ..., deals with..."</em></p>
            
            <p><strong>Main Part:</strong><br>
            Fasse den Inhalt Sinnabschnitt für Sinnabschnitt zusammen. Beantworte dabei die <strong>W-Fragen</strong> (Who? What? Where? When? Why?).</p>

            <div class="highlight-box" style="background: #fee2e2; border-color: #f87171; color: #991b1b;">
                <strong>NO-GOs (Vermeide dies unbedingt!):</strong><br>
                ❌ Keine Zitate (No quotes).<br>
                ❌ Keine direkte Rede (No direct speech).<br>
                ❌ Keine Details oder Beispiele.<br>
                ❌ Keine Kurzformen (Don't -> Do not / Can't -> Cannot).
            </div>
        `
    },
    {
        title: "Outline",
        cat: "AFB I",
        short: "Strukturierte Wiedergabe eines Fokus-Aspekts.",
        content: `
            <h3>Writing an Outline</h3>
            <p>Eine Outline ist eine strukturierte Skizze. Anders als bei der Summary (ganzer Text) fokussierst du dich hier nur auf einen <strong>bestimmten Aspekt</strong> der Aufgabenstellung.</p>

            <h4>Aufbau (Structure)</h4>
            
            <p><strong>1. Introduction</strong><br>
            Nenne die Basisdaten (Titel, Autor, Textsorte, Datum) und das allgemeine Thema.<br>
            <em>Example: "The given article 'Isn't it a little hot today?', written by Max Baker and published in 'The Guardian' on December 12th, deals with the continuous threat of global warming."</em></p>

            <p><strong>2. Main Part</strong><br>
            Hier listest du die geforderten Informationen logisch geordnet auf.</p>
            <ul>
                <li><strong>Scan & Filter:</strong> Suche gezielt nach Keywords aus der Aufgabe. Ignoriere den Rest!</li>
                <li><strong>Order:</strong> Bringe die Punkte in eine sinnvolle Reihenfolge (muss nicht chronologisch sein).</li>
                <li><strong>Form:</strong> Schreibe ganze Sätze (Simple Present), außer der Operator verlangt explizit "bullet points".</li>
            </ul>

            <div class="highlight-box">
                <strong>Unterschied zur Summary:</strong><br>
                In der Outline darfst du <strong>keine Beispiele</strong> (no examples) verwenden! Du nennst nur den Punkt/das Argument, aber erklärst es nicht durch Beispiele aus dem Text. Auch hier gilt: <strong>Keine Zitate!</strong>
            </div>
        `
    },
    // ============================================================
    // HIER ENDET AFB I und beginnt AFB II
    // ============================================================
    {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyse einer Figur (Grid-Method & P.E.E.).",
        content: `
            <h3>How to write a Characterization</h3>
            <p>Characters are presented in two ways:</p>
            <ul>
                <li><strong>Direct (explicit):</strong> The narrator tells you exactly what the character is like (e.g. "He was a cruel man").</li>
                <li><strong>Indirect (implicit):</strong> You have to draw conclusions from the character's behavior, language, or appearance.</li>
            </ul>

            <h4>Step 1: Preparation (The Grid)</h4>
            <p>Before writing, make a grid to collect evidence:</p>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Category</th><th>Evidence (Quote/Line)</th><th>Conclusion (Adjective)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Appearance</strong></td><td>"wore a dirty shirt" (l. 5)</td><td>neglected, poor</td></tr>
                        <tr><td><strong>Behavior</strong></td><td>"screams at teacher" (l. 12)</td><td>aggressive, disrespectful</td></tr>
                        <tr><td><strong>Language</strong></td><td>"uses slang, swears"</td><td>uneducated, rude</td></tr>
                        <tr><td><strong>Relationships</strong></td><td>"nobody sat next to him"</td><td>isolated, lonely</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>Step 2: Writing (Structure)</h4>
            <ul>
                <li><strong>Introduction:</strong> Name, age, role (protagonist/antagonist), relation to others, and a <strong>general statement</strong> (thesis).</li>
                <li><strong>Body (P.E.E. / Name it, Quote it, Explain it):</strong>
                    <br>1. <strong>Name it:</strong> State the trait ("He is aggressive").
                    <br>2. <strong>Quote it:</strong> Prove it ("This becomes clear when he shouts... (l. 12)").
                    <br>3. <strong>Explain it:</strong> Interpret ("This shows his lack of respect for authority.").
                </li>
                <li><strong>Conclusion:</strong> Summarize the main traits. Is the character <strong>static</strong> (unchanged) or <strong>dynamic</strong> (developed/changed)?</li>
            </ul>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Erzählperspektive und Wirkung (Point of View).",
        content: `
            <h3>Analyzing Narrative Perspective</h3>
            <div class="highlight-box" style="background: #fffbeb; border-color: #fcd34d; color: #92400e;">
                <strong>⚠️ Warning:</strong> Never confuse the <strong>Author</strong> (who wrote the book) with the <strong>Narrator</strong> (the voice telling the story)!
            </div>
            
            <p>Identify the type and explain the <strong>effect</strong> on the reader.</p>

            <div class="table-wrap">
            <table>
                <thead><tr><th>Type</th><th>Characteristics</th><th>Effect</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>First-Person</strong> (I-Narrator)</td>
                        <td>Uses "I/Me". Part of the story.</td>
                        <td><strong>Subjective.</strong> Creates intimacy and identification. We see the world through their eyes. Can be an <em>unreliable narrator</em>.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Omniscient</strong></td>
                        <td>Uses "He/She". Knows thoughts of <strong>ALL</strong> characters.</td>
                        <td><strong>Objective/Trustworthy.</strong> Has an "Olympian view". Can jump between places and times. Can comment on and judge events.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Limited</strong></td>
                        <td>Uses "He/She". Knows thoughts of <strong>ONE</strong> character only.</td>
                        <td><strong>Identification.</strong> The reader feels close to this "reflector figure" but doesn't know what others think. Creates suspense.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Objective</strong></td>
                        <td>"Camera View". Only actions/dialogue. NO thoughts.</td>
                        <td><strong>Neutral/Distant.</strong> The reader must judge the characters solely by their actions. No emotional guidance.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Style, Tone & Register",
        cat: "AFB II",
        short: "Sprachanalyse: Tone, Register, Syntax & Wortwahl.",
        content: `
            <h3>Language Analysis</h3>
            <p>Language analysis is not just listing devices. You must analyze <strong>Style, Tone, and Register</strong>.</p>

            <h4>1. Tone (The Atmosphere)</h4>
            <p><em>Guiding Question: What is the author's attitude towards the topic?</em><br>
            Examples: <strong>optimistic, pessimistic, critical, ironic, sarcastic, aggressive, serious, humorous, alarming, solemn.</strong></p>

            <h4>2. Register (The Formality)</h4>
            <p><em>Guiding Question: Who is the text written for?</em></p>
            <ul>
                <li><strong>Formal:</strong> Passive voice, complex sentences, no short forms. (Effect: Professional, objective, distant).</li>
                <li><strong>Informal:</strong> Slang, colloquialisms, short forms ("can't"), direct address. (Effect: Authentic, emotional, close to reader).</li>
            </ul>

            <h4>3. Word Choice & Syntax</h4>
            <p><em>Guiding Questions: Are the words simple or technical? Are sentences short or complex?</em></p>
            <ul>
                <li><strong>Word Choice:</strong> Positive/negative connotations? Technical terms? Neologisms?</li>
                <li><strong>Syntax:</strong> 
                    <br>- <strong>Short/Simple sentences (Parataxis):</strong> Create speed, urgency, or simplicity.
                    <br>- <strong>Long/Complex sentences (Hypotaxis):</strong> Create a complex, educated, or explaining argument.
                </li>
            </ul>

            <h4>4. Stylistic Devices (Quick List)</h4>
            <p><strong>Metaphor</strong> (Image), <strong>Simile</strong> (Comparison), <strong>Anaphora</strong> (Repetition), <strong>Rhetorical Question</strong> (Involvement), <strong>Personification</strong> (Human traits).</p>
        `
    },

    // ============================================================
    // HIER ENDET AFB II und beginnt AFB III
    // ============================================================
   // ============================================================
    // HIER FÄNGT DER NEUE TEIL AN (AFB III UPDATE)
    // ============================================================

    {
        title: "Comment",
        cat: "AFB III",
        short: "Eigene Meinung (Einseitig / Opinion Essay).",
        content: `
            <h3>Writing a Comment</h3>
            <p>A comment allows you to state your <strong>personal opinion</strong> on a controversial issue. You do <strong>not</strong> need to balance arguments – you want to convince the reader of <em>your</em> view.</p>

            <h4>Structure</h4>
            <ol>
                <li><strong>Introduction:</strong>
                    <ul>
                        <li><strong>Hook:</strong> Start with a rhetorical question, a quote, or a shocking fact.</li>
                        <li><strong>Topic:</strong> Briefly summarize the issue (or the text you are referring to).</li>
                        <li><strong>Thesis:</strong> State your opinion clearly ("In my opinion...", "I am convinced that...").</li>
                    </ul>
                </li>
                <li><strong>Main Part (Arguments):</strong>
                    <ul>
                        <li>Use one paragraph per argument.</li>
                        <li><strong>Structure:</strong> Statement &rarr; Explanation &rarr; Example/Evidence.</li>
                        <li><strong>Tip:</strong> Use a <strong>Rebuttal</strong>. Mention a counter-argument ("Some people say...") and refute it immediately ("...however, this is wrong because..."). This makes you sound very convincing.</li>
                    </ul>
                </li>
                <li><strong>Conclusion:</strong>
                    <ul>
                        <li>Summarize your main points (use different words).</li>
                        <li>Give an outlook or a solution ("We must act now."). Do not start new arguments here.</li>
                    </ul>
                </li>
            </ol>
        `
    },
    {
        title: "Discussion",
        cat: "AFB III",
        short: "Erörterung Pro & Contra (Dialectical Essay).",
        content: `
            <h3>Writing a Discussion</h3>
            <p>Unlike a comment, a discussion requires you to look at <strong>both sides</strong> (Pro & Con) objectively before reaching a conclusion.</p>

            <h4>The Sandwich Method (Recommended)</h4>
            <p>This structure ensures your opinion stays in the reader's mind.</p>
            <ol>
                <li><strong>Introduction:</strong> Present the controversial topic.</li>
                <li><strong>Counter-Arguments (The side you disagree with):</strong>
                    <br>Start with the strongest counter-argument and end with the weakest.
                </li>
                <li><strong>Turning Point:</strong> Use a connective like <em>"However...", "On the other hand...", "Looking at the facts..."</em></li>
                <li><strong>Your Arguments (The side you support):</strong>
                    <br>Start with your weakest argument and build up to your <strong>strongest argument</strong> at the end.
                </li>
                <li><strong>Conclusion:</strong> Weigh the arguments and give a reasoned verdict.</li>
            </ol>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Inverted Pyramid, Headlines, Byline.",
        content: `
            <h3>Writing a Newspaper Article</h3>
            <p>Articles follow the <strong>Inverted Pyramid</strong> principle: The most important information comes first. The text must be cuttable from the bottom without losing the main message.</p>

            <h4>Layout Elements</h4>
            <ul>
                <li><strong>Headline:</strong> Short, catchy, often no verbs (e.g., "Climate Crisis Escalates").</li>
                <li><strong>Subheading:</strong> One sentence explaining the headline.</li>
                <li><strong>Byline:</strong> "By [Your Name], [Date]".</li>
                <li><strong>Cross-headings:</strong> Short sub-headlines inside the text to structure long articles.</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Lead Paragraph (Introduction):</strong>
                    <br>Must answer the <strong>W-Questions</strong>: Who? What? Where? When? (The reader should understand the incident immediately).
                </li>
                <li><strong>Body:</strong>
                    <br>Explains the <strong>Why</strong> and <strong>How</strong>. Give background info, reasons, and details.
                    <br><em>Tip:</em> Use quotes from (invented) experts or eyewitnesses to make it authentic.
                </li>
                <li><strong>Conclusion:</strong>
                    <br>Consequences and outlook. You can end with a rhetorical question ("Can this happen again?") to make the reader think.
                </li>
            </ol>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Rede schreiben: Audience, Rhetoric, Phrases.",
        content: `
            <h3>Writing a Speech</h3>
            <p>A speech is written for the ear, not the eye. It must be emotional, clear, and audience-oriented.</p>

            <h4>1. Analysis (Before writing)</h4>
            <ul>
                <li><strong>Audience:</strong> Fellow students? Teachers? Politicians? &rarr; Adapt your language!</li>
                <li><strong>Purpose:</strong> To inform? To persuade? To entertain?</li>
            </ul>

            <h4>2. Structure</h4>
            <ul>
                <li><strong>Intro:</strong> Welcome the audience. Use a "Hook" (joke, story, shock). State your topic clearly.</li>
                <li><strong>Body:</strong> Use "Signposting" (First, secondly, finally). Connect facts with emotions.</li>
                <li><strong>Conclusion:</strong> Summarize. End with a strong <strong>Call to Action</strong> ("Let's change this today!"). Thank the audience.</li>
            </ul>

            <h4>3. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Involving Listeners</strong></td><td>"Have you ever thought about...?", "Imagine...", "As you all know..."</td></tr>
                <tr><td><strong>Emphasizing Facts</strong></td><td>"It is undeniable that...", "There is no doubt that...", "It is well known that..."</td></tr>
                <tr><td><strong>Quoting</strong></td><td>"As [Person] once said...", "To put it in the words of..."</td></tr>
                <tr><td><strong>Call to Action</strong></td><td>"We have to ensure that...", "It is about time that...", "Let us make the effort to..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Blog Entry",
        cat: "AFB III",
        short: "Kreativ, subjektiv, interaktiv.",
        content: `
            <h3>Writing a Blog Entry</h3>
            <p>A blog entry is creative, often subjective (personal opinion), and interactive.</p>

            <h4>Characteristics</h4>
            <ul>
                <li><strong>Tone:</strong> Personal ("I"-perspective). Can be informal ("Hey guys") or semi-formal, depending on the task.</li>
                <li><strong>Headlines:</strong> Use a catchy title.</li>
                <li><strong>Interaction:</strong> Address the reader directly.</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Introduction:</strong> Greeting ("Dear readers", "Hi everyone"). Hook the reader with a personal anecdote or a question ("Did you know that...?").</li>
                <li><strong>Main Part:</strong> Your thoughts, experiences, or arguments. Use paragraphs.</li>
                <li><strong>Conclusion:</strong> Summarize your thoughts.
                    <br><strong>Take Home Message:</strong> A final thought or question for the reader.
                    <br><strong>Call to Action:</strong> "Leave a comment below!", "What is your opinion? Let me know!"
                </li>
            </ol>
        `
    },
    {
        title: "Formal Letter",
        cat: "AFB III",
        short: "Formeller Brief (Layout & Salutations).",
        content: `
            <h3>Writing a Formal Letter</h3>
            
            <h4>Layout</h4>
            <ul>
                <li><strong>Top Right:</strong> Sender's address (You).</li>
                <li><strong>Left (below):</strong> Recipient's address.</li>
                <li><strong>Date:</strong> Right side or left (be consistent).</li>
                <li><strong>Subject Line:</strong> Short and bold (e.g., <strong>Subject: Application for...</strong>).</li>
            </ul>

            <h4>Salutations (The Rules)</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Recipient</th><th>Greeting</th><th>Closing</th></tr>
                <tr><td>Name Unknown</td><td>Dear Sir or Madam,</td><td>Yours faithfully,</td></tr>
                <tr><td>Name Known</td><td>Dear Mr Smith, / Dear Ms Jones,</td><td>Yours sincerely,</td></tr>
            </table>
            </div>
            <p><em>Note: In the US, use a colon after the greeting (Dear Sir:), in the UK a comma (Dear Sir,).</em></p>

            <h4>Style Rules</h4>
            <ul>
                <li><strong>Be polite:</strong> Use "Would it be possible to..." instead of "I want...".</li>
                <li><strong>No short forms:</strong> Write "I am", "do not", "cannot" (NOT I'm, don't, can't).</li>
                <li><strong>Standard Phrases:</strong> "I am writing to inquire about...", "I look forward to hearing from you."</li>
            </ul>
        `
    },
    {
        title: "E-Mail",
        cat: "AFB III",
        short: "Email (Formal vs. Informal).",
        content: `
            <h3>Writing an E-Mail</h3>
            <p>Emails are faster than letters but follow similar rules regarding formality.</p>

            <h4>Structure</h4>
            <ul>
                <li><strong>Header:</strong> Sender, Recipient.</li>
                <li><strong>Subject Line:</strong> CRITICAL! Must summarize the content (e.g., "Question regarding the essay").</li>
                <li><strong>Content:</strong> Opening &rarr; Body &rarr; Closing.</li>
            </ul>

            <h4>Formal vs. Personal</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Feature</th><th>Formal (Business/Teacher)</th><th>Personal (Friend)</th></tr>
                <tr><td><strong>Greeting</strong></td><td>Dear Mr Miller,</td><td>Hi Tom, / Hey,</td></tr>
                <tr><td><strong>Style</strong></td><td>Polite, objective, no slang.</td><td>Relaxed, colloquial, short forms allowed.</td></tr>
                <tr><td><strong>Closing</strong></td><td>Yours sincerely, / Best regards,</td><td>Best wishes, / Love, / Take care,</td></tr>
            </table>
            </div>

            <h4>Useful Closing Sentences</h4>
            <ul>
                <li>"Please let me know if you have any questions."</li>
                <li>"I look forward to hearing from you soon."</li>
                <li>"I hope this issue can be resolved."</li>
            </ul>
        `
    },
    // ============================================================
    // HIER ENDET AFB III
    // ============================================================

    /* ============================================================
       TOOLS & METHODS (English Only)
       ============================================================ */
    {
        title: "Mediation Skills",
        cat: "Tools",
        short: "Comprehensive guide to mediating texts (DE -> EN).",
        content: `
            <h3>Mediation: The Master Guide</h3>
            <p>Mediation means transmitting information from one language to another for a specific purpose. It is <strong>NOT</strong> a word-for-word translation.</p>

            <h4>1. The "Wh" Analysis (Preparation)</h4>
            <p>Before you write, analyze the task:</p>
            <ul>
                <li><strong>WHO</strong> is the addressee? (A friend? A professor?) &rarr; Determines your <em>Register</em> (formal vs. informal).</li>
                <li><strong>WHAT</strong> text type is required? (Email? Blog? Article?) &rarr; Determines your <em>Structure</em>.</li>
                <li><strong>WHY</strong> are you writing? (To inform? To warn? To persuade?) &rarr; Determines your <em>Tone</em>.</li>
                <li><strong>WHICH</strong> info is relevant? &rarr; Filter out unnecessary details!</li>
            </ul>

            <h4>2. Compensation Strategies (When you are stuck)</h4>
            <p>Don't panic if you don't know a German word in English. Use these strategies:</p>
            <ul>
                <li><strong>Paraphrase:</strong> Explain the meaning. (e.g., for <em>"Fachkräftemangel"</em> &rarr; "a lack of qualified workers").</li>
                <li><strong>Generalize (Superordinates):</strong> Use a general term. (e.g., for <em>"Riesling, Dornfelder and Silvaner"</em> &rarr; "different types of German wine").</li>
                <li><strong>Cultural Explanation:</strong> Explain concepts that don't exist in the UK/USA. (e.g., <em>"Abitur"</em> &rarr; "German higher education entrance qualification" or "school leaving exam").</li>
            </ul>

            <h4>3. Structure & Phrases</h4>
            <ul>
                <li><strong>Intro:</strong> Address the recipient + Mention the source. <br><em>"I found an interesting article by [Author] about [Topic] that I wanted to summarize for you."</em></li>
                <li><strong>Body:</strong> Present the relevant points logically (connectives!). Use attribution: <br><em>"The author points out...", "According to the text...", "The article suggests..."</em></li>
                <li><strong>Conclusion:</strong> Closing remark fitting the text type.</li>
            </ul>
        `
    },
    {
        title: "Listening Skills",
        cat: "Tools",
        short: "Strategies for Pre-, While-, and Post-Listening.",
        content: `
            <h3>Listening Comprehension Guide</h3>
            <p>Success in listening exams is 50% preparation and strategy.</p>

            <h4>Phase 1: Pre-Listening (The most important minute)</h4>
            <ul>
                <li><strong>Read the instructions!</strong> Do you need to tick a box, write a word, or complete a sentence?</li>
                <li><strong>Analyze the items:</strong> Read the questions/statements. Underline keywords.</li>
                <li><strong>Predict:</strong> Brainstorm! If the topic is "London Underground", expect words like <em>tube, delay, ticket, station, crowded</em>. This activates your brain.</li>
            </ul>

            <h4>Phase 2: While-Listening (Stay calm)</h4>
            <ul>
                <li><strong>First listening:</strong> Focus on the <strong>Gist</strong> (the main idea). Don't get stuck on a single unknown word, or you will miss the next three sentences.</li>
                <li><strong>Signposting:</strong> Listen for transition words. 
                    <br>&rarr; <em>"However...", "But..."</em> often signal that the previous point is being corrected (a trap!).
                    <br>&rarr; <em>"Most importantly..."</em> signals the main answer.</li>
                <li><strong>Note-taking:</strong> Use symbols (+, -, !, ?) and abbreviations. Do not try to write full sentences while listening.</li>
            </ul>

            <h4>Phase 3: Post-Listening (Quality Check)</h4>
            <ul>
                <li><strong>Gap Fills:</strong> Check the grammar. If the sentence is "The boy is ______", the answer cannot be "run". It must be "running".</li>
                <li><strong>Logic:</strong> Does your answer make sense in the context?</li>
                <li><strong>Spelling:</strong> Check for major errors that might change the meaning.</li>
            </ul>
        `
    },
    {
        title: "Speaking Skills",
        cat: "Tools",
        short: "Phrases for Picture Description and Discussion.",
        content: `
            <h3>Speaking: Monologue & Discussion</h3>

            <h4>Part 1: Picture Description (Structure)</h4>
            <ol>
                <li><strong>Introduction:</strong> "The photo/cartoon shows/depicts..."</li>
                <li><strong>Description (Where?):</strong> "In the foreground...", "In the background...", "On the left...", "In the centre..."</li>
                <li><strong>Action (What?):</strong> Use Present Progressive! "The people <strong>are standing</strong>...", "He <strong>is looking</strong>..."</li>
                <li><strong>Atmosphere/Message:</strong> "The atmosphere seems gloomy/cheerful...", "The artist wants to criticize..."</li>
            </ol>

            <h4>Part 2: Discussion Strategies</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Stating Opinion</strong></td><td>"Personally, I believe that...", "From my point of view...", "I am convinced that..."</td></tr>
                <tr><td><strong>Agreeing</strong></td><td>"I completely agree.", "You are absolutely right.", "That is exactly my point.", "I couldn't agree more."</td></tr>
                <tr><td><strong>Disagreeing (Polite)</strong></td><td>"I see your point, but...", "I am not sure I agree.", "I look at it differently.", "That might be true, but..."</td></tr>
                <tr><td><strong>Disagreeing (Strong)</strong></td><td>"I totally disagree.", "I don't think that is true at all."</td></tr>
                <tr><td><strong>Interrupting</strong></td><td>"Sorry to interrupt, but...", "Can I just say something here?", "May I add something?"</td></tr>
                <tr><td><strong>Clarifying</strong></td><td>"What exactly do you mean by...?", "Could you explain that again?", "So, are you saying that...?"</td></tr>
                <tr><td><strong>Playing for Time</strong></td><td>"That is an interesting question.", "Let me think about that for a second.", "Well, how should I put it..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Extended Checklist",
        cat: "Tools",
        short: "Comprehensive Peer Review & Self-Correction.",
        content: `
            <h3>The Ultimate Writing Checklist</h3>
            <p>Check your text against these categories before handing it in.</p>

            <h4>1. Content & Task</h4>
            <ul>
                <li>⬜ <strong>Operator:</strong> Did I strictly follow the operator? (e.g., NO analysis in a summary, NO opinion in an outline).</li>
                <li>⬜ <strong>Completeness:</strong> Did I use all relevant info from the text?</li>
                <li>⬜ <strong>Focus:</strong> Did I leave out irrelevant details?</li>
            </ul>

            <h4>2. Structure & Logic</h4>
            <ul>
                <li>⬜ <strong>Red Thread:</strong> Is there a clear Introduction, Body, and Conclusion?</li>
                <li>⬜ <strong>Paragraphs:</strong> One idea = One paragraph. Are they visually visible?</li>
                <li>⬜ <strong>Linking:</strong> Did I use connectives? (<em>Therefore, However, Furthermore, In contrast</em>).</li>
                <li>⬜ <strong>Topic Sentences:</strong> Does the first sentence of each paragraph state what it is about?</li>
            </ul>

            <h4>3. Language & Style</h4>
            <ul>
                <li>⬜ <strong>Tenses:</strong> Simple Present for Summary/Analysis? Past Tense for narrative events?</li>
                <li>⬜ <strong>Register:</strong> Is it formal enough? (No "I'm", "can't", "gonna", "kids", "stuff").</li>
                <li>⬜ <strong>Vocabulary:</strong> Did I use precise vocab? (Avoid "good", "bad", "nice", "things").</li>
                <li>⬜ <strong>False Friends:</strong> Check: <em>become vs. get</em>, <em>spend vs. donate</em>, <em>meaning vs. opinion</em>.</li>
                <li>⬜ <strong>Sentence Variety:</strong> Did I mix short and long sentences?</li>
            </ul>
        `
    },
    {
        title: "Operatoren (Official List)",
        cat: "Tools",
        short: "Complete definitions from the curriculum (PDF).",
        content: `
            <h3>Official List of Operators</h3>
            <p>Definitions strictly based on the official guidelines.</p>
            
            <div class="table-wrap">
            <table class="op-table" style="font-size: 0.9em;">
                <thead><tr><th>Operator</th><th>AFB</th><th>Definition</th></tr></thead>
                <tbody>
                    <tr><td><strong>outline</strong></td><td>I</td><td>give the main features, structure or general principles of a topic omitting minor details</td></tr>
                    <tr><td><strong>point out / state</strong></td><td>I</td><td>identify sth. and present it clearly</td></tr>
                    <tr><td><strong>present</strong></td><td>I</td><td>(re)structure sth. and write it down</td></tr>
                    <tr><td><strong>summarize / write a summary</strong></td><td>I</td><td>give a concise account of the main points (condense)</td></tr>
                    
                    <tr><td><strong>describe / depict</strong></td><td>I/II</td><td>give a detailed account of what sth. is like</td></tr>
                    
                    <tr><td><strong>analyse / examine</strong></td><td>II</td><td>look at sth in detail and explain its meaning or structure</td></tr>
                    <tr><td><strong>describe the character of / characterize</strong></td><td>II</td><td>give a detailed account of the typical or most noticeable qualities or features of a person, place or thing</td></tr>
                    <tr><td><strong>compare</strong></td><td>II</td><td>show similarities and differences</td></tr>
                    <tr><td><strong>contrast</strong></td><td>II</td><td>emphasize the differences between two or more things</td></tr>
                    <tr><td><strong>explain</strong></td><td>II</td><td>make sth. clear by giving reasons and causes</td></tr>
                    <tr><td><strong>illustrate / show</strong></td><td>II</td><td>use examples to explain or make clear</td></tr>
                    <tr><td><strong>interpret</strong></td><td>II</td><td>analyse content and form / context in order to establish meaning</td></tr>
                    <tr><td><strong>relate</strong></td><td>II</td><td>establish a connection between two or more things</td></tr>
                    
                    <tr><td><strong>assess / evaluate</strong></td><td>III</td><td>express a well-founded opinion about the nature or quality of sb./sth. after careful consideration of the most important aspects in question</td></tr>
                    <tr><td><strong>comment</strong></td><td>III</td><td>state clearly your opinions on the topic in question, giving evidence to support your view</td></tr>
                    <tr><td><strong>discuss</strong></td><td>III</td><td>investigate an issue by argument; give reasons for and against</td></tr>
                    <tr><td><strong>justify</strong></td><td>III</td><td>make understandable a decision/conclusion/view etc. by giving solid reasons</td></tr>
                    <tr><td><strong>reflect on</strong></td><td>III</td><td>express your thoughts on sth. carefully and deeply</td></tr>
                    
                    <tr><td><strong>create and write + text type</strong></td><td>III</td><td>produce sth. that has not existed before</td></tr>
                    <tr><td><strong>imagine and write + text type</strong></td><td>III</td><td>form a picture in your mind of what sth. might be like and give a detailed account of it</td></tr>
                </tbody>
            </table>
            </div>
        `
    }
];

// Load into global scope
if(window.contentData) {
    window.contentData.push(...skillsContent);
}