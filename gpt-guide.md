# Effective ChatGPT for Developers — A Beginner → Advanced Guide

*A friendly, practical guide to get the **best answers** from ChatGPT (or any similar LLM) when you're doing software development. Designed for absolute beginners and developers who want to level up their prompt game.*

---

## Why this guide?

If you're a developer, ChatGPT can be your rubber-duck, pair-programmer, code reviewer, bug-hunter, and documentation writer — if you ask it the right way. This guide teaches you **how** to ask so you get accurate, actionable, and safe responses.

---

# 1. Very Basics — what is ChatGPT and how it helps developers

* **ChatGPT = a Large Language Model (LLM)** trained on a large set of text. It predicts the next word/token and can produce code, explanations, and structured outputs.
* It does **not** run your code (unless you use tools that execute code). It **generates** code and explanations based on patterns it learned.

**Simple tip:** Treat it like a very knowledgeable engineer who can be mistaken. Always validate results (run tests, review code).

---

# 2. Quick first steps for absolute beginners

1. Open ChatGPT (or your LLM interface) and type a simple question. Example:

```text
"How do I reverse a string in C#? Show a short example and explain complexity."
```

2. Read the answer and **run the code** locally.
3. If it's wrong, reply with the error and ask it to fix the code.

**Why this works:** LLMs are stateless by default — each message adds context. Start simple, then iterate.

---

# 3. Set a developer persona in ChatGPT (Custom Instructions)

To get consistently helpful answers, set up your ChatGPT *persona* through the **Custom Instructions** (or system message in API).

**Copy-paste ready (Custom Instructions)**

**What I want ChatGPT to know about me:**

```
I am a software developer who primarily works in .NET (C#) and JavaScript. I use ChatGPT for coding, debugging, architecture, and documentation. I like short, clear answers with examples and a one-paragraph summary.
```

**How I want ChatGPT to respond:**

````
- Use simple English, explain with real-world analogies when helpful.
- Provide runnable code snippets (C# by default) and mark them with ```csharp.
- When suggesting fixes, always add a short explanation of why the change helps.
- If the solution has trade-offs, list them briefly.
- If uncertain about facts that could change (versions, release dates), say "I may be out of date" and offer to check.
````

After adding these to Custom Instructions, ChatGPT will tend to use that style automatically.

---

# 4. Core prompting techniques (Basic → Effective)

### 4.1 Be specific

Bad: `"Fix my code"`
Better: `"Fix this C# method that throws NullReferenceException when list is empty. Show minimal fix and a one-line explanation."`

### 4.2 Provide context & minimal reproducible example (MRE)

* Give the smallest code that reproduces the problem.
* Include the error message and stack trace.

Example prompt:

````text
"In this C# snippet I get NullReferenceException at line 12. Here's the code: <code>. Please show a fix and explain root cause."```

### 4.3 Ask for output format
Ask the assistant to respond in a format you can consume. Examples:
- `Respond with only the fixed C# method in a single code block.`
- `Return a JSON with keys: explanation, patch (unified diff), tests`.

### 4.4 Use delimiters for code and logs
Wrap code or logs with triple backticks to avoid confusion.

```text
````

Your code here

```
```

This prevents the model from misunderstanding your input.

---

# 5. Intermediate prompts — make it helpful and testable

### 5.1 Few-shot examples

Show one or two examples of the style you want.

Example: "Write functions like this sample: \[example]. Now implement X with same style."

### 5.2 Ask for tests

Always ask: `Add unit tests (xUnit/NUnit) that cover happy-path and edge cases.`

### 5.3 Ask for complexity/security trade-offs

* `Explain time/space complexity (Big-O).`
* `List security concerns and mitigations for this endpoint.`

### 5.4 Request explanations for novices

`Explain the change like I'm a junior developer. Include a one-line summary, then a step-by-step explanation.`

---

# 6. Advanced prompting and workflows

### 6.1 Step-by-step decomposition

If the task is big, ask the model to **plan** first:

* `First provide a 5-step plan.`
* Then: `Execute step 1 and show code`.

This reduces hallucinations and produces structured output.

### 6.2 Role-play / personas

Ask the assistant to act as a specific role: `"Act as a senior .NET architect reviewing this microservice design."`

### 6.3 Use constraints to guide output

* `Make the function < 30 lines.`
* `Do not use third-party libraries.`
* `Return only JSON.`

Constraints force concise and usable answers.

### 6.4 Iterative refinement

Treat the model like a pair-programmer: ask for a change, review, then ask for a refinement.

### 6.5 Use function calling / tools (API advanced)

If using the OpenAI API or an LLM with function calling: define JSON schemas for desired outputs. This makes responses structured and machine-parseable.

**Simple example schema idea (pseudo):**

```json
{"name":"fix-suggestion","arguments":{"explanation":"string","patch":"string"}}
```

(Implementing function-calling is an API-level feature — consult the provider docs.)

---

# 7. How to ask for debugging help (a step-by-step workflow)

1. Provide the **minimal reproducible example** (MRE).
2. Provide the **error message and stack trace**.
3. Describe what you tried and what you expect.
4. Ask for a **root cause analysis** and then a **minimal fix**.
5. Ask for **unit tests** that reproduce and verify the fix.

**Example prompt** (good):

````
I have a C# method that throws NullReferenceException. Code: ```csharp
public string JoinNames(List<string> names) { return string.Join(",", names); }
````

Error: System.NullReferenceException: Object reference not set to an instance of an object.
Please: (1) explain the root cause in 2 lines, (2) provide minimal corrected code, (3) add two unit tests (xUnit) — one for null input and one for normal input.

```

---

# 8. Code review and refactor prompts

- "Refactor this method to be thread-safe and explain changes."
- "Suggest performance improvements and show a benchmark snippet." (ask for BenchmarkDotNet example if needed)
- "Convert this synchronous method to async/await and explain impact."

**Ask for**: before/after code, explanation, tests, and a list of trade-offs.

---

# 9. Prompt templates — copy & use

Below are ready-to-use prompts. Replace placeholders.

**A. Implement feature (C#)**
```

Implement a method `{{MethodSignature}}` in C#. Requirements:

* Inputs: {{inputs}}
* Behavior: {{behavior}}
* Performance: target O(n) if possible
  Return only a C# code block with the method and accompanying small helper if needed. Add one-line explanation.

```

**B. Debug & patch**
```

I have this code (in triple backticks). It throws: {{error}} with stack trace: {{stack}}. Provide:

1. brief root cause, 2) minimal patch (only changed lines in a unified diff), 3) unit tests that fail before patch and pass after.

