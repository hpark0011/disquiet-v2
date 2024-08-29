export interface Impact {
  userGrowth: number;
  revenueGrowth: number;
  userRetention: number;
  signUpConversion: number;
}

export interface Option {
  text: string;
  emoji: string;
  outcomes: Impact;
}

export interface Scenario {
  title: string;
  scenario: string;
  options: Option[];
}

export interface Quiz {
  description: string;
  questions: Scenario[];
}
