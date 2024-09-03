import { Article } from '@/types/article';
import articleFeedImage from '@/mock_images/article/card-images/article-1.png';
import productLogo from '@public/images/disquiet-logo.png';

export const dummyArticles: Article[] = [
  {
    id: '1',
    author: {
      name: '존 도',
      role: '수석 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '2시간 전',
    title: '웹 개발의 미래',
    content: `웹 개발의 미래를 내다보면 여러 흥미로운 트렌드가 나타나고 있습니다. AI 기반 도구의 부상에서 접근성의 중요성 증가에 이르기까지, 개발자들은 기대할 것이 많습니다...`,
    tags: ['웹개발', '미래', '트렌드'],
    featuredImage: articleFeedImage,
    isPremium: false,
    linkedProduct: {
      logo: productLogo,
      title: 'Future Web Dev Tool',
    },
  },
  {
    id: '2',
    author: {
      name: '제인 스미스',
      role: 'UX 디자이너',
      avatar: articleFeedImage,
    },
    timestamp: '1일 전',
    title: '접근성을 위한 디자인: 모범 사례',
    content: `디자인에서 접근성은 단순히 있으면 좋은 것이 아니라 필수입니다. 이 기사에서는 모든 능력의 사용자를 위한 접근 가능한 웹사이트 및 애플리케이션을 디자인하기 위한 몇 가지 모범 사례를 살펴보겠습니다...`,
    tags: ['디자인', '접근성', 'ux'],
    featuredImage: articleFeedImage,
    isPremium: false,
  },
  {
    id: '3',
    author: {
      name: '알렉스 존슨',
      role: '데이터 과학자',
      avatar: articleFeedImage,
    },
    timestamp: '3일 전',
    title: '웹 애플리케이션에서의 머신 러닝',
    content: `머신 러닝은 우리가 웹 애플리케이션을 구축하는 방식을 혁신하고 있습니다. 개인화된 추천에서 지능형 챗봇에 이르기까지, ML은 더 매력적이고 효율적인 사용자 경험을 창출할 수 있는 새로운 가능성을 열어주고 있습니다...`,
    tags: ['머신러닝', 'ai', '웹앱'],
    featuredImage: articleFeedImage,
    isPremium: true,
    linkedProduct: {
      logo: productLogo,
      title: 'ML Web App Suite',
    },
  },
  {
    id: '4',
    author: {
      name: '마이클 리',
      role: '프론트엔드 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '5시간 전',
    title: '리액트 훅스의 이해',
    content: `리액트 훅스는 리액트 16.8에 도입된 기능으로, 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해줍니다. 이 기사에서는 훅스의 기본 개념과 사용법을 살펴보겠습니다...`,
    tags: ['리액트', '훅스', '프론트엔드'],
    featuredImage: articleFeedImage,
    isPremium: false,
  },
  {
    id: '5',
    author: {
      name: '사라 김',
      role: '백엔드 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '2일 전',
    title: 'Node.js로 서버 구축하기',
    content: `Node.js는 자바스크립트 런타임으로, 서버 사이드 애플리케이션을 구축하는 데 사용됩니다. 이 기사에서는 Node.js를 사용하여 간단한 서버를 구축하는 방법을 알아보겠습니다...`,
    tags: ['Node.js', '서버', '백엔드'],
    featuredImage: articleFeedImage,
    isPremium: false,
    linkedProduct: {
      logo: productLogo,
      title: 'Node.js Server Kit',
    },
  },
  {
    id: '6',
    author: {
      name: '에밀리 박',
      role: '데이터 분석가',
      avatar: articleFeedImage,
    },
    timestamp: '1주일 전',
    title: '데이터 시각화의 중요성',
    content: `데이터 시각화는 데이터를 이해하고 분석하는 데 중요한 도구입니다. 이 기사에서는 데이터 시각화의 중요성과 효과적인 시각화 방법을 살펴보겠습니다...`,
    tags: ['데이터', '시각화', '분석'],
    featuredImage: articleFeedImage,
    isPremium: false,
  },
  {
    id: '7',
    author: {
      name: '데이비드 최',
      role: '풀스택 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '3일 전',
    title: '풀스택 개발의 도전과 기회',
    content: `풀스택 개발자는 프론트엔드와 백엔드 모두를 다룰 수 있는 개발자를 의미합니다. 이 기사에서는 풀스택 개발의 도전과 기회에 대해 논의해보겠습니다...`,
    tags: ['풀스택', '개발', '기회'],
    featuredImage: articleFeedImage,
    isPremium: false,
  },
];
