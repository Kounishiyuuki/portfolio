# Browser Verification Skill

Use this skill when Codex should verify a web UI in the Codex in-app browser after implementation, debugging, or UI polish.

## Purpose
- Confirm that a changed page or feature works in a real browser, not just through tests or static code review.
- Inspect layout, spacing, overflow, responsiveness, console errors, and broken interactions.
- Reproduce visual bugs and verify that fixes actually resolve them.
- Keep browser checks focused, practical, and safe for local development.

## When To Use
- A page, component, navigation, form, menu, filter, animation, or responsive layout changed.
- The user asks to open, inspect, click, screenshot, verify, or debug a local UI.
- Tests pass but visual behavior still needs confirmation.
- A bug report depends on viewport size, interaction state, browser console output, or rendered layout.
- A local development server, static preview, or file-backed HTML page is available.

## Prefer The In-App Browser For
- Local development servers such as `http://localhost:3000` or `http://127.0.0.1:3000`.
- File-backed previews that can be opened directly in the browser.
- Quick visual checks after frontend edits.
- Reproducing target-page bugs without leaving Codex.

## Local Development Server
1. Read `AGENTS.md` and `package.json` before starting a server.
2. Use the project’s existing dev command. For this repo, prefer:
   - `npm run dev`
3. If the default port is busy, use the next available port when the framework supports it.
4. Keep the server running only while needed for verification.
5. If a production-like check is needed, run:
   - `npm run build`
   - `npm run start`
   only when appropriate for the task.

## Pages Or Routes To Open
1. Open the route directly affected by the change.
2. Open nearby routes when shared layout, navigation, footer, or data changed.
3. For this portfolio, common routes are:
   - `/`
   - `/about`
   - `/projects`
   - `/projects/nexus-quant`
   - `/skills`
   - `/contact`
4. For bug reproduction, open the exact route, viewport, and state described by the user.
5. Do not broaden the browser pass beyond the target feature unless shared code was changed.

## Browser Verification Workflow
1. Start or locate the local preview server.
2. Open the target route in the Codex in-app browser.
3. Check page load:
   - No blank screen.
   - No visible runtime error overlay.
   - Expected headline/content appears.
   - Console has no relevant errors.
4. Inspect layout and spacing:
   - Sections align with the page container.
   - Cards, buttons, and text have consistent spacing.
   - No unintended horizontal scroll.
   - No clipping, overlap, or layout jump.
5. Inspect responsiveness:
   - Check at mobile, tablet, and desktop widths when practical.
   - Verify long text wraps cleanly.
   - Navigation and cards remain usable.
6. Inspect interactions:
   - Click buttons, links, menus, filters, tabs, toggles, and form controls that belong to the target feature.
   - Confirm focus states and keyboard paths when relevant.
   - Confirm disabled, empty, loading, or error states if they are part of the feature.
7. Reproduce visual bugs:
   - Match the reported viewport, route, browser state, and interaction sequence.
   - Capture the smallest reproduction steps.
   - Identify whether the issue is layout, content, state, asset loading, animation, or browser console error.
8. After editing, reload the same route and repeat the exact failing steps.
9. Run relevant command-line verification after browser fixes:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`

## What To Inspect
- Layout width and page container consistency.
- Section rhythm and vertical spacing.
- Text wrapping, truncation, and line breaks.
- Overflow, especially horizontal scroll on mobile.
- Button/link hit targets and accessible labels.
- Focus indicators and keyboard access.
- Console errors and failed assets.
- Broken links or interactions.
- Animation jank, excessive motion, or reduced-motion issues.
- Visual regressions caused by shared UI primitives.

## Safety Constraints
- Prefer the Codex in-app browser for local development servers and file-backed previews.
- Do not use browser verification for sensitive login flows unless the user explicitly supervises the task.
- Do not submit forms, make purchases, delete data, change account settings, or perform account actions without explicit confirmation.
- Do not test against production systems when a local or preview environment is available.
- Keep verification focused on the target page or feature.
- Do not store, reveal, or paste credentials from browser pages or logs.

## Fallbacks
- Use Playwright MCP when:
  - The task needs repeatable screenshots, viewport automation, or scripted interaction checks.
  - The in-app browser cannot reproduce a browser-specific issue.
  - The user asks for Playwright specifically.
- Use manual browser testing when:
  - The in-app browser is unavailable or cannot access the target.
  - Device-specific behavior must be checked on a real browser/device.
  - The user needs to supervise a sensitive login or account flow.
- Use code/test review only when no runnable preview is available, and clearly report that browser verification was not performed.

## Final Output Format
Use this format:

```md
1. Browser pages checked
- <route/url and viewport>

2. Interactions tested
- <interaction or state>

3. Visual issues found
- <issue or "None">

4. Fixes applied
- <file/change or "None">

5. Verification result
- <passed/failed and command/browser result>

6. Remaining risks
- <risk or "None">
```

