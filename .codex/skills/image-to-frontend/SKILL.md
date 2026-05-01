# Image To Frontend Skill

Use this skill when converting product screenshots, README images, mockups, or other visual references into frontend UI.

## Purpose
- Turn a source image into a clear, maintainable frontend implementation plan.
- Preserve the visible intent of the reference without copying unrelated branding or inventing product screenshots.
- Choose a portfolio-appropriate UI direction before editing application code.
- Verify implemented UI in the browser and fix only visible mismatch or layout issues.

## When To Use
- The user provides or points to a screenshot, README image, mockup, product image, or visual reference.
- A portfolio project card, detail page, case study, or feature section needs to be derived from a visual asset.
- The task asks Codex to translate an image into React, Next.js, Tailwind, or frontend UI.

## Do Not Use For
- Pure copywriting, data, test, or backend changes.
- Recreating third-party product branding that is not part of the user's project.
- Inventing screenshots or product states that are not shown in the provided image or repository assets.
- Large redesigns unrelated to the selected source image.

## Inputs
- Source image path, README asset, repository asset, or user-provided visual reference.
- Target route, component, or project section when known.
- Any explicit user constraints, such as preferred direction, audience, or implementation scope.

## Workflow
1. Read `AGENTS.md`, then inspect the target route/component, nearby shared UI primitives, and relevant project data.
2. Inspect the source image or README asset.
   - If the asset is local, use the local file directly.
   - If the asset is referenced from a README, inspect the README context and resolve the image from repository assets when possible.
   - Do not use external images unless they are from the project README or repository assets.
3. Describe the visible UI structure.
   - Identify layout regions, hierarchy, navigation, panels, cards, controls, imagery, typography, color role, and interaction hints.
   - Separate observed facts from reasonable implementation assumptions.
4. Generate four possible frontend layout directions.
   - Keep each direction distinct in structure, density, and implementation cost.
   - Include tradeoffs for clarity, responsiveness, accessibility, and portfolio fit.
5. Recommend the simplest and most portfolio-appropriate direction.
   - Prefer clarity over visual noise.
   - Prefer clean, maintainable frontend components.
   - Prefer existing design tokens, components, and layout patterns.
6. Write a detailed implementation prompt for Codex.
   - Include source image summary, selected direction, target files, component structure, content rules, asset handling, responsive behavior, accessibility expectations, and verification steps.
   - State that implementation should wait until the user or current task selects a direction.
7. Implement only after the user or current task selects a direction.
   - Keep changes scoped and reviewable.
   - Store local project images under `public/images/projects/`.
   - Use existing `@/` aliases, UI primitives, data helpers, and layout patterns where they already exist.
8. Verify the result in the browser.
   - Start or reuse the local dev server when practical.
   - Inspect the affected route at relevant mobile and desktop viewports.
   - Check for blank screens, runtime overlays, failed assets, horizontal scroll, clipping, overlap, and unusable focus/interaction states.
9. Fix only visible mismatch or layout issues.
   - Do not continue into unrelated redesign, refactor, or content expansion.
   - Run the smallest meaningful verification command set after code changes.

## Rules
- Do not copy unrelated branding.
- Do not invent product screenshots.
- Do not overfit to an image if it breaks responsive behavior.
- Prefer clean, maintainable frontend components.
- Use existing design tokens, components, and layout patterns.
- Keep UI accessible with useful alt text.
- For portfolio projects, prioritize clarity over visual noise.
- Do not use external images unless they are from the project README or repository assets.
- Store local project images under `public/images/projects/`.
- Keep changes scoped and reviewable.

## Direction Template
Use this structure when presenting the four directions:

```md
1. <Direction name>
- Structure: <layout structure>
- Best for: <portfolio goal>
- Tradeoff: <cost or limitation>
```

## Implementation Prompt Template
Use this structure for the detailed implementation prompt:

```md
Implement the selected direction: <direction name>.

Source image:
- <path or README asset>
- <brief observed UI summary>

Target:
- Route/component: <target>
- Files likely to change: <paths>

Implementation requirements:
- <component structure>
- <asset handling>
- <responsive behavior>
- <accessibility requirements>
- <scope constraints>

Verification:
- Inspect <route> in the browser at <viewports>.
- Run <commands>.
- Fix only visible mismatch, layout, asset, or accessibility issues introduced by this change.
```

## Final Output Format
Use this format:

```md
1. Source image analyzed
- <path, README asset, or "None">

2. 4 UI directions
- <direction 1>
- <direction 2>
- <direction 3>
- <direction 4>

3. Recommended direction
- <recommendation and reason>

4. Implementation prompt
- <detailed prompt or prompt summary>

5. Files changed, if implemented
- <file or "None">

6. Browser verification result
- <route, viewport, and result or "Not run: <reason>">

7. Remaining risks
- <risk or "None">
```
