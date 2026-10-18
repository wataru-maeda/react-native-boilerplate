---
name: init-project
description: Turn this boilerplate into a new app by renaming it, removing sample files, and linking it to EAS. Use when starting a new app from this template, or when asked to init, bootstrap, or rename the project.
---

# Init Project

Turn this boilerplate into a new app's repository.
Follow the actions in order. Each one needs the previous one done.

## Actions

| Step | Action                              | Read                       |
| ---- | ----------------------------------- | -------------------------- |
| 1    | Propose the setup plan              | [Plan](#plan)              |
| 2    | Rename the app and remove samples   | [rename.md](rename.md)     |
| 3    | Link EAS, set env files, run checks | [services.md](services.md) |

Resume from the first unfinished step. State the current step when stopping.

## Plan

Change nothing in this step. Show one plan with these items:

| Item         | Contains                                                                    |
| ------------ | --------------------------------------------------------------------------- |
| Names        | App name, `package.json` name, slug, URL scheme                             |
| IDs          | iOS bundle IDs and Android packages for dev and prod                        |
| Expo account | `owner` in `app.json`, and whether to create new EAS projects or reuse ones |
| Samples      | Files to remove or keep: `__DELELE_ME__/`, README banner, welcome sheet     |
| Open         | Anything the user has not decided                                           |

Propose IDs in reverse-domain form, such as `com.<company>.<app>` and `com.<company>.<app>.dev`.
End the turn after the plan. Resolve Open items one at a time.

## Rules

- Stop after the plan until the user approves it. Apply only approved items.
- Never enter passwords, API keys, or tokens. Ask the user to log in or set secrets.
- Write variable names to `.env.*.example`. Never write secret values to git.
- Ask one question at a time.
- Do not commit or push unless requested.

## Report

- The result in the first sentence.
- Each created EAS project with its URL.
- Checks run and their results. Mark skipped checks.
- One next action at the end.
