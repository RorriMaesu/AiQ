// Humorous IQ Test Results
// These results are designed to be funny and mock the concept of IQ testing

// Array of possible results for each score range
const resultOptions = {
  range0to20: [
    {
      title: "Certified Genius (of Disappointment)",
      description: "Congratulations! Your IQ is so low it's actually impressive. Scientists are baffled at how you managed to turn on a computer, let alone complete this test. Your brain is special—like finding a unicorn, except the unicorn is really bad at everything.",
      advice: "Consider a career in politics. No qualifications necessary!"
    },
    {
      title: "Brain Cell Endangered Species",
      description: "Holy crap, did you answer these questions with your elbows? Your remaining brain cells are holding an emergency meeting to discuss whether they should just abandon ship. If stupidity was painful, you'd be screaming right now.",
      advice: "Maybe try a helmet when you go outside. Not for safety—just to keep the few thoughts you have from escaping."
    },
    {
      title: "Intellectual Vacuum",
      description: "Scientists could study the empty space between your ears to better understand the concept of nothingness. Your thought process has all the complexity of a pet rock, except the rock might actually be more useful in a crisis.",
      advice: "Have you considered becoming a professional example of what not to do? You'd be a natural."
    },
    {
      title: "Official Amoeba Status",
      description: "Your test results are in, and we have good news! You qualify as a highly intelligent single-celled organism. An amoeba has basic survival instincts, and we're pretty sure you have those too. Probably.",
      advice: "Photosynthesis isn't an option for humans, so you might need to find another way to contribute."
    },
    {
      title: "Evolutionary U-Turn",
      description: "You are the living proof that evolution doesn't always go forward. Sometimes it stops, looks around, and says 'Nah, let's go back to the primordial soup.' You are that soup.",
      advice: "Avoid sharp objects and complex thoughts. Both could hurt you."
    }
  ],
  range21to40: [
    {
      title: "Almost Average (But Not Quite)",
      description: "Your IQ suggests you're smart enough to tie your own shoes, but might occasionally forget which foot is which. You probably think 'quantum physics' is a brand of air freshener.",
      advice: "Try reading books without pictures occasionally. Start with 'See Spot Run' and work your way up."
    },
    {
      title: "Barely Evolved Primate",
      description: "Congratulations on figuring out how to use a computer! That must have been a real struggle with your cognitive limitations. You're like a monkey that's learned to wear pants, but still throws its own crap when excited.",
      advice: "Maybe stick to jobs where grunting is an acceptable form of communication. Warehouse security might be your ceiling."
    },
    {
      title: "The Village Called, They're Missing Their Idiot",
      description: "You're what happens when natural selection takes a smoke break. Your thought process is so slow that by the time you've processed this insult, you'll probably have forgotten why you're offended.",
      advice: "Try not to breed. The gene pool is polluted enough already, thanks."
    },
    {
      title: "Defective Toaster Oven",
      description: "You have all the processing power of a generic toaster, but at least a toaster makes toast. You mostly just consume oxygen and space. It's truly a marvel.",
      advice: "Don't try to multitask. Breathing and thinking at the same time might be risky."
    }
  ],
  range41to60: [
    {
      title: "Mediocrity Personified",
      description: "You're the human equivalent of beige wallpaper. Not dumb enough to be interesting, not smart enough to be useful. You likely have strong opinions about breakfast cereals and not much else.",
      advice: "Have you considered a career in middle management? You're perfectly qualified to make others do the actual thinking."
    },
    {
      title: "Aggressively Average",
      description: "You're the human equivalent of a participation trophy. Not quite stupid enough to be fascinating, not smart enough to be useful. Your brain functions just well enough to keep your basic bodily functions going, with maybe a little leftover for having opinions about fast food.",
      advice: "Aim low. Like, really low. Then you might occasionally surprise yourself by reaching the bar you've set."
    },
    {
      title: "Spectacularly Unremarkable",
      description: "Your mediocrity is almost impressive in its consistency. You're like a human screensaver—running in the background, serving no real purpose, and occasionally making random movements that seem meaningful but aren't.",
      advice: "Maybe try developing a personality to compensate for your intellectual shortcomings? I hear collecting weird things works for some people."
    },
    {
      title: "Professional Breath Breather",
      description: "You are doing a fantastic job at converting oxygen into carbon dioxide. Your contribution to the plant life cycle is noted and appreciated. Anything intellectual beyond that is a bonus.",
      advice: "Keep breathing, you're doing great at that part."
    }
  ],
  range61to80: [
    {
      title: "Surprisingly Functional Human",
      description: "You're smarter than a sea cucumber but dumber than most household pets. You can probably follow simple instructions and occasionally have thoughts that aren't about food or naps.",
      advice: "Try not to operate heavy machinery or make important decisions without adult supervision."
    },
    {
      title: "Accidentally Competent",
      description: "You're like a broken clock that's right twice a day. Occasionally, through no merit of your own, you stumble into something resembling intelligence. Your friends are probably shocked when you say something that isn't completely moronic.",
      advice: "Keep your expectations low and your explanations simple. Big words will only confuse you."
    },
    {
      title: "Functioning Despite Yourself",
      description: "Your brain is like a hamster on a wheel—lots of activity, minimal progress. You've somehow managed to navigate life despite your obvious limitations, which is honestly more impressive than any score on this test.",
      advice: "Stick to routines. Unexpected situations might require actual thinking, and we wouldn't want to strain anything."
    },
    {
      title: "Part-Time Genius",
      description: "You have moments of brilliance, usually followed by hours of regretting your life choices. You're smart enough to know you could do better, but lazy enough not to.",
      advice: "Coffee might help. Or panic. Whatever gets the gears turning."
    }
  ],
  range81to100: [
    {
      title: "Almost Einstein (If Einstein Was Dropped as a Baby)",
      description: "You're what scientists call 'technically sentient.' You occasionally have good ideas, but they're usually just things you saw on TV. Your friends probably describe you as 'present' and 'mostly harmless.'",
      advice: "Your calling might be as a taste-tester for non-toxic glue products."
    },
    {
      title: "Delusional Pseudo-Intellectual",
      description: "Wow, you actually did well! Which means you're just smart enough to realize how much smarter everyone else is. You're the kind of person who uses big words incorrectly at parties and corrects people's grammar on social media while making your own mistakes.",
      advice: "Try channeling your almost-intelligence into something useful, like memorizing sports statistics or becoming really opinionated about craft beer."
    },
    {
      title: "Insufferable Know-It-Almost",
      description: "You're just smart enough to be annoying at dinner parties but not smart enough to realize nobody wants to hear your half-baked theories. You probably think this test actually measures intelligence, which tells us everything we need to know.",
      advice: "Consider using your almost-intelligence to develop self-awareness instead. It would be a better use of your limited mental resources."
    },
    {
      title: "Google Search Expert",
      description: "You probably Googled half the answers, didn't you? That's resourcefulness, which is a type of intelligence, I guess. You're smart enough to cheat the system but not smart enough to know we know.",
      advice: "Your browser history is probably more interesting than your personality."
    }
  ]
};

