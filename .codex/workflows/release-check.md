# Release Check Workflow

Use this workflow before shipping or merging a set of changes.

## Steps
1. Read `AGENTS.md`.
2. Inspect the working tree:
   - `git status`
   - `git diff --stat`
   - `git diff`
3. Confirm the release scope from commits, branch changes, or user notes.
4. Review risk areas:
   - Route rendering.
   - Type safety.
   - Tests and fixtures.
   - Accessibility and responsive behavior.
   - Configuration and dependency changes.
5. Run verification:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
6. Use `.codex/skills/pr-review/SKILL.md` for a findings-first review.
7. If failures occur, identify whether they are caused by the current changes or pre-existing.
8. Final response states whether the change is release-ready.

## Optional MCP Usage
- Use GitHub MCP or `gh` for PR checks, review comments, and CI status when the user provides a PR or asks for remote review.
- Do not merge, tag, publish, or deploy unless explicitly requested.

## Optional Multi-Agent Split
Use only when requested.

- Test agent runs and interprets verification.
- Review agent inspects the diff for regressions.
- UI agent checks changed screens.
- Refactor agent flags cleanup risks but does not rewrite release code without approval.

## Final Response Format

```md
Release check: <ready / not ready>.

Findings:
- <blocking issue or "None">

Verification:
- `<command>` passed
- `<command>` failed: <reason>

Release notes:
- <user-visible change>
```
