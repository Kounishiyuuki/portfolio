# AGENTS.md

## Project Overview
- This is a portfolio site built with Next.js, React, TypeScript, and Tailwind CSS.
- Source code lives in `src`, with routes in `src/app`, shared UI in `src/components/ui`, feature components in `src/components`, and shared data/utilities in `src/lib`.
- Codex should behave like a senior frontend engineer: read first, make focused changes, verify with project scripts, and preserve existing design and architecture patterns.

## Coding Rules
- Prefer TypeScript types, existing utilities, and existing component APIs over new abstractions.
- Keep changes scoped to the user request. Avoid opportunistic rewrites.
- Use existing path aliases such as `@/` when local code already does.
- Keep components readable: extract helpers only when they reduce duplication or clarify behavior.
- Do not add dependencies unless the user asks or the task cannot be completed safely without one.
- Do not modify application code for documentation, workflow, or setup-only requests.

## UI Rules
- Use existing UI primitives in `src/components/ui` before creating new primitives.
- Keep layouts responsive across mobile and desktop.
- Ensure interactive elements have accessible names, visible focus states, and correct button/link semantics.
- Avoid hover or press styling on static, non-interactive content.
- Keep text readable and prevent clipping, overlap, and layout shift.
- For UI work, inspect the changed route in a browser when practical.

## Architecture Rules
- Keep route files focused on composition; move reusable data or logic into `src/lib` or feature-specific component files.
- Keep shared UI generic and feature components domain-specific.
- Avoid duplicating canonical project/contact/site data across pages.
- Preserve public component props unless the task explicitly includes a breaking refactor.
- Refactors must be behavior-preserving unless the user asks for behavior changes.

## Testing Rules
- Use Vitest and Testing Library patterns already present in `vitest.config.ts` and `src/test`.
- Prefer behavior tests over snapshots and class-name assertions.
- Test public output: visible text, roles, accessible names, links, events, and exported data helpers.
- Add focused tests for changed behavior, bug fixes, and shared utilities.
- If tests cannot be added or run, explain why in the final response.

## Verification Commands
Use these commands when relevant:
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`

For narrow changes, run the smallest meaningful set. For release checks or broad UI/data/config changes, run all four.

## Git And Branch Rules
- Check `git status` before broad edits.
- Never overwrite or revert user changes unless explicitly asked.
- Keep unrelated dirty files out of the task.
- Use branch names with the `codex/` prefix when creating branches, unless the user requests another name.
- Do not commit, push, merge, tag, or open PRs unless the user asks.

## MCP And Subagent Rules
- Use GitHub MCP for issues, PRs, diffs, CI, and review comments when available.
- Use Playwright MCP for browser UI inspection when available.
- Use Figma MCP for design references when available.
- Use Context7 MCP for current library documentation when available.
- Spawn subagents only when the user asks for multi-agent or parallel work.
- Split subagent work by ownership: UI, tests, refactor, and review. Avoid overlapping write scopes.

## Forbidden Actions
- Do not run destructive commands such as `git reset --hard`, broad `rm`, or force pushes without explicit approval.
- Do not edit generated build output such as `.next` or `tsconfig.tsbuildinfo`.
- Do not silence lint, type, or test failures without addressing the cause.
- Do not make visual redesigns during a refactor unless requested.
- Do not introduce remote service changes through MCP unless the user requested that action.

## Final Response Format
For implementation work:

```md
Summary:
- <what changed>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Notes:
- <risk, follow-up, or none>
```

For review work:

```md
Findings:
- [P1/P2/P3] <issue> - <file:line>

Verification:
- `<command>` passed/failed/not run

Open questions:
- <question or "None">
```
