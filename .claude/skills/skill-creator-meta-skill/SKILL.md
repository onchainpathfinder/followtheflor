---
name: skill-creator-meta-skill
description: "Generates new AI skills in .md format, providing structured name, description, and instructions for future use. Trigger on: 'create a new skill', 'build a skill for', 'make a skill that', 'new skill for [task]', 'skill template', 'generate a skill', or when the user wants to create a reusable skill definition for a specific task. Do NOT use for modifying existing skills (use skill-creator), creating content (use writing skills), or code generation (just write the code directly)."
---

# Skill Creator (Meta Skill)

## Purpose

Generate new, fully structured AI skill files in `.md` format — ready to drop into `.claude/skills/` and use immediately. This skill automates the creation of reusable skill definitions.

## When to Use

- Creating a brand new skill for a task that doesn't have one yet
- Generating a skill template from a description of what it should do
- Quickly scaffolding a skill that can be refined later

Note: For modifying, improving, or evaluating *existing* skills, use the `skill-creator` skill instead.

## Workflow

### Step 1: Define the skill's purpose
What does this skill do? What's the single sentence that captures it? If it can't be summarised in one sentence, it might need to be split into multiple skills.

### Step 2: Define triggers
What phrases or situations should activate this skill? Be specific — vague triggers cause false activations. Also define what this skill does NOT do, to prevent overlap with existing skills.

### Step 3: Build the skill structure

**Every skill file must include:**

```yaml
---
name: [kebab-case-name]
description: "[One paragraph: what it does + trigger phrases + what it does NOT do]"
---
```

**Followed by these sections:**

1. **Purpose** — What the skill produces and why it exists
2. **When to Use** — Specific scenarios
3. **Workflow** — Step-by-step process (numbered steps)
4. **Output format** — What the output looks like (with template)
5. **Rules** — Non-negotiable constraints (numbered)
6. **What This Skill Does NOT Do** — Explicit boundaries with redirects to correct skills

### Step 4: Output the complete skill file
Deliver the full `.md` content, ready to save.

### Step 5: Suggest placement
Tell the user where to save it: `.claude/skills/[skill-name]/SKILL.md`

## Rules

1. Skill names are always kebab-case.
2. The description field must include trigger phrases — this is how the system knows when to activate the skill.
3. Always include "Do NOT use for..." in the description to prevent overlap.
4. Keep skills focused — one skill, one job. If it does two different things, make two skills.
5. The workflow section must be concrete enough that the skill produces consistent output every time.
6. Include an output format template — skills without defined output structure produce inconsistent results.
7. Cross-reference existing skills in the "Does NOT Do" section so the user knows where to go instead.

## Quality Check

Before delivering the skill, verify:
- [ ] Name is kebab-case
- [ ] Description includes trigger phrases AND exclusions
- [ ] Workflow has numbered steps
- [ ] Output format is defined with a template
- [ ] Rules are specific and numbered
- [ ] "Does NOT Do" section references relevant existing skills
- [ ] The skill is focused on one job

## What This Skill Does NOT Do

- Modify or improve existing skills → use `skill-creator`
- Run skill evaluations or benchmarks → use `skill-creator`
- Create content → use the appropriate content skill
