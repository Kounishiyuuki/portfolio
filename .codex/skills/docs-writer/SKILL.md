# Docs Writer Skill

Use this skill when Codex needs to create or update practical documentation for a frontend, mobile, or portfolio project.

## Purpose
- Write clear README sections, implementation notes, PR descriptions, release notes, demo scripts, and presentation explanations.
- Explain what changed, why it changed, how to verify it, and what risks remain.
- Keep documentation accurate to the repository instead of generic or promotional.

## When To Use
- The user asks for README updates, docs, implementation notes, PR text, changelog, release notes, demo explanations, or presentation copy.
- A feature, UI polish pass, test setup, workflow setup, or refactor needs a human-readable summary.
- Reviewers need reproduction steps, verification commands, screenshots, or merge notes.
- A portfolio page or project needs concise technical explanation.

## Workflow
1. Read `AGENTS.md` and inspect the target files, current diff, or feature behavior.
2. Identify the audience:
   - Future maintainer.
   - PR reviewer.
   - Portfolio viewer.
   - Demo/presentation audience.
   - Yourself/Codex in future workflows.
3. Choose the document type:
   - README section.
   - Implementation memo.
   - PR description.
   - Release checklist.
   - Demo script.
   - Portfolio project explanation.
4. Gather facts from code and commands. Do not invent architecture, dependencies, metrics, or external integrations.
5. Write in a compact structure:
   - Context.
   - What changed or exists.
   - How to run or verify.
   - Risks, limits, or follow-ups.
6. Include concrete commands from `package.json` when relevant:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test`
   - `npm run build`
7. For PR/release docs, include testing status and remaining risks.
8. For presentation/demo docs, include what to show on screen and a short viewer-friendly explanation.
9. If editing files, only edit requested documentation files. Do not modify application code.

## Checklist
- The doc matches the current repo structure and scripts.
- Claims are backed by files, code, or command output.
- Setup steps are minimal and reproducible.
- Verification commands are included when useful.
- Limitations and follow-ups are honest.
- PR text separates summary, verification, and risks.
- Demo text includes scenario, prompts/commands, expected behavior, and recovery steps.
- Portfolio explanations are clear, concrete, and not inflated.

## Constraints
- Do not add dependencies.
- Do not modify application code.
- Do not document features that do not exist.
- Do not paste secrets, private URLs, or sensitive personal data.
- Do not over-document obvious code; keep docs practical and maintainable.
- Preserve existing README tone and structure when updating existing docs.
- Ask before replacing large existing documentation unless the user explicitly requested a rewrite.

## Final Output Format
Use this format:

```md
Docs updated for <topic>.

Created/updated:
- <file>

Included:
- <setup, usage, verification, PR notes, demo notes, or risks>

Verification:
- `<command>` passed
- `<command>` not run: docs-only change

Notes:
- <follow-up or "None">
```

For generated text without file edits:

```md
Draft:
<ready-to-use documentation text>

Sources checked:
- <file or command>

Notes:
- <assumption or "None">
```