```

**C. Refactor for readability & tests**
```

Refactor the following C# class for clarity, ensure SOLID principles where possible, and add xUnit tests for main behaviors. Return code blocks for refactored class and tests.

```

**D. Generate OpenAPI**
```

Here is a controller code. Generate an OpenAPI 3.0 spec for it. Provide only valid YAML.

```

---

# 10. Working with examples and logs (best practices)

- **Trim logs** to the minimal lines needed for context (error + a few preceding lines).
- **Mask sensitive information** (API keys, tokens, passwords) before sharing.
- **Include environment info**: OS, .NET version, package versions.

**Example tail of a good bug report:**
```

OS: Windows 11
.NET SDK: 8.0.100
App logs:
System.NullReferenceException: Object reference not set to an instance of an object.
at MyApp.Service.DoWork() in /src/Service.cs\:line 42

```

---

# 11. Avoiding common pitfalls (hallucinations & ambiguity)

- Don't ask for factual claims (e.g., current release dates) without verification. If you need current facts, ask the model to say "I may be out of date" or use a tool that can browse.
- Avoid vague prompts: include desired language, framework, and version.
- Ask for citations when model states facts that matter (security vulnerabilities, CVE numbers, etc.).

---

# 12. Testing the model answers — how to validate

- **Run the code** and write unit tests.
- Use static analysis tools (Roslyn analyzers, dotnet format, SonarCloud) to validate code quality.
- For performance changes, use BenchmarkDotNet.

**Sample validation prompt:**
```

Provide three xUnit tests for the function you just wrote. Tests should be runnable with `dotnet test`.

```

---

# 13. Security & privacy when using LLMs

- Never paste secrets (private keys, production connection strings). Replace them with placeholders.
- If sharing logs, redact emails, IPs, tokens.
- Be mindful of sensitive business logic that should not be exposed to third-party services.

---

# 14. Advanced patterns for power users

### 14.1 Chaining calls (Tooling workflow)
1. Ask the LLM to create a small plan.
2. Execute step 1 locally.
3. Return results to LLM and ask for step 2.

This is like a tiny REPL where you and the LLM take turns.

### 14.2 Programmatic usage (API tips)
- Use `system` messages for immutable persona and `user` messages for actual tasks.
- Use function-calling to get structured responses (JSON) and to automatically trigger local functions.

### 14.3 Working with multiple files
When asking the model to modify files, provide file names and contents in a structured way, and request patches (unified diff) rather than full rewritten files.

Example:
```

