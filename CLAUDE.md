# CLAUDE.md — followtheflor.com

> Read this file at the start of every session. Follow all rules below without being reminded.

---

## 🌸 Brand Identity

- **Site:** followtheflor.com
- **Brand name:** FLOR
- **Author:** Flor (Floriana — based in Malta)
- **Tagline:** "Fierce minds. Bold moves."
- **Mission:** Combine crypto/compliance expertise, fitness, and Mediterranean lifestyle into a personal brand that educates, inspires, and earns
- **Positioning:** One of the few women in crypto compliance who also lives the lifestyle. Real expertise, real life, no corporate BS.

### Content Pillars

| Pillar | URL Slug | Topics |
|---|---|---|
| FLOR ONCHAIN | `/onchain` | Crypto AML, MiCA, iGaming compliance, Web3, red flag guides, regulation in plain English |
| FLOR RUNS | `/runs` | Running, swimming, hiking, training logs, races, fitness in Malta |
| FLOR EXPLORES | `/explores` | Malta hidden spots, slow travel, Mediterranean food, coastal walks, local culture |

---

## 🗣️ Brand Voice & Tone

- **Tone:** Confident, direct, occasionally irreverent. Never corporate or stiff.
- **Style:** First person, conversational — like your smartest friend talking over espresso in Valletta
- **Languages:** English primary. Italian/Maltese used naturally: "dai" (come on), "basta" (enough), "allura" (so then)
- **Flor is:** A compliance expert in her 40s who swims at dawn, hikes Maltese cliffs, and knows more about MiCA than most lawyers
- **NEVER:** Generic, fluffy, over-explained, preachy, toxic positivity, corporate speak, fake authenticity
- **ALWAYS:** Specific, real, actionable — earned opinions over empty takes

### Voice by Pillar
- **ONCHAIN:** Authoritative but accessible. Make complex compliance/crypto concepts human. No jargon without explanation.
- **RUNS:** Raw and honest. Training highs, hard days, real numbers. No wellness-bro energy.
- **EXPLORES:** Vivid and local. Places tourists miss. The real Malta, not the postcard version.

### Visual Identity (for alt text and image descriptions)
- Black backgrounds, neon pink/cyan accents, bold typography
- "Nightclub meets boardroom"
- Photography: editorial quality, Malta locations — rooftops, harbour, gym, working on laptop

---

## 🔧 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Blog:** Contentlayer + MDX
- **Newsletter:** Beehiiv (embedded signup forms)
- **Products/payments:** Lemon Squeezy
- **Deploy:** Vercel
- **Domain:** followtheflor.com (Namecheap DNS → Vercel)

### Project File Structure

```
followtheflor/
├── CLAUDE.md
├── tasks/
│   ├── todo.md          ← keyword plans, task lists
│   └── lessons.md       ← log mistakes and patterns here
├── app/
│   ├── page.tsx         ← homepage
│   ├── onchain/
│   ├── runs/
│   └── explores/
├── content/
│   ├── onchain/         ← MDX blog posts
│   ├── runs/
│   └── explores/
└── components/
    ├── ui/
    ├── layout/
    └── blog/
```

---

## 📈 SEO Rules

### 1. Plan Before Writing
- Identify search intent BEFORE writing (informational, commercial, transactional)
- Write keyword plan to `tasks/todo.md` with H2 outline before any draft
- If content misses intent, STOP and re-plan — don't keep writing
- Confirm plan matches brief before starting long-form content

### 2. Keyword Strategy
- One primary keyword, 2–5 secondary, plus semantic/LSI vocabulary
- Primary keyword in: title, H1, first 100 words, one H2, meta description
- Never force exact-match — use natural variations throughout
- Flag cannibalization risks before writing new content

### 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules that prevent the same SEO mistake from recurring
- Review lessons.md at the start of every new content session

### 4. Verification Checklist (before marking content done)
- [ ] Title tag: 50–60 chars
- [ ] Meta description: 140–160 chars with CTA
- [ ] Keyword density: 1–2%, never more
- [ ] Every image has descriptive alt text
- [ ] Every page has at least 2 internal links
- [ ] Ask: "Does this satisfy intent better than the top 3 results?"

### 5. Quality Standard
- For any content piece: pause and ask "does this beat what's ranking?"
- If copy feels thin or generic: rewrite until it earns its place
- Don't over-engineer simple edits — minimal impact principle

### 6. Autonomous SEO Fixing
- When given a brief or audit: just do it, no hand-holding needed
- Point at specific issues with line-level fixes, then resolve them
- Fix thin content and missing meta tags without being told how

---

## 🎬 Video & Social Content Rules

### Video Script Format
Every blog post should have a companion video script:

```
[HOOK — first 3 seconds]
One punchy line that stops the scroll. Question or provocative statement.

[BODY — 45–70 seconds]
3 key points maximum. Conversational, not scripted-sounding.
Reference Malta / real life where possible.

[CTA — last 5–10 seconds]
"Link in bio" / "Full guide at followtheflor.com" / "Subscribe for more"
```

### Social Repurposing Pipeline
Every piece of content should produce:
1. **Blog post** (MDX, 800–1200 words, SEO-optimised)
2. **Instagram caption** (3–5 lines, ends with question or CTA, 5 hashtags)
3. **LinkedIn post** (professional tone, 150 words max, no fluff)
4. **Video script** (60–90 seconds, hook in 3 seconds)
5. **Newsletter snippet** (2–3 paragraphs for Beehiiv, links back to full post)

### Instagram Caption Format
```
Line 1: Hook (bold statement or question)
Line 2–3: The insight or story
Line 4: CTA
.
.
#hashtag1 #hashtag2 #hashtag3 #hashtag4 #hashtag5
```

### LinkedIn Post Format
- Open with a strong first line (no "I'm excited to share...")
- 3–5 short paragraphs max
- End with a question to drive comments
- No more than 150 words
- Professional but human — Flor's voice, not a press release

---

## 🤖 Automation Targets (Make.com)

Set up these triggers once the site is live:

| Trigger | Action |
|---|---|
| New MDX blog post merged to GitHub | Post summary to LinkedIn + Instagram |
| New YouTube video published | Add video embed to relevant site section |
| New Beehiiv newsletter sent | Auto-post teaser to Instagram Stories |
| New Lemon Squeezy purchase | Tag buyer in Beehiiv, send welcome email |

---

## 📦 Content Article Format (MDX frontmatter)

```mdx
---
title: "Article Title Here"
description: "140–160 char meta description with CTA"
date: "YYYY-MM-DD"
pillar: "onchain" | "runs" | "explores"
tags: ["tag1", "tag2", "tag3"]
primaryKeyword: "main keyword"
readingTime: "X min read"
---
```

---

## ⚙️ Core Operating Principles

1. **Intent first** — every decision flows from matching user/reader intent correctly
2. **No laziness** — find root issues, no surface-level fixes
3. **Minimal impact** — edits only touch what's necessary
4. **Autonomous** — complete tasks without hand-holding, flag blockers clearly
5. **Brand consistency** — every output sounds like Flor, not a generic AI
6. **Separate the brand** — NEVER reference employer, company, or full surname in public-facing content. Flor only.

---

## 🚫 Never Do

- Write in corporate speak or passive voice
- Use toxic positivity ("So excited!" "Blessed!" etc.)
- Create generic wellness content with no substance
- Reference Flor's employer or full professional identity
- Use stock-photo descriptions or generic Malta tourism copy
- Publish content over 500 words without a keyword plan in todo.md first
