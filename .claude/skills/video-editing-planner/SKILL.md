---
name: video-editing-planner
description: "Suggests editing structure, scene cuts, transitions, and pacing for improved video content quality and engagement. Trigger on: 'plan the edit for this', 'editing plan', 'how should I edit this', 'cut sequence for', 'edit this video', 'pacing plan', 'scene breakdown', 'transition suggestions', 'edit structure', or when the user has a video script or raw footage description and wants a structured editing plan. Do NOT use for writing scripts (use video-script-generator), extracting clips (use content-repurposing:clip-extractor), or caption formatting (use caption-subtitle-formatter)."
---

# Video Editing Planner

## Purpose

Create structured editing plans that turn raw footage or scripts into engaging, well-paced video content. This skill bridges the gap between a script and a finished edit.

## When to Use

- Planning how to edit a video from a script
- Structuring cuts, transitions, and pacing for existing footage
- Optimising a rough cut for engagement and retention
- Planning B-roll placement and visual variety

## Workflow

### Step 1: Assess the source material
What are we working with? A script, a rough cut description, raw footage notes, or a finished video that needs re-editing? Identify the platform and target length.

### Step 2: Scene breakdown
Map the content into discrete scenes or segments:
- Identify natural cut points (topic changes, pauses, transitions)
- Note which segments are strongest and should be kept tight
- Flag segments that drag or need trimming

### Step 3: Build the edit plan

**Output format:**

```
EDIT PLAN: [Video title/topic]
Platform: [YouTube / Reels / TikTok / Course / etc.]
Target length: [X:XX]

SCENE BREAKDOWN:
| # | Timestamp | Content | Cut type | Notes |
|---|-----------|---------|----------|-------|
| 1 | 0:00-0:12 | Hook | Jump cut | Tight, no dead air |
| 2 | 0:12-1:30 | Section 1 | Standard | B-roll at 0:45 |
| ... | ... | ... | ... | ... |

PACING NOTES:
- [Where to speed up, slow down, or hold]

TRANSITIONS:
- [Which transitions to use where and why]

B-ROLL PLACEMENT:
- [Timestamp]: [What to show and why]

ON-SCREEN TEXT / GRAPHICS:
- [Timestamp]: [What text or graphic to add]

MUSIC / SOUND:
- [Music mood changes, sound effects, silence moments]

RETENTION CHECKPOINTS:
- [Moments designed to keep viewers watching]
```

### Step 4: Engagement optimisation
- Ensure the first 3 seconds have movement or a visual change
- Place the strongest visual moment in the first 10 seconds
- Add pattern interrupts (cut, zoom, graphic) every 15-30 seconds for short-form, every 60-90 for long-form
- End strong — the last 5 seconds should feel intentional, not trailing off

## Rules

1. Every cut needs a reason — don't suggest cuts for the sake of cutting.
2. Match the editing style to the platform (fast cuts for TikTok, more breathing room for YouTube).
3. Preserve story clarity — fancy edits that confuse the viewer are worse than simple cuts.
4. Note specific tools when relevant (CapCut effects, Premiere transitions, etc.) if the user has mentioned their editor.
5. Keep B-roll suggestions practical — things the user can actually film or source.

## What This Skill Does NOT Do

- Write video scripts → use `video-script-generator`
- Extract best clips from a script → use `content-repurposing:clip-extractor`
- Format captions/subtitles → use `caption-subtitle-formatter`
