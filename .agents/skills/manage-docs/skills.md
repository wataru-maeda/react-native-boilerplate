# Skills

Write a skill as a procedure an agent can follow without guessing.
Keep each skill in `.agents/skills/<name>/SKILL.md`. `.claude/skills` links to the same folder.

## Inspect

- List existing skills. Extend one instead of adding an overlapping skill.
- Read any reference skill the user supplies. Match its brevity and order.

## Frontmatter

- Name the skill verb-first in kebab-case (`manage-docs`, `review-code`). Match the folder name.
- Write `description` as what the skill does, then when to use it ("Use when…" / "Use for…").
- Agents choose skills from `description` alone. Name the trigger requests there.

## Structure

- Start with `# <Title>` and 1–2 lines on purpose and scope.
- Group sections by the work: Inspect → Prepare or Apply → Verify or Report.
- Put commands in fenced blocks.
- Name every action that needs authorization: commit, push, delete, publish, send.

### Ownership

- Give each skill one area of work. Split it when it serves unrelated requests.
- Split a long skill into a `SKILL.md` with routing and shared rules plus one file per action.
- Keep facts with their owner: rules in `AGENTS.md`, templates in their own file, IDs in one place.

### Reports

When the skill reports to the user, require:

- The result in the first sentence.
- Only checked facts. Mark unverified points as unverified.
- The current step when work is unfinished.
- One next action at the end.

Read the finished skill as the agent would. Every step must be actionable without outside context.
