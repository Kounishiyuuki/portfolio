# UI Polish Workflow

Use this workflow for visual refinement, responsive QA, and accessibility cleanup.

## Steps
1. Read `AGENTS.md` and `.codex/skills/ui-review/SKILL.md`.
2. Identify the target route, component, and primary user task.
3. Inspect existing design primitives and nearby page patterns.
4. Run the app with `npm run dev` when browser inspection is useful.
5. Review desktop and mobile layouts.
6. Check:
   - Spacing and alignment.
   - Text hierarchy.
   - Touch targets.
   - Focus states.
   - Reduced motion behavior.
   - Empty, loading, error, and long-content states when relevant.
7. Make focused visual changes without changing product behavior.
8. Run:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build` when page rendering changed broadly.
9. Capture before/after notes in the final response.

## Optional Multi-Agent Split
Use only when requested.

- UI agent reviews and edits layout.
- Review agent checks accessibility and regression risk.
- Test agent adds component coverage only if behavior changes.

## Final Response Format

```md
Polished <route/component>.

Improvements:
- <visual/accessibility improvement>
- <responsive or interaction improvement>

Verification:
- `<command>` passed
- Browser checked: <route and viewport, or "not run">
```
