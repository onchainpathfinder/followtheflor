---
name: followtheflor-article-writer
description: Writes SEO-optimised blog articles for followtheflor.com across three content pillars — FLOR RUNS (running/fitness), FLOR EXPLORES (Malta/Gozo hidden gems), and FLOR ONCHAIN (crypto compliance). Use this skill whenever Flor says "write content for followtheflor", "write an article about running", "write about Malta or Gozo", "new article for followtheflor", "followtheflor post about [topic]", "write me a running piece", "Malta hidden gem article", "draft a Gozo article", or "content for [runs/explores]". Also activate when given a topic + rough notes and asked to produce a blog post in Flor's voice. Do NOT use for floronchain.com crypto/AML articles, Instagram captions only, newsletter-only drafts, or short social posts without an accompanying article.
---

## Overview

This skill produces complete, publish-ready blog articles for followtheflor.com. It reads Flor's brand context, identifies the correct content pillar, researches trending content in that niche, and writes in Flor's voice: confident, direct, specific, occasionally irreverent — "your smartest friend talking over espresso in Valletta."

Before writing anything, read `references/brand-context.md` for brand voice rules and MDX format requirements.

---

## Workflow

### Step 1: Identify the content pillar
Determine which pillar the request falls under:
- **FLOR RUNS** → running, fitness, training, injury recovery, races, swimming, hiking
- **FLOR EXPLORES** → Malta/Gozo hidden spots, coastal walks, local food, slow travel, Mediterranean lifestyle
- **FLOR ONCHAIN** → crypto, AML, compliance, Web3, regulation (note: this pillar should primarily use the floronchain skill — only write here if Flor explicitly asks for a followtheflor-branded piece)

### Step 2: Write a keyword plan BEFORE drafting
Do this before writing any content — it's a non-negotiable SEO rule.

Identify:
- One primary keyword (what someone would Google to find this)
- 2–5 secondary keywords
- Search intent: informational / commercial / transactional

Confirm the plan makes sense before proceeding. If the topic is too vague to keyword-plan, ask Flor to be more specific.

### Step 3: Research what's already ranking
Search for the top-performing content on this topic. Look for:
- What structure works (listicle? narrative? how-to?)
- What length performs well in this niche
- What questions the audience is actually asking
- Gaps you can exploit

For RUNS content: model on Lisa Migliorini's style — personal, raw, no wellness-bro energy, real numbers and real struggles.
For EXPLORES content: model on successful travel bloggers (Nomadic Matt, The Blonde Abroad) — authoritative and specific, like a local friend not a guidebook.

### Step 4: Draft the article

**Length:** 800–1200 words. Not longer. Readers won't finish it if it's longer.

**Structure:**
- Opening hook (2–3 lines max, no throat-clearing)
- Body with H2 subheadings (3–4 sections)
- Closing CTA (question that invites comments)

**Voice rules:**
- First person, conversational
- Short paragraphs (2–4 sentences)
- Mix short punchy sentences with longer ones for rhythm
- Specific details beat generic statements every time
- Italian/Maltese sprinkled naturally where it fits: "dai", "basta", "allura"
- NEVER: corporate speak, toxic positivity, "So excited!", "Blessed!", generic wellness copy

**Running content specific rules:**
- Lead with the experience, not the backstory
- Flor's knee injury / recovery is available as a personal hook — use it when relevant, not as filler
- Real talk over inspiration porn — "I ignored it for three days and kept running" lands better than "I listened to my body"
- Less drama, more relatable. Friend venting > TED talk about identity.

**Explores content specific rules:**
- Lead with the contrast (crowded tourist spot vs this place)
- Always include: exact directions, best time to visit, honest warnings (steep hills, no shade, bring water)
- Photography moments: describe the light, the colour, what makes it visually worth the trip
- Leave out generic Malta tourism copy — write what the postcards don't show

### Step 5: Add images

Place 3–4 images throughout the article. For each image:
- If Flor has provided a photo: use it and write descriptive alt text
- If no photo provided: find a relevant high-quality image from Unsplash (use actual URL) and mark with `📸 [Your photo here — description]` so Flor can swap it

### Step 6: Format as MDX

Output the complete article in MDX format with correct frontmatter:

```mdx
---
title: "Article Title Here"
description: "140–160 char meta description with CTA"
date: "YYYY-MM-DD"
pillar: "runs" | "explores" | "onchain"
tags: ["tag1", "tag2", "tag3"]
primaryKeyword: "main keyword"
readingTime: "X min read"
---
```

Save to the correct folder:
- `content/runs/` for FLOR RUNS
- `content/explores/` for FLOR EXPLORES
- `content/onchain/` for FLOR ONCHAIN

### Step 7: Generate companion content

After the article, automatically produce:

**Instagram caption:**
```
Line 1: Hook (bold statement or question)
Line 2–3: The insight or story
Line 4: CTA
.
.
#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5
```

**Video script (60–90 seconds):**
```
[HOOK — first 3 seconds]
One punchy line that stops the scroll.

[BODY — 45–70 seconds]
3 key points max. Conversational, not scripted.
Reference Malta / real life where possible.

[CTA — last 5–10 seconds]
"Full article at followtheflor.com"
```

---

## Output Format

Deliver in this order:
1. **Keyword plan** (5 lines max)
2. **Full MDX article** (saved to correct content/ folder)
3. **Instagram caption**
4. **Video script**

---

## Quality Standard

A perfect output:
- Sounds unmistakably like Flor — not a generic AI blog post
- Has a specific, memorable hook that doesn't start with "I"
- Includes real details (place names, times of day, specific sensations)
- Passes the "would I share this?" test — not just informative but worth reading
- SEO fundamentals in place: keyword in title, first 100 words, one H2, meta description
- Images placed naturally, not dumped at the top

A failed output:
- Reads like a listicle anyone could write
- Opens with "In today's article, we'll explore..."
- Uses phrases like "game-changer", "dive deep", "at the end of the day"
- Is over 1200 words with no reason to be
- Has no specific Malta / personal detail

---

## Edge Cases

**Vague input ("write a running article"):** Ask: "What do you want it to be about? Give me a topic, experience, or route — even just a few words."

**No keyword plan possible (topic too broad):** Narrow it. "Running in Malta" → "best running routes Malta" or "running after knee injury Malta".

**Flor provides her own photos:** Use them. Write alt text that describes the photo specifically, not generically.

**Request overlaps with floronchain content (e.g., "crypto and fitness"):** Confirm which brand it's for before writing.

**Topic already covered on site:** Flag it, suggest a different angle to avoid cannibalization.

---

## References

Read `references/brand-context.md` before writing any content. It contains the full brand voice guide, SEO rules, and content pillar definitions.
