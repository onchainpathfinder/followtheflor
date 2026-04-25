---
name: code-review-skill
description: "Reviews code for bugs, inefficiencies, and adherence to best practices, providing actionable improvement suggestions. Trigger on: 'review this code', 'code review', 'check my code', 'find bugs in this', 'is this code good', 'optimize this code', 'what's wrong with this', 'improve this code', 'best practices check', or when the user pastes code and wants feedback on quality, bugs, or improvements. Do NOT use for writing new code from scratch (just write it), DevOps/deployment tasks (use devops-assistant), or workflow automation (use workflow-automation-agent)."
---

# Code Review Skill

## Purpose

Review code for bugs, inefficiencies, security issues, and adherence to best practices. Provide specific, actionable feedback — not vague suggestions.

## When to Use

- Reviewing code before committing or deploying
- Finding bugs or potential issues in existing code
- Checking code style and best practices
- Optimising performance
- Security review of code handling sensitive data

## Workflow

### Step 1: Identify the context
- Language and framework
- What the code is supposed to do
- Any constraints (performance requirements, browser support, etc.)

### Step 2: Review systematically

**Check in this order:**

1. **Correctness** — Does it do what it's supposed to? Logic errors, edge cases, off-by-one errors.
2. **Security** — Input validation, injection risks, exposed secrets, unsafe operations.
3. **Performance** — Unnecessary loops, memory leaks, redundant operations, N+1 queries.
4. **Readability** — Naming, structure, comments (or lack thereof), complexity.
5. **Best practices** — Framework conventions, DRY, error handling, type safety.

### Step 3: Output

**Format:**

```
CODE REVIEW: [File/component name]
Language: [Language/framework]

CRITICAL (must fix):
- [Line X]: [Issue] — [Why it matters] — [Fix]

IMPORTANT (should fix):
- [Line X]: [Issue] — [Why] — [Fix]

SUGGESTIONS (nice to have):
- [Line X]: [Suggestion] — [Why]

SUMMARY:
[One paragraph: overall code quality assessment and top priority fix]
```

### Step 4: Provide fixes
For critical and important issues, provide the corrected code — not just a description of what's wrong.

## Rules

1. Always reference specific line numbers or code sections.
2. Explain *why* something is an issue, not just *what* is wrong.
3. Prioritise: critical bugs and security issues first, style nits last.
4. Don't flag style preferences as errors — if it works and is readable, note it as a suggestion only.
5. If the code is good, say so. Don't manufacture issues.
6. For Flor's stack (Next.js 14, Tailwind, MDX): check App Router conventions, server vs. client components, and Tailwind class ordering.

## What This Skill Does NOT Do

- Write new code from scratch → just ask for it directly
- Deploy or manage infrastructure → use `devops-assistant`
- Automate workflows → use `workflow-automation-agent`
