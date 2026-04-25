---
name: caption-subtitle-formatter
description: "Formats captions and subtitles for readability, timing, and accessibility across videos. Trigger on: 'format captions for this', 'subtitle this', 'add captions', 'caption formatting', 'SRT file', 'subtitle timing', 'make captions for this script', 'accessibility captions', or when the user has a video script or transcript and needs properly formatted, timed captions or subtitles. Do NOT use for writing video scripts (use video-script-generator), editing plans (use video-editing-planner), or social media captions/posts (use content-repurposing:article-to-posts)."
---

# Caption & Subtitle Formatter

## Purpose

Format captions and subtitles for maximum readability, correct timing, and accessibility. Captions aren't just text — they're a visual element that affects comprehension and retention.

## When to Use

- Formatting captions from a video script before filming
- Creating SRT/VTT subtitle files from a transcript
- Optimising existing captions for readability
- Preparing on-screen text overlays for key moments
- Making content accessible to deaf/hard-of-hearing viewers

## Workflow

### Step 1: Assess the source
Is this a full script, a transcript with timestamps, or raw text that needs timing? Identify the platform (YouTube, Instagram, TikTok) — formatting rules differ.

### Step 2: Format the captions

**Line break rules:**
- Max 2 lines per caption block
- Max 42 characters per line (32 for mobile-first platforms like TikTok/Reels)
- Break at natural speech pauses — never mid-phrase
- Keep subject and verb on the same line
- Don't orphan single words on a new line

**Timing rules:**
- Minimum display time: 1 second
- Maximum display time: 7 seconds
- Average reading speed: 150-180 words per minute
- Sync to speech start, not before
- Allow 0.1-0.2 second gap between caption blocks

**Readability rules:**
- Use sentence case, not ALL CAPS (except for emphasis on one word max)
- Include speaker identification for multi-person content: [FLOR], [GUEST]
- Describe relevant sounds: [music], [applause], [waves crashing]
- Punctuate for clarity — commas and periods help reading flow

### Step 3: Output

**For SRT format:**
```
1
00:00:01,000 --> 00:00:03,500
The one thing nobody tells you
about running after 40

2
00:00:03,800 --> 00:00:06,200
is that your body doesn't forget.
It just negotiates differently.
```

**For on-screen text overlays:**
```
[0:00-0:03] "Nobody tells you this about running after 40"
[0:15-0:18] "Your body doesn't forget"
[0:45-0:48] "3 things that changed everything"
```

**For accessibility captions:**
Include sound descriptions, speaker labels, and musical notation where relevant.

### Step 4: Platform-specific adjustments
- **YouTube:** Standard SRT, 2 lines, 42 chars
- **Instagram Reels:** Shorter lines (32 chars), bolder text cues, centred
- **TikTok:** Same as Reels — short, punchy, centred
- **Course/webinar:** Full sentences, longer display times, speaker IDs

## Rules

1. Never split a noun phrase across lines ("the compliance / officer" — wrong).
2. Always preview the reading speed — if you can't comfortably read it in the display time, it's too long.
3. For Flor's content: Italian/Maltese words get kept as-is in captions (dai, basta, allura) — don't translate or remove them.
4. Sound descriptions in square brackets: [waves], [music fades].
5. If the user provides a script without timestamps, estimate timing based on natural speech pace (~150 wpm).

## What This Skill Does NOT Do

- Write video scripts → use `video-script-generator`
- Plan video edits → use `video-editing-planner`
- Write social media captions/posts → use `content-repurposing:article-to-posts`
