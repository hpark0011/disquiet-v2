'use client';

import React from 'react';
import { Article } from '@/types/article';
import ArticleCard from './ArticleCard';
import PremiumArticleCard from './PremiumArticleCard';

interface ArticleFeedProps {
  articles: Article[];
  isProfileContent?: boolean;
}

const ArticleFeed: React.FC<ArticleFeedProps> = ({
  articles = [], // Default value
  isProfileContent = false,
}) => {
  return (
    <div className='max-w-[640px] mx-auto flex flex-col items-center space-y-4'>
      {articles.map((article, index) => (
        <React.Fragment key={article.id}>
          {article.isPremium ? (
            <PremiumArticleCard article={article} />
          ) : (
            <ArticleCard
              article={article}
              isProfileContent={isProfileContent}
            />
          )}
          {index < articles.length - 1 && (
            <div className='my-2 h-[1px] w-full bg-divider-secondary max-w-[640px]' />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ArticleFeed;
