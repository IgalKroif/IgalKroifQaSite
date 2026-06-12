# Project Map

This repo is an Astro-based personal portfolio site with a highly themed "NERV / EVA" visual system.

## High-level structure

- `src/pages/index.astro` is the only page route and acts as the composition root.
- `src/layouts/Layout.astro` provides the HTML shell, shared metadata, and global stylesheet import.
- `src/styles/global.css` defines the theme tokens, background system, typography, tab visibility rules, and animation helpers.
- `src/components/` contains the visible sections and interactive widgets.
- `public/` stores wallpapers, favicon assets, and the resume PDF.

## Runtime flow

1. `Layout.astro` loads the shared CSS.
2. `index.astro` renders the page in a fixed order:
   - `EffectsController`
   - `ThemeSwitcher`
   - `Hero`
   - `LaunchTelemetry`
   - tab buttons
   - tab panels for About, Experience, Skills, Courses, and Connect
3. The tab script in `index.astro` toggles `.tab-content.active` and staggers animation delays on visible content.
4. Theme selection writes `data-theme` on `<html>` and persists the choice in `localStorage`.
5. Several panels add their own client-side behavior after load, including typing, chart animation, fetch calls, and interactive controls.

## Main component groups

### Header and shell

- `Hero.astro` renders the title, subtitle, and typewriter terminal block.
- `ThemeSwitcher.astro` changes the global theme token.
- `EffectsController.astro` controls the CRT overlay and optional audio feedback.

### Content tabs

- `About.astro` provides the bio section.
- `Experience.astro` is a carousel-like role display.
- `Skills.astro` is a static skills/progress overview.
- `CompletedCourses.astro` lists certifications and external verification links.
- `Connect.astro` provides social links and the resume download button.

### Diagnostic / demo widgets

- `LaunchTelemetry.astro` fetches GitHub Actions run data and maps it into a status card.
- `MagiSystem.astro` animates the three MAGI boxes after mount.
- `MagiConsensus.astro` simulates a consensus vote over a dropdown choice.
- `ThreatTracker.astro` displays two issue/resolution cards.
- `ReportVault.astro` summarizes archived test runs.
- `LclGauge.astro` simulates flaky-test contamination via a range slider.
- `ApiSandbox.astro` simulates API calls with mock JSON output.
- `AtFieldSandbox.astro` renders an animated canvas waveform and responds to hover.
- `DummySystem.astro` is a test execution console that prints log lines.
- `SkillsMatrixCanvas.astro` is a canvas-based telemetry panel tied to hover triggers.
- `TestRunner.astro` is a separate simulated audit console.

### Shared UI primitives

- `src/components/ui/Button.astro`
- `src/components/ui/Card.astro`
- `src/components/ui/Terminal.astro`

## Important data dependencies

- Theme tokens come from `global.css` via CSS custom properties.
- The wallpaper paths in `global.css` must match files in `public/wallpapers/`.
- `LaunchTelemetry.astro` depends on the GitHub Actions API and the repository owner/name in the fetch URL.
- `ThemeSwitcher.astro` depends on `localStorage`, so it runs only in the browser.
- `EffectsController.astro`, `ApiSandbox.astro`, `AtFieldSandbox.astro`, `SkillsMatrixCanvas.astro`, `MagiSystem.astro`, and `MagiConsensus.astro` all expect client-side DOM access.

