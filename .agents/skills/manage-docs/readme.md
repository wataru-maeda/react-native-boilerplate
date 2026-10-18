# README

Create or update `README.md` from actual code, configuration, and commands.
Apply a requested README update directly. Propose first only when asked.

## Inspect

- Check `package.json`, `app.json`, `app.config.ts`, the `src/` structure, and relevant source files.
- Read `.env.*.example` and `src/utils/config.ts` for environment variable names.
- Use code to resolve outdated documentation. Mark anything still unverified.

## Write

- Keep the existing layout: banner, badges, feature list, then collapsible `<details>` sections.
- Give prerequisites and setup steps in execution order.
- Link files with full GitHub URLs on `main`, because the README is also shown outside the repository.
- Show only the directory structure readers need.
- Document variable names and safe examples, never secret values.

## Commands

- Copy command names from actual scripts. Do not invent examples.
- State whether a command checks, rewrites, builds, or deploys.
- Explain required environment files, simulators, and running services.
- Never run deployments, secret uploads, or other external changes to verify documentation.