// Function to randomly select a result from the appropriate range
function getRandomResult(score) {
  let rangeKey;
  if (score <= 20) rangeKey = 'range0to20';
  else if (score <= 40) rangeKey = 'range21to40';
  else if (score <= 60) rangeKey = 'range41to60';
  else if (score <= 80) rangeKey = 'range61to80';
  else rangeKey = 'range81to100';

  const options = resultOptions[rangeKey];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Helper function to select a single random result for each score range
function getFixedResultForRange(score) {
  const result = getRandomResult(score);
  return {
    title: result.title,
    description: result.description,
    advice: result.advice
  };
}

// Create the results array with the score ranges and fixed results
const results = [
  {
    scoreRange: [0, 20],
    ...getFixedResultForRange(10)
  },
  {
    scoreRange: [21, 40],
    ...getFixedResultForRange(30)
  },
  {
    scoreRange: [41, 60],
    ...getFixedResultForRange(50)
  },
  {
    scoreRange: [61, 80],
    ...getFixedResultForRange(70)
  },
  {
    scoreRange: [81, 100],
    ...getFixedResultForRange(90)
  }
];

// The meaningful message that appears after the humorous results
const meaningfulMessage = {
  title: "The Truth About Intelligence",
  message: "In all seriousness, no test can measure the true value of your mind. Intelligence isn't a single number—it's creativity, emotional awareness, practical skills, curiosity, and a million other qualities that make you uniquely you. The greatest minds in history weren't defined by test scores, but by their passion to understand, create, and explore. Your worth isn't determined by how quickly you can solve abstract puzzles, but by how you use your unique gifts to engage with the world around you. Keep learning, keep growing, and remember that the truly intelligent person knows how much they have yet to discover."
};

export { results, meaningfulMessage };
