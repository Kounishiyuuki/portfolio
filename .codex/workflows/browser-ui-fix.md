# Browser UI Fix Workflow

Use this workflow when Codex should inspect, fix, and verify UI issues in a real rendered page using the Codex in-app browser.

## Goal
Use Codex's in-app browser to inspect, fix, and verify layout, spacing, responsiveness, overflow, broken interaction, and console-error issues on a target page.

## When To Use
- A page or component has a visible UI bug.
- The user asks for browser verification, visual QA, UI debugging, or a rendered-page fix.
- Automated tests pass but the page still needs real browser confirmation.
- A bug depends on viewport size, hover/focus state, scrolling, interaction, or rendered layout.

## Workflow
1. Read `AGENTS.md`.
2. Identify the target page, route, and related files:
   - Route file in `src/app`.
   - Feature components in `src/components`.
   - Shared UI primitives in `src/components/ui`.
   - Shared data/utilities in `src/lib`.
3. Start the local development server:
   - Prefer `npm run dev`.
   - If the default port is busy, use the next available project-supported port.
   - Keep the server running until browser verification is complete.
4. Open the target route in the Codex in-app browser.
5. Inspect the rendered UI before editing:
   - Confirm expected content appears.
   - Check the browser console for relevant errors.
   - Check the initial viewport before interacting.
6. Identify issues:
   - Layout width and alignment.
   - Section rhythm and spacing.
   - Responsive behavior on mobile, tablet, and desktop widths.
   - Text wrapping, clipping, overlap, or horizontal overflow.
   - Broken links, buttons, menus, filters, forms, or focus states.
   - Console errors, failed assets, or hydration/runtime errors.
7. Apply the smallest useful code changes:
   - Prefer target route/component files.
   - Use existing UI primitives and Tailwind patterns.
   - Touch shared UI or global styles only when the bug is clearly shared.
8. Reopen or refresh the page in the browser.
9. Verify the fix visually and interactively:
   - Repeat the original failing steps.
   - Check at the relevant viewport sizes.
   - Recheck console output.
   - Confirm no obvious neighboring regression on shared layout when applicable.
10. Run verification commands when available and relevant:
    - `npm run lint`
    - `npm run typecheck`
    - `npm run test`
    - `npm run build`
11. Summarize the result with files changed, commands run, browser findings, and remaining risks.

## Constraints
- Do not redesign unrelated pages.
- Do not change global styles unless clearly necessary.
- Do not introduce new dependencies.
- Keep the diff reviewable.
- Prefer visual verification through the in-app browser before claiming success.
- Do not submit forms, make purchases, delete data, or perform account actions without explicit confirmation.
- Do not use the browser for sensitive login flows unless the user explicitly supervises the task.
- If browser verification cannot be completed, say exactly why and fall back to Playwright, manual browser testing, or code/test review as appropriate.

## Final Response Format
Use this format:

```md
Target route:
- <route>

Browser verification summary:
- <viewport/pages checked and result>

Issues found:
- <issue or "None">

Changes made:
- <brief implementation summary>

Files changed:
- <file>

Commands run:
- `<command>` passed
- `<command>` not run: <reason>

Remaining risks:
- <risk or "None">
```

