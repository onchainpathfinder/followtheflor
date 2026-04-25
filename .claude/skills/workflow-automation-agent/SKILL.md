---
name: workflow-automation-agent
description: "Breaks complex tasks into step-by-step workflows, mapping actions to tools, optimizing execution, and improving efficiency. Trigger on: 'automate this', 'workflow for this', 'break this into steps', 'how do I automate', 'build a workflow', 'step-by-step process for', 'automation plan', 'streamline this', 'make this more efficient', or when the user describes a repetitive or multi-step task that could be systematised. Do NOT use for code review (use code-review-skill), DevOps tasks (use devops-assistant), or content creation workflows (use content-repurposing-engine)."
---

# Workflow Automation Agent

## Purpose

Convert complex, multi-step tasks into clear, actionable workflows. Map each step to the right tool, identify automation opportunities, and optimise for efficiency.

## When to Use

- A repetitive task needs systematising
- A complex process needs breaking into steps
- Identifying which parts of a workflow can be automated
- Mapping tools to tasks in a multi-step process
- Optimising an existing workflow for speed or reliability

## Workflow

### Step 1: Understand the goal
What's the end state? What does success look like? Identify the trigger (what starts this workflow) and the output (what it produces).

### Step 2: Decompose into steps
Break the task into discrete, actionable steps. Each step should:
- Have one clear action
- Have a defined input and output
- Be completable by a single tool or person
- Have clear success criteria

### Step 3: Map tools and resources
For each step, identify:
- Who or what does it (human, AI, tool, API)
- What tool is needed (specific software, skill, MCP)
- What the input is (from previous step or external)
- What the output is (feeds into next step or is final)

### Step 4: Identify automation opportunities
Flag which steps can be:
- Fully automated (no human needed)
- Semi-automated (human reviews/approves)
- Manual only (requires human judgment or action)

### Step 5: Output

**Format:**

```
WORKFLOW: [Name]
Goal: [What this achieves]
Trigger: [What starts it]
Estimated time: [Manual vs. automated]

STEPS:
| # | Action | Tool/Who | Input | Output | Automation |
|---|--------|----------|-------|--------|------------|
| 1 | ... | ... | ... | ... | Full/Semi/Manual |
| 2 | ... | ... | ... | ... | ... |

DEPENDENCIES:
- Step X depends on Step Y completing first
- [Any parallel steps that can run simultaneously]

AUTOMATION RECOMMENDATIONS:
- [Which steps to automate first for biggest time savings]
- [Tools or integrations that would enable automation]

FAILURE POINTS:
- [Where things are most likely to go wrong]
- [Suggested fallbacks or checks]
```

## Rules

1. Every step must be specific enough that someone (or something) can execute it without asking clarifying questions.
2. Don't automate for the sake of it — if a step takes 30 seconds manually and automation would take 2 hours to set up, flag it but don't prioritise it.
3. Identify the bottleneck — the slowest or most error-prone step — and focus optimisation there.
4. Include failure handling. What happens when step 3 fails?
5. For Flor's workflows: consider the tools she uses (Next.js, Vercel, Beehiiv, GitHub, CapCut) when mapping tools to steps.

## What This Skill Does NOT Do

- Review code quality → use `code-review-skill`
- Manage deployments → use `devops-assistant`
- Create content → use content creation skills
