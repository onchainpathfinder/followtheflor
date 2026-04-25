---
name: deep-research-synthesizer
description: "Synthesizes insights from large datasets, filters irrelevant data, identifies patterns, and produces actionable summaries. Trigger on: 'research this', 'synthesize this', 'what are the key insights', 'analyze this data', 'summarize the research', 'find patterns in this', 'deep research on [topic]', 'what does the data say', 'extract insights from this', or when the user provides a large body of text, data, or multiple sources and wants structured, actionable takeaways. Do NOT use for single-document summaries (use long-form-summary-compressor), social media content (use content-repurposing-engine), or compliance documents (use mlro-aml-compliance)."
---

# Deep Research Synthesizer

## Purpose

Convert large amounts of text, data, or multi-source research into structured insights and actionable takeaways. This skill filters noise, identifies patterns, and delivers clarity from complexity.

## When to Use

- Multiple sources need cross-referencing and synthesis
- Large datasets or text bodies need distillation into key findings
- Research needs to be turned into decisions or next steps
- Pattern identification across disparate information

## Workflow

### Step 1: Assess the input
Determine what you're working with — multiple articles, raw data, research papers, mixed sources, conversation threads. Identify the user's goal: are they looking for trends, decisions, a summary, or specific answers?

### Step 2: Filter and prioritise
- Remove redundant or low-value information
- Identify primary claims vs. supporting evidence
- Flag contradictions between sources
- Note information gaps

### Step 3: Identify patterns
- Cross-reference findings across sources
- Highlight recurring themes, data points, or conclusions
- Note outliers that challenge the consensus
- Map relationships between concepts

### Step 4: Structure the output

**Output format:**

```
KEY INSIGHTS (3-7 bullet points)
The most important findings, ranked by actionability.

SUPPORTING EVIDENCE
For each insight, the specific data points or sources that back it.

CONTRADICTIONS & GAPS
Where sources disagree or information is missing.

ACTIONABLE SUMMARY
One paragraph: what this means and what to do about it.
```

### Step 5: Quality check
- Every insight must be traceable to a specific source or data point
- No generic filler — if it doesn't add value, cut it
- Contradictions are flagged, not hidden
- The summary answers "so what?" clearly

## Rules

1. Always cite which source or data point supports each insight.
2. Never present a single source's opinion as a consensus finding.
3. Flag confidence level: high (multiple sources agree), medium (limited data), low (single source or inference).
4. Keep the actionable summary under 150 words.
5. If the input is insufficient for meaningful synthesis, say so and specify what's missing.

## What This Skill Does NOT Do

- Single-document summaries → use `long-form-summary-compressor`
- Blog articles or social content → use content creation skills
- AML/compliance analysis → use `mlro-aml-compliance`
