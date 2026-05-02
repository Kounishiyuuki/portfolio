# Test Writer Skill

Use this skill when Codex needs to add, repair, or expand automated tests for application behavior.

## When To Use
- A feature or bug fix needs regression coverage.
- The user asks for tests, test gaps, or safer verification.
- Existing tests fail and the expected behavior is clear.
- Shared utilities, route interactions, or accessible UI behavior changed.

## Do Not Use For
- Snapshot-only coverage of visual styling.
- Fixing production behavior unless the user asked for implementation too.
- Replacing manual browser/UI review; use `ui-review` for visual QA.

## Inputs
- Files or behavior under test.
- Existing test patterns.
- The bug, feature, or acceptance criteria.

## Workflow
1. Read `AGENTS.md`, the implementation, test setup, and nearby tests before writing new tests.
2. Identify the observable behavior users or callers depend on.
3. Choose the smallest useful test type:
   - Component tests for rendered UI and interactions.
   - Unit tests for pure functions and data transforms.
   - Integration-style tests only when behavior crosses module boundaries.
4. Reuse existing test utilities from `src/test` where possible.
5. Write tests that avoid implementation details such as private state or exact class strings.
6. Cover the important path first, then one edge case if it meaningfully reduces risk.
7. Run the focused test command first, then broader verification if needed:
   - `npm run test`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run build` when test/config changes affect the build.
8. If a test exposes a real bug, fix the implementation only when the user asked for that level of work.

## Constraints
- Prefer Testing Library queries by role, label, text, and accessible name.
- Keep fixtures small and local unless a shared fixture already exists.
- Do not assert Tailwind class strings unless the class is the behavior under test.
- Do not hide failing tests by weakening assertions.
- If the repo has no tests yet, start with one stable smoke/unit test before broad coverage.

## Test Quality Checklist
- Test names describe behavior, not implementation.
- Assertions reflect visible output, accessible names, or public return values.
- Fixtures are small and local to the test unless shared reuse is obvious.
- Async behavior uses Testing Library and Vitest patterns already present in the repo.
- Tests fail for the intended regression.
- Mocks are named and lint-clean.

## Handoff To Other Skills
- Use `ui-review` when a behavior test touches responsive or visual states.
- Use `refactor` if code must be restructured before it can be tested cleanly.
- Use `pr-review` to judge whether missing tests are a merge blocker.

## Final Response Format
Use this format:

```md
Added tests for <behavior>.

Coverage:
- <main scenario>
- <edge case>

Verification:
- `<command>` passed
- `<command>` failed: <short reason>

Notes:
- <untested area or "None">
```
