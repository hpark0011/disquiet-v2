import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Article {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  timestamp: string;
  title: string;
  content: string;
  tags: string[];
  featuredImage: string;
}

const ArticlePreview: React.FC<{ article: Article }> = ({ article }) => (
  <div className='border border-gray-200 rounded-lg p-6 mb-6 hover:shadow-md transition-shadow'>
    <div className='flex items-center mb-4'>
      <Image
        src={article.author.avatar}
        alt={article.author.name}
        width={40}
        height={40}
        className='rounded-full mr-3'
      />
      <div>
        <p className='font-semibold'>{article.author.name}</p>
        <p className='text-sm text-gray-500'>{article.author.role}</p>
      </div>
      <p className='text-sm text-gray-400 ml-auto'>{article.timestamp}</p>
    </div>
    <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
    <p className='text-gray-600 mb-4'>{article.content.substring(0, 150)}...</p>
    <div className='flex flex-wrap gap-2 mb-4'>
      {article.tags.map((tag) => (
        <span
          key={tag}
          className='text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full'
        >
          #{tag}
        </span>
      ))}
    </div>
    {article.featuredImage && (
      <Image
        src={article.featuredImage}
        alt='Featured image'
        width={600}
        height={300}
        className='rounded-lg w-full object-cover'
      />
    )}
  </div>
);

const ArticleFeed: React.FC = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulating API call to fetch articles
    setTimeout(() => {
      setArticles([
        {
          id: '1',
          author: {
            name: 'John Doe',
            role: 'Maker@Disquiet',
            avatar: '/avatars/john-doe.jpg',
          },
          timestamp: '2시간 전',
          title: '디자인 시스템의 중요성',
          content:
            '디자인 시스템은 제품의 일관성을 유지하고 개발 속도를 높이는 데 중요한 역할을 합니다...',
          tags: ['디자인', '개발'],
          featuredImage: '/images/design-system.jpg',
        },
        // Add more mock articles here
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className='text-center py-10'>Loading articles...</div>;
  }

  return (
    <div className='max-w-3xl mx-auto py-8'>
      {articles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}
      <div className='text-center mt-8'>
        <Button
          variant='outline'
          onClick={() => console.log('Load more articles')}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default ArticleFeed;
