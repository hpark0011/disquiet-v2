import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz, Scenario, Impact, Option } from '@/types/quiz';
import { calculatePerformance } from '@/utils/quizHelpers';
import { formatPercentage } from '@/utils/formatters';
import SectionHeader from '@/components/quiz/SectionHeader';
import MetricCard from '@/components/quiz/MetricCard';
import ProgressBar from '@/components/quiz/ProgressBar';
import Button from '@/components/quiz/Button';

interface PMGamePlayerProps {
  quiz: Quiz;
  scenarios: Scenario[];
  onClose: () => void;
}

const PMGamePlayer: React.FC<PMGamePlayerProps> = ({
  quiz,
  scenarios,
  onClose,
}) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [totalOutcomes, setTotalOutcomes] = useState<Impact>({
    userGrowth: 0,
    revenueGrowth: 0,
    userRetention: 0,
    signUpConversion: 0,
  });
  const [gameComplete, setGameComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const progress = useMemo(
    () => ((currentScenario + 1) / scenarios.length) * 100,
    [currentScenario, scenarios.length]
  );

  const handleSelectOption = useCallback(
    (option: Option) => {
      setSelectedOption(option);
      setTotalOutcomes((prev) => ({
        userGrowth: prev.userGrowth + option.outcomes.userGrowth,
        revenueGrowth: prev.revenueGrowth + option.outcomes.revenueGrowth,
        userRetention: prev.userRetention + option.outcomes.userRetention,
        signUpConversion:
          prev.signUpConversion + option.outcomes.signUpConversion,
      }));

      setTimeout(() => {
        if (currentScenario + 1 < scenarios.length) {
          setCurrentScenario((prev) => prev + 1);
        } else {
          setGameComplete(true);
        }
        setSelectedOption(null);
      }, 1500);
    },
    [currentScenario, scenarios.length]
  );

  const metricLabels = {
    userGrowth: '사용자 성장',
    revenueGrowth: '수익 성장',
    userRetention: '사용자 유지',
    signUpConversion: '가입 전환',
  };

  const renderGameContent = () => (
    <>
      <h2 className='text-lg font-semibold mb-2'>
        {scenarios[currentScenario].title}
      </h2>
      <p className='mb-6 text-[14px] leading-[20px]'>
        {scenarios[currentScenario].scenario}
      </p>
      <div className='mb-8'>
        <SectionHeader icon='a.circle.fill' label='어떻게 하시겠습니까?' />
        <div className='space-y-1 mt-2'>
          {scenarios[currentScenario].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleSelectOption(option)}
              variant='option'
              icon={option.emoji}
              disabled={selectedOption !== null}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );

  const renderMetricCards = () => (
    <div className='mt-4'>
      <SectionHeader icon='chart.bar.fill' label='현재 지표' />
      <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
        {Object.entries(totalOutcomes).map(([key, value]) => (
          <MetricCard
            key={key}
            label={metricLabels[key as keyof typeof metricLabels]}
            count={value}
            growth={value / (currentScenario + 1)}
            highlight={
              selectedOption !== null &&
              selectedOption.outcomes[key as keyof Impact] !== 0
            }
          />
        ))}
      </div>
    </div>
  );

  const renderGameComplete = () => {
    const { performancePercentage, skillLevel } = calculatePerformance(
      totalOutcomes,
      scenarios.length
    );
    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>게임 완료!</h3>
        <p className='mb-2'>당신의 성과: {performancePercentage}%</p>
        <p className='mb-4'>스킬 레벨: {skillLevel}</p>
        <h4 className='font-semibold mb-2'>전체 영향:</h4>
        <div className='grid grid-cols-2 gap-2'>
          {Object.entries(totalOutcomes).map(([key, value]) => (
            <div key={key} className='p-2 bg-gray-100 rounded'>
              {metricLabels[key as keyof typeof metricLabels]}: {value}
            </div>
          ))}
        </div>
        <Button onClick={onClose} variant='primary' className='mt-4'>
          게임 종료
        </Button>
      </div>
    );
  };

  return (
    <div className='bg-white rounded-lg relative'>
      <ProgressBar progress={progress} />
      <div className='pt-[12px]'>
        <SectionHeader
          icon='circle.grid.cross.fill'
          label={`시나리오 ${currentScenario + 1}/${scenarios.length}`}
        />
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {!gameComplete ? renderGameContent() : renderGameComplete()}
          </motion.div>
        </AnimatePresence>
        {!gameComplete && renderMetricCards()}
      </div>
    </div>
  );
};

export default PMGamePlayer;
