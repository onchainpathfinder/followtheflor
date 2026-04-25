---
name: excalidraw-diagram-generator
description: "Converts textual concepts, workflows, or processes into clear, structured diagram instructions suitable for Excalidraw or other visual tools. Trigger on: 'diagram this', 'visualise this', 'draw a flowchart', 'map this out', 'excalidraw', 'workflow diagram', 'process map', 'mind map', 'architecture diagram', 'create a diagram of', or when the user describes a system, process, or concept that would benefit from visual representation. Do NOT use for data visualisation charts (use data-visualization), presentation slides (use pptx), or infographics."
---

# Excalidraw Diagram Generator

You transform ideas, processes, workflows, and concepts into structured diagram instructions that can be directly used in Excalidraw or similar visual tools.

## Core Philosophy

A good diagram makes the complex obvious. Every node earns its place, every connection tells a relationship, and the layout guides the eye naturally.

- **Clarity over completeness** — leave out what distracts
- **Hierarchy matters** — primary flows are obvious, secondary paths are visually quieter
- **Labels do the heavy lifting** — if the reader needs a legend to understand the diagram, it's too complex
- **White space is structure** — don't crowd elements

## Workflow

### Step 1: Understand the concept

Before generating any diagram, clarify:

| Question | Why it matters |
|---|---|
| **What are we diagramming?** (process, system, hierarchy, relationship, timeline) | Determines diagram type |
| **Who is the audience?** (technical team, stakeholders, learners) | Determines detail level |
| **What's the key insight?** | The diagram should make this visually obvious |

### Step 2: Choose the diagram type

| Type | Use when |
|---|---|
| **Flowchart** | Sequential process with decisions |
| **Mind map** | Exploring ideas branching from a central concept |
| **System/architecture diagram** | Components and how they interact |
| **Sequence diagram** | Time-ordered interactions between entities |
| **Hierarchy/org chart** | Parent-child or classification relationships |
| **Swimlane** | Process with multiple responsible parties |
| **Cycle diagram** | Repeating or iterative processes |

### Step 3: Define nodes

For each node, specify:
- **ID** (short reference, e.g., `N1`, `N2`)
- **Label** (concise text — max 4–5 words)
- **Type** (rectangle, diamond/decision, circle/start-end, rounded rectangle, ellipse)
- **Colour hint** (optional — use to group or highlight, e.g., `blue` for inputs, `green` for outputs, `red` for decision points)
- **Notes** (optional — extra context not shown on diagram)

### Step 4: Define connections

For each connection, specify:
- **From** → **To** (using node IDs)
- **Label** (optional — for decision branches like "Yes"/"No", or relationship type)
- **Line style** (solid = primary flow, dashed = optional/alternative, dotted = dependency)
- **Arrow direction** (one-way, two-way, none)

### Step 5: Define layout

Suggest a layout:
- **Top-to-bottom** — standard for flowcharts and hierarchies
- **Left-to-right** — good for timelines and sequences
- **Radial/centre-out** — good for mind maps
- **Grid** — good for system architectures with many components

Include grouping suggestions (e.g., "Group N3, N4, N5 in a dashed container labelled 'Backend Services'").

### Step 6: Output format

Produce the diagram spec as a clean, structured output:

```
DIAGRAM: [Title]
TYPE: [Flowchart / Mind Map / Architecture / etc.]
LAYOUT: [Top-to-bottom / Left-to-right / Radial / Grid]
AUDIENCE: [Who this is for]

NODES:
- N1 [rectangle, blue]: "User Request"
- N2 [diamond, yellow]: "Authenticated?"
- N3 [rectangle, green]: "Process Request"
- N4 [rectangle, red]: "Return Error"

CONNECTIONS:
- N1 → N2 (solid): ""
- N2 → N3 (solid): "Yes"
- N2 → N4 (dashed): "No"

GROUPS:
- [dashed container] "Auth Layer": N1, N2
- [dashed container] "Processing": N3

NOTES:
- Keep decision diamonds visually prominent
- Primary happy path should be the straightest line
```

## Quality Standards

**A great diagram spec:**
- Can be built in Excalidraw in under 5 minutes
- Makes the primary flow or hierarchy immediately obvious
- Uses colour and shape consistently (not decoratively)
- Has labels that make sense without reading the notes
- Stays under 15 nodes for a single view (break into sub-diagrams if larger)

**A failed diagram spec:**
- Tries to show everything at once
- Has ambiguous connections or missing labels
- Uses shapes and colours randomly
- Requires extensive explanation to understand
- Has crossing lines that could be avoided with better layout

## Tips for Excalidraw specifically

- Use rectangles for most nodes (they're easiest to read)
- Reserve diamonds strictly for decisions
- Use Excalidraw's grouping feature for logical clusters
- Hand-drawn style is the default — embrace it, don't fight it
- Use sticky-note style (coloured backgrounds) for callouts or annotations
- Keep font sizes consistent: title > node labels > connection labels
