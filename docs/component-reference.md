# Component Reference

This is a quick index of the current Astro components and what each one does.

## Page composition

- `src/pages/index.astro`
  - Renders the full landing page.
  - Owns the tab navigation and tab switching behavior.

- `src/layouts/Layout.astro`
  - Provides the HTML document wrapper.
  - Imports the global stylesheet and sets the page title.

- `src/styles/global.css`
  - Defines the theme tokens and visual system.
  - Controls tab visibility, typography, and animation behavior.

## Visible sections

- `src/components/Hero.astro`
  - Main name/title block.
  - Typewriter terminal animation.

- `src/components/About.astro`
  - Static bio section.

- `src/components/Experience.astro`
  - Experience carousel with previous/next controls.

- `src/components/Skills.astro`
  - Skill progress bars and classification tags.

- `src/components/Connect.astro`
  - Social links and resume download card.

- `src/components/CompletedCourses.astro`
  - Certification and course list.

## Diagnostic widgets

- `src/components/LaunchTelemetry.astro`
  - Fetches the latest GitHub Actions run and displays status info.

- `src/components/MagiSystem.astro`
  - Activates the three MAGI nodes with delayed animation.

- `src/components/MagiConsensus.astro`
  - Simulates a consensus vote between three MAGI nodes.

- `src/components/ThreatTracker.astro`
  - Lists two issue scenarios and their mitigation summaries.

- `src/components/ReportVault.astro`
  - Displays archived test suite metrics.

- `src/components/LclGauge.astro`
  - Range-slider driven contamination / purity display.

- `src/components/ApiSandbox.astro`
  - Mock API request/response sandbox.

- `src/components/AtFieldSandbox.astro`
  - Canvas waveform visualizer that responds to hover triggers.

- `src/components/SkillsMatrixCanvas.astro`
  - Canvas-based biometric waveform panel.

- `src/components/DummySystem.astro`
  - Simulated automation log runner.

- `src/components/TestRunner.astro`
  - Simulated automated audit console.

- `src/components/EffectsController.astro`
  - CRT overlay toggle and audio toggle controller.

- `src/components/ThemeSwitcher.astro`
  - Theme selector with `localStorage` persistence.

## Shared UI primitives

- `src/components/ui/Button.astro`
  - Styled anchor/button primitive.

- `src/components/ui/Card.astro`
  - Basic bordered card wrapper.

- `src/components/ui/Terminal.astro`
  - Monospaced output container for line logs.

## Asset notes

- `public/wallpapers/nerv.jpg`
- `public/wallpapers/eva01.jpg`
- `public/wallpapers/eva02.jpg`
- `public/Igal_Kroif_Resume.pdf`

These are referenced directly by the theme system and the resume download link.

