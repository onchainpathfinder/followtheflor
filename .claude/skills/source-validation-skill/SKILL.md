---
name: source-validation-skill
description: "Validates the credibility of information sources, highlighting reliability, relevance, and potential biases. Trigger on: 'is this source reliable', 'validate this source', 'check the credibility of', 'how trustworthy is this', 'source check', 'fact check this', 'is this information accurate', 'verify this claim', 'bias check', or when the user shares a source, article, or claim and wants to know if it's trustworthy. Do NOT use for research synthesis (use deep-research-synthesizer), content creation (use writing skills), or compliance validation (use mlro-aml-compliance)."
---

# Source Validation Skill

## Purpose

Evaluate the credibility, relevance, and potential biases of information sources. Help the user make informed decisions about what to trust and what to question.

## When to Use

- Evaluating whether a source is trustworthy before citing it
- Checking claims against known facts
- Assessing potential bias in an article, report, or dataset
- Comparing conflicting sources to determine which is more reliable
- Vetting sources for published content (floronchain, followtheflor)

## Workflow

### Step 1: Identify what needs validating
Is it a specific claim, an entire article, a publication, an author, or a dataset? The approach differs for each.

### Step 2: Evaluate credibility

**For publications/websites:**
- Publication reputation and track record
- Editorial standards (peer review, fact-checking, corrections policy)
- Funding and ownership (who pays for this?)
- Domain authority and history

**For specific claims:**
- Is the claim sourced? Where does it originate?
- Can it be independently verified?
- Do other credible sources corroborate it?
- Is the data current or outdated?

**For authors:**
- Relevant expertise or credentials
- Track record of accuracy
- Known affiliations or conflicts of interest

### Step 3: Assess bias
- Identify the perspective or angle
- Note what's emphasised and what's omitted
- Check for loaded language or framing
- Compare with coverage from opposing perspectives

### Step 4: Rate and report

**Output format:**

```
SOURCE: [What was evaluated]

RELIABILITY: [High / Medium / Low / Unverifiable]
RELEVANCE: [High / Medium / Low] — to the user's specific context
BIAS ASSESSMENT: [Minimal / Moderate / Significant] — direction noted

KEY FINDINGS:
- [Specific credibility indicators, positive or negative]

CAVEATS:
- [What to be cautious about when using this source]

RECOMMENDATION:
[One sentence: use freely / use with caveats / cross-reference / avoid]
```

## Rules

1. Never declare something "fake" without specific evidence — say "unverifiable" or "unsupported."
2. Distinguish between factual errors, bias, and opinion. They're different problems.
3. Check the date. Old information presented as current is a common credibility issue.
4. Primary sources (regulatory text, official data, court records) outrank secondary reporting.
5. If you can't validate a source with available tools, say so clearly.
6. For regulatory/compliance sources, always prefer official government or regulator publications.

## What This Skill Does NOT Do

- Synthesize multiple research sources → use `deep-research-synthesizer`
- Write content → use content creation skills
- Perform compliance reviews → use `mlro-aml-compliance`
