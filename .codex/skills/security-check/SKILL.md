# Security Check Skill

Use this skill when Codex needs to inspect a frontend, mobile, or portfolio project for secret leakage, unsafe code paths, authentication risks, privacy issues, and risky external integrations.

## Purpose
- Catch API keys, tokens, credentials, and private data before merge.
- Identify dangerous browser/client behavior, unsafe links, and risky dependency/config changes.
- Review authentication, authorization, storage, and network usage when the project includes them.
- Produce actionable findings without making speculative security claims.

## When To Use
- Before release, merge, demo, or portfolio publication.
- A diff touches environment variables, API calls, auth/session logic, storage, redirects, links, forms, uploads, or external services.
- MCP, GitHub, analytics, contact forms, backend routes, mobile permissions, or third-party SDKs are added or changed.
- The user asks for security, privacy, secret scanning, or risk review.

## Workflow
1. Read `AGENTS.md`, then inspect `git status`, the current diff, and relevant config files.
2. Identify changed surfaces:
   - Public client code.
   - Server/API routes.
   - Environment variable usage.
   - Auth/session/permission logic.
   - Form handling and external links.
   - Package and build configuration.
3. Scan for secrets and sensitive values using code search. Look for tokens, private keys, credentials, `.env` usage, webhook URLs, and hardcoded personal/private data.
4. Check client/server boundaries:
   - Secrets must not be imported into client components.
   - Public env vars must be intentionally public.
   - API keys must be scoped and documented when they must be exposed.
5. Review risky behavior:
   - `dangerouslySetInnerHTML`, direct HTML injection, untrusted URLs, redirects, `target="_blank"` without `rel`.
   - Local/session storage of sensitive data.
   - Weak validation around user input, forms, or query params.
   - Over-broad mobile permissions or web capabilities.
6. Check dependency and config changes for unnecessary packages, suspicious scripts, or weakened lint/type/test settings.
7. Run relevant verification when practical:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
8. Report findings by severity and include exact file/line references. If nothing actionable is found, say so and note residual risks.

## Checklist
- No API keys, tokens, private keys, passwords, or `.env` values are committed.
- Secrets are not exposed through client-side code or public bundles.
- External links with new tabs use `rel="noopener noreferrer"`.
- User-controlled text is rendered safely and not injected as HTML.
- Redirects and URLs are constrained to expected destinations.
- Forms validate required input and do not leak private data.
- Auth/session checks happen on trusted server-side boundaries when applicable.
- Storage does not persist sensitive values unnecessarily.
- New dependencies are necessary and do not add risky install scripts.
- Verification commands were run or skipped with a clear reason.

## Constraints
- Do not edit code during review unless the user asks for fixes.
- Do not print or copy full secrets into the response; redact values.
- Do not claim a vulnerability without a concrete exploit path or realistic impact.
- Do not introduce security tools or dependencies unless explicitly requested.
- Treat portfolio contact data as public only when it is already intentionally displayed.
- Use GitHub MCP or `gh` for PR/diff context only when available and useful.

## Final Output Format
Use this format:

```md
Security findings:
- [P1/P2/P3] <issue> - <file:line>
  <impact and recommended fix>

Secret scan:
- <passed/finding/not run and why>

Verification:
- `<command>` passed
- `<command>` not run: <reason>

Residual risk:
- <remaining risk or "None">
```

