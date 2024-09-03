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

export interface QuizConfig {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  scoringSystem: ScoringSystem;
  resultCalculation: ResultCalculation;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'slider' | 'text';
  prompt: string;
  options?: Option[];
}

export interface ScoringSystem {
  type: 'sum' | 'average' | 'custom';
  customLogic?: (answers: Answer[]) => number;
}

export interface ResultCalculation {
  type: 'threshold' | 'range' | 'custom';
  thresholds?: { [key: number]: string };
  ranges?: { min: number; max: number; result: string }[];
  customLogic?: (score: number) => string;
}

export interface Answer {
  questionId: string;
  value: number | string;
}

export interface QuizResults {
  score: number;
  result: string;
  answers: Answer[];
}
