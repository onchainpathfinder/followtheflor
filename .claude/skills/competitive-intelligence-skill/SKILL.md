---
name: competitive-intelligence-skill
description: "Compares products, protocols, or tools to provide structured analysis of strengths, weaknesses, and opportunities. Trigger on: 'compare these', 'competitive analysis', 'how does [X] compare to [Y]', 'strengths and weaknesses of', 'SWOT analysis', 'which is better', 'benchmark against', 'competitor comparison', 'feature comparison', or when the user provides two or more items (tools, products, protocols, services, platforms) and wants a structured comparison. Do NOT use for brand competitor research (use marketing:competitive-brief), source validation (use source-validation-skill), or general research (use deep-research-synthesizer)."
---

# Competitive Intelligence Skill

## Purpose

Deliver structured, actionable comparisons between products, tools, protocols, or services. Help the user make informed decisions by mapping strengths, weaknesses, and opportunities clearly.

## When to Use

- Comparing two or more tools, platforms, or products
- Evaluating a protocol or service against alternatives
- Building a feature comparison matrix
- Identifying gaps and opportunities in a competitive landscape
- Supporting buy/build/partner decisions

## Workflow

### Step 1: Define the comparison scope
What's being compared, and on what basis? Identify the evaluation criteria that matter to the user's context.

### Step 2: Research each item
For each item in the comparison:
- Core features and capabilities
- Pricing model (if applicable)
- Target audience / use case fit
- Known limitations or complaints
- Recent developments or trajectory

### Step 3: Build the comparison

**Output format:**

```
COMPARISON: [Item A] vs [Item B] (vs [Item C]...)

FEATURE MATRIX:
| Criterion       | Item A | Item B | Item C |
|----------------|--------|--------|--------|
| [Feature 1]    | ...    | ...    | ...    |
| [Feature 2]    | ...    | ...    | ...    |

STRENGTHS & WEAKNESSES:

[Item A]
+ [Strength]
+ [Strength]
- [Weakness]

[Item B]
+ [Strength]
- [Weakness]
- [Weakness]

OPPORTUNITIES & RISKS:
- [What the comparison reveals about gaps, trends, or risks]

RECOMMENDATION:
[Context-specific guidance: "For [user's use case], [Item X] is the stronger choice because..."]
```

### Step 4: Validate and qualify
- Note where information is limited or outdated
- Flag if pricing or features have changed recently
- Distinguish between facts and opinions

## Rules

1. Always tie the recommendation to the user's specific context — not generic "it depends."
2. Be honest about limitations of each option, including the one you recommend.
3. Use concrete data points (pricing, feature availability, performance metrics) over vague claims.
4. If the comparison is between more than 3 items, use a matrix format.
5. Note the date of comparison — competitive landscapes change fast.
6. Don't recommend without justification.

## What This Skill Does NOT Do

- Brand competitor research for marketing → use `marketing:competitive-brief`
- Source credibility checks → use `source-validation-skill`
- Multi-source research synthesis → use `deep-research-synthesizer`