FILE: src/Program.cs <contents>

FILE: src/Service.cs <contents>

Please provide a unified diff patch that fixes bug X.

```

---

# 15. Practical .NET-specific examples (copy & paste)

### 15.1 Debug NullReferenceException (good prompt)
```

I have this C# code: \`\`\`csharp
public string JoinNames(List<string> names) { return string.Join(",", names); }

```
When I call JoinNames(null) it throws NullReferenceException. Show minimal fix and add two xUnit tests: one for null input and one normal input.
```

### 15.2 Convert sync to async (good prompt)

```
Convert this synchronous method to async using Task, keep same behavior, and provide unit tests illustrating use. Explain deadlock avoidance when using .Result/.Wait().
```

---

# 16. Practical iteration examples (how to refine answers)

* If code is missing edge cases: "Add handling for X and re-run tests."
* If output too verbose: "Return only a minimal code change in a single code block."
* If performance not good: "Suggest faster approach and provide benchmark skeleton."

---

# 17. Do's & Don'ts (cheat sheet)

**Do**

* Provide MRE, error, and environment.
* Ask for tests and complexity analysis.
* Use constraints and ask for structured output.

**Don't**

* Share secrets.
* Use the model as the single source of truth for security or legal matters.
* Expect perfect solutions every time — always validate.

---

# 18. Quick-reference prompt templates (one-liners)

* `"Explain this code to me like I'm a junior dev: <code>."`
* `"Fix this bug; return only a unified diff."`
* `"Refactor this class for SOLID principles and add xUnit tests."`
* `"Create an OpenAPI 3.0 YAML from this ASP.NET controller."`
* `"Add telemetry and OpenTelemetry hooks to this .NET app; show code snippets."`

---

# 19. Final tips — become an efficient prompt engineer

1. Practice — the more you iterate with LLMs, the better prompts you’ll write.
2. Keep prompts small and focused. Large tasks: break into steps.
3. Save prompt templates you use often.
4. Use structured outputs (JSON, diffs) when you want machine-consumable results.


# ChatGPT (LLM) का प्रभावी उपयोग — डेवलपर्स के लिए शुरुआती से उन्नत गाइड

> इस गाइड का उद्देश्य: एकदम शुरुआती डेवलपर को भी यह सिखाना कि ChatGPT / कोई भी LLM कैसे प्रभावी ढंग से इस्तेमाल करें — बेसिक से लेकर एडवांस तक, स्टेप-बाय-स्टेप और सरल भाषा में।

---

## Table of Contents

1. परिचय — ChatGPT क्या है और डेवलपर के लिए क्यों उपयोगी है
2. सबसे पहले कदम — सरल शुरुआत
3. ChatGPT persona (Custom Instructions) कैसे सेट करें
4. बुनियादी (Basic) प्रॉम्प्ट टेक्निक्स
5. मध्य (Intermediate) स्तर — टेस्टेबल और व्यावहारिक प्रॉम्प्ट
6. उन्नत (Advanced) पैटर्न और वर्कफ़्लो
7. Debugging के लिए सही वर्कफ़्लो (स्टेप-बाय-स्टेप)
8. कोड रिव्यू, रिफैक्टर और परफ़ॉर्मेंस अनुरोध कैसे दें
9. तैयार-इस्तेमाल प्रॉम्प्ट टेम्पलेट्स (Copy & Paste)
10. लॉग्स, एनवाइरनमेंट और संवेदनशील जानकारी साझा करने के नियम
11. मॉडल की सीमाएँ और गलतियों से कैसे बचें
12. सुरक्षा और गोपनीयता बेस्ट प्रैक्टिस
13. API/फंक्शन-कॉल और प्रोग्रामैटिक उपयोग के सुझाव
14. .NET/ C#-विशेष उदाहरण और पैटर्न
15. Do’s & Don’ts — त्वरित चेकलिस्ट
16. शॉर्ट-टेम्पलेट कलेक्शन (One-liners)
17. आगे क्या करें — अभ्यास, टूल्स और संसाधन

---

## 1. परिचय — ChatGPT क्या है और डेवलपर के लिए क्यों उपयोगी है

