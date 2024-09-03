import { StaticImageData } from 'next/image';

export interface Article {
  id: string;
  author: {
    name: string;
    role: string;
    avatar: string | StaticImageData;
  };
  timestamp: string;
  title: string;
  content: string;
  tags: string[];
  featuredImage: string | StaticImageData;
  isPremium: boolean;
  linkedProduct?: {
    logo: string | StaticImageData;
    title: string;
  };
}
