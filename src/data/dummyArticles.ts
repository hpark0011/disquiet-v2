import { Article } from '@/types/article';
import articleFeedImage from '@/mock_images/article/article-feed.jpg';

export const dummyArticles: Article[] = [
  {
    id: '1',
    author: {
      name: 'John Doe',
      role: 'Senior Developer',
      avatar: articleFeedImage,
    },
    timestamp: '2 hours ago',
    title: 'The Future of Web Development',
    content: `As we look ahead to the future of web development, several exciting trends are emerging. From the rise of AI-powered tools to the increasing importance of accessibility, developers have a lot to look forward to...`,
    tags: ['webdev', 'future', 'trends'],
    featuredImage: articleFeedImage,
  },
  {
    id: '2',
    author: {
      name: 'Jane Smith',
      role: 'UX Designer',
      avatar: articleFeedImage,
    },
    timestamp: '1 day ago',
    title: 'Designing for Accessibility: Best Practices',
    content: `Accessibility in design is not just a nice-to-have, it's a must-have. In this article, we'll explore some best practices for designing accessible websites and applications that cater to users of all abilities...`,
    tags: ['design', 'accessibility', 'ux'],
    featuredImage: articleFeedImage,
  },
  {
    id: '3',
    author: {
      name: 'Alex Johnson',
      role: 'Data Scientist',
      avatar: articleFeedImage,
    },
    timestamp: '3 days ago',
    title: 'Machine Learning in Web Applications',
    content: `Machine learning is revolutionizing the way we build web applications. From personalized recommendations to intelligent chatbots, ML is opening up new possibilities for creating more engaging and efficient user experiences...`,
    tags: ['machinelearning', 'ai', 'webapps'],
    featuredImage: articleFeedImage,
  },
];
