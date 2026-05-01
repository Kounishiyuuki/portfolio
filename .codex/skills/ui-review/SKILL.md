# UI Review Skill

Use this skill when Codex needs to review or polish interface changes for visual quality, responsiveness, accessibility, and product fit.

## When To Use
- A page, component, or interaction has changed.
- The user asks for UI polish, visual QA, accessibility review, or responsive review.
- A feature is implemented but needs a design pass before final verification.
- A Playwright/browser check or screenshot review is available.

## Do Not Use For
- Pure data, API, or build-system changes with no user-facing UI.
- Broad redesigns unless the user explicitly asks for redesign.
- Risk-focused code review; use `pr-review` for that.

## Inputs
- Target route, component, or file path.
- User goal and expected audience.
- Any screenshots, design references, or acceptance criteria.

## Workflow
1. Read `AGENTS.md`, then inspect the target route/component and nearby shared UI primitives.
2. Identify the primary user task and the expected states before judging visuals.
3. Check current behavior in code first, then use browser inspection when practical.
4. Inspect these areas:
   - Layout hierarchy and spacing.
   - Mobile, tablet, and desktop behavior.
   - Text wrapping and overflow.
   - Color contrast and focus states.
   - Button, link, form, and navigation affordances.
   - Loading, empty, error, and disabled states when relevant.
5. Make small, targeted changes that match existing design patterns.
6. Verify with the narrowest useful command set:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build` when layout changes affect app routes broadly.
7. Re-check the changed route or component after edits when practical.

## Constraints
- Prefer existing components in `src/components/ui`.
- Do not change product behavior unless the UI issue requires it and the user asked for implementation.
- Do not add dependencies for visual polish.
- Avoid class-only churn that cannot be explained as a visible or accessibility improvement.
- If using subagents, own only UI files and avoid overlapping with test/refactor agents.

## Review Checklist
- The first viewport communicates the page purpose clearly.
- Interactive elements have visible hover, active, disabled, and focus states.
- Text does not overlap, clip, or depend on viewport-scaled font sizes.
- Layout does not shift unexpectedly when content changes.
- Components use existing primitives before new abstractions.
- The page remains usable with reduced motion preferences.
- Browser-only issues are backed by route, viewport, or screenshot details.

## Handoff To Other Skills
- Use `test-writer` when UI behavior changes need regression coverage.
- Use `refactor` when visual work reveals duplication that should be cleaned up separately.
- Use `pr-review` for final merge-readiness findings.

## Final Response Format
Use this format:

```md
Updated the UI for <route/component> with <brief change summary>.

Checked:
- <viewport or state checked>
- <accessibility or interaction checked>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Notes:
- <remaining visual risk or "None">
```
