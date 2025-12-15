// data-skills.js
// Version: Final (All English UI, Full Content)

const skillsContent = [
    /* ============================================================
       AFB I: COMPREHENSION (The Basics)
       ============================================================ */
       {
        title: "Summarize / Write a summary",
        cat: "AFB I",
        short: "Concise account of main points (1/3 length).",
        content: `
            <h3>Summarize / Write a Summary</h3>
            <p class="intro-text"><em>A summary is the art of saying much with few words. Your goal is to strip the text down to its bare bones without losing the core message. Think: <strong>Maximum information in minimum words.</strong></em></p>
            
            <h4>The Golden Rule</h4>
            <p>Target length: approx. <strong>1/3 of the original text</strong>.</p>

            <h4>Level Up: Better Reporting Verbs</h4>
            <p>Avoid writing "The author says" five times. Use precise verbs:</p>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Neutral</strong></td><td>states, points out, describes, outlines, mentions, explains</td></tr>
                <tr><td><strong>Opinionated</strong></td><td>claims, argues, criticizes, demands, suggests, warns</td></tr>
            </table>
            </div>

            <h4>Structure</h4>
            <p><strong>1. Introduction:</strong><br>
            <em>Template: "The article '[Title]' by [Author], published in [Source] on [Date], deals with [Topic]."</em></p>
            
            <p><strong>2. Main Part:</strong><br>
            Summarize paragraph by paragraph. Use <strong>connectives</strong> (However, Furthermore, Consequently) to create a smooth flow.</p>

            <div class="highlight-box" style="background: #fff1f2; border: 1px solid #fda4af; color: #9f1239;">
                <strong>⚠️ Summary NO-GOs (Checklist):</strong><br>
                ❌ NO quotes (Use indirect speech).<br>
                ❌ NO direct speech.<br>
                ❌ NO personal opinion ("I think...").<br>
                ❌ NO analysis ("The author correctly states...").<br>
                ❌ NO minor details or specific examples.
            </div>
        `
    },
    {
        title: "Outline",
        cat: "AFB I",
        short: "Structure specific info (Focus on one aspect).",
        content: `
            <h3>Outline</h3>
            <p class="intro-text"><em>Imagine you are a search engine. An outline doesn't want the whole story; it only wants the specific results for a specific search query. Ignore the rest.</em></p>

            <h4>The "Filter" Method</h4>
            <ol>
                <li><strong>Scan:</strong> Search the text <em>only</em> for keywords from the task (e.g., "Outline the arguments on <em>pollution</em>").</li>
                <li><strong>Filter:</strong> Ignore everything else (e.g., ignore the part about the author's childhood).</li>
                <li><strong>Write:</strong> List the findings in full sentences (Simple Present).</li>
            </ol>

            <h4>Structure</h4>
            <p><strong>1. Introduction:</strong><br>
            State the text info and the <strong>specific topic</strong>.<br>
            <em>Template: "The article '[Title]' by [Author] deals with [General Topic]. In the following, the author's arguments regarding [Specific Task Topic] will be outlined."</em></p>

            <p><strong>2. Main Part:</strong><br>
            Group the findings logically. Use structure words: <em>"First of all...", "Furthermore...", "Finally..."</em>.</p>

            <div class="highlight-box">
                <strong>Crucial Difference to Summary:</strong><br>
                In an outline, you state the point/argument, but you <strong>omit the examples</strong> used in the text. Keep it dry and factual. And: <strong>No quotes!</strong>
            </div>
        `
    },
    {
        title: "Point out / State",
        cat: "AFB I",
        short: "Identify and present clearly.",
        content: `
            <h3>Point out / State</h3>
            <p class="intro-text"><em>Sometimes, less is more. These operators don't ask for an essay; they ask for precision. Point at the information and name it.</em></p>

            <h4>The "Fingerpointing" Technique</h4>
            <ul>
                <li><strong>Locate</strong> the specific information in the text.</li>
                <li><strong>Translate</strong> it into your own words.</li>
                <li><strong>Write it down</strong> clearly and briefly.</li>
                <li><strong>Stop!</strong> Do not explain "why" or analyze the background (unless the task asks for it).</li>
            </ul>
        `
    },
    {
        title: "Present",
        cat: "AFB I",
        short: "(Re)structure and write down.",
        content: `
            <h3>Present</h3>
            <p class="intro-text"><em>This is about reorganization. You are not just copying information; you are collecting the puzzle pieces from different parts of the text and putting them together in a new way.</em></p>

            <h4>How to "Synthesize"</h4>
            <p>This operator often requires you to <strong>reorganize</strong> information. You might have to collect details from lines 10, 45, and 80 to present a complete picture.</p>
            <ul>
                <li><strong>Step 1:</strong> Collect all scattered info regarding the topic.</li>
                <li><strong>Step 2:</strong> Sort it logically (e.g., chronologically or by importance), not just by line number.</li>
                <li><strong>Step 3:</strong> Write a cohesive text (use connectives).</li>
            </ul>
        `
    },
/* ============================================================
       AFB II: ANALYSIS (Analysis, Interpretation & Structure)
       ============================================================ */
       {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyze character traits & development.",
        content: `
            <h3>How to write a Characterization</h3>
            <p class="intro-text"><em>Characters are the heart of every story. Understanding them helps you understand the whole plot. In a characterization, you look beneath the surface to explain <strong>why</strong> a person acts the way they do.</em></p>

            <h4>1. Distinction: Direct vs. Indirect</h4>
            <ul>
                <li><strong>Direct (Explicit):</strong> The narrator tells you exactly what the character is like ("He was a cruel man").</li>
                <li><strong>Indirect (Implicit):</strong> You must draw conclusions from the character's <strong>appearance, behavior, and language</strong>.</li>
            </ul>

            <h4>2. Preparation (The Grid Method)</h4>
            <p>Before writing, sort your findings in a grid (Step 1 from your guide):</p>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Category</th><th>Evidence (Quote/Line)</th><th>Trait (Adjective)</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Appearance</strong></td><td>"wore a dirty shirt" (l. 5)</td><td>neglected, poor</td></tr>
                        <tr><td><strong>Behavior</strong></td><td>"screams at teacher" (l. 12)</td><td>aggressive, disrespectful</td></tr>
                        <tr><td><strong>Language</strong></td><td>"uses slang, swears"</td><td>uneducated, rude</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>3. Writing Structure (P.E.E. / Name-Quote-Explain)</h4>
            <p>Use this chain for every trait you analyze. Never just list adjectives!</p>
            <ul>
                <li><strong>Point (Name it):</strong> "The character is very aggressive..."</li>
                <li><strong>Evidence (Quote it):</strong> "...which becomes clear when he shouts at the teacher (l. 12)."</li>
                <li><strong>Explanation (Explain it):</strong> "This behavior shows his total lack of respect for authority."</li>
            </ul>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Identify narrator type & analyze effect.",
        content: `
            <h3>Analyzing Narrative Perspective</h3>
            <p class="intro-text"><em>The narrator is the "camera" through which we see the story. By choosing a specific perspective, the author controls what we know and how we feel. Your job is to find out <strong>how</strong> this influence works.</em></p>
            
            <div class="highlight-box" style="background: #fffbeb; border: 1px solid #fcd34d; color: #92400e;">
                <strong>⚠️ Crucial Rule:</strong><br>
                Never confuse the <strong>Author</strong> (who wrote the book) with the <strong>Narrator</strong> (the voice telling the story)!
            </div>

            <div class="table-wrap">
            <table>
                <thead><tr><th>Type</th><th>Signal Words</th><th>Effect / Function</th></tr></thead>
                <tbody>
                    <tr>
                        <td><strong>First-Person</strong><br>(I-Narrator)</td>
                        <td>"I", "me", "my"</td>
                        <td><strong>Subjective.</strong> Creates intimacy and identification. We see the world through <em>their</em> eyes. Can be an <em>unreliable narrator</em>.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Omniscient</strong><br>(All-knowing)</td>
                        <td>"He/She" + knows thoughts of ALL</td>
                        <td><strong>Objective / Trustworthy.</strong> Has an "Olympian view". Can jump between places/times and judge events from above.</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Limited</strong><br>(Personal)</td>
                        <td>"He/She" + knows thoughts of ONE</td>
                        <td><strong>Identification / Suspense.</strong> The reader feels close to this "reflector figure" but has limited knowledge (doesn't know what others think).</td>
                    </tr>
                    <tr>
                        <td><strong>Third-Person Objective</strong><br>(Neutral)</td>
                        <td>Only actions/dialogue (Camera view)</td>
                        <td><strong>Distance.</strong> No insight into feelings. The reader must judge the characters solely by their actions.</td>
                    </tr>
                </tbody>
            </table>
            </div>
        `
    },
    {
        title: "Style, Tone & Register",
        cat: "AFB II",
        short: "Analyze language (Tone, Register, Syntax).",
        content: `
            <h3>Language Analysis</h3>
            <p class="intro-text"><em>Authors never choose words by accident. Every metaphor, every short sentence, and every specific word is a tool used to manipulate the reader's emotions or emphasize a message. Language analysis means uncovering these hidden tools.</em></p>

            <h4>1. Tone (The Atmosphere)</h4>
            <p><em>Question: What is the author's attitude towards the topic?</em><br>
            <strong>Adjectives:</strong> optimistic, pessimistic, critical, ironic, sarcastic, aggressive, serious, humorous, alarming, solemn.</p>

            <h4>2. Register (The Formality)</h4>
            <p><em>Question: Who is the text written for?</em></p>
            <ul>
                <li><strong>Formal:</strong> Passive voice, complex sentences, advanced vocab. &rarr; <em>Effect: Professional, objective, distant.</em></li>
                <li><strong>Informal:</strong> Slang, short forms ("can't"), direct address. &rarr; <em>Effect: Authentic, emotional, creates closeness.</em></li>
            </ul>

            <h4>3. Syntax & Word Choice</h4>
            <ul>
                <li><strong>Syntax (Sentence Structure):</strong>
                    <br>- <em>Parataxis (Short sentences):</em> Creates speed, urgency, or simplicity.
                    <br>- <em>Hypotaxis (Complex sentences):</em> Used for complex, explaining arguments.
                </li>
                <li><strong>Word Choice:</strong> Are words positive/negative? Technical terms? Old-fashioned?</li>
            </ul>

            <h4>4. The Analysis Formula</h4>
            <p>Never just say "There is a metaphor". Use this structure:</p>
            <p class="highlight-box"><strong>Feature</strong> (The author uses a metaphor...) <br>+ <strong>Quote</strong> ("...") <br>+ <strong>Function</strong> (to create an image of / to emphasize / to criticize...).</p>
        `
    },
    {
        title: "General Analysis Structure",
        cat: "AFB II",
        short: "The Master Plan for any Analysis Essay.",
        content: `
            <h3>Analysis Essay Structure</h3>
            <p>Use this structure for any analysis task (Characterization, Atmosphere, Language, etc.).</p>

            <h4>1. Introduction</h4>
            <ul>
                <li><strong>T.A.T.T.:</strong> Title, Author, Text Type, Topic.</li>
                <li><strong>Thesis Statement:</strong> A brief sentence summarizing your main finding (e.g. "The author uses a gloomy tone to criticize the protagonist's behavior.").</li>
            </ul>

            <h4>2. Body Paragraphs</h4>
            <p>Write one paragraph for each aspect (e.g. one for "Tone", one for "Stylistic Devices"). Use the <strong>P.E.E.</strong> method inside the paragraphs.</p>
            <ul>
                <li>Use <strong>connectives</strong> (Furthermore, In addition, However).</li>
                <li>Always refer to the text (lines!).</li>
            </ul>

            <h4>3. Conclusion</h4>
            <ul>
                <li>Summarize your main findings (Do not repeat word for word).</li>
                <li>Relate back to your thesis statement.</li>
                <li><strong>No new arguments</strong> here!</li>
            </ul>
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
            <p class="intro-text"><em>In a comment, you don't need to be neutral. Your goal is to convince the reader of <strong>your</strong> opinion on a controversial topic.</em></p>

            <h4>Structure</h4>
            <ol>
                <li><strong>Introduction:</strong>
                    <ul>
                        <li><strong>Hook:</strong> Start with a quote, a rhetorical question, or a shocking fact.</li>
                        <li><strong>Topic:</strong> Briefly summarize the issue.</li>
                        <li><strong>Thesis:</strong> State your opinion clearly ("In my opinion...", "I am convinced that...").</li>
                    </ul>
                </li>
                <li><strong>Main Part (The Arguments):</strong>
                    <ul>
                        <li>Write one paragraph per argument.</li>
                        <li><strong>Pattern:</strong> Statement &rarr; Explanation &rarr; Example.</li>
                        <li><strong>Pro-Tip (The Rebuttal):</strong> Mention a counter-argument ("Some people claim...") and destroy it immediately ("...however, this is wrong because..."). This makes you sound very convincing.</li>
                    </ul>
                </li>
                <li><strong>Conclusion:</strong>
                    <ul>
                        <li>Summarize your main points (use different words).</li>
                        <li>End with an outlook or an appeal ("We must act now!").</li>
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
            <p class="intro-text"><em>Unlike a comment, a discussion requires you to take a step back and look at <strong>both sides</strong> (Pro & Con) objectively before reaching a verdict.</em></p>

            <h4>The Sandwich Method</h4>
            <p>This structure ensures your opinion stays in the reader's mind at the end.</p>
            <ol>
                <li><strong>Introduction:</strong> Present the controversial issue without taking sides yet.</li>
                <li><strong>Counter-Arguments (The side you disagree with):</strong>
                    <br>Start with their strongest argument and end with their weakest.
                </li>
                <li><strong>Turning Point:</strong> Use a connective like <em>"However...", "On the other hand...", "Looking at the facts..."</em></li>
                <li><strong>Your Arguments (The side you support):</strong>
                    <br>Start with your weakest argument and build up to your <strong>strongest argument</strong> (Save the best for last!).
                </li>
                <li><strong>Conclusion:</strong> Weigh the arguments and give a well-founded verdict.</li>
            </ol>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Write a report (Inverted Pyramid & Layout).",
        content: `
            <h3>Writing a Newspaper Article</h3>
            <p class="intro-text"><em>A newspaper article must grab the reader's attention immediately. Use the <strong>Inverted Pyramid</strong> principle: The most important info comes first.</em></p>

            <h4>Layout Elements (Don't forget these!)</h4>
            <ul>
                <li><strong>Headline:</strong> Catchy, short, often no verbs (e.g., "Climate Crisis Escalates").</li>
                <li><strong>Subheading:</strong> A one-sentence summary of the topic.</li>
                <li><strong>Byline:</strong> "By [Your Name], [Date]" (Must be on a separate line).</li>
                <li><strong>Cross-headings:</strong> Small sub-headlines inside the text to structure long paragraphs.</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Lead Paragraph:</strong> Answer the <strong>W-Questions</strong> (Who, What, Where, When). The reader must understand the event after reading just this paragraph.</li>
                <li><strong>Body:</strong> Explain the <strong>Why</strong> and <strong>How</strong>. Provide background info and details.
                    <br><em>Tip:</em> Use quotes from (invented) experts or eyewitnesses to make it look authentic.</li>
                <li><strong>Conclusion:</strong> Consequences and outlook ("What happens next?").</li>
            </ol>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Write a speech (Audience & Rhetoric).",
        content: `
            <h3>Writing a Speech</h3>
            <p class="intro-text"><em>A speech is written for the ear, not the eye. It must be emotional, clear, and directly address the audience to convince them.</em></p>

            <h4>Structure</h4>
            <ul>
                <li><strong>Intro:</strong> Welcome the audience. Use a "Hook" (joke, personal story, shock). State your topic clearly.</li>
                <li><strong>Body:</strong> Use "Signposting" (First, secondly, finally). Connect facts with emotions. Use <strong>rhetorical devices</strong> (Anaphora, rhetorical questions).</li>
                <li><strong>Conclusion:</strong> Summarize. End with a strong <strong>Call to Action</strong> ("Let's change this today!"). Thank the audience.</li>
            </ul>

            <h4>Useful Phrases (from your guide)</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Involving</strong></td><td>"Imagine...", "As you all know...", "Have you ever thought about...?"</td></tr>
                <tr><td><strong>Emphasizing</strong></td><td>"It is undeniable that...", "There is no doubt that...", "It is well known that..."</td></tr>
                <tr><td><strong>Call to Action</strong></td><td>"We have to ensure that...", "Let us make the effort to...", "It is about time that..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Blog Entry",
        cat: "AFB III",
        short: "Creative writing (Subjective, interactive).",
        content: `
            <h3>Writing a Blog Entry</h3>
            <p class="intro-text"><em>Blogs are personal and interactive. You are not just writing a text; you are starting a conversation with your readers.</em></p>

            <h4>Key Characteristics</h4>
            <ul>
                <li><strong>Tone:</strong> Personal ("I"-perspective). Can be informal ("Hey guys") or semi-formal, depending on the task.</li>
                <li><strong>Catchy Title:</strong> Make them want to click.</li>
                <li><strong>Interaction:</strong> Address the reader directly ("What do you think?", "Have you ever...?").</li>
            </ul>

            <h4>Structure</h4>
            <ol>
                <li><strong>Intro:</strong> Greeting & Hook (anecdote/question).</li>
                <li><strong>Body:</strong> Your thoughts, experiences, or arguments. Use paragraphs!</li>
                <li><strong>Conclusion:</strong> Summarize your thoughts.
                    <br><strong>Take Home Message:</strong> A final thought for the reader.
                    <br><strong>Call to Action:</strong> "Leave a comment below!", "Share your story!"
                </li>
            </ol>
        `
    },
    {
        title: "Formal Letter",
        cat: "AFB III",
        short: "Formal communication (Layout & Salutations).",
        content: `
            <h3>Writing a Formal Letter</h3>
            <p class="intro-text"><em>In a formal letter, precision and politeness are key. Adhere strictly to the layout and conventions.</em></p>
            
            <h4>Layout Checklist</h4>
            <ul>
                <li><strong>Top Right:</strong> Sender's Address (You) + Date.</li>
                <li><strong>Left (below):</strong> Recipient's Address.</li>
                <li><strong>Subject Line:</strong> Short and bold (e.g., <strong>Subject: Application for...</strong>).</li>
            </ul>

            <h4>Salutations (The Golden Rules)</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Recipient</th><th>Greeting</th><th>Closing</th></tr>
                <tr><td>Name Unknown</td><td>Dear Sir or Madam,</td><td>Yours faithfully,</td></tr>
                <tr><td>Name Known</td><td>Dear Mr Smith,</td><td>Yours sincerely,</td></tr>
            </table>
            </div>
            
            <p><strong>Style:</strong> No short forms (I am, do not). Use polite phrases ("Would it be possible to..." instead of "I want").</p>
        `
    },
    {
        title: "E-Mail",
        cat: "AFB III",
        short: "Formal vs. Informal E-Mails.",
        content: `
            <h3>Writing an E-Mail</h3>
            <p class="intro-text"><em>Emails are faster than letters, but the rules of politeness still apply in a business context.</em></p>

            <h4>Structure</h4>
            <ul>
                <li><strong>Subject Line:</strong> CRITICAL! Summarize the content (e.g., "Question regarding the essay"). Never leave this blank.</li>
                <li><strong>Body:</strong> Salutation &rarr; Opening &rarr; Main Point &rarr; Closing.</li>
            </ul>

            <h4>Formal vs. Personal</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Feature</th><th>Formal (Teacher/Job)</th><th>Personal (Friend)</th></tr>
                <tr><td><strong>Greeting</strong></td><td>Dear Mr Miller,</td><td>Hi Tom, / Hey,</td></tr>
                <tr><td><strong>Style</strong></td><td>Polite, objective, no slang.</td><td>Relaxed, short forms (I'm, don't) allowed.</td></tr>
                <tr><td><strong>Closing</strong></td><td>Yours sincerely, / Best regards,</td><td>Best wishes, / Love, / Take care,</td></tr>
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