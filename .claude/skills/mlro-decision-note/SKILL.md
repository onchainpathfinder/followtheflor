---
name: mlro-decision-note
description: "Use this skill to draft MLRO decision notes — the short narrative paragraphs an MLRO pastes into Jira, Oracle, or case management comment fields to record a formal compliance decision on a customer account. Trigger on: MLRO decision, decision note, case decision, sign-off, MLRO sign-off, agree with analyst, disagree with analyst, case review decision, write the decision, approve/reject case, UTR decision, STR decision, terminate account, freeze account, derisk account, derestrict account, permanent closure, or when the user provides case facts (account ID, deposit/loss figures, SOW/SOF findings, analyst recommendation) and clearly expects a formal written decision back. Also trigger when the user says 'write the note', 'draft the note', 'note for this case', or pastes analyst findings and asks for the MLRO view. Do NOT trigger for: full AML policy documents, EDD procedure manuals, training decks, analyst-level case reviews, blog articles, or compliance governance documentation — those belong to other skills."
---

# MLRO Decision Note Writer

## Purpose

Draft concise, audit-ready MLRO decision notes for iGaming AML case reviews. These notes are the MLRO's formal recorded position on a customer account — pasted directly into Jira, Oracle, or case management comment fields. Every note must be defensible under regulatory scrutiny.

## What This Skill Produces

A single paragraph of 6–7 lines maximum. Narrative prose. No bullet points. No headers. No bold text. No markdown formatting of any kind. Plain text, paste-ready.

## Voice & Tone

- **Objective and professional, never pedantic.** Write like a senior compliance professional recording a decision — not like a textbook, not like a lawyer drafting a contract, and not like an analyst explaining their work.
- **Decisive and directive.** The MLRO has made a decision. The note records it. No hedging, no "it appears that", no "it would seem".
- **Never accusatory.** Never state or imply that the customer is engaged in money laundering. Frame conclusions around the company's inability to reconcile, verify, or mitigate — not around the customer's intent.
- **Assumes the reader is a trained compliance professional.** Do not over-explain regulatory concepts. Do not define terms like EDD, SOW, or CDD.
- Use **"shall"** for mandatory actions in the closing instruction.
- Avoid the phrase **"reasonable grounds to suspect"** — instead frame around inability to establish legitimate origin, inability to reconcile activity with known financial profile, or inability to mitigate risk.
- Reads naturally — as if a real person wrote it. Not robotic, not formulaic, not stuffed with jargon for the sake of it.

## Structure

Every decision note follows this flow within one continuous paragraph:

1. **Trigger** — What initiated this review (AMLGOV-188 ad-hoc review, OGM alert, EDD escalation, 28-day review, ACRAT flag, etc.)
2. **Key finding** — The core financial or documentary fact (deposit-to-income ratio, loss ratio, third-party funding pattern, non-response to documentation request, etc.)
3. **What was or wasn't obtained** — Documentation status (SOW received/not received, bank statements reviewed, open banking verified, customer non-responsive, etc.)
4. **Risk assessment conclusion** — The MLRO's assessment in one sentence (inability to mitigate financial risk, disproportionate activity against verified income, account predominantly funded by third parties, non-compliance with EDD requirements, etc.)
5. **Closing instruction** — Clear directive on account status AND reporting action. Uses "shall". Examples: "The account shall be permanently terminated and a UTR raised to FIU-NL." / "No STR is warranted. The account shall be derestricted with a deposit cap of [X] pending receipt of updated income documentation."

## Jurisdiction-Specific References

The note must reference the correct legal framework for the market:

| Market | Primary legislation | FIU / Reporting body | Report type |
|--------|-------------------|---------------------|-------------|
| Netherlands (NL) | Wwft (Art. 16, subjective indicator) | FIU-NL | UTR |
| Denmark (DK) | Hvidvaskloven §26 | Hvidvasksekretariatet | STR |
| Estonia (EE) | RahaPTS §49 | Estonian FIU | STR |
| Romania (RO) | Law 129/2019 | ONPCSB | STR |
| Finland (FI) | Finnish AML Act | Finnish FIU | STR |
| Belgium (BE) | AML Law 18 Sept 2017 | CTIF-CFI | STR |
| Sweden (SE) | Penningtvättslagen | Swedish FIU | STR |
| Malta (MT) | PMLFTR / MLTFPA | FIAU | STR |
| France (FR) | CMF Art. L.561 | TRACFIN | STR |
| Italy (IT) | D.Lgs. 231/2007 | UIF | SOS |

Reference internal policy codes where relevant: AMLGOV-216 (third-party payments), AMLGOV-188 (dormant account reviews), AML Procedures Manual sections (7.1.2.1, 7.3.4, 7.4.2, 7.6, 8.4), SOF/SOW Guidance, T&C clause 5.6(a).

## Decision Categories

The skill must handle all of these outcome types:

