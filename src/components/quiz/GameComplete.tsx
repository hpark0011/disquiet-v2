import React from 'react';
import { calculatePerformance } from '@/utils/quizHelpers';
import { Impact, Scenario } from '@/types/quiz';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Icon';
import Image from 'next/image';
import MetricCards from '@/components/quiz/MetricCards';
interface GameCompleteProps {
  totalOutcomes: Impact;
  scenariosLength: number;
  handleReplay: () => void;
}

const GameComplete: React.FC<GameCompleteProps> = ({
  totalOutcomes,
  scenariosLength,
  handleReplay,
}) => {
  const { performancePercentage, skillLevel } = calculatePerformance(
    totalOutcomes,
    scenariosLength
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
      <div className='space-y-4 text-center flex-col flex items-center'>
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
        <button
          onClick={handleReplay}
          className='flex items-center text-xs justify-center text-gray-500 hover:text-[#6d55ff] transition-colors group'
        >
          <Icon
            name='arrow.clockwise'
            className='mr-[2px] group-hover:filter group-hover:invert-[39%] group-hover:sepia-[93%] group-hover:saturate-[1132%] group-hover:hue-rotate-[218deg] group-hover:brightness-[93%] group-hover:contrast-[91%] transition-all w-[18px] h-[18px]'
          />
          <span>다시하기</span>
        </button>
      </div>
      <div className='space-y-4 text-center'>
        <p className='text-lg font-medium'>
          샌드버드를 도입해 CS를 자동화해보세요.
        </p>
        <Image
          src='/images/sendbird.png'
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
      <MetricCards
        totalOutcomes={totalOutcomes}
        selectedOption={null}
        scenariosLength={scenariosLength}
        isGameComplete={true}
      />
    </div>
  );
};

export default GameComplete;
