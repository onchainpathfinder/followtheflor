---
name: hook-generator
description: "Produces attention-grabbing hooks for videos, social posts, and content intros to maximize engagement. Trigger on: 'write me a hook', 'hook for this', 'give me hook options', 'opening line for', 'attention grabber for', 'scroll stopper', 'first line for', 'intro hook', or when the user has content and needs a compelling opening line that stops the scroll. Do NOT use for full video scripts (use video-script-generator), full social posts (use content-repurposing:article-to-posts), or full copywriting (use structured-copywriting-skill)."
---

# Hook Generator

## Purpose

Create compelling opening lines that stop the scroll, capture attention, and make people want to keep reading or watching. Hooks are the single most important line in any piece of content.

## When to Use

- Need an opening line for a video, post, or article
- Testing multiple hook angles for the same content
- Existing content has a weak opening and needs a stronger one
- Brainstorming attention-grabbing angles for a topic

## Hook Types

### 1. Bold claim
States something surprising or contrarian that demands attention.
"MiCA won't save crypto. Here's what will."

### 2. Curiosity gap
Opens a question the reader can't ignore.
"There's one AML red flag that 90% of compliance teams miss."

### 3. Specific number
Concrete data that signals value.
"I've reviewed 847 player accounts this quarter. Three patterns keep showing up."

### 4. Pattern interrupt
Breaks expectations for the format or topic.
"Forget everything you've read about running after 40."

### 5. Story entry
Drops the reader into a moment.
"6:15 AM, Sliema waterfront. The sea was flat and I hadn't run in four months."

### 6. Direct challenge
Confronts the reader's assumption.
"You're reading your SOW documentation wrong."

## Workflow

### Step 1: Understand the content
What's the core message? Who's the audience? What platform? A LinkedIn hook reads differently from a TikTok hook.

### Step 2: Generate 3-5 hook options
Each using a different hook type from the list above. Variety matters — the user picks what resonates.

### Step 3: Output

**Format:**

```
TOPIC: [The content this hook is for]
PLATFORM: [Where it'll be used]

HOOK OPTIONS:

1. [Bold claim] — "[Hook text]"
   Why: [One line on why this works]

2. [Curiosity gap] — "[Hook text]"
   Why: [One line]

3. [Specific number] — "[Hook text]"
   Why: [One line]

4. [Pattern interrupt / Story entry / Direct challenge] — "[Hook text]"
   Why: [One line]

RECOMMENDED: #[X] — [One sentence explaining why it's strongest for this audience and platform]
```

## Rules

1. Never start with "I" — it's the weakest possible opener.
2. Never use "In today's..." or "Welcome to..." or "Hey guys..." — dead on arrival.
3. Keep hooks under 15 words for video, under 20 for text.
4. Every hook must be self-contained — it should work even without the content that follows.
5. Match the hook energy to Flor's voice: confident, direct, no hype. The hook earns attention through substance, not volume.
6. For compliance/crypto content: lead with the practical impact, not the regulation name.
7. Always provide at least 3 options using different hook types.

## What This Skill Does NOT Do

- Full video scripts → use `video-script-generator`
- Full social posts → use `content-repurposing:article-to-posts`
- Full copywriting → use `structured-copywriting-skill`