* **ChatGPT = एक LLM (Large Language Model)** जो टेक्स्ट पैटर्न सीखकर जवाब बनाता है।
* यह *कोड लिख सकता*, *समझा सकता*, *रिफैक्टर कर सकता*, *बग ढूंढने में मदद कर सकता* और *डॉक्यूमेंटेशन बना सकता* है।

**महत्वपूर्ण बात:** यह "जानकारी" जनरेट करता है; यह आपका रनटाइम नहीं है — यानी मॉडल को हमेशा सत्य मानकर भरोसा मत कीजिए। कोड को चलाकर वेरिफाई करें।

---

## 2. सबसे पहले कदम — सरल शुरुआत

1. छोटा सवाल के साथ शुरू करें — उदाहरण: `"C# में string reverse कैसे करें? एक छोटा उदाहरण और समय जटिलता बताइए।"`
2. आया हुआ कोड लोकल मशीन पर चलाइए।
3. अगर एरर आए तो पूरा एरर और छोटी-सी reproduction जानकारी देकर पूछिए: `"यह एरर आ रहा है: <stacktrace>. मेरी मशीन पर .NET 8 है."`

**क्यों:** छोटे-छोटे इटरेशन से मॉडल आपको बेहतर, प्रैक्टिकल जवाब देता है।

---

## 3. ChatGPT persona (Custom Instructions) कैसे सेट करें

ChatGPT में "Custom Instructions" सेट करने से हर जवाब आपकी पसंद के हिसाब से आता है।

**कहाँ सेट करें (UI में):**

* ChatGPT में Settings (गियर आइकन) → Custom Instructions
* दो फील्ड मिलेंगे: "What would you like ChatGPT to know about you?" और "How would you like ChatGPT to respond?"

**सुझाव — कॉपी-पेस्ट करने के लिए (English और Hindi दोनों दिए हैं):**

**(A) What I want ChatGPT to know about me:**

```text
I am a software developer focusing on .NET (C#) and JavaScript. I use ChatGPT for coding, debugging, architecture, and documentation. I prefer short, runnable code, clear explanations with real-world analogies, and trade-offs when relevant.
```

**(Hindi translation for your reference):**

```text
मैं एक सॉफ़्टवेयर डेवलपर हूँ, मुख्यतः .NET (C#) और JavaScript पर काम करता/करती हूँ। मैं ChatGPT का उपयोग कोडिंग, डिबगिंग, आर्किटेक्चर और डॉक्यूमेंटेशन के लिए करता/करती हूँ। मुझे संक्षिप्त, रन करने योग्य कोड, सरल व्याख्याएँ और trade-offs पसंद हैं।
```

**(B) How I want ChatGPT to respond:**

```text
- Use simple language and real-world analogies when helpful.
- Provide runnable code (prefer C#) inside code blocks and include a one-line summary at top.
- When fixing bugs, give a minimal patch and one-line explanation for why it fixes the issue.
- If uncertain about facts (versions/releases), mention "I may be out of date".
```

**(Hindi reference):**

```text
- सरल भाषा और आवश्यक होने पर वास्तविक दुनिया के उदाहरण दें।
- चलाने योग्य कोड ब्लॉक्स दें (प्राथमिकता C#), और ऊपर एक-लाइन सारांश दें।
- बगfix में मिनिमल पैच और एक-लाइन कारण बताएं।
- यदि तथ्य अस्थिर हो सकते हैं, तो "मैं अपडेटेड नहीं हो सकता" बताएं।
```

**नोट:** आप उपरोक्त को सीधे Custom Instructions में पेस्ट कर सकते हैं। इससे मॉडल आपके काम करने के तरीके को समझकर जवाब देगा।

---

## 4. बुनियादी (Basic) प्रॉम्प्ट टेक्निक्स

### 4.1 स्पष्ट (Specific) बनें

* खराब: `"Fix my code"`
* बेहतर: `"C# में यह मेथड NullReferenceException दे रहा है — छोटा फिक्स और 1 लाइन में कारण बताइए।"`

### 4.2 Minimal Reproducible Example (MRE) दें

* केवल वही कोड दें जो समस्या पैदा कर रहा हो।
* एरर मैसेज और स्टैक ट्रेस डालें।

### 4.3 आउटपुट फॉर्मैट माँगे

* `"सिर्फ़ सही किया हुआ मेथड एक C# कोड ब्लॉक में दें।"`
* या `"JSON में जवाब दें: {explanation, patch, tests}"`

