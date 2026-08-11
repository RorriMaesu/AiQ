<p align="center">
  <img src="aiqlogo.png" alt="AIQ logo" width="200" />
</p>

# AIQ — The Deeply Unofficial Intelligence Test

**[Try the live demo](https://rorrimaesu.github.io/AiQ/)**

AIQ is a humorous puzzle test that treats the experience seriously and the score lightly. Each untimed round draws 20 questions from a balanced 100-question vault covering patterns, verbal reasoning, spatial thinking, and logic.

## What changed

- 100 validated questions, evenly split across four categories
- balanced random selection with recent-question history to reduce repeats
- accessible answer buttons and keyboard-friendly interactions
- responsive layouts designed for natural scrolling on desktop and mobile
- useful hints, honest scoring, category results, and answer explanations
- explicit satire instead of fabricated users, scarcity, or scientific claims

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
