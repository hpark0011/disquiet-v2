'use client';

import React from 'react';
import TabGroup from './FeedTabOptions';
import { SortOptions } from './SortOptions';
import { NewPostButton } from './NewPostButton';
import LogEditorModal from '../LogEditorModal';
import { useFeedTabs } from '../../hooks/useFeedTabs';

const FeedTabs: React.FC = () => {
  const {
    activeTab,
    activeSort,
    isLogModalOpen,
    handleTabChange,
    handleSortChange,
    handleCloseNewLogModal,
    handleSubmitNewLog,
    getNewPostConfig,
  } = useFeedTabs();

  return (
    <>
      <div className='max-w-[640px] mx-auto'>
        <div className='flex items-center justify-between p-1 border border-gray-200 rounded-xl'>
          <TabGroup activeTab={activeTab} onTabChange={handleTabChange} />
          <div className='flex items-center space-x-2'>
            <SortOptions
              activeSort={activeSort}
              onSortChange={handleSortChange}
            />
            <NewPostButton config={getNewPostConfig()} />
          </div>
        </div>
      </div>
      <LogEditorModal
        isOpen={isLogModalOpen}
        onClose={handleCloseNewLogModal}
        onSubmit={handleSubmitNewLog}
      />
    </>
  );
};

export default FeedTabs;
