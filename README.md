<p align="center">
  <img src="aiqlogo.png" alt="AIQ logo" width="200" />
</p>

# AIQ — The Deeply Unofficial Intelligence Test

**[Try the live demo](https://rorrimaesu.github.io/AiQ/)**

AIQ is a deliberately rigged, humorous IQ-style test. Each round draws 20 questions from a balanced 100-question vault, gives the player eight seconds per question, then reveals why its impossible-to-pass score is not a reliable measure of intelligence.

## What changed

- 100 validated questions, evenly split across four categories
- balanced random selection with recent-question history to reduce repeats
- accessible answer buttons and keyboard-friendly interactions
- responsive layouts designed for natural scrolling on desktop and mobile
- deliberately useless hints, an eight-second auto-submit timer, and one-way locked answers
- impossible certification math followed by an explicit explanation of how the result was manipulated
- honest category results and answer explanations separated from the intentionally unreliable verdict

AIQ is entertainment, not a standardized IQ assessment or diagnosis.

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
