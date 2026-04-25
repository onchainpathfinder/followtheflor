---
name: video-script-generator
description: "Generates video scripts with hooks, structured sections, pacing, and call-to-actions optimized for engagement and retention. Trigger on: 'write a video script', 'script for a video about', 'YouTube script', 'YouTube Shorts script', 'long-form video script', 'video outline', 'script this video', 'write a script for [topic]', 'Shorts script about', or when the user wants a structured video script — both YouTube Shorts (30-60 sec) and longer formats. For Instagram Reels/TikTok under 90 sec, use content-repurposing:video-script instead. Do NOT use for clip extraction (use content-repurposing:clip-extractor) or editing plans (use video-editing-planner)."
---

# Video Script Generator

## Purpose

Produce structured scripts for video content — from 2-minute explainers to 15-minute deep dives. Every script is built for engagement: strong hook, clear sections, deliberate pacing, and a specific CTA.

## When to Use

- **YouTube Shorts** (30-60 sec, vertical) — crypto compliance, AML explainers, quick takes
- **YouTube videos** — educational content, deep dives (2-15 min)
- **Webinar or presentation scripts**
- **Course module scripts**

Note: For Instagram Reels/TikTok (60-90 sec) in Flor's personal voice, use `content-repurposing:video-script` instead. This skill handles YouTube-native formats.

## YouTube Shorts Format (30-60 sec, vertical 9:16)

For Shorts, use this dedicated structure:

```
TITLE: [Punchy, keyword-rich]
DURATION: [30s / 45s / 60s]
HOOK (0:00-0:03): [Bold claim, surprising stat, or provocative question. Viewers decide in 3 seconds.]

BODY:
[Timestamp] — [Visual direction] — [Script line]
0:00-0:03 — [Hook visual] — "[Hook line]"
0:03-0:08 — [Supporting graphic] — "[Context]"
0:08-0:20 — [Key point visuals] — "[Main content — 2-3 points max]"
0:20-0:28 — [Impact visual] — "[Why it matters]"
0:28-0:30 — [CTA card] — "[Follow for more / Link in bio]"

ON-SCREEN TEXT: [Key phrases as captions — most viewers watch muted]
HASHTAGS: [5-8 relevant]
SUGGESTED THUMBNAIL TEXT: [2-4 words max]
```

**Shorts topic types that work well:**
- "Did you know?" explainers — surprising facts about crypto crime or regulation
- "How criminals use [X]" breakdowns — NFTs, mixers, bridges, stablecoins
- Regulatory news reactions — quick takes on FATF updates, enforcement actions
- Red flag breakdowns — "3 red flags that scream money laundering"
- Myth busters — "Crypto is anonymous" and other misconceptions

**Shorts rules:**
- One idea per video. No stacking concepts.
- Visual change every 3-5 seconds (cut, text overlay, graphic, screen recording)
- End with a reason to follow, not just "follow me"

---

## Long-Form Format (2+ min)

### Step 1: Define the parameters
- Topic and angle
- Target length (in minutes)
- Platform (YouTube, course, webinar, general)
- Audience level (beginner, intermediate, expert)
- Tone (educational, conversational, authoritative)

### Step 2: Build the hook (first 10-15 seconds)
The hook determines whether anyone watches the rest. It must:
- Open with the most compelling element (bold claim, surprising stat, provocative question, or pattern interrupt)
- Contain the primary keyword or topic within the first sentence
- Create a reason to keep watching (curiosity gap, promised value, or stakes)

### Step 3: Structure the body
Break the content into clear sections, each with:
- A mini-hook or transition that re-engages attention
- One core idea per section (don't stack concepts)
- Specific details: numbers, names, examples
- Visual cues: what should be on screen during this section

**Pacing rules:**
- Alternate between information delivery and engagement moments (questions, stories, examples)
- Every 2-3 minutes, include a retention checkpoint (recap, question, or tease of what's coming)
- Front-load the most valuable content — don't save the best for last

### Step 4: Write the CTA (final 15-30 seconds)
- Specific and singular — one action, not three
- Connected to the content they just watched
- For Flor's content: subscribe, newsletter signup, or link to full article

### Step 5: Add production notes

**Output format:**

```
[HOOK — 0:00-0:15]
[Script text]
VISUAL: [What's on screen]
ON-SCREEN TEXT: [Any text overlays]

[SECTION 1: Title — 0:15-X:XX]
[Script text]
VISUAL: [What's on screen]

[SECTION 2: Title — X:XX-X:XX]
...

[CTA — X:XX-end]
[Script text]
VISUAL: [What's on screen]

---
PRODUCTION NOTES:
- Tone: [How to deliver this]
- Location: [Where to film, if relevant]
- Music mood: [One word + suggestion]
- B-roll needs: [List of supplementary footage]
- Estimated runtime: [X:XX]
```

## Rules

1. Every section needs a visual direction — scripts aren't just words, they're paired with what the viewer sees.
2. The hook must not start with "Hey guys" or "Welcome to my channel." Start with substance.
3. Keep sentences short for speaking. Read it aloud — if it sounds unnatural, rewrite it.
4. Include on-screen text for key stats, terms, or takeaways (40%+ of viewers watch muted).
5. One CTA only. Multiple CTAs dilute conversion.
6. Note timestamps for each section.

## What This Skill Does NOT Do

- Short-form Reels/TikTok scripts (60-90 sec) → use `content-repurposing:video-script`
- Clip extraction from existing scripts → use `content-repurposing:clip-extractor`
- Editing plans and cut sequences → use `video-editing-planner`