- **UTR/STR filing + permanent termination** — the most common outcome for irreconcilable financial activity
- **UTR/STR filing + account freeze** — where balance remains and payout is withheld pending reporting obligations
- **Permanent termination, no STR** — typically non-compliance with EDD (customer refused/ignored documentation requests) where activity alone does not meet reporting threshold
- **Account freeze pending further information** — where the decision is deferred (e.g., awaiting FY financials, updated income documentation)
- **Derestriction / de-risk** — where SOW/SOF has been satisfactorily verified and the account can resume normal activity, with or without deposit cap or risk recalibration
- **No STR, no action** — where the review finds no grounds for concern (rare, but must be recorded)
- **Agree with analyst recommendation** — MLRO confirms analyst's proposed outcome
- **Disagree with analyst recommendation** — MLRO overrides with different outcome, noting the divergence

## Rules

1. Never exceed 7 lines. If the note is getting long, cut — don't compress. Remove the least important detail.
2. Never use bullet points, numbered lists, headers, or any formatting. One continuous paragraph.
3. Never open with "This decision note..." or "The MLRO has reviewed..." — start with the substance (the trigger or the finding).
4. Never close with a generic statement like "This decision is made in accordance with applicable regulations." The closing must be a specific instruction.
5. If the user provides an analyst recommendation, state whether the MLRO agrees or disagrees and why.
6. If the market is not specified, ask. Do not guess.
7. If the case facts are ambiguous or incomplete, flag what's missing before drafting. Do not fill gaps with assumptions.
8. Use the correct report type for the jurisdiction (UTR for NL, STR for DK/EE/RO/FI, etc.).
9. When referencing income, specify whether gross or net and the source (forskudsopgørelse, årsopgørelse, tax return, open banking, bank statement, payslip).
10. The DK "last deposit in 2024" rule: under Approach B-2, accounts with last deposit in 2024 go straight to UTR/STR with no documentation request — probability of success is too low.

## Examples

### Example 1
```
MARKET: NL
OUTCOME: UTR + permanent termination
NOTE:
Following an AMLGOV-188 ad-hoc review, this account has deposited EUR 47,200 over an 8-month period against a verified net annual income of EUR 28,400 (2024 jaaropgave). The customer was contacted twice via email requesting SOW documentation and did not respond within the 14-day deadline on either occasion. Open banking data obtained during onboarding shows a single salary credit of EUR 2,370/month with no secondary income streams or savings patterns that would explain the deposit volume. The company is unable to reconcile the deposited funds with the customer's known financial profile, and the risk cannot be mitigated through further monitoring alone. The account shall be permanently terminated and a UTR raised to FIU-NL under Wwft Art. 16 (subjective indicator).
WHY THIS WORKS: Opens with the trigger (AMLGOV-188), gives specific financial figures and their source, documents the failed documentation attempts, frames the conclusion around the company's inability to reconcile (not the customer's intent), and closes with a precise instruction naming the legislation.
```

### Example 2
```
MARKET: DK
OUTCOME: No STR + derestriction with deposit cap
NOTE:
28-day EDD review of a restricted account flagged by ACRAT for cumulative deposits of DKK 312,000 against a registered net income of DKK 384,000 (2024 forskudsopgørelse). The customer provided bank statements covering the prior 6 months, which show consistent salary credits from a named employer averaging DKK 32,100/month alongside a one-time insurance payout of DKK 85,000 in March 2024. Deposits into the gaming account align with the months following the insurance credit, and loss ratio sits at 74%, consistent with recreational play. SOW has been satisfactorily established and the deposit pattern is reconcilable with verified income. No STR is warranted under Hvidvaskloven §26. The account shall be derestricted with a deposit cap of DKK 25,000/month, to be reviewed at next scheduled EDD cycle.
WHY THIS WORKS: Shows the skill handles positive outcomes too. Specific income source and document type named, the insurance payout explains the spike, loss ratio cited as supporting evidence, and the closing instruction includes a concrete cap and review trigger — not just "derestrict."
```

## Quality Checklist (run before every output)

Before producing the note, verify:

- [ ] Is it 7 lines or fewer?
- [ ] Is it one continuous paragraph with zero formatting?
- [ ] Does it open with substance, not meta-commentary?
- [ ] Does it close with a specific "shall" instruction?
- [ ] Is it objective, professional, and non-pedantic?
- [ ] Is it non-accusatory — framed around the company's inability, not the customer's intent?
- [ ] Does it reference the correct jurisdiction's legislation and reporting body?
- [ ] Does it avoid "reasonable grounds to suspect"?
- [ ] Would this read naturally if a senior compliance professional wrote it by hand?
- [ ] Is it paste-ready for Jira/Oracle with no formatting to strip?

## What This Skill Does NOT Do

- Full AML/CFT policy documents → use `mlro-aml-compliance` skill
- EDD procedure manuals or guidance documents → use `mlro-aml-compliance` skill
- Blog articles about AML/compliance → use `floronchain-writer` skill
- Analyst-level case reviews or PRT training materials → use `mlro-aml-compliance` skill
- Stakeholder emails or GM communications → handle in general conversation
- LinkedIn posts or social media content → handle in general conversation
