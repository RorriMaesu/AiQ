# AiQ - Advanced Cognitive Assessment

![AiQ Logo](public/logo192.png)

## Overview

AiQ is an interactive IQ test application designed to challenge conventional metrics of intelligence while providing an engaging user experience. The application presents users with a series of questions across different cognitive domains, including pattern recognition, verbal reasoning, and spatial intelligence.

**Live Demo:** [https://rorrimaesu.github.io/AiQ](https://rorrimaesu.github.io/AiQ)

## Features

- **Engaging User Interface**: Modern, responsive design with smooth animations and transitions
- **Multiple Question Types**: Pattern recognition, verbal reasoning, and spatial intelligence questions
- **Interactive Test Experience**: Real-time feedback, timer, and progress tracking
- **Psychological Elements**: Incorporates psychological principles in the UI/UX design
- **Detailed Results Analysis**: Comprehensive breakdown of performance with personalized insights
- **Mobile-Optimized**: Fully responsive design that works on all devices
- **No-Scroll Design**: Questions are designed to fit within the viewport without scrolling

## Technology Stack

- **Frontend**: React.js with Hooks for state management
- **Styling**: Custom CSS with responsive design principles
- **Deployment**: GitHub Pages
- **Version Control**: Git and GitHub

## Project Structure

```
AiQ/
├── public/                # Public assets
├── src/                   # Source files
│   ├── components/        # React components
│   │   ├── IntroPage.js   # Landing page
│   │   ├── Question.js    # Question display
│   │   ├── QuestionPage.js # Test page
│   │   └── ResultsPage.js # Results display
│   ├── data/              # Static data
│   │   ├── questions.js   # Test questions
│   │   └── results.js     # Result interpretations
│   ├── styles/            # CSS styles
│   ├── App.js             # Main application component
│   └── index.js           # Entry point
└── package.json           # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rorrimaesu/AiQ.git
   cd AiQ
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Deployment

To deploy the application to GitHub Pages:

```bash
npm run deploy
```

## Future Enhancements

- **User Authentication**: Allow users to create accounts and track their progress
- **Leaderboards**: Compare scores with other users
- **Additional Question Types**: Expand the test with more diverse question types
- **Detailed Analytics**: Provide more in-depth analysis of cognitive strengths and weaknesses
- **Localization**: Support for multiple languages
- **Accessibility Improvements**: Enhanced support for users with disabilities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by traditional IQ tests but designed to challenge their limitations
- UI/UX design influenced by modern psychological principles
- Special thanks to all contributors and testers
