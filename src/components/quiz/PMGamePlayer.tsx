import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz, Scenario, Impact, Option } from '@/types/quiz';
import { calculatePerformance } from '@/utils/quizHelpers';
import { formatPercentage } from '@/utils/formatters';
import SectionHeader from '@/components/SectionHeader';
import MetricCard from '@/components/MetricCard';
import ProgressBar from '@/components/ProgressBar';
import Button from '@/components/Button';
import Icon from '@/components/Icon'; // Add this line

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

  const progress = useMemo(
    () => ((currentScenario + 1) / scenarios.length) * 100,
    [currentScenario, scenarios.length]
  );

  const handleSelectOption = useCallback(
    (option: Option) => {
      setTotalOutcomes((prev) => ({
        userGrowth: prev.userGrowth + option.outcomes.userGrowth,
        revenueGrowth: prev.revenueGrowth + option.outcomes.revenueGrowth,
        userRetention: prev.userRetention + option.outcomes.userRetention,
        signUpConversion:
          prev.signUpConversion + option.outcomes.signUpConversion,
      }));

      if (currentScenario + 1 < scenarios.length) {
        setCurrentScenario((prev) => prev + 1);
      } else {
        setGameComplete(true);
      }
    },
    [currentScenario, scenarios.length]
  );

  const renderGameContent = () => (
    <>
      <p className='mb-6 text-lg'>{scenarios[currentScenario].scenario}</p>
      <div className='mb-6'>
        <SectionHeader icon='questionmark.circle' label='What would you do?' />
        <div className='space-y-3'>
          {scenarios[currentScenario].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleSelectOption(option)}
              variant='option'
              icon={option.emoji}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </div>
      <div className='mt-8'>
        <SectionHeader icon='chart.bar' label='Current Metrics' />
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
          {Object.entries(totalOutcomes).map(([key, value]) => (
            <MetricCard
              key={key}
              label={key}
              count={value}
              growth={value / (currentScenario + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );

  const renderGameComplete = () => {
    const { performancePercentage, skillLevel } = calculatePerformance(
      totalOutcomes,
      scenarios.length
    );
    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Game Complete!</h3>
        <p className='mb-2'>Your Performance: {performancePercentage}%</p>
        <p className='mb-4'>Skill Level: {skillLevel}</p>
        <h4 className='font-semibold mb-2'>Overall Impact:</h4>
        <div className='grid grid-cols-2 gap-2'>
          {Object.entries(totalOutcomes).map(([key, value]) => (
            <div key={key} className='p-2 bg-gray-100 rounded'>
              {key}: {value}
            </div>
          ))}
        </div>
        <Button onClick={onClose} variant='primary' className='mt-4'>
          Close Game
        </Button>
      </div>
    );
  };

  return (
    <div className='bg-white rounded-lg shadow-lg'>
      <ProgressBar progress={progress} />
      <div className='p-6'>
        <SectionHeader
          icon='circle.grid.cross.fill'
          label={`시나리오 ${currentScenario + 1}/${scenarios.length}`}
        />
        <h2 className='text-2xl font-bold mb-4'>{quiz.title}</h2>
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
      </div>
    </div>
  );
};

export default PMGamePlayer;
