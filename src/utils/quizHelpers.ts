import { Impact } from '@/types/quiz';

export const calculatePerformance = (
  totalOutcomes: Impact,
  scenarioCount: number
) => {
  const totalImpact = Object.values(totalOutcomes).reduce((a, b) => a + b, 0);
  const maxPossibleImpact = scenarioCount * 5 * 4;
  const performancePercentage = Math.round(
    ((totalImpact + maxPossibleImpact) / (2 * maxPossibleImpact)) * 100
  );

  let skillLevel;
  if (performancePercentage >= 80) skillLevel = 'Expert PM';
  else if (performancePercentage >= 60) skillLevel = 'Senior PM';
  else if (performancePercentage >= 40) skillLevel = 'Mid-level PM';
  else if (performancePercentage >= 20) skillLevel = 'Junior PM';
  else skillLevel = 'Novice PM';

  return { performancePercentage, skillLevel };
};
