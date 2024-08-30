import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz, Scenario, Impact, Option } from '@/types/quiz';
import { calculatePerformance } from '@/utils/quizHelpers';
import { formatPercentage } from '@/utils/formatters';
import SectionHeader from '@/components/quiz/SectionHeader';
import MetricCard from '@/components/quiz/MetricCard';
import ProgressBar from '@/components/quiz/ProgressBar';
import { Button } from '@/components/ui/button'; // Update this import
import Icon from '@/components/Icon';
import OptionButton from './OptionButton';
import Image from 'next/image';

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
            <OptionButton
              key={index}
              onClick={() => handleSelectOption(option)}
              variant='option'
              icon={option.emoji}
              disabled={selectedOption !== null}
            >
              {option.text}
            </OptionButton>
          ))}
        </div>
      </div>
    </>
  );

  const renderMetricCards = (isGameComplete: boolean) => (
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
            growth={value / scenarios.length}
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

    const username = 'hpark0011'; // This should be dynamically set
    const percentile = 15; // This should be dynamically calculated

    const handleShareClick = () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
      });
    };

    return (
      <div className='space-y-12'>
        <div className='space-y-4 text-center'>
          <div>
            <p className='text-lg font-medium'>성공적으로 PMF를 찾았습니다!</p>
            <p className='text-lg font-medium'>
              <span>{username}</span>님의 PM 레벨은 상위{' '}
              <span className='text-[#6d55ff]'>{percentile}%</span> 입니다.
            </p>
          </div>
          <Button onClick={handleShareClick} variant='primary' size='sm'>
            나의 PM 레벨 공유하기
          </Button>
        </div>
        <div className='space-y-4 text-center'>
          <p className='text-lg font-medium'>
            샌드버드를 도입해 CS를 자동화해보세요.
          </p>
          <Image
            src='/sendbird.png'
            alt='Sendbird'
            width={64}
            height={64}
            className='mx-auto border border-gray-100 rounded-xl shadow-xl'
          />
          <Button
            onClick={() => window.open('https://sendbird.com', '_blank')}
            variant='primary'
            size='sm'
            className='bg-gradient-to-b from-[#742DDD]/70 to-[#742DDD] hover:from-[#742DDD]/70 hover:to-[#742DDD] transition-shadow duration-300 ease-in-out hover:shadow-branded-button-hover'
          >
            샌드버드 알아보기
          </Button>
        </div>
        {renderMetricCards(true)}
      </div>
    );
  };

  return (
    <div className='bg-white rounded-lg relative'>
      <ProgressBar progress={progress} />
      <div className='pt-[12px]'>
        <SectionHeader
          icon='circle.grid.cross.fill'
          label={
            gameComplete
              ? '결과'
              : `시나리오 ${currentScenario + 1}/${scenarios.length}`
          }
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
        {!gameComplete && renderMetricCards(false)}
      </div>
    </div>
  );
};

export default PMGamePlayer;