### 4.4 कोड और लॉग्स के लिए डेलिमिटर का उपयोग करें

Triple backticks (\`\`\`) का प्रयोग करें ताकि मॉडल सही तरह से समझे।

---

## 5. मध्य (Intermediate) स्तर — टेस्टेबल और व्यावहारिक प्रॉम्प्ट

### 5.1 Few-shot उदाहरण

* आप एक छोटा उदाहरण दिखाएँ कि चाहते हुए स्टाइल क्या है और कहें: "इसी स्टाइल में X बनाइए।"

### 5.2 यूनिट टेस्ट माँगें

* `"xUnit में यूनिट टेस्ट जोड़िए — happy-path और edge-cases शामिल करें।"`

### 5.3 Trade-offs और सुरक्षा

* `"समय/स्पेस जटिलता बताइए और सुरक्षा चिंताएँ (input validation, injection) लिखिए।"`

### 5.4 नौसिखिए को समझाइए विकल्प

* `"बदलाव को ज्यूनीयर डेवलपर की तरह समझाइए — एक लाइन सारांश, फिर step-by-step।"`

---

## 6. उन्नत (Advanced) पैटर्न और वर्कफ़्लो

### 6.1 Step-by-step decomposition

* पहिले: `"एक 5-step plan दें।"`
* फिर: `"Step 1 अमल में लाओ और कोड दिखाइए।"`

### 6.2 रोल-प्ले (Personas)

* `"Act as a senior .NET architect and review this microservice design."`

### 6.3 Constraints (बाधाएँ)

* `"Method को 30 lines से कम रखें"` या `"कोई external library इस्तेमाल न करें"`

### 6.4 Iterative refinement

* छोटे-छोटे बदलाव पूछें: "Edge-case जोड़िये" → "बदलाव के बाद टेस्ट चलाइए"।

### 6.5 Function-calling और structured output (API उपयोगकर्ताओं के लिए)

* यदि आप API इस्तेमाल कर रहे हैं तो `function-calling` से JSON आउटपुट लें ताकि आपका प्रोग्राम उसे पार्स कर सके।

---

## 7. Debugging के लिए सही वर्कफ़्लो (स्टेप-बाय-स्टेप)

1. Minimal reproducible example दें (code)।
2. एरर मैसेज और स्टैक ट्रेस दे।
3. आपने क्या ट्राई किया — बताइए।
4. पूछिए: (A) root cause 2 लाइन में, (B) छोटा फ़िक्स, (C) 2 xUnit टेस्ट (null और normal)।

**उदाहरण प्रॉम्प्ट:**

````text
मेरा C# मेथड यह है: ```csharp
public string JoinNames(List<string> names) { return string.Join(",", names); }
````

अगर names null है तो यह NullReferenceException देता है। कृपया: (1) root cause 2 लाइन में बताइए, (2) मिनिमल fix दीजिए, (3) दो xUnit टेस्ट लिखिए — एक null के लिए और एक सामान्य इनपुट के लिए।

````

---

## 8. कोड रिव्यू, रिफैक्टर और परफ़ॉर्मेंस अनुरोध कैसे दें
- "इस मेथड को thread-safe बनाइए और बदलाव समझाइए।"
- "इसको async/await में बदलिए और deadlock से बचने के तरीके बताइए।"
- "परफॉर्मेंस सुधार सुझाइए और BenchmarkDotNet का छोटा स्निपेट दीजिए।"

**हमेशा मांगे:** before/after code, explanation, tests, और trade-offs।

---

## 9. तैयार-इस्तेमाल प्रॉम्प्ट टेम्पलेट्स (Copy & Paste)

**A. Feature implement (C#)**
```text
Implement a method `{{MethodSignature}}` in C#. Requirements:
- Inputs: {{inputs}}
- Behavior: {{behavior}}
- Performance: target O(n) if possible
Return only a C# code block with the method and accompanying small helper if needed. Add one-line explanation.
````

**B. Debug & patch**

```text
I have this code (in triple backticks). It throws: {{error}} with stack trace: {{stack}}. Provide:
1) brief root cause, 2) minimal patch (only changed lines in a unified diff), 3) unit tests that fail before patch and pass after.
```

**C. Refactor for readability & tests**

```text
Refactor the following C# class for clarity, ensure SOLID principles where possible, and add xUnit tests for main behaviors. Return code blocks for refactored class and tests.
```

**D. Generate OpenAPI**

```text
Here is a controller code. Generate an OpenAPI 3.0 spec for it. Provide only valid YAML.
```

---

## 10. लॉग्स, एनवाइरनमेंट और संवेदनशील जानकारी साझा करने के नियम

* **कम से कम** लॉग पंक्तियाँ दें जो context दे: एरर + कुछ पहले की पंक्तियाँ।
* **सेंसिटिव डाटा**: API keys, tokens, पासवर्ड हटाएँ या `REDACTED` कर दें।
* एनवाइरनमेंट डालें: OS, .NET SDK version, पैकेज वर्शन।

**नमूना:**

```
OS: Windows 11
.NET SDK: 8.0.100
App logs:
System.NullReferenceException: Object reference not set to an instance of an object.
 at MyApp.Service.DoWork() in /src/Service.cs:line 42
