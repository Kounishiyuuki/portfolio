# Feature Build Workflow

Use this workflow for implementing a product feature from request to verified result.

## Steps
1. Read `AGENTS.md` and any relevant skill files.
2. Clarify the feature goal only if local context cannot answer it safely.
3. Inspect existing routes, components, data modules, tests, and scripts.
4. Create a short implementation plan:
   - Files likely to change.
   - User-visible behavior.
   - Test and verification approach.
5. Implement the smallest complete version that satisfies the request.
6. Add or update tests using `.codex/skills/test-writer/SKILL.md` when behavior changes.
7. Review UI changes using `.codex/skills/ui-review/SKILL.md` when screens or components change.
8. Run verification:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build` for route, config, or rendering changes.
9. Review the final diff for unrelated changes.
10. Final response includes summary, changed files, and verification results.

## Optional Multi-Agent Split
Use only when the user asks for parallel or multi-agent work.

- UI agent: component layout, states, responsive behavior.
- Test agent: coverage plan and test implementation.
- Refactor agent: scoped cleanup needed to support the feature.
- Review agent: final regression review.

Give each agent a narrow scope and avoid overlapping write ownership.

## Final Response Format

```md
Built <feature>.

Changed:
- <file or area>: <what changed>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Notes:
- <follow-up or limitation, if any>
```
