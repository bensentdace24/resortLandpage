# Samal Sands React Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished, responsive React presentation mockup for Samal Sands & Shores.

**Architecture:** Vite serves a component-based single-page React app. Static content is modeled as editable arrays, while a small booking utility and form state produce a non-transactional estimate.

**Tech Stack:** React 18, Vite, Vitest, Testing Library, Lucide React, CSS

**Spec:** `docs/superpowers/specs/2026-08-25-samal-sands-landing-design.md`

## Global Constraints

- Never imply the mockup creates a real reservation.
- Label sample rates and illustrative traveler notes.
- Respect reduced-motion and keyboard-focus preferences.
- Preserve the supplied phone, address, and check-in/out details.

---

### Task 1: Scaffold and booking behavior

**Files:** Create `package.json`, `index.html`, `src/booking.js`, and `src/booking.test.js`.

- [ ] Write tests for night counting, guest pricing, and invalid date ranges.
- [ ] Run the tests and confirm failure because the booking module is absent.
- [ ] Implement the minimal booking utility.
- [ ] Run the test suite and confirm it passes.

### Task 2: Responsive page experience

**Files:** Create `src/main.jsx`, `src/App.jsx`, `src/App.test.jsx`, and `src/styles.css`.

- [ ] Write interaction tests for the booking preview and mobile navigation.
- [ ] Run the tests and confirm failure because the app is absent.
- [ ] Build the page components, editable content, responsive styling, and interactions.
- [ ] Run tests and production build.

### Task 3: Visual verification and handoff

**Files:** Create `.impeccable/review/desktop.png` and `.impeccable/review/mobile.png`.

- [ ] Run the UI detector once over changed targets.
- [ ] Render desktop and mobile views, fix material issues in one batch, and recapture.
- [ ] Verify tests, production build, and final file structure.

