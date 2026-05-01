# Refactor Skill

Use this skill when Codex needs to improve code structure while preserving behavior.

## When To Use
- The user asks for cleanup, simplification, duplication removal, or maintainability improvements.
- A feature requires a small preparatory restructure.
- Code is hard to test or reason about, and behavior should remain unchanged.
- Shared data or UI boundaries have become duplicated or unclear.

## Do Not Use For
- Visual redesigns; use `ui-review`.
- Adding new product behavior; use a feature workflow first.
- Review-only requests; use `pr-review`.

## Inputs
- Refactor scope and files allowed to change.
- Behavior that must remain stable.
- Existing tests or verification commands.

## Workflow
1. Read `AGENTS.md` and define the smallest safe scope before editing.
2. Read call sites, tests, and shared utilities that depend on the target code.
3. Identify the specific code smell:
   - Duplication.
   - Mixed responsibilities.
   - Overly large component.
   - Unclear data transformation.
   - Inconsistent naming or boundaries.
4. Preserve public APIs unless changing them is explicitly part of the task.
5. Make behavior-preserving edits in small steps.
6. Add or adjust tests only when existing coverage cannot catch a regression.
7. Run relevant verification:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build` for broad route or rendering changes.
8. Summarize why the structure is safer or simpler.

## Constraints
- Do not combine refactors with visual redesigns unless requested.
- Do not introduce dependencies for cleanup alone.
- Do not rename exported symbols without checking every call site.
- Do not move files unless the new location clearly matches existing project conventions.
- Do not change copy, layout, animations, or data values unless required to preserve behavior.
- Keep refactor commits small enough to review by file or responsibility.

## Refactor Checklist
- Public behavior and routes remain the same.
- Imports and aliases match existing project style.
- Shared code has a clear owner and name.
- Removed duplication is meaningful, not just cosmetic.
- Tests or verification cover the moved/extracted behavior.

## Handoff To Other Skills
- Use `test-writer` before or after the refactor when coverage is missing.
- Use `ui-review` if a component refactor might affect layout or accessibility.
- Use `pr-review` for final risk assessment.

## Final Response Format
Use this format:

```md
Refactored <scope> to <result> while preserving behavior.

Changed:
- <structural change>
- <test or verification support>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Notes:
- <behavioral risk or "None">
```
