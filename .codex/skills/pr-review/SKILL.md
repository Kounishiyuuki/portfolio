# PR Review Skill

Use this skill when Codex needs to review a branch, pull request, or local diff for correctness before merge.

## When To Use
- The user asks for a review, PR review, pre-merge check, or regression scan.
- A feature is complete and needs risk-focused feedback.
- External GitHub context is available through MCP or `gh`.
- Verification commands have failed and the user wants triage.

## Do Not Use For
- Implementing requested changes directly; use the relevant feature, UI, test, or refactor workflow.
- Style-only feedback without a correctness, usability, accessibility, or maintainability risk.
- Posting remote review comments unless the user explicitly asks.

## Inputs
- PR URL, branch name, or local diff.
- The intended behavior and acceptance criteria.
- Any CI failures, review comments, or issue links.

## Workflow
1. Read `AGENTS.md` and determine the review base:
   - For local work, inspect `git status` and `git diff`.
   - For PR work, use GitHub MCP or `gh` when available.
2. Read changed files, relevant tests, and nearby code that defines the contract.
3. Run or inspect relevant verification when practical:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
4. Prioritize findings by severity:
   - Broken user behavior.
   - Data loss, security, or privacy risk.
   - Runtime errors and edge cases.
   - Missing tests for meaningful risk.
   - Maintainability issues that will likely cause bugs.
5. Verify claims with tight file and line references.
6. Do not list style preferences as findings unless they cause real risk.
7. If there are no findings, say so clearly and mention remaining test gaps.

## Constraints
- Review findings must be actionable and tied to a concrete impact.
- Keep severity labels meaningful:
  - `P1`: blocks release or breaks core behavior.
  - `P2`: important bug, accessibility issue, or missing coverage with real risk.
  - `P3`: minor risk, maintainability issue, or polish concern.
- Do not rewrite the code during review unless the user asks for fixes.
- Do not include broad praise before findings.

## MCP Usage
- Use GitHub MCP or `gh` for PR metadata, comments, checks, and changed files when the user asks for PR-specific review.
- Do not post comments, approve, or request changes unless the user explicitly asks.
- Treat CI output as evidence and still inspect the relevant code.

## Handoff To Other Skills
- Use `test-writer` to address missing or failing tests after review.
- Use `ui-review` for visual/accessibility issues that need browser inspection.
- Use `refactor` for maintainability findings that require behavior-preserving cleanup.

## Final Response Format
Lead with findings:

```md
Findings:
- [P1] <title> - <file:line>
  <impact and why it matters>

Open questions:
- <question or "None">

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Recommended next step:
- <single safest next action>
```

If there are no findings:

```md
No blocking findings.

Residual risk:
- <untested area or assumption>

Verification:
- `<command>` passed

Recommended next step:
- <single safest next action>
```
