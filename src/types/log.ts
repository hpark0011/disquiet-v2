import { StaticImageData } from 'next/image';

export interface Log {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: StaticImageData;
  };
  timestamp: string;
  content: string;
  tags: string[];
  featuredImage: StaticImageData;
  views: number;
  upvotes: number;
  commentCount: number;
  repostCount: number;
}
