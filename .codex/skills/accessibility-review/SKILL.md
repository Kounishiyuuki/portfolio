# Accessibility Review Skill

Use this skill when Codex needs to review or improve accessibility for a frontend, mobile, or portfolio experience.

## Purpose
- Ensure pages and components are usable with keyboard, screen readers, zoom, and reduced motion preferences.
- Catch practical accessibility risks around semantics, ARIA, focus, contrast, form labels, links, headings, and responsive layouts.
- Keep fixes small, visible, and aligned with the existing design system.

## When To Use
- A page, component, navigation, form, modal, menu, card, or CTA changes.
- The user asks for accessibility, aria, keyboard support, contrast, heading structure, or screen reader review.
- UI polish introduces new interactive elements or visual hierarchy changes.
- Before release or portfolio demo for user-facing pages.

## Workflow
1. Read `AGENTS.md`, then inspect the target page/component and nearby UI primitives.
2. Identify interactive elements and the main user path.
3. Review semantics first:
   - Correct heading order.
   - Real buttons for actions and links for navigation.
   - Accessible names for controls and links.
   - Meaningful landmarks/sections when useful.
4. Review ARIA:
   - Prefer native semantics before ARIA.
   - Use `aria-expanded`, `aria-controls`, `aria-current`, `aria-label`, or `aria-describedby` only when they describe real behavior.
   - Remove misleading or decorative ARIA when it harms screen reader output.
5. Review keyboard behavior:
   - Tab order follows visual flow.
   - Menus, dialogs, filters, and toggles can be operated without a mouse.
   - Focus states are visible and not clipped.
   - Disabled states remain understandable.
6. Review visual accessibility:
   - Text and controls have sufficient contrast.
   - Text does not clip or overlap at small widths.
   - Motion is subtle and respects reduced motion when applicable.
7. Add or update focused tests when accessibility behavior is user-visible and the test setup supports it.
8. Verify with relevant commands:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test` when tests changed or accessibility behavior is covered.
   - `npm run build` for route/layout-level changes.
9. When practical, inspect the route in a browser or Playwright MCP and check at mobile and desktop widths.

## Checklist
- Page has one clear `h1` and sensible heading hierarchy.
- Interactive controls have accessible names.
- Buttons and links use correct semantics.
- Current navigation state is exposed when relevant.
- Toggle/menu state is exposed with accurate ARIA.
- Keyboard users can reach and operate every important control.
- Focus styles are visible and not hidden by overflow.
- Text contrast, line length, and wrapping are usable.
- Images/icons are either meaningful with text alternatives or hidden/decorative.
- Tests cover important accessible roles, names, and interactions when practical.

## Constraints
- Do not add ARIA where native HTML is enough.
- Do not change product meaning or content strategy unless the user asked.
- Do not add dependencies for accessibility checks unless explicitly requested.
- Avoid class-only churn unless it fixes visible focus, contrast, spacing, or readability.
- Do not rely only on automated checks; inspect semantics and behavior in code.
- For review-only requests, do not edit files.

## Final Output Format
Use this format:

```md
Accessibility findings:
- [P1/P2/P3] <issue> - <file:line>
  <impact and recommended fix>

Checked:
- <keyboard/ARIA/contrast/responsive item>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Notes:
- <remaining accessibility risk or "None">
```

For implementation work:

```md
Updated accessibility for <route/component>.

Changes:
- <semantic, keyboard, contrast, or ARIA improvement>

Verification:
- `<command>` passed

Remaining risk:
- <risk or "None">
```

