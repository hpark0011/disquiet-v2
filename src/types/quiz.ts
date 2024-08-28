export interface Impact {
  userGrowth: number;
  revenueGrowth: number;
  userRetention: number;
  signUpConversion: number;
}

export interface Option {
  text: string;
  outcomes: Impact;
}

export interface Scenario {
  scenario: string;
  options: Option[];
}

export interface Quiz {
  title: string;
  description: string;
  questions: Scenario[];
}
