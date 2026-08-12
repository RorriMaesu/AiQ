<p align="center">
  <img src="aiqlogo.png" alt="AiQ logo" width="200" />
</p>

# AiQ — The Deeply Unofficial Intelligence Test

**[Try the live demo](https://rorrimaesu.github.io/AiQ/)**

AiQ is a deliberately suspicious, humorous IQ-style test. Each round draws 20 questions from a large rotating bank, gives the player eight seconds per question, then separates puzzle performance from the far larger reality of human intelligence.

## What changed

- a large validated question bank split evenly across four categories
- balanced random selection with recent-question history to reduce repeats
- accessible answer buttons and keyboard-friendly interactions
- responsive layouts designed for natural scrolling on desktop and mobile
- deliberately useless hints, an eight-second auto-submit timer, and one-way locked answers
- dynamic reported scores, peer comparisons, and category profiles that change between attempts
- a suspiciously authoritative verdict followed by an explicit lesson about the limits of IQ-style measurement
- honest category results and answer explanations separated from the intentionally unreliable verdict

AiQ is entertainment, not a standardized IQ assessment or diagnosis.

## Run locally

```bash
npm ci
npm start
```

Run the automated checks and production build with:

```bash
npm test -- --runInBand
npm run build
```

## Deploy

The project is configured for GitHub Pages at `/AiQ/`:

```bash
npm run deploy
```

## Technology

React 18, Create React App, and custom responsive CSS.

## License

Apache-2.0. See [LICENSE](LICENSE).
