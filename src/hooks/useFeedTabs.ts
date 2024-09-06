import { useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { TabValue, tabOptions } from '../components/feed-tabs/FeedTabOptions';
import { SortValue } from '../components/feed-tabs/SortOptions';
import {
  openNewProductModal,
  openNewArticleModal,
} from '../utils/modalHelpers';
import { useLogSubmit } from './useLogSubmit';

export const useFeedTabs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabValue>('all');
  const [activeSort, setActiveSort] = useState<SortValue>('인기');
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const { handleSubmitLog } = useLogSubmit();

  useEffect(() => {
    const path = pathname.split('/')[1];
    switch (path) {
      case 'logs':
        setActiveTab('logs');
        break;
      case 'products':
        setActiveTab('products');
        break;
      case 'articles':
        setActiveTab('articles');
        break;
      default:
        setActiveTab('all');
    }
  }, [pathname]);

  const handleTabChange = useCallback(
    (value: TabValue) => {
      setActiveTab(value);
      const selectedTab = tabOptions.find((tab) => tab.value === value);
      const route = selectedTab?.urlSlug ? `/${selectedTab.urlSlug}` : '/';
      router.push(route);
    },
    [router]
  );

  const handleSortChange = useCallback((value: SortValue) => {
    setActiveSort(value);
  }, []);

  const handleOpenNewLogModal = useCallback(() => {
    setIsLogModalOpen(true);
  }, []);

  const handleCloseNewLogModal = useCallback(() => {
    setIsLogModalOpen(false);
  }, []);

  const handleSubmitNewLog = useCallback(
    (logData: { content: string }) => {
      const success = handleSubmitLog(logData);
      if (success) {
        setIsLogModalOpen(false);
        // You might want to refresh the feed or update the UI in some way here
      }
    },
    [handleSubmitLog]
  );

  const getNewPostConfig = useCallback(() => {
    switch (activeTab) {
      case 'logs':
      case 'all':
        return { label: '새 로그', action: handleOpenNewLogModal };
      case 'products':
        return { label: '새 프로덕트', action: openNewProductModal };
      case 'articles':
        return { label: '새 아티클', action: openNewArticleModal };
      default:
        return { label: '새 글 쓰기', action: () => {} };
    }
  }, [activeTab, handleOpenNewLogModal]);

  return {
    activeTab,
    activeSort,
    isLogModalOpen,
    handleTabChange,
    handleSortChange,
    handleOpenNewLogModal,
    handleCloseNewLogModal,
    handleSubmitNewLog,
    getNewPostConfig,
  };
};
