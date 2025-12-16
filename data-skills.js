// data-skills.js
// Version: FINAL REMASTERED
// Includes: AFB I, II, III, Enhanced Tools (Speaking/Checklist), Operators in Grading
const skillsContent = [
/* ============================================================
       AFB I: COMPREHENSION
       ============================================================ */
       {
        title: "Summary",
        cat: "AFB I",
        short: "Concise account of a text's main points.",
        content: `
            <h3>Summary</h3>
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

            <h4>Structure & Useful Phrases</h4>
            <p><strong>1. Introduction (T.A.T.T.)</strong><br>
            State the facts clearly. Do not start analyzing yet.</p>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Template</strong></td><td>"The article '<strong>[Title]</strong>' by <strong>[Author]</strong>, published in <strong>[Source]</strong> on <strong>[Date]</strong>, deals with / discusses <strong>[Topic]</strong>."</td></tr>
            </table>
            </div>
            
            <p><strong>2. Main Part (Connectives)</strong><br>
            Summarize paragraph by paragraph. Avoid the "Then... then... then..." trap. Use these instead:</p>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Beginning</strong></td><td>"The author starts by stating that...", "First of all,..."</td></tr>
                <tr><td><strong>Adding</strong></td><td>"Furthermore...", "Moreover...", "In addition...", "Another important point is..."</td></tr>
                <tr><td><strong>Contrasting</strong></td><td>"However...", "In contrast to...", "On the other hand..."</td></tr>
                <tr><td><strong>Results</strong></td><td>"As a result...", "Consequently...", "Therefore..."</td></tr>
            </table>
            </div>

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

            <h4>Structure & Useful Phrases</h4>
            <p><strong>1. Introduction:</strong><br>
            State the text info and the <strong>specific topic</strong> (not just the general topic!).</p>
            <ul>
                <li><em>"The article '[Title]' by [Author] deals with [General Topic]. In the following, the author's arguments regarding <strong>[Specific Task Topic]</strong> will be outlined."</em></li>
            </ul>

            <p><strong>2. Main Part:</strong><br>
            List the findings logically. Use structure words to guide the reader:</p>
            <ul>
                <li>"The text focuses on..."</li>
                <li>"The author lists several reasons for..."</li>
                <li>"First of all, it is stated that..."</li>
                <li>"Another aspect mentioned is..."</li>
                <li>"Furthermore, the author points out..."</li>
                <li>"Finally, regarding [Topic], the text says that..."</li>
            </ul>

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
            
            <h4>Useful Phrases</h4>
            <ul>
                <li>"The text provides information on..."</li>
                <li>"Regarding the aspect of..., the author notes that..."</li>
                <li>"The situation is described as..."</li>
            </ul>
        `
    },
    /* ============================================================
       AFB II: ANALYSIS
       ============================================================ */
       {
        title: "Characterization",
        cat: "AFB II",
        short: "Analyze character traits & development.",
        content: `
            <h3>How to write a Characterization</h3>
            <p class="intro-text"><em>Characters are the heart of every story. In a characterization, you look beneath the surface to explain <strong>why</strong> a person acts the way they do.</em></p>

            <h4>1. Elements of Analysis</h4>
            <ul>
                <li><strong>Direct (Explicit):</strong> The narrator tells you exactly what the character is like.</li>
                <li><strong>Indirect (Implicit):</strong> You conclude traits from <strong>appearance, behavior, and language</strong>.</li>
            </ul>

            <h4>2. Preparation (The Grid Method)</h4>
            <div class="table-wrap">
                <table>
                    <thead><tr><th>Type</th><th>Evidence</th><th>Trait (Conclusion)</th></tr></thead>
                    <tbody>
                        <tr><td>Direct</td><td>"was a lonely boy"</td><td>lonely</td></tr>
                        <tr><td>Indirect</td><td>"screams at teacher"</td><td>disrespectful</td></tr>
                    </tbody>
                </table>
            </div>

            <h4>3. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Describing Traits</strong></td><td>"The character is portrayed as..."<br>"He/She appears to be..."<br>"This trait becomes evident when..."<br>"His behavior suggests that..."</td></tr>
                <tr><td><strong>Connecting to Text</strong></td><td>"This is highlighted by the fact that..."<br>"The quote '...' underlines his/her..."</td></tr>
                <tr><td><strong>Development</strong></td><td>"In the course of the story, the character changes from... to..."<br>"There is a sharp contrast between..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Narrative Perspective",
        cat: "AFB II",
        short: "Identify narrator type & analyze effect.",
        content: `
            <h3>Analyzing Narrative Perspective</h3>
            <p class="intro-text"><em>The narrator is the "camera". By choosing a perspective, the author controls what we know and how we feel.</em></p>
            
            <div class="table-wrap">
            <table>
                <thead><tr><th>Type</th><th>Effect / Function</th></tr></thead>
                <tbody>
                    <tr><td><strong>First-Person</strong> ("I")</td><td>Subjective; creates intimacy; reader identifies with narrator.</td></tr>
                    <tr><td><strong>Third-Person Omniscient</strong></td><td>Reliable; "God-like" view; knows thoughts of everyone; objective distance.</td></tr>
                    <tr><td><strong>Third-Person Limited</strong></td><td>Creates suspense; reader feels close to the "reflector figure" but has limited knowledge.</td></tr>
                </tbody>
            </table>
            </div>

            <h4>Useful Phrases for the Effect</h4>
            <p><strong>Use these to score points! Don't just name the type.</strong></p>
            <ul>
                <li>"This perspective <strong>allows the reader to identify with</strong> the protagonist."</li>
                <li>"It <strong>restricts the reader's knowledge</strong>, creating suspense."</li>
                <li>"The narrator <strong>creates a distance</strong> between the reader and the events."</li>
                <li>"The reader <strong>shares the character's feelings</strong> and inner thoughts."</li>
                <li>"Since we only see the action through X's eyes, the narration is <strong>subjective</strong> / biased."</li>
            </ul>
            
        `
    },
    {
        title: "Cartoon Analysis",
        cat: "AFB II",
        short: "Analyze visuals (Word Box & Steps).",
        content: `
            <h3>Cartoon Analysis</h3>
            <p class="intro-text"><em>A cartoon is a satirical comment. Decode the story: Introduction &rarr; Description &rarr; Analysis &rarr; Evaluation.</em></p>

            <h4>1. Introduction</h4>
            <p>"The cartoon drawn by [Artist] was published in [Source] in the year... It deals with the topic of..."</p>

            <h4>2. Description (The "Word Box")</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Overview</strong></td><td>"The cartoon shows..."<br>"In the cartoon you can see (that)..."</td></tr>
                <tr><td><strong>Location</strong></td><td>"In the centre...", "In the foreground/background...", "On the right/left-hand side...", "At the top/bottom..."</td></tr>
                <tr><td><strong>Text</strong></td><td>"There is a caption below the cartoon which says '...'"<br>"The text in the speech bubble is spoken by..."</td></tr>
            </table>
            </div>

            <h4>3. Analysis (Decoding Symbols)</h4>
            <ul>
                <li>"The figure is a <strong>caricature</strong> of..." (exaggerated traits).</li>
                <li>"The person's body language / facial expression shows that..."</li>
                <li>"The element X <strong>symbolises / stands for</strong>..."</li>
                <li>"The cartoonist's <strong>message</strong> might be that..."</li>
                <li>"He is making a humorous/ironic comment on..."</li>
                <li>"He is making fun of..."</li>
            </ul>

            <h4>4. Evaluation</h4>
            <ul>
                <li>"I think the cartoon is effective because..."</li>
                <li>"In my opinion, the cartoon is easy to understand because..."</li>
                <li>"I agree with the point the cartoonist is making because..."</li>
            </ul>
        `
    },
    {
        title: "Style, Tone & Register",
        cat: "AFB II",
        short: "Analyze language (Devices & Functions).",
        content: `
            <h3>Language Analysis</h3>
            <p class="intro-text"><em>Language analysis means uncovering the <strong>Style</strong> (How?), the <strong>Tone</strong> (Vibe?), and the <strong>Register</strong> (Who for?).</em></p>

            <h4>1. The Three Pillars</h4>
            <ul>
                <li><strong>Diction:</strong> Positive/negative words? Keywords?</li>
                <li><strong>Syntax:</strong> Short sentences (speed/drama) or complex sentences (details)?</li>
                <li><strong>Rhetorical Devices:</strong> Metaphors, anaphora, etc.</li>
            </ul>

            <h4>2. Useful Phrases (Device + Function)</h4>
            <p>Always connect the device to its effect!</p>
            <div class="table-wrap">
            <table>
                <tr>
                    <td><strong>Identifying</strong></td>
                    <td><strong>Explaining Effect</strong></td>
                </tr>
                <tr>
                    <td>"The <strong>metaphor</strong> '...' ..."</td>
                    <td>"...<strong>emphasizes</strong> the danger of the situation."</td>
                </tr>
                <tr>
                    <td>"The use of <strong>repetition</strong>..."</td>
                    <td>"...<strong>highlights</strong> the importance of this message."</td>
                </tr>
                <tr>
                    <td>"The author uses <strong>emotive adjectives</strong>..."</td>
                    <td>"...to appeal to the reader's emotions."</td>
                </tr>
                <tr>
                    <td>"This choice of words..."</td>
                    <td>"...<strong>creates an atmosphere of</strong> fear/hope/urgency."</td>
                </tr>
            </table>
            </div>
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

            <h4>1. Structure</h4>
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
                        <li><strong>Pro-Tip (The Rebuttal):</strong> Mention a counter-argument and destroy it immediately to sound convincing.</li>
                    </ul>
                </li>
                <li><strong>Conclusion:</strong>
                    <ul>
                        <li>Summarize your main points (use different words).</li>
                        <li>End with an outlook or an appeal ("We must act now!").</li>
                    </ul>
                </li>
            </ol>

            <h4>2. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Phrases for Opinion</strong></td><td>"In my opinion...", "I am convinced that...", "To my mind...", "I firmly believe that..."</td></tr>
                <tr><td><strong>Phrases for Rebuttal</strong></td><td>"Some people claim that... However, this is not true because..."<br>"Opponents might argue that..., but..."<br>"A crucial counter-argument is..."</td></tr>
                <tr><td><strong>Conclusion</strong></td><td>"All in all...", "Taking everything into account...", "Consequently, we should..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Discussion",
        cat: "AFB III",
        short: "Weigh pros and cons (Dialectical essay).",
        content: `
            <h3>Writing a Discussion</h3>
            <p class="intro-text"><em>Unlike a comment, a discussion requires you to take a step back and look at <strong>both sides</strong> (Pro & Con) objectively before reaching a verdict.</em></p>

            <h4>1. The Sandwich Method</h4>
            <p>This structure ensures your opinion stays in the reader's mind at the end.</p>
            <ol>
                <li><strong>Introduction:</strong> Present the controversial issue without taking sides yet.</li>
                <li><strong>Counter-Arguments (The side you disagree with):</strong>
                    <br>Start with their strongest argument and end with the weakest.
                </li>
                <li><strong>Turning Point:</strong> Use a connective like <em>"However...", "On the other hand..."</em></li>
                <li><strong>Your Arguments (The side you support):</strong>
                    <br>Start with your weakest argument and build up to your <strong>strongest argument</strong> (Save the best for last!).
                </li>
                <li><strong>Conclusion:</strong> Weigh the arguments and give a well-founded verdict.</li>
            </ol>

            <h4>2. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Weighing Pros & Cons</strong></td><td>"On the one hand... on the other hand..."<br>"In contrast to...", "Whereas...", "While..."<br>"Looking at the pros and cons..."</td></tr>
                <tr><td><strong>Adding Arguments</strong></td><td>"Furthermore...", "In addition...", "Moreover...", "Another aspect is..."</td></tr>
                <tr><td><strong>Concluding</strong></td><td>"Weighing the arguments, I come to the conclusion that..."<br>"Looking at the facts, it becomes clear that..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Newspaper Article",
        cat: "AFB III",
        short: "Write a report (Inverted Pyramid & Layout).",
        content: `
            <h3>Writing a Newspaper Article</h3>
            <p class="intro-text"><em>A newspaper article must grab the reader's attention immediately. Use the <strong>Inverted Pyramid</strong> principle: The most important info comes first.</em></p>

            <h4>1. Layout Elements (Don't forget these!)</h4>
            <ul>
                <li><strong>Headline:</strong> Catchy, short, often no verbs (e.g., "Climate Crisis Escalates").</li>
                <li><strong>Subheading:</strong> A one-sentence summary of the topic.</li>
                <li><strong>Byline:</strong> "By [Your Name], [Date]" (Must be on a separate line).</li>
                <li><strong>Cross-headings:</strong> Small sub-headlines inside the text to structure long paragraphs.</li>
            </ul>

            <h4>2. Structure</h4>
            <ol>
                <li><strong>Lead Paragraph:</strong> Answer the <strong>W-Questions</strong> (Who, What, Where, When). The reader must understand the event after reading just this paragraph.</li>
                <li><strong>Body:</strong> Explain the <strong>Why</strong> and <strong>How</strong>. Provide background info and details.
                    <br><em>Tip:</em> Use quotes from (invented) experts or eyewitnesses to make it look authentic.</li>
                <li><strong>Conclusion:</strong> Consequences and outlook ("What happens next?").</li>
            </ol>

            <h4>3. Useful Phrases (Fake Objectivity)</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Sources & Experts</strong></td><td>"According to experts...", "Recent statistics show that...", "Sources claim that..."</td></tr>
                <tr><td><strong>Eyewitnesses</strong></td><td>"Eyewitnesses report that...", "One resident stated: '...'", "Local authorities confirmed..."</td></tr>
                <tr><td><strong>Neutrality</strong></td><td>"It is often claimed that...", "Critics point out that...", "It remains to be seen how..."</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Speech",
        cat: "AFB III",
        short: "Write a speech (Structure, Rhetoric & Delivery).",
        content: `
            <h3>Writing a Speech</h3>
            <p class="intro-text"><em>A speech is written for the ear, not the eye. It must be emotional, convincing, and easy to follow. Your goal is not just to inform, but to <strong>persuade</strong> and <strong>mobilize</strong> your audience.</em></p>

            <h4>1. Structure</h4>
            <ul>
                <li><strong>Introduction:</strong>
                    <br>&rarr; <strong>Salutation:</strong> Address your specific audience (Formal vs. Informal).
                    <br>&rarr; <strong>Hook:</strong> Grab attention immediately (Rhetorical question, shocking statistic, personal anecdote).
                    <br>&rarr; <strong>Topic:</strong> Clearly state why you are standing here today.
                </li>
                <li><strong>Body (The Arguments):</strong>
                    <br>&rarr; <strong>Signposting:</strong> Guide the listener ("First...", "Another crucial point is...").
                    <br>&rarr; <strong>Connection:</strong> Use "We" instead of "I" to create a bond with the audience.
                    <br>&rarr; <strong>Climax:</strong> Save your strongest argument for the end.
                </li>
                <li><strong>Conclusion:</strong>
                    <br>&rarr; <strong>Summary:</strong> Briefly sum up the main message (don't repeat details).
                    <br>&rarr; <strong>Call to Action (CTA):</strong> Tell the audience exactly what they should do now.
                    <br>&rarr; <strong>Clincher:</strong> A memorable final sentence.
                </li>
            </ul>

            <h4>2. The Rhetoric Toolkit (Must-Haves)</h4>
            <p>A speech without rhetorical devices is just a text read aloud. Use these tools:</p>
            <ul>
                <li><strong>Inclusive Language:</strong> "We must act together!" (Creates unity).</li>
                <li><strong>Anaphora:</strong> "We need hope. We need action. We need change." (Creates rhythm).</li>
                <li><strong>Rhetorical Questions:</strong> "Do we really want to ignore this?" (Engages the listener).</li>
                <li><strong>Contrast (Antithesis):</strong> "Not words, but actions." (Simplifies complex issues).</li>
            </ul>

            <h4>3. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr>
                    <th>Function</th>
                    <th>Phrases</th>
                </tr>
                <tr>
                    <td><strong>Greeting</strong></td>
                    <td>
                        <em>Formal:</em> "Honourable guests, ladies and gentlemen..."<br>
                        <em>School:</em> "Fellow students, teachers..."<br>
                        <em>Casual:</em> "Hi everyone, thanks for coming..."
                    </td>
                </tr>
                <tr>
                    <td><strong>The Hook</strong></td>
                    <td>"Imagine a world where..."<br>"Have you ever wondered why...?"<br>"Looking at the facts, one thing is shocking:..."</td>
                </tr>
                <tr>
                    <td><strong>Structuring</strong></td>
                    <td>"Let me start by saying..."<br>"This leads me to my next point..."<br>"Let's look at the other side of the coin."</td>
                </tr>
                <tr>
                    <td><strong>Emphasizing</strong></td>
                    <td>"It is undeniable that..."<br>"Make no mistake:..."<br>"Let me be clear:..."<br>"What is even more important is..."</td>
                </tr>
                <tr>
                    <td><strong>Call to Action & Closing</strong></td>
                    <td>"We have to ensure that..."<br>"I ask you to..."<br>"Let's make a difference today!"<br>"Thank you for listening."</td>
                </tr>
            </table>
            </div>

            <div class="highlight-box">
                <strong>💡 Pro-Tip: The "Ear-Test"</strong><br>
                Use short sentences. Long, complex sentences (Hypotaxis) are hard to understand when listening. If you run out of breath while reading a sentence, it is too long!
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

            <h4>1. Key Characteristics</h4>
            <ul>
                <li><strong>Tone:</strong> Personal ("I"-perspective). Can be informal ("Hey guys") or semi-formal, depending on the task.</li>
                <li><strong>Catchy Title:</strong> Make them want to click.</li>
                <li><strong>Interaction:</strong> Address the reader directly ("What do you think?", "Have you ever...?").</li>
            </ul>

            <h4>2. Structure</h4>
            <ol>
                <li><strong>Intro:</strong> Greeting & Hook (anecdote/question).</li>
                <li><strong>Body:</strong> Your thoughts, experiences, or arguments. Use paragraphs!</li>
                <li><strong>Conclusion:</strong> Summarize your thoughts.
                    <br><strong>Take Home Message:</strong> A final thought for the reader.
                    <br><strong>Call to Action:</strong> "Leave a comment below!", "Share your story!"
                </li>
            </ol>

            <h4>3. Useful Phrases (Interactive)</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Opening & Hook</strong></td><td>"Hi guys!", "Welcome back to my blog.", "Have you ever experienced...?", "Have you ever wondered...?"</td></tr>
                <tr><td><strong>Body (Personal)</strong></td><td>"I was shocked when I found out...", "To be honest...", "Believe it or not...", "I recently realized that..."</td></tr>
                <tr><td><strong>Closing (CTA)</strong></td><td>"What do you think?", "Let me know in the comments below!", "Drop a comment!", "Share your story!"</td></tr>
            </table>
            </div>
        `
    },
    {
        title: "Formal Letter",
        cat: "AFB III",
        short: "Formal communication (Layout, Structure & Phrases).",
        content: `
            <h3>Writing a Formal Letter</h3>
            <p class="intro-text"><em>In a formal letter, precision and politeness are key. The reader usually doesn't know you, so you must be objective, factual, and strictly adhere to the layout conventions.</em></p>
            
            <h4>1. The Layout Checklist</h4>
            <ul>
                <li><strong>Top Right:</strong> Sender's Address (You).</li>
                <li><strong>Right (below Sender):</strong> Date (e.g., 12 May 2024).</li>
                <li><strong>Left (below Date):</strong> Recipient's Address.</li>
                <li><strong>Subject Line:</strong> Short and bold (e.g., <strong>Subject: Application for internship</strong>).</li>
                <li><strong>Signature:</strong> Sign by hand, then print your name underneath.</li>
            </ul>

            <h4>2. Structure (The 3-Step-Plan)</h4>
            <ul>
                <li><strong>Para 1: The Reason.</strong> State immediately why you are writing. (Do not start with "How are you?").</li>
                <li><strong>Para 2 & 3: The Details.</strong> Give facts, arguments, or qualifications. Use <strong>connectives</strong> (Moreover, However).</li>
                <li><strong>Para 4: The Action.</strong> What should happen next? (A reply? An interview? A refund?).</li>
            </ul>

            <h4>3. Salutations (The Golden Rules)</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Recipient</th><th>Greeting</th><th>Closing</th></tr>
                <tr><td>Name Unknown</td><td>Dear Sir or Madam,</td><td>Yours faithfully,</td></tr>
                <tr><td>Name Known</td><td>Dear Mr Smith,</td><td>Yours sincerely,</td></tr>
            </table>
            </div>
            
            <h4>4. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Opening</strong></td><td>"I am writing to apply for..."<br>"I am writing to complain about..."<br>"I am writing to inquire about..."</td></tr>
                <tr><td><strong>Closing</strong></td><td>"I look forward to hearing from you."<br>"Thank you in advance for your assistance."</td></tr>
                <tr><td><strong>Attachments</strong></td><td>"Please find attached my CV / the documents."</td></tr>
            </table>
            </div>

            <h4>5. Style: Diplomatic Language</h4>
            <p>Never be aggressive, even if you are angry. Use the passive voice to sound objective.</p>
            <div class="highlight-box">
                ❌ <strong>Don't say:</strong> "You made a mistake!"<br>
                ✅ <strong>Say:</strong> "It seems that a mistake has been made."<br><br>
                ❌ <strong>Don't say:</strong> "I want my money back."<br>
                ✅ <strong>Say:</strong> "I would be grateful if you could refund the amount."
            </div>
        `
    },
    {
        title: "E-Mail",
        cat: "AFB III",
        short: "Formal vs. Informal E-Mails (Structure & Phrases).",
        content: `
            <h3>Writing an E-Mail</h3>
            <p class="intro-text"><em>Emails are faster than letters, but in a professional context (teacher, job application), the rules of politeness are strict.</em></p>

            <h4>1. Structure & Netiquette</h4>
            <ul>
                <li><strong>Subject Line:</strong> The most important part! Be precise (e.g., "Question regarding Homework" vs. "Question"). Never leave it blank.</li>
                <li><strong>Salutation:</strong> Always address the person politely. Use the last name for teachers/bosses.</li>
                <li><strong>The Body:</strong> Keep it short and clear. One topic per email.</li>
                <li><strong>Tone:</strong> Avoid using ALL CAPS (it looks like shouting) and excessive emojis in formal emails.</li>
            </ul>

            <h4>2. Formal vs. Informal (The Difference)</h4>
            <div class="table-wrap">
            <table>
                <tr><th>Feature</th><th>Formal (Teacher/Job)</th><th>Informal (Friend)</th></tr>
                <tr><td><strong>Greeting</strong></td><td>Dear Mr Miller,<br>Dear Sir or Madam,</td><td>Hi Tom,<br>Hey Sarah,</td></tr>
                <tr><td><strong>Style</strong></td><td>Objective, full sentences, no short forms (I am).</td><td>Relaxed, short forms (I'm), slang/emojis allowed.</td></tr>
                <tr><td><strong>Closing</strong></td><td>Yours sincerely,<br>Best regards,</td><td>Best wishes,<br>Love,<br>CU,</td></tr>
            </table>
            </div>

            <h4>3. Useful Phrases</h4>
            <div class="table-wrap">
            <table>
                <tr>
                    <th>Function</th>
                    <th>Formal</th>
                    <th>Informal</th>
                </tr>
                <tr>
                    <td><strong>Opening</strong></td>
                    <td>"I hope you are doing well."<br>"I am writing with reference to..."</td>
                    <td>"How's it going?"<br>"Just wanted to tell you..."</td>
                </tr>
                <tr>
                    <td><strong>The Reason</strong></td>
                    <td>"Could you please inform me about..."<br>"I would like to apologize for..."</td>
                    <td>"Can you tell me..."<br>"Sorry for..."</td>
                </tr>
                <tr>
                    <td><strong>Attachments</strong></td>
                    <td>"Please find attached the document."</td>
                    <td>"Here is the photo..."</td>
                </tr>
                <tr>
                    <td><strong>Closing</strong></td>
                    <td>"I look forward to hearing from you."</td>
                    <td>"Write back soon!"</td>
                </tr>
            </table>
            </div>
        `
    },
    /* ============================================================
       TOOLS & METHODS
       ============================================================ */
    {
        title: "Linking Words / Connectives",
        cat: "Tools",
        short: "Improve flow & logic (The Glue of your Essay).",
        content: `
            <h3>Linking Words & Connectives</h3>
            <p class="intro-text"><em>Connectives are the glue that holds your essay together. Without them, your text is just a list of sentences. Use them to guide the reader through your arguments.</em></p>

            <h4>1. Sequencing & Structuring</h4>
            <ul>
                <li><strong>Beginning:</strong> To begin with, First of all, Initially.</li>
                <li><strong>Continuing:</strong> Furthermore, Moreover, In addition, Secondly.</li>
                <li><strong>Concluding:</strong> All in all, To sum up, In conclusion, Finally.</li>
            </ul>

            <h4>2. Contrasting (Crucial for Discussions!)</h4>
            <ul>
                <li><strong>However,</strong> ... (The classic. Always use a comma!)</li>
                <li><strong>On the one hand... on the other hand...</strong> (Always use both).</li>
                <li><strong>In contrast to... / On the contrary,</strong> ...</li>
                <li><strong>Although / Even though</strong> ...</li>
                <li><strong>Despite / In spite of</strong> (+ Noun or -ing form).</li>
                <li><strong>Whereas / While</strong> (Great for direct comparison).</li>
            </ul>

            <h4>3. Cause & Effect</h4>
            <div class="table-wrap">
            <table>
                <tr><td><strong>Reasons (Why?)</strong></td><td>Due to, Because of, Since, As, The reason for this is...</td></tr>
                <tr><td><strong>Results (So what?)</strong></td><td>Therefore, Consequently, As a result, Thus, Hence.</td></tr>
            </table>
            </div>

            <h4>4. Expressing Opinion</h4>
            <ul>
                <li><strong>Neutral:</strong> In my opinion, From my point of view, To my mind.</li>
                <li><strong>Strong:</strong> I am convinced that, It is undeniable that, There is no doubt that.</li>
            </ul>
        `
    },
    {
        title: "Mediation Skills",
        cat: "Tools",
        short: "Mediate texts DE -> EN (Strategies & Structure).",
        content: `
            <h3>Mediation: The Master Guide</h3>
            <p class="intro-text"><em>Mediation means transmitting information to a specific addressee. <strong>No word-for-word translation!</strong> Summarize the relevant points in English.</em></p>

            <h4>1. The Golden Rules</h4>
            <ul>
                <li><strong>Length:</strong> Approx. <strong>1/3</strong> of the original text.</li>
                <li><strong>Tense:</strong> Use <strong>Simple Present</strong>.</li>
                <li><strong>Neutrality:</strong> No personal opinion, no interpretation.</li>
                <li><strong>Audience:</strong> Address the reader at the beginning and end!</li>
            </ul>

            <h4>2. Preparation (The "Wh" Questions)</h4>
            <ul>
                <li><strong>WHO</strong> is the addressee? &rarr; Register (Formal vs. Informal).</li>
                <li><strong>WHAT</strong> text type? (Email, Blog, Article).</li>
                <li><strong>WHICH</strong> info is relevant? &rarr; Filter out details!</li>
            </ul>

            <h4>3. Compensation Strategies (Don't panic!)</h4>
            <ul>
                <li><strong>Paraphrase:</strong> Explain the meaning in simple words.</li>
                <li><strong>Generalize:</strong> "Riesling & Silvaner" &rarr; "German wines".</li>
                <li><strong>Explain Culture:</strong> "Abitur" &rarr; "German school leaving exam".</li>
            </ul>

            <h4>4. Useful Phrases</h4>
            <ul>
                <li><em>"According to the author..."</em></li>
                <li><em>"The article deals with..." / "The text outlines..."</em></li>
                <li><em>"With reference to the article..."</em></li>
            </ul>
        `
    },
    {
        title: "Listening Skills",
        cat: "Tools",
        short: "Strategies for Pre-, While-, and Post-Listening.",
        content: `
            <h3>Listening Comprehension Guide</h3>
            <p class="intro-text"><em>Success in listening exams is 50% strategy. Don't just listen passively – be an active detective.</em></p>

            <h4>Phase 1: Pre-Listening (The most important minute)</h4>
            <ul>
                <li><strong>Read Instructions:</strong> Tick box? Fill gap? Full sentence?</li>
                <li><strong>Predict Keywords:</strong> If the topic is "Airport", expect: <em>delay, gate, luggage, boarding</em>.</li>
            </ul>

            <h4>Phase 2: While-Listening</h4>
            <ul>
                <li><strong>Gist first:</strong> Don't get stuck on one word. Keep listening!</li>
                <li><strong>Signposting:</strong> Watch out for <em>"But...", "However..."</em> (often a trap!) or <em>"Most importantly..."</em> (the answer!).</li>
                <li><strong>Notes:</strong> Use abbreviations and symbols (+, -, !). No sentences.</li>
            </ul>

            <h4>Phase 3: Post-Listening</h4>
            <ul>
                <li><strong>Gap Fills:</strong> Check Grammar! (e.g. "The boy is <em>running</em>", not "run").</li>
                <li><strong>Logic Check:</strong> Does the answer make sense in context?</li>
            </ul>
        `
    },
    {
        title: "Speaking Skills",
        cat: "Tools",
        short: "Strategies & Phrases (Discussion, Monologue, Description).",
        content: `
            <h3>Speaking Skills: The Complete Guide</h3>
            <p class="intro-text"><em>Whether it's a picture description, a presentation, or a discussion: Structure and polite interaction are key to a high grade.</em></p>

            <h4>1. Visuals & Monologues</h4>
            <div class="table-wrap">
            <table>
                <tr>
                    <td><strong>Picture Description</strong></td>
                    <td>
                        "The photo depicts/shows..."<br>
                        "In the foreground / background / centre..."<br>
                        "The atmosphere seems to be..."<br>
                        "The person is stand<strong>ing</strong>..." (Pres. Progressive!)
                    </td>
                </tr>
                <tr>
                    <td><strong>Cartoon Analysis</strong></td>
                    <td>
                        "The cartoonist criticizes..."<br>
                        "The caption suggests that..."<br>
                        "The element X symbolizes..."<br>
                        "It is an exaggeration of..."
                    </td>
                </tr>
                <tr>
                    <td><strong>Presentation (Monologue)</strong></td>
                    <td>
                        "I would like to talk about..."<br>
                        "My presentation is divided into three parts."<br>
                        "Let's move on to the next point."<br>
                        "To conclude, I would like to say..."
                    </td>
                </tr>
            </table>
            </div>

            <h4>2. Discussion Strategies (Phrases)</h4>
            <p>Don't just say "Yes" or "No". Use these professional phrases:</p>
            
            <p><strong>Stating Opinion:</strong></p>
            <ul>
                <li>"From my point of view..."</li>
                <li>"To my mind..." / "It seems to me that..."</li>
                <li>"I am of the opinion that..."</li>
            </ul>

            <p><strong>Agreeing:</strong></p>
            <ul>
                <li>"You hit the nail on the head."</li>
                <li>"I see eye to eye with you on this."</li>
                <li>"I couldn't agree more." / "That is exactly my point."</li>
            </ul>

            <p><strong>Disagreeing (Polite):</strong></p>
            <ul>
                <li>"I see your point, but I view this differently."</li>
                <li>"I'm afraid I cannot agree with you there."</li>
                <li>"That may be true, but we must also consider..."</li>
            </ul>

            <p><strong>Disagreeing (Strong):</strong></p>
            <ul>
                <li>"I totally disagree."</li>
                <li>"I beg to differ."</li>
            </ul>

            <p><strong>Interrupting & Clarifying:</strong></p>
            <ul>
                <li>"May I jump in here for a second?" / "Sorry to interrupt, but..."</li>
                <li>"What exactly do you mean by...?"</li>
                <li>"Could you elaborate on that?"</li>
            </ul>

            <p><strong>Playing for Time:</strong></p>
            <ul>
                <li>"That is a complex issue. Let me think..."</li>
                <li>"How shall I put it..."</li>
            </ul>
        `
    },
    {
        title: "Practicing Speaking (AI & Life)",
        cat: "Tools",
        short: "Train fluency with AI Voice Mode & Real Life tips.",
        content: `
            <h3>How to Practice Speaking</h3>
            <p class="intro-text"><em>Speaking is a muscle. If you don't train it, it gets weak. You don't need a ticket to London to practice – you have a native speaker in your pocket.</em></p>

            <h4>1. The AI Voice Mode (Your 24/7 Partner)</h4>
            <p>Apps like <strong>ChatGPT, Gemini, or Grok</strong> have a specific "Voice Mode". It allows you to have a fluid conversation without typing. It is the best way to lose the fear of making mistakes.</p>
            
            <div class="highlight-box" style="background: #e0f2fe; border: 1px solid #7dd3fc; color: #0c4a6e;">
                <strong>How to start:</strong><br>
                1. Open the App on your phone.<br>
                2. Click the <strong>Headphone</strong> or <strong>Waveform Icon</strong> (usually bottom right).<br>
                3. Start talking! (Tip: Tell the AI to "Correct me if I make a mistake").
            </div>

            <h4>Scenario Ideas (Prompts)</h4>
            <p>Don't just say "Hello". Give the AI a role to make it fun:</p>
            <div class="table-wrap">
            <table>
                <tr><th>Scenario</th><th>What to say (Prompt)</th></tr>
                <tr><td><strong>The Debate</strong></td><td>"I believe that [Topic] is good/bad. I want you to argue against me. Let's have a debate."</td></tr>
                <tr><td><strong>The Job Interview</strong></td><td>"Pretend you are an employer at Google. Interview me for a student job. Ask tough questions."</td></tr>
                <tr><td><strong>Travel / Service</strong></td><td>"You are a waiter in a rude restaurant in London. I want to complain about my soup. Let's roleplay."</td></tr>
                <tr><td><strong>Small Talk</strong></td><td>"I want to practice small talk. Ask me about my hobbies and keep the conversation going."</td></tr>
            </table>
            </div>

            <h4>2. Other Ways to Practice</h4>
            <ul>
                <li><strong>Online Gaming (Discord):</strong> Switch to international servers (EU-West / US). Communicate in English during matches. It forces you to react quickly.</li>
                <li><strong>Narrate Your Life (Self-Talk):</strong> When you are alone, say out loud what you are doing. <em>"I am opening the fridge. I am looking for the milk."</em> It sounds weird, but it helps connect your brain to your mouth directly.</li>
                <li><strong>Shadowing (Netflix/YouTube):</strong> Watch a scene with English subtitles. Pause after a sentence and repeat it <strong>exactly</strong> like the actor (mimic the speed, melody, and accent).</li>
                <li><strong>Vacation Mode:</strong> Even if you are not abroad, try to order food in English at an Irish Pub or talk to tourists in your city to give directions.</li>
            </ul>
        `
    },
    {
        title: "General Checklist",
        cat: "Tools",
        short: "The \"Last Minute\" Polish (Content, Structure, Style).",
        content: `
            <h3>General Checklist (Self-Correction)</h3>
            <p class="intro-text"><em>Finished writing? Don't hand it in yet! Check your text against these criteria to save valuable points.</em></p>
            
            <h4>1. Content & Task Fulfillment</h4>
            <ul>
                <li>⬜ <strong>Operator Check:</strong> Did I strictly follow the operator? (e.g. NO opinion in a summary, NO analysis in an outline).</li>
                <li>⬜ <strong>Focus:</strong> Did I answer the <em>exact</em> question or did I just write down everything I know?</li>
                <li>⬜ <strong>Completeness:</strong> Are all W-questions answered (Summary) / all stylistic devices interpreted (Analysis)?</li>
            </ul>

            <h4>2. Structure & Logic</h4>
            <ul>
                <li>⬜ <strong>Red Thread:</strong> Is there a clear Intro, Body, and Conclusion?</li>
                <li>⬜ <strong>Paragraphs:</strong> Is the text visually divided? (One idea = one paragraph).</li>
                <li>⬜ <strong>Topic Sentences:</strong> Does the first sentence of each paragraph state what it is about?</li>
                <li>⬜ <strong>Connectives:</strong> Did I use <em>However, Therefore, Furthermore</em> to link my thoughts?</li>
            </ul>

            <h4>3. Style & Tone</h4>
            <ul>
                <li>⬜ <strong>Register:</strong> Is it formal enough? (Avoid: "kids", "stuff", "cool", "gonna").</li>
                <li>⬜ <strong>Variety:</strong> Did I vary my sentence beginnings? (Don't start every sentence with "The author" or "He").</li>
                <li>⬜ <strong>Objective vs. Subjective:</strong> Did I keep my opinion out of AFB I and II?</li>
            </ul>

            <h4>4. Language & Grammar</h4>
            <ul>
                <li>⬜ <strong>Tenses:</strong> Simple Present for Summary/Analysis? Past Tense for events in the past?</li>
                <li>⬜ <strong>Short Forms:</strong> Did I remove all short forms (I'm -> I am, don't -> do not)?</li>
                <li>⬜ <strong>False Friends:</strong> Check tricky words (<em>become</em> vs <em>get</em>, <em>spend</em> vs <em>donate</em>).</li>
                <li>⬜ <strong>He/She/It:</strong> The 's' must fit!</li>
                <li>⬜ <strong>Quotations:</strong> Are quotes integrated correctly? (e.g. using line numbers).</li>
            </ul>
        `
    },

    /* ============================================================
       GRADING / OPERATORS
       ============================================================ */
    {
        title: "Operators (Official List)",
        cat: "Grading",
        short: "Official definitions (AFB I-III).",
        content: `
            <p style="font-size: 0.8rem; color: #666; margin-bottom: 15px;">
                Source: <a href="https://bildung.bremen.de/sixcms/media.php/13/e_03-2015_a.pdf" target="_blank" style="color: #666; text-decoration: underline;">Bildungsplan Bremen (Pages 21-22)</a>
            </p>

            <h3>Official List of Operators</h3>
            <p>Definitions based on the official guidelines.</p>
            
            <div class="table-wrap">
            <table class="op-table" style="font-size: 0.9em;">
                <thead><tr><th>Operator</th><th>AFB</th><th>Definition</th></tr></thead>
                <tbody>
                    <tr><td><strong>outline</strong></td><td>I</td><td>give the main features, structure or general principles of a topic omitting minor details</td></tr>
                    <tr><td><strong>point out / state</strong></td><td>I</td><td>identify sth. and present it clearly</td></tr>
                    <tr><td><strong>present</strong></td><td>I</td><td>(re)structure sth. and write it down</td></tr>
                    <tr><td><strong>summarize</strong></td><td>I</td><td>give a concise account of the main points (condense)</td></tr>
                    
                    <tr><td><strong>describe / depict</strong></td><td>I/II</td><td>give a detailed account of what sth. is like</td></tr>
                    
                    <tr><td><strong>analyse / examine</strong></td><td>II</td><td>look at sth in detail and explain its meaning or structure</td></tr>
                    <tr><td><strong>characterize</strong></td><td>II</td><td>give a detailed account of the typical or most noticeable qualities or features of a person, place or thing</td></tr>
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
                    
                    <tr><td><strong>create / imagine</strong></td><td>III</td><td>produce sth. that has not existed before / form a picture in your mind</td></tr>
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