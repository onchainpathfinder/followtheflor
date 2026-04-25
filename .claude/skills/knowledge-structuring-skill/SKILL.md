---
name: knowledge-structuring-skill
description: "Organizes unstructured information into clear frameworks, bullet points, or structured notes for easier understanding and application. Trigger on: 'organize this', 'structure this', 'turn this into notes', 'framework for this', 'categorize this', 'make sense of this', 'build a framework', 'organize my notes', 'structure my thoughts', or when the user provides messy, unstructured text (brainstorm notes, meeting dumps, idea lists, raw notes) and wants it organized into a usable format. Do NOT use for summarization (use long-form-summary-compressor), research synthesis (use deep-research-synthesizer), or content writing (use writing skills)."
---

# Knowledge Structuring Skill

## Purpose

Transform messy, unstructured information into clear, logical frameworks and organized notes. Turn brainstorms, raw notes, and idea dumps into something usable.

## When to Use

- Raw notes or brainstorm output needs organizing
- Ideas need categorizing and prioritising
- Complex information needs a clear hierarchy
- Meeting notes need structuring into action items and decisions
- Learning material needs reorganizing for retention

## Workflow

### Step 1: Assess the input
What kind of mess are we dealing with? Brainstorm notes, meeting dump, mixed ideas, research fragments, or a stream of consciousness? Identify the underlying topics and relationships.

### Step 2: Identify the structure
Choose the right framework based on the content:

- **Hierarchical** — main topics → subtopics → details (best for knowledge bases, documentation)
- **Chronological** — timeline-based ordering (best for project plans, event sequences)
- **Priority-based** — ranked by importance or urgency (best for action items, decision lists)
- **Categorical** — grouped by theme or type (best for brainstorms, mixed-topic notes)
- **Matrix** — two-axis comparison (best for evaluations, decision frameworks)

### Step 3: Organize

- Group related ideas together
- Establish clear hierarchy (what's a main point vs. supporting detail)
- Remove true duplicates (keep the best-phrased version)
- Flag items that don't fit any category — they may be important outliers
- Add logical connectors between sections

### Step 4: Output

**Default format:**
```
FRAMEWORK: [Type chosen and why]

[CATEGORY/SECTION 1]
- Key point
  - Supporting detail
  - Supporting detail
- Key point

[CATEGORY/SECTION 2]
...

UNPLACED ITEMS:
- [Anything that didn't fit neatly — flagged for the user to decide]

SUGGESTED NEXT STEPS:
- [What to do with this structured information]
```

Adapt the format to what the user needs — if they want a Notion page structure, give headers and toggles. If they want a mind map outline, give radial structure. If they want bullet notes, keep it tight.

## Rules

1. Preserve the user's original language and ideas — restructure, don't rewrite.
2. Never delete information without flagging it. If something seems redundant, group it — don't cut it.
3. Make the hierarchy visually obvious through indentation and formatting.
4. If the input has no clear structure at all, start with categorical grouping and let the user refine.
5. Keep it tight. Structure should make things clearer, not longer.

## What This Skill Does NOT Do

- Summarize long documents → use `long-form-summary-compressor`
- Synthesize research from multiple sources → use `deep-research-synthesizer`
- Write polished content → use content creation skills
