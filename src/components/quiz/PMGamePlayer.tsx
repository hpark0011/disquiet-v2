import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz, Scenario, Impact, Option } from '@/types/quiz';
import ProgressBar from '@/components/Quiz/ProgressBar';
import ScenarioContent from '@/components/Quiz/ScenarioContent';
import MetricCards from '@/components/Quiz/MetricCards';
import GameComplete from '@/components/Quiz/GameComplete';
import SectionHeader from '@/components/Quiz/SectionHeader';

interface PMGamePlayerProps {
  quiz: Quiz;
  scenarios: Scenario[];
  onClose: () => void;
  onReplay: () => void;
}

const PMGamePlayer: React.FC<PMGamePlayerProps> = ({
  quiz,
  scenarios,
  onClose,
  onReplay,
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

  const handleReplay = () => {
    setCurrentScenario(0);
    setTotalOutcomes({
      userGrowth: 0,
      revenueGrowth: 0,
      userRetention: 0,
      signUpConversion: 0,
    });
    setGameComplete(false);
    setSelectedOption(null);
    onReplay();
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
            {!gameComplete ? (
              <ScenarioContent
                scenario={scenarios[currentScenario]}
                selectedOption={selectedOption}
                handleSelectOption={handleSelectOption}
              />
            ) : (
              <GameComplete
                totalOutcomes={totalOutcomes}
                scenariosLength={scenarios.length}
                handleReplay={handleReplay}
              />
            )}
          </motion.div>
        </AnimatePresence>
        {!gameComplete && (
          <MetricCards
            totalOutcomes={totalOutcomes}
            selectedOption={selectedOption}
            scenariosLength={scenarios.length}
            isGameComplete={false}
          />
        )}
      </div>
    </div>
  );
};

export default PMGamePlayer;
