import React from 'react';
import { Scenario, Option } from '@/types/quiz';
import SectionHeader from '@/components/quiz/SectionHeader';
import OptionButton from '@/components/quiz/OptionButton';

interface ScenarioContentProps {
  scenario: Scenario;
  selectedOption: Option | null;
  handleSelectOption: (option: Option) => void;
}

const ScenarioContent: React.FC<ScenarioContentProps> = ({
  scenario,
  selectedOption,
  handleSelectOption,
}) => (
  <>
    <h2 className='text-lg font-semibold mb-2'>{scenario.title}</h2>
    <p className='mb-6 text-[14px] leading-[20px]'>{scenario.scenario}</p>
    <div className='mb-8'>
      <SectionHeader icon='a.circle.fill' label='어떻게 하시겠습니까?' />
      <div className='space-y-1 mt-2'>
        {scenario.options.map((option, index) => (
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

export default ScenarioContent;
