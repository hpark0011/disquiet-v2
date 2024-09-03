import React from 'react';
import { Impact } from '@/types/quiz';
import SectionHeader from '@/components/quiz/SectionHeader';
import MetricCard from '@/components/quiz/MetricCard';

interface CustomOption {
  outcomes: Impact;
  // other properties if needed
}

interface MetricCardsProps {
  totalOutcomes: Impact;
  selectedOption: CustomOption | null;
  scenariosLength: number;
  isGameComplete: boolean;
}

const MetricCards: React.FC<MetricCardsProps> = ({
  totalOutcomes,
  selectedOption,
  scenariosLength,
  isGameComplete,
}) => {
  const metricLabels = {
    userGrowth: '사용자 성장',
    revenueGrowth: '수익 성장',
    userRetention: '사용자 유지',
    signUpConversion: '가입 전환',
  };

  return (
    <div className='mt-4'>
      <SectionHeader
        icon='chart.bar.fill'
        label={isGameComplete ? '최종 지표' : '현재 지표'}
      />
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        {Object.entries(totalOutcomes).map(([key, value]) => (
          <MetricCard
            key={key}
            label={metricLabels[key as keyof typeof metricLabels]}
            count={value}
            growth={value / scenariosLength}
            highlight={
              selectedOption !== null &&
              selectedOption.outcomes[key as keyof Impact] !== 0
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MetricCards;
