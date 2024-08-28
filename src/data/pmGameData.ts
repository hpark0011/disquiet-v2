import { Scenario, Quiz } from '@/types/quiz';

export const scenarios: Scenario[] = [
  {
    scenario:
      'Your team has developed a new feature that could significantly improve user experience, but it might slow down the app for some users. What do you do?',
    options: [
      {
        text: 'Roll out the feature to all users immediately',
        emoji: '🚀',
        outcomes: {
          userGrowth: 5,
          revenueGrowth: 2,
          userRetention: -3,
          signUpConversion: 1,
        },
      },
      {
        text: 'Conduct A/B testing with a small group of users',
        emoji: '🧪',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
      {
        text: 'Delay the feature launch and optimize for performance',
        emoji: '⏳',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: -2,
          userRetention: 4,
          signUpConversion: 0,
        },
      },
      {
        text: 'Make the feature optional and let users decide',
        emoji: '🔀',
        outcomes: {
          userGrowth: 3,
          revenueGrowth: 2,
          userRetention: 2,
          signUpConversion: 1,
        },
      },
    ],
  },
  {
    scenario:
      'A major competitor has just launched a similar product at a lower price point. How do you respond?',
    options: [
      {
        text: 'Lower your prices to match the competitor',
        emoji: '📉',
        outcomes: {
          userGrowth: 4,
          revenueGrowth: -3,
          userRetention: 2,
          signUpConversion: 3,
        },
      },
      {
        text: "Launch a marketing campaign highlighting your product's unique features",
        emoji: '📢',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
      {
        text: 'Add new premium features to justify your higher price',
        emoji: '💸',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: 4,
          userRetention: 1,
          signUpConversion: -2,
        },
      },
      {
        text: 'Ignore the competitor and stick to your current strategy',
        emoji: '🙅‍♂️',
        outcomes: {
          userGrowth: -3,
          revenueGrowth: -1,
          userRetention: -2,
          signUpConversion: -3,
        },
      },
    ],
  },
  {
    scenario:
      "User engagement metrics have been declining over the past month. What's your first course of action?",
    options: [
      {
        text: 'Conduct user surveys to understand the reasons behind the decline',
        emoji: '📊',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: 0,
          userRetention: 3,
          signUpConversion: 1,
        },
      },
      {
        text: 'Launch a new feature to re-engage users',
        emoji: '🚀',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: -1,
          signUpConversion: 2,
        },
      },
      {
        text: 'Increase marketing spend to attract new users',
        emoji: '📈',
        outcomes: {
          userGrowth: 4,
          revenueGrowth: -2,
          userRetention: 0,
          signUpConversion: 3,
        },
      },
      {
        text: 'Optimize the onboarding process for new users',
        emoji: '📚',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 1,
          signUpConversion: 4,
        },
      },
    ],
  },
  {
    scenario:
      'Your development team proposes a complete redesign of the user interface. What do you do?',
    options: [
      {
        text: 'Approve the redesign and allocate resources immediately',
        emoji: '🎨',
        outcomes: {
          userGrowth: 3,
          revenueGrowth: -1,
          userRetention: -2,
          signUpConversion: 4,
        },
      },
      {
        text: 'Request a smaller, phased approach to the redesign',
        emoji: '📈',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: 1,
          userRetention: 2,
          signUpConversion: 2,
        },
      },
      {
        text: 'Conduct user testing with prototypes before making a decision',
        emoji: '👥',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 2,
          userRetention: 3,
          signUpConversion: 3,
        },
      },
      {
        text: 'Reject the proposal and focus on incremental improvements',
        emoji: '🚫',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: 2,
          userRetention: 1,
          signUpConversion: -1,
        },
      },
    ],
  },
  {
    scenario:
      "You've discovered a security vulnerability in your product. How do you handle it?",
    options: [
      {
        text: "Immediately shut down the affected feature until it's fixed",
        emoji: '🚫',
        outcomes: {
          userGrowth: -3,
          revenueGrowth: -4,
          userRetention: 2,
          signUpConversion: -2,
        },
      },
      {
        text: 'Quietly fix the issue without informing users',
        emoji: '🤐',
        outcomes: {
          userGrowth: 0,
          revenueGrowth: 1,
          userRetention: -4,
          signUpConversion: 0,
        },
      },
      {
        text: 'Inform users, apologize, and provide a timeline for the fix',
        emoji: '📢',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: -2,
          userRetention: 4,
          signUpConversion: 1,
        },
      },
      {
        text: 'Hire a third-party security firm to audit and fix the issue',
        emoji: '🔍',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: -3,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
    ],
  },
];

export const mockPMGame: Quiz = {
  title: "Product Manager's Dilemma: Navigate the Startup Seas",
  description:
    'Test your product management skills with real-world scenarios! Can you balance user growth, revenue, retention, and acquisition in this fast-paced startup environment?',
  questions: scenarios,
};
