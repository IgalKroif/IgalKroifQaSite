# Debugging Guide

This file is meant to help future debugging by listing the fragile paths and the most likely failure modes in the current codebase.

## First checks

When something looks wrong, inspect these in order:

1. `src/pages/index.astro`
2. `src/styles/global.css`
3. `src/components/ThemeSwitcher.astro`
4. `src/components/EffectsController.astro`
5. Any component that uses `document`, `window`, `localStorage`, `fetch`, `canvas`, or timers

## Common failure modes

### 1. Duplicate or conflicting DOM IDs

The page relies heavily on `getElementById` and `querySelectorAll`.

If a component is duplicated or rendered twice, IDs like:

- `workflow-id`
- `workflow-status`
- `workflow-conclusion`
- `telemetry-sync-badge`
- `api-send-btn`
- `sync-wave-canvas`
- `run-test-btn`

can collide and the wrong node may be updated.

### 2. Tab content not appearing

The tab system depends on:

- `.tab-trigger`
- `.tab-content`
- `.tab-content.active`

If visible content is missing:

- confirm the tab target ID exists
- confirm the tab panel has `tab-content`
- confirm the active tab has the `active` class
- confirm `global.css` still contains the display rules for `.tab-content`

### 3. Browser-only code executed too early

Several components assume the browser:

- `ThemeSwitcher.astro`
- `LaunchTelemetry.astro`
- `EffectsController.astro`
- `Hero.astro`
- `Experience.astro`
- `ApiSandbox.astro`
- `AtFieldSandbox.astro`
- `MagiSystem.astro`
- `MagiConsensus.astro`
- `LclGauge.astro`
- `SkillsMatrixCanvas.astro`
- `DummySystem.astro`
- `TestRunner.astro`

If any of those are moved into code paths that run during SSR without guarding access to `document` or `window`, they can break.

### 4. Theme mismatch or wallpaper failure

Theme state comes from `data-theme` on `<html>`.

Things to verify:

- `localStorage` key `nerv-user-theme`
- theme IDs in `ThemeSwitcher.astro`
- selectors in `global.css`
- wallpaper file names in `public/wallpapers/`

If the wallpaper is blank, the CSS variable `--bg-wallpaper` is usually the first thing to inspect.

### 5. Telemetry fetch failures

`LaunchTelemetry.astro` requests GitHub Actions data from a hardcoded repo URL.

Failure can come from:

- network restrictions
- GitHub API rate limits
- renamed repository owner/name
- no workflow runs available

There is already a fallback state, so a failure here should degrade gracefully rather than crash the page.

### 6. Experience carousel edge cases

`Experience.astro` stores slide state in a local `currentIndex`.

If the arrows stop working:

- confirm both buttons still exist
- confirm the slides have the `.exp-slide` class
- confirm `DOMContentLoaded` fired before the script ran

### 7. Canvas sizing problems

`AtFieldSandbox.astro` and `SkillsMatrixCanvas.astro` both draw to canvas elements sized from the parent container.

If the graphics look clipped or blank:

- verify the canvas element exists
- verify the parent has a measurable width and height
- verify the component is not hidden behind `display: none` when measuring
- force a resize after the panel becomes visible if necessary

### 8. LocalStorage or audio permission quirks

`ThemeSwitcher.astro` uses `localStorage`.

`EffectsController.astro` uses the Web Audio API and may need a user gesture before audio starts reliably.

If sound fails:

- click a UI control first
- inspect whether `AudioContext` is suspended
- check browser privacy settings

## Quick code-reading order

If you need to debug a page issue fast, read in this order:

1. `src/pages/index.astro`
2. `src/styles/global.css`
3. The component directly responsible for the broken section
4. Any supporting utility component in the same panel

## Notes on existing code

- `src/pages/index.astro` currently renders `Connect` twice in the markup. That is worth remembering if duplicate content appears.
- The repo has a very stylized naming scheme, so search by DOM IDs and CSS selectors instead of by prose labels.
- Many components are intentionally decorative, so a "broken looking" state may actually be a fallback state rather than a fatal bug.

