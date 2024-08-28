import React, { useState } from 'react';
import { Quiz, Scenario, Impact } from '@/types/quiz';
import { calculatePerformance } from '@/utils/quizHelpers';
import { motion } from 'framer-motion';

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

  const handleSelectOption = (optionIndex: number) => {
    const option = scenarios[currentScenario].options[optionIndex];
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
  };

  const progress = ((currentScenario + 1) / scenarios.length) * 100;

  return (
    <div className='bg-transparent'>
      <div className='mb-4 bg-gradient-to-r from-transparent via-gray-200 to-transparent h-0.5 relative overflow-hidden rounded-full'>
        <motion.div
          className='bg-gradient-to-r from-transparent via-[#6d55ff] to-transparent h-0.5 absolute left-0 top-0 overflow-hidden rounded-full'
          style={{ width: `${progress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent'
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
            style={{ width: '100%' }}
          />
        </motion.div>
      </div>
      <h2 className='text-xl font-semibold mb-4'>{quiz.title}</h2>

      {!gameComplete ? (
        <>
          <h3 className='text-base font-semibold mb-2'>
            Scenario {currentScenario + 1} of {scenarios.length}:
          </h3>
          <p className='mb-6'>{scenarios[currentScenario].scenario}</p>
          <div className='grid grid-cols-2 gap-1'>
            {scenarios[currentScenario].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                className='text-left p-4 bg-gray-100 hover:bg-gray-200 rounded-2xl transition duration-200 flex flex-col items-center justify-center h-fit'
              >
                <span className='text-3xl mb-4'>{option.emoji}</span>
                <span className='text-sm text-center'>{option.text}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h3 className='text-lg font-semibold mb-2'>Game Complete!</h3>
          <p className='mb-2'>
            Your Performance:{' '}
            {
              calculatePerformance(totalOutcomes, scenarios.length)
                .performancePercentage
            }
            %
          </p>
          <p className='mb-4'>
            Skill Level:{' '}
            {calculatePerformance(totalOutcomes, scenarios.length).skillLevel}
          </p>
          <h4 className='font-semibold mb-2'>Overall Impact:</h4>
          <div className='grid grid-cols-2 gap-2'>
            <div className='p-2 bg-gray-100 rounded'>
              User Growth: {totalOutcomes.userGrowth}
            </div>
            <div className='p-2 bg-gray-100 rounded'>
              Revenue Growth: {totalOutcomes.revenueGrowth}
            </div>
            <div className='p-2 bg-gray-100 rounded'>
              User Retention: {totalOutcomes.userRetention}
            </div>
            <div className='p-2 bg-gray-100 rounded'>
              Sign-up Conversion: {totalOutcomes.signUpConversion}
            </div>
          </div>
          <button
            onClick={onClose}
            className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200'
          >
            Close Game
          </button>
        </div>
      )}
    </div>
  );
};

export default PMGamePlayer;
