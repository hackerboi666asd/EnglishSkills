// data-skills.js
// Version: 2.0 (Tools in English, Expanded Operators & Skills)

const skillsContent = [
    /* ============================================================
       WRITING SKILLS (AFB I - III)
       (Anleitungen auf Deutsch, wie gewohnt)
       ============================================================ */
    {
        title: "Summary",
        cat: "AFB I",
        short: "Wiedergabe der Hauptinhalte (1/3 Länge, neutral).",
        content: `
            <h3>How to write a Summary</h3>
            <p>Eine Summary fasst die wichtigsten Inhalte eines Textes kurz und sachlich zusammen.</p>
            <div class="highlight-box">
                <strong>Golden Rules:</strong><br>
                ✅ <strong>Simple Present:</strong> Always use the present tense.<br>
                ✅ <strong>Own Words:</strong> Do not copy sentences.<br>
                ✅ <strong>Neutral:</strong> No personal opinion, no "I think".<br>
                ❌ <strong>No Quotes:</strong> No direct speech or line references.<br>
                ❌ <strong>Short:</strong> Only about 1/3 of the original length.
            </div>
            <h4>Structure</h4>
            <p><strong>1. Introductory Sentence:</strong><br>
            Mention: <em>Title, Author, Text Type, Date, Source</em> and the <em>Main Idea</em>.<br>
            <em>"The article '...' by ..., published in ... on ..., deals with..."</em></p>
            <p><strong>2. Main Part:</strong><br>
            Summarize the text paragraph by paragraph (or by logical sections). Use <strong>connectives</strong> (However, Furthermore, Consequently).</p>
        `
    },
    {
        title: "Outline",
        cat: "AFB I",
        short: "Gezielte Informationsentnahme (Fokus-Aspekt).",
        content: `
            <h3>Writing an Outline</h3>
            <p>Focus only on the <strong>specific aspect</strong> asked for in the task (e.g. "Outline the author's arguments regarding X"). Leave out everything else!</p>
            <h4>Steps</h4>
            <ol>
                <li><strong>Scan & Filter:</strong> Find keywords related to the task. Ignore unrelated details.</li>
                <li><strong>Structure:</strong> Start with an introductory sentence (like in a summary). Then list the findings logically.</li>
                <li><strong>Form:</strong> Use full sentences (running text) unless the operator says "list" or "bullet points".</li>
            </ol>
            <p><strong>Tip:</strong> Remain neutral. No analysis, no opinion.</p>
        `
    },
    {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyse einer Figur (Grid-Method & P.E.E.).",
        content: `
            <h3>Characterization</h3>
            <p>Analyse a character based on explicit statements and implicit behavior.</p>
            <h4>1. Preparation: The Grid Method</h4>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Category</th><th>Evidence (Text/Lines)</th><th>Conclusion (Trait)</th></tr></thead>
                    <tbody>
                        <tr><td>Appearance</td><td>"dirty shirt" (l. 5)</td><td>neglected, poor</td></tr>
                        <tr><td>Behavior</td><td>"screams at teacher" (l. 12)</td><td>aggressive, disrespectful</td></tr>
                        <tr><td>Relationships</td><td>"no friends" (l. 30)</td><td>isolated, lonely</td></tr>
                    </tbody>
                </table>
            </div>
            <h4>2. Writing (P.E.E. Chain)</h4>
            <ul>
                <li><strong>Point:</strong> State the trait ("He is aggressive").</li>
                <li><strong>Evidence:</strong> Prove it ("This is shown when he screams... (l. 12)").</li>
                <li><strong>Explanation:</strong> Explain it ("This behavior demonstrates his lack of respect...").</li>
            </ul>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Erzählperspektive und Wirkung (Point of View).",
        content: `
            <h3>Analyzing Narrative Perspective</h3>
            <p>Identify the narrator and explain the <strong>effect</strong> on the reader.</p>
            <div class="table-wrap">
            <table>
                <thead><tr><th>Type</th><th>Characteristics</th><th>Effect</th></tr></thead>
                <tbody>
                    <tr><td><strong>First-Person</strong> (I)</td><td>"I/Me". Part of the story.</td><td>Subjective. Creates intimacy/sympathy. Can be unreliable.</td></tr>
                    <tr><td><strong>Omniscient</strong> (All-knowing)</td><td>"He/She". Knows ALL thoughts.</td><td>Objective, trustworthy. Olympian view. Can comment on events.</td></tr>
                    <tr><td><strong>Limited</strong> (Personal)</td><td>"He/She". Knows ONE character's thoughts.</td><td>Reader identifies with this "reflector figure". Creates suspense (limited knowledge).</td></tr>
                    <tr><td><strong>Objective</strong> (Neutral)</td><td>Camera view. No thoughts.</td><td>Neutral, cold, distant. Reader must judge actions alone.</td></tr>
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
            <p>Always connect: <strong>Feature + Example + Effect</strong>.</p>
            <h4>1. Register (Formality)</h4>
            <ul>
                <li><strong>Formal:</strong> Passive voice, complex sentences, advanced vocab. (Effect: serious, objective).</li>
                <li><strong>Informal:</strong> Slang, short forms, direct address. (Effect: authentic, emotional, close).</li>
            </ul>
            <h4>2. Tone (Mood)</h4>
            <p>Examples: <em>optimistic, pessimistic, critical, ironic, sarcastic, aggressive, serious, humorous, warning.</em></p>
            <h4>3. Stylistic Devices</h4>
            <p><strong>Metaphor</strong> (Image), <strong>Simile</strong> (Comparison with like/as), <strong>Anaphora</strong> (Repetition), <strong>Rhetorical Question</strong> (Involvement), <strong>Personification</strong> (Making things human).</p>
        `
    },
    {
        title: "Comment",
        cat: "AFB III",
        short: "Eigene Meinung (Einseitig / Opinion).",
        content: `
            <h3>Writing a Comment</h3>
            <p>State your <strong>personal opinion</strong> clearly. You do not need to be balanced.</p>
            <h4>Structure</h4>
            <ol>
                <li><strong>Intro:</strong> Hook (Quote/Question), Topic, Thesis ("In my opinion...").</li>
                <li><strong>Body:</strong> One argument per paragraph. Use the structure: <em>Statement &rarr; Explanation &rarr; Example</em>. <br>Tip: Use a <strong>Rebuttal</strong> (Destroy a counter-argument).</li>
                <li><strong>Conclusion:</strong> Summary of stance, Outlook/Appeal.</li>
            </ol>
        `
    },
    {
        title: "Discussion",
        cat: "AFB III",
        short: "Erörterung Pro & Contra (Dialectical).",
        content: `
            <h3>Writing a Discussion</h3>
            <p>Weigh <strong>both sides</strong> (Pro & Con) objectively before concluding.</p>
            <h4>Sandwich Method</h4>
            <ol>
                <li><strong>Intro:</strong> Present the issue.</li>
                <li><strong>Counter-Arguments:</strong> The side you do NOT support (Strongest to Weakest).</li>
                <li><strong>Turning Point:</strong> "However...", "Looking at the other side..."</li>
                <li><strong>Your Side:</strong> The arguments you support (Weakest to Strongest).</li>
                <li><strong>Conclusion:</strong> Your reasoned verdict.</li>
            </ol>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Inverted Pyramid, Headlines, Style.",
        content: `
            <h3>Newspaper Article</h3>
            <p><strong>Rule:</strong> Most important info first (Inverted Pyramid).</p>
            <h4>Elements</h4>
            <ul>
                <li><strong>Headline:</strong> Catchy ("Climate Crisis Escalates").</li>
                <li><strong>Byline:</strong> "By [Name]".</li>
                <li><strong>Lead Paragraph:</strong> W-Questions (Who, What, Where, When).</li>
                <li><strong>Body:</strong> Details, Quotes, Background (Why/How).</li>
            </ul>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Rede schreiben: Audience & Rhetoric.",
        content: `
            <h3>Writing a Speech</h3>
            <h4>Key Elements</h4>
            <ul>
                <li><strong>Audience:</strong> Address them! ("Dear fellow students").</li>
                <li><strong>Rhetoric:</strong> Use "We" (unity), Anaphora (emphasis), Questions.</li>
                <li><strong>Structure:</strong> Hook &rarr; Arguments &rarr; Call to Action.</li>
            </ul>
        `
    },
    {
        title: "Formal Letter / Email",
        cat: "AFB III",
        short: "Formelle Korrespondenz.",
        content: `
            <h3>Formal Letter & Email</h3>
            <h4>Salutations</h4>
            <p>Unknown: <em>Dear Sir or Madam</em> &rarr; <em>Yours faithfully</em><br>
            Known: <em>Dear Mr X</em> &rarr; <em>Yours sincerely</em></p>
            <h4>Rules</h4>
            <p>No short forms (I'm). Be polite but precise. State your purpose in the first sentence.</p>
        `
    },
    {
        title: "Blog Entry",
        cat: "AFB III",
        short: "Kreativ, subjektiv, interaktiv.",
        content: `
            <h3>Blog Entry</h3>
            <ul>
                <li><strong>Catchy Title.</strong></li>
                <li><strong>Personal Tone:</strong> Use "I", share experiences.</li>
                <li><strong>Interaction:</strong> Ask the reader ("What do you think?").</li>
                <li><strong>Ending:</strong> Call to action ("Comment below!").</li>
            </ul>
        `
    },

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