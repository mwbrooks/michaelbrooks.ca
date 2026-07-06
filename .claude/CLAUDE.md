# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for michaelbrooks.ca — a static, single-page site hosted on GitHub Pages (the `CNAME` file maps the custom domain). There is no build step, package manager, linter, or test suite. To preview changes, open `index.html` directly in a browser (`open index.html`).

## Branches

Work happens on `main`. A stale `master` branch also exists and is the default branch on GitHub (`origin/HEAD`); don't assume the two are in sync.

## Structure

- `index.html` — the entire site: tagline, About Me, Find Me, Projects, and Presentations sections. Projects and presentations are hand-maintained lists in reverse-chronological order, each entry a small `<ul>` with an `<h3>` title + date `<span>`.
- `style/index.css` — all base styling. The layout is a fixed 400px-wide column.
- `style/shimmer.css` — optional, self-contained shimmer animation for the tagline phrase. Its header comment documents how to remove it entirely; keep that self-contained property (no dependencies on it from `index.css`).
- `deck/` — archived presentation slide decks (Keynote/PDF/HTML) linked from the Presentations section. Historical assets; don't modify.

## Dark mode pattern

Theming uses `light-dark()` behind `@supports (color: light-dark(#fff, #000))` blocks. The convention in both CSS files: plain light-mode values are declared first as the fallback for older browsers, then a `@supports` block redefines them via `:root` custom properties (`--bg`, `--text`, `--tagline`, etc.). Any new color must be added in both places — the fallback rule and the `light-dark()` variable.
