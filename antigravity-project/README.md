# Antigravity AI Project Architecture

This project is organized to maximize reliability, structured execution, and autonomous workflows using **GSD (Get Shit Done)**, **Ralph Loop**, and **CodeRabbit**.

## Folder Structure

- **`/01_prd`**: Stores Product Requirement Documents (PRDs). These define the vision, features, constraints, and goals.
- **`/02_tasks`**: Managed by GSD. Contains small atomic tasks generated from the PRD. Each task is a separate file with clear objectives.
- **`/03_workspace`**: Active development area. Ralph Loop executes tasks here and builds the implementation.
- **`/04_tests`**: Automated tests and validation scripts. Ralph Loop runs these after each task.
- **`/05_outputs`**: Final build artifacts and generated assets.
- **`/06_logs`**: Execution logs, debugging output, and AI reasoning traces.
- **`/07_docs`**: Documentation, architecture explanations, and technical notes.
- **`/08_integrations`**: Configuration for external tools like CodeRabbit, APIs, and deployment services.

## Workflow

1. **Planning (GSD)**: Read the PRD in `01_prd` and decompose it into atomic tasks in `02_tasks`.
2. **Execution (Ralph Loop)**: Select a task from `02_tasks`, implement it in `03_workspace`, and validate it using tests in `04_tests`.
3. **Review (CodeRabbit)**: Continuous automated code review on all pull requests and commits.
4. **Finalization**: Move validated artifacts to `05_outputs` and maintain logs in `06_logs`.

## Getting Started

To begin development, ensure there is a PRD in `01_prd`, then use GSD to generate tasks in `02_tasks`.
