// data-skills.js
// Version: Final (All English UI, Full Content)

const skillsContent = [
    /* ============================================================
       AFB I: COMPREHENSION
       ============================================================ */
    {
        title: "Summary",
        cat: "AFB I",
        short: "Summarize main points (1/3 length, neutral).",
        content: `
            <h3>How to write a Summary</h3>
            <p>A summary gives a concise account of the main points of a text. Aim for about <strong>1/3 of the original length</strong>.</p>
            
            <div class="highlight-box">
                <strong>Checklist: The "Must-Dos"</strong><br>
                ✅ <strong>Simple Present:</strong> Always use the present tense.<br>
                ✅ <strong>Own Words:</strong> Do not copy sentences.<br>
                ✅ <strong>Neutral:</strong> No personal opinion ("I think"), no analysis.<br>
                ✅ <strong>Connectives:</strong> Use linking words for flow.
            </div>

            <h4>1. Preparation (Before writing)</h4>
            <ul>
                <li>Read carefully and look up unknown words.</li>
                <li>Highlight <strong>keywords</strong> and main facts.</li>
                <li>Cross out unimportant details and examples.</li>
            </ul>

            <h4>2. Writing (The Structure)</h4>
            <p><strong>Introduction:</strong><br>
            Mention <em>Text type, Title, Author, Main Idea</em> in one sentence.<br>
            <em>"The article '...' by ..., published in ... on ..., deals with..."</em></p>
            
            <p><strong>Main Part:</strong><br>
            Summarize the text section by section. Answer the <strong>Wh-questions</strong> (Who? What? Where? When? Why?).</p>

            <div class="highlight-box" style="background: #fee2e2; border-color: #f87171; color: #991b1b;">
                <strong>NO-GOs:</strong><br>
                ❌ No quotes.<br>
                ❌ No direct speech.<br>
                ❌ No minor details or examples.<br>
                ❌ No short forms (Don't -> Do not).
            </div>
        `
    },
    {
        title: "Outline",
        cat: "AFB I",
        short: "Extract specific info (Focus on one aspect).",
        content: `
            <h3>Writing an Outline</h3>
            <p>Unlike a summary (whole text), an outline focuses ONLY on a <strong>specific aspect</strong> asked for in the task.</p>

            <h4>Structure</h4>
            
            <p><strong>1. Introduction</strong><br>
            Mention the basic info and the topic.<br>
            <em>Example: "The given article '...', written by ... and published in ... on ..., deals with [Topic]."</em></p>

            <p><strong>2. Main Part</strong><br>
            List the required information in a logical order.</p>
            <ul>
                <li><strong>Scan & Filter:</strong> Find keywords related to the task. Ignore everything else!</li>
                <li><strong>Order:</strong> Arrange points logically (not necessarily chronologically).</li>
                <li><strong>Form:</strong> Use full sentences (Simple Present), unless the operator says "bullet points".</li>
            </ul>

            <div class="highlight-box">
                <strong>Difference to Summary:</strong><br>
                In an outline, you must <strong>NOT use examples</strong> from the text. Just state the point/argument. And as always: <strong>No quotes!</strong>
            </div>
        `
    },

    /* ============================================================
       AFB II: ANALYSIS
       ============================================================ */
    {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyze a character (Grid Method & P.E.E.).",
        content: `
            <h3>How to write a Characterization</h3>
            <p>Characters are presented in two ways:</p>
            <ul>
                <li><strong>Direct (explicit):</strong> The narrator tells you exactly what the character is like.</li>
                <li><strong>Indirect (implicit):</strong> You have to draw conclusions from behavior, language, or appearance.</li>
            </ul>

            <h4>Step 1: Preparation (The Grid)</h4>
            <p>Make a grid to collect evidence before writing:</p>
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
                <li><strong>Introduction:</strong> Name, age, role, relation to others, and a <strong>general statement</strong> (thesis).</li>
                <li><strong>Body (P.E.E. Chain):</strong>
                    <br>1. <strong>Point:</strong> State the trait ("He is aggressive").
                    <br>2. <strong>Evidence:</strong> Prove it ("This becomes clear when he shouts... (l. 12)").
                    <br>3. <strong>Explanation:</strong> Interpret ("This shows his lack of respect...").
                </li>
                <li><strong>Conclusion:</strong> Summarize traits. Is the character <strong>static</strong> (unchanged) or <strong>dynamic</strong> (developed)?</li>
            </ul>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Analyze the narrator and the effect on the reader.",
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
                        <td>"I/Me". Part of the story.</td>
                        <td><strong>Subjective.</strong> Creates intimacy. We see the world through their eyes. Can be an <em>unreliable narrator</em>.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Omniscient</strong></td>
                        <td>"He/She". Knows thoughts of <strong>ALL</strong>.</td>
                        <td><strong>Objective/Trustworthy.</strong> "Olympian view". Can jump between places/times and judge events.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Limited</strong></td>
                        <td>"He/She". Knows thoughts of <strong>ONE</strong>.</td>
                        <td><strong>Identification.</strong> Reader feels close to this "reflector figure" but creates suspense (limited knowledge).</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Objective</strong></td>
                        <td>"Camera View". Only actions/dialogue.</td>
                        <td><strong>Neutral/Distant.</strong> No insight into feelings. Reader must judge actions alone.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Style, Tone & Register",
        cat: "AFB II",
        short: "Analyze language, tone, and stylistic devices.",
        content: `
            <h3>Language Analysis</h3>
            <p>Don't just list devices. Analyze <strong>Style, Tone, and Register</strong>.</p>

            <h4>1. Tone (The Atmosphere)</h4>
            <p><em>Question: What is the author's attitude?</em><br>
            Examples: <strong>optimistic, pessimistic, critical, ironic, sarcastic, aggressive, serious, humorous, alarming.</strong></p>

            <h4>2. Register (The Formality)</h4>
            <p><em>Question: Who is the text written for?</em></p>
            <ul>
                <li><strong>Formal:</strong> Passive voice, complex sentences. (Effect: Professional, objective, distant).</li>
                <li><strong>Informal:</strong> Slang, short forms, direct address. (Effect: Authentic, emotional, close).</li>
            </ul>

            <h4>3. Word Choice & Syntax</h4>
            <ul>
                <li><strong>Word Choice:</strong> Positive/negative connotations? Technical terms?</li>
                <li><strong>Syntax:</strong> 
                    <br>- <strong>Short sentences (Parataxis):</strong> Speed, urgency, simplicity.
                    <br>- <strong>Complex sentences (Hypotaxis):</strong> Complex, explaining argument.
                </li>
            </ul>

            <h4>4. Stylistic Devices</h4>
            <p><strong>Metaphor</strong> (Image), <strong>Simile</strong> (Comparison), <strong>Anaphora</strong> (Repetition), <strong>Rhetorical Question</strong> (Involvement), <strong>Personification</strong> (Human traits).</p>
        `
    },

    /* ============================================================
       AFB III: WRITING / TEXT PRODUCTION
       ============================================================ */
    {
        title: "Comment",
        cat: "AFB III",
        short: "Express your opinion (One-sided argument).",
        content: `
            <h3>Writing a Comment</h3>
            <p>State your <strong>personal opinion</strong> on a controversial issue. You do <strong>not</strong> need to be balanced.</p>

            <h4>Structure</h4>
            <ol>
                <li><strong>Introduction:</strong>
                    <ul>
                        <li><strong>Hook:</strong> Quote, question, or shocking fact.</li>
                        <li><strong>Topic:</strong> Summarize the issue.</li>
                        <li><strong>Thesis:</strong> State your opinion clearly ("In my opinion...").</li>
                    </ul>
                </li>
                <li><strong>Main Part:</strong>
                    <ul>
                        <li>One paragraph per argument (Statement &rarr; Explanation &rarr; Example).</li>
                        <li><strong>Tip:</strong> Use a <strong>Rebuttal</strong> (Destroy a counter-argument to sound convincing).</li>
                    </ul>
                </li>
                <li><strong>Conclusion:</strong>
                    <ul>
                        <li>Summarize main points.</li>
                        <li>Outlook or solution ("We must act now.").</li>
                    </ul>
                </li>
            </ol>
        `
    },
    {
        title: "Discussion",
        cat: "AFB III",
        short: "Weigh pros and cons (Dialectical essay).",
        content: `
            <h3>Writing a Discussion</h3>
            <p>Look at <strong>both sides</strong> (Pro & Con) objectively before reaching a conclusion.</p>

            <h4>The Sandwich Method</h4>
            <ol>
                <li><strong>Introduction:</strong> Present the issue.</li>
                <li><strong>Counter-Arguments:</strong> The side you do NOT support (Strongest to Weakest).</li>
                <li><strong>Turning Point:</strong> "However...", "On the other hand..."</li>
                <li><strong>Your Arguments:</strong> The side you support (Weakest to Strongest).</li>
                <li><strong>Conclusion:</strong> Your reasoned verdict.</li>
            </ol>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Write a report (Inverted Pyramid & W-Questions).",
        content: `
            <h3>Writing a Newspaper Article</h3>
            <p>Use the <strong>Inverted Pyramid</strong>: Most important info first.</p>

            <h4>Layout Elements</h4>
            <ul>
                <li><strong>Headline:</strong> Catchy ("Climate Crisis Escalates").</li>
                <li><strong>Subheading:</strong> One sentence summary.</li>
                <li><strong>Byline:</strong> "By [Name], [Date]".</li>
                <li><strong>Cross-headings:</strong> Sub-headlines within the text.</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Lead Paragraph:</strong> Answer the <strong>W-Questions</strong> (Who, What, Where, When).</li>
                <li><strong>Body:</strong> Explain <strong>Why</strong> and <strong>How</strong>. Use quotes from (invented) experts.</li>
                <li><strong>Conclusion:</strong> Consequences and outlook.</li>
            </ol>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Write a speech (Audience, Rhetoric & Phrases).",
        content: `
            <h3>Writing a Speech</h3>
            <p>Written for the ear. Must be emotional, clear, and audience-oriented.</p>

            <h4>Structure</h4>
            <ul>
                <li><strong>Intro:</strong> Welcome audience. Hook (joke, story). State topic.</li>
                <li><strong>Body:</strong> "Signposting" (First, secondly). Connect facts with emotions.</li>
                <li><strong>Conclusion:</strong> <strong>Call to Action</strong> ("Let's change this!"). Thank you.</li>
            </ul>

            <h4>Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Involving</strong></td><td>"Imagine...", "As you all know..."</td></tr>
                <tr><td><strong>Emphasizing</strong></td><td>"It is undeniable that...", "There is no doubt that..."</td></tr>
                <tr><td><strong>Call to Action</strong></td><td>"We have to ensure that...", "Let us make the effort to..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Blog Entry",
        cat: "AFB III",
        short: "Creative writing (Subjective, interactive, personal).",
        content: `
            <h3>Writing a Blog Entry</h3>
            <p>Creative, subjective, and interactive.</p>

            <h4>Characteristics</h4>
            <ul>
                <li><strong>Tone:</strong> Personal ("I"). Can be informal ("Hey guys") or semi-formal.</li>
                <li><strong>Headline:</strong> Catchy title.</li>
                <li><strong>Interaction:</strong> Address the reader ("What do you think?").</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Intro:</strong> Greeting & Hook (anecdote/question).</li>
                <li><strong>Body:</strong> Your thoughts/experiences.</li>
                <li><strong>Conclusion:</strong> Summary + <strong>Call to Action</strong> ("Leave a comment below!").</li>
            </ol>
        `
    },
    {
        title: "Formal Letter",
        cat: "AFB III",
        short: "Formal communication (Letter Layout).",
        content: `
            <h3>Writing a Formal Letter</h3>
            
            <h4>Layout</h4>
            <ul>
                <li><strong>Top Right:</strong> Sender (You) + Date.</li>
                <li><strong>Left:</strong> Recipient.</li>
                <li><strong>Subject Line:</strong> Short and bold (e.g., <strong>Subject: Application...</strong>).</li>
            </ul>

            <h4>Salutations</h4>
            <div class="table-wrap">
            <table>
                <tr><td>Name Unknown</td><td>Dear Sir or Madam,</td><td>Yours faithfully,</td></tr>
                <tr><td>Name Known</td><td>Dear Mr Smith,</td><td>Yours sincerely,</td></tr>
            </table>
            </div>
            
            <p><strong>Rules:</strong> Be polite ("Would it be possible..."). No short forms (I am, do not).</p>
        `
    },
    {
        title: "E-Mail",
        cat: "AFB III",
        short: "Formal vs. Informal E-Mails.",
        content: `
            <h3>Writing an E-Mail</h3>

            <h4>Structure</h4>
            <ul>
                <li><strong>Subject Line:</strong> CRITICAL! Must summarize content.</li>
                <li><strong>Body:</strong> Opening &rarr; Main Point &rarr; Closing.</li>
            </ul>

            <h4>Formal vs. Personal</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Feature</th><th>Formal (Teacher/Job)</th><th>Personal (Friend)</th></tr>
                <tr><td><strong>Greeting</strong></td><td>Dear Mr Miller,</td><td>Hi Tom, / Hey,</td></tr>
                <tr><td><strong>Style</strong></td><td>Polite, objective, no slang.</td><td>Relaxed, short forms allowed.</td></tr>
                <tr><td><strong>Closing</strong></td><td>Yours sincerely, / Best regards,</td><td>Best wishes, / Love,</td></tr>
            </table>
            </div>
        `
    },

    /* ============================================================
       TOOLS & METHODS
       ============================================================ */
    {
        title: "Mediation Skills",
        cat: "Tools",
        short: "Mediate texts DE -> EN (Strategies & Structure).",
        content: `
            <h3>Mediation: The Master Guide</h3>
            <p>Transmit information from German to English for a specific addressee. <strong>NO word-for-word translation!</strong></p>

            <h4>1. Analysis (The "Wh" Questions)</h4>
            <ul>
                <li><strong>WHO</strong> is the addressee? (Register: formal vs. informal).</li>
                <li><strong>WHAT</strong> text type? (Email, Blog?).</li>
                <li><strong>WHICH</strong> info is relevant? (Filter out details!).</li>
            </ul>

            <h4>2. Compensation Strategies</h4>
            <ul>
                <li><strong>Paraphrase:</strong> Explain the meaning.</li>
                <li><strong>Generalize:</strong> "Riesling & Silvaner" &rarr; "German wine".</li>
                <li><strong>Explain Culture:</strong> "Abitur" &rarr; "School leaving exam".</li>
            </ul>

            <h4>3. Structure</h4>
            <ul>
                <li><strong>Intro:</strong> Address recipient + Source ("I found an article by...").</li>
                <li><strong>Body:</strong> Present points logically using attribution ("The author states...").</li>
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

            <h4>Phase 1: Pre-Listening</h4>
            <ul>
                <li><strong>Read instructions!</strong> (Tick box or write words?).</li>
                <li><strong>Predict:</strong> Topic "London"? Expect: <em>tube, delay, crowd</em>.</li>
            </ul>

            <h4>Phase 2: While-Listening</h4>
            <ul>
                <li><strong>Gist:</strong> Focus on the main idea first.</li>
                <li><strong>Signposting:</strong> Watch out for "But..." (trap!) or "Most importantly..." (answer!).</li>
                <li><strong>Notes:</strong> Use symbols/abbreviations. No full sentences.</li>
            </ul>

            <h4>Phase 3: Post-Listening</h4>
            <ul>
                <li><strong>Check:</strong> Grammar (Gap fills), Logic, Spelling.</li>
            </ul>
        `
    },
    {
        title: "Speaking Skills",
        cat: "Tools",
        short: "Phrases for Picture Description & Discussion.",
        content: `
            <h3>Speaking Phrases</h3>

            <h4>1. Picture Description</h4>
            <p>"The photo depicts...", "In the foreground...", "The atmosphere seems...", "This symbolizes..."</p>

            <h4>2. Discussion Strategies</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Agreeing</strong></td><td>"You are absolutely right.", "I couldn't agree more."</td></tr>
                <tr><td><strong>Disagreeing</strong></td><td>"I see your point, but...", "I am not sure I agree."</td></tr>
                <tr><td><strong>Interrupting</strong></td><td>"May I add something?", "Sorry to interrupt, but..."</td></tr>
                <tr><td><strong>Stalling</strong></td><td>"That is an interesting question...", "Let me think..."</td></tr>
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
            
            <h4>1. Content & Task</h4>
            <ul>
                <li>⬜ <strong>Operator:</strong> Strictly followed? (e.g. NO opinion in outline).</li>
                <li>⬜ <strong>Focus:</strong> Irrelevant details left out?</li>
            </ul>

            <h4>2. Structure & Logic</h4>
            <ul>
                <li>⬜ <strong>Red Thread:</strong> Intro, Body, Conclusion?</li>
                <li>⬜ <strong>Paragraphs:</strong> One idea = One paragraph?</li>
                <li>⬜ <strong>Linking:</strong> Connectives used? (Therefore, However).</li>
            </ul>

            <h4>3. Language</h4>
            <ul>
                <li>⬜ <strong>Tenses:</strong> Simple Present for analysis?</li>
                <li>⬜ <strong>Register:</strong> Formal enough? (No "kids", "stuff").</li>
                <li>⬜ <strong>Vocabulary:</strong> Precise? (Avoid "good/bad").</li>
                <li>⬜ <strong>False Friends:</strong> Checked? (become vs get).</li>
            </ul>
        `
    },
    {
        title: "Operators (Official List)",
        cat: "Tools",
        short: "Official definitions of all operators (AFB I-III).",
        content: `
            <h3>Official List of Operators</h3>
            <p>Definitions based on the official guidelines.</p>
            
            <div class="table-wrap">
            <table class="op-table" style="font-size: 0.9em;">
                <thead><tr><th>Operator</th><th>AFB</th><th>Definition</th></tr></thead>
                <tbody>
                    <tr><td><strong>outline</strong></td><td>I</td><td>give the main features, structure or principles.</td></tr>
                    <tr><td><strong>point out / state</strong></td><td>I</td><td>identify sth. and present it clearly.</td></tr>
                    <tr><td><strong>summarize</strong></td><td>I</td><td>give a concise account of main points.</td></tr>
                    <tr><td><strong>describe</strong></td><td>I/II</td><td>give a detailed account.</td></tr>
                    <tr><td><strong>analyse</strong></td><td>II</td><td>explain meaning or structure in detail.</td></tr>
                    <tr><td><strong>characterize</strong></td><td>II</td><td>give a detailed account of a person's qualities.</td></tr>
                    <tr><td><strong>explain</strong></td><td>II</td><td>make clear by giving reasons.</td></tr>
                    <tr><td><strong>interpret</strong></td><td>II</td><td>analyse context to establish meaning.</td></tr>
                    <tr><td><strong>comment</strong></td><td>III</td><td>state your opinion clearly with evidence.</td></tr>
                    <tr><td><strong>discuss</strong></td><td>III</td><td>investigate by argument (Pro/Con).</td></tr>
                    <tr><td><strong>justify</strong></td><td>III</td><td>give solid reasons for a decision.</td></tr>
                    <tr><td><strong>create / imagine</strong></td><td>III</td><td>produce a text based on a task.</td></tr>
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