```

---

## 11. मॉडल की सीमाएँ और गलतियों से कैसे बचें

* LLM factual गलती (hallucination) कर सकता है — अगर कोई समय-नाज़ुक तथ्य चाहिए तो कहें: "Please check latest source" या use tools with browsing.
* बड़े/अस्पष्ट प्रॉम्प्ट से बचें — छोटे, स्पष्ट चरण बेहतर हैं।
* जब मॉडल कोई सुरक्षा-संबंधी दावा करे, स्रोत माँगे।

---

## 12. सुरक्षा और गोपनीयता बेस्ट प्रैक्टिस

* कभी भी production secrets/DB connection strings/प्राइवेट कुंजी साझा न करें।
* लॉग शेयर करने से पहले IPs/emails/hash को redact करें।
* बिज़नेस-सेंसिटिव लॉजिक साझा करने पर सोचें — कभी-कभी ऑन-प्रेमises/कंपनी-प्राइवेट LLM इस्तेमाल करें।

---

## 13. API/फंक्शन-कॉल और प्रोग्रामैटिक उपयोग के सुझाव

* `system` संदेश में persona रखें; `user` में असली टास्क दें।
* function-calling से JSON बनवाएं ताकि आपका एप्लिकेशन रिज़ल्ट को पार्स कर सके।
* बड़े multi-file बदलाव के लिए unified diff माँगे।

---

## 14. .NET/ C#-विशेष उदाहरण और पैटर्न

### 14.1 NullReference fix — practical prompt & answer (उदाहरण)

**प्रॉम्प्ट:**

````text
C# code: ```csharp
public string JoinNames(List<string> names) { return string.Join(",", names); }
````

Throws NullReferenceException when names is null. Provide minimal fix and two xUnit tests.

````
**एक संभावित फिक्स (ChatGPT से अपेक्षा):**
```csharp
public string JoinNames(List<string> names) { return string.Join(",", names ?? Enumerable.Empty<string>()); }
````

और दो xUnit टेस्ट: null input और normal input के लिए।

### 14.2 Convert sync to async (उदाहरण)

**प्रॉम्प्ट:** `Convert this sync method to async using Task and show tests.`
**टिप्स:** Avoid `.Result`/`.Wait()` on ASP.NET contexts (deadlock) — use `async` all the way.

---

## 15. Do’s & Don’ts — त्वरित चेकलिस्ट

**Do**:

* MRE दें, error और environment बताइए
* यूनिट टेस्ट माँगे
* JSON/Unified-diff जैसे structured formats माँगे

**Don’t**:

* Secrets शेयर न करें
* मॉडल को absolute authority मत मानिए — हमेशा वेरिफाई करें

---

## 16. शॉर्ट-टेम्पलेट कलेक्शन (One-liners)

* `"Explain this code to me like I'm a junior dev: <code>"`
* `"Fix this bug; return only a unified diff."`
* `"Refactor this class for SOLID and add xUnit tests."`
* `"Generate OpenAPI 3.0 YAML from this ASP.NET controller."`

---

## 17. आगे क्या करें — अभ्यास, टूल्स और संसाधन

* अभ्यास: रोज़ाना 2 छोटे प्रॉम्प्ट बनाइए और iterate कीजिए।
* टूल्स: dotnet CLI, xUnit, BenchmarkDotNet, Roslyn analyzers
* प्राइवेट/ऑन-प्रेम LLM के लिए: HuggingFace/Local LLM या कम्पनी-ऑन-प्रेम समाधान विचार करें (गोपनीयता के लिए)।
