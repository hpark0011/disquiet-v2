import { Article } from '@/types/article';
import articleFeedImage from '@/mock_images/article/card-images/article-1.png';

export const dummyArticles: Article[] = [
  {
    id: '1',
    author: {
      name: '김지원',
      role: '시니어 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '2시간 전',
    title: '웹 개발의 미래: AI와 머신러닝의 역할',
    content: `웹 개발의 미래를 살펴보면 여러 흥미로운 트렌드가 떠오르고 있습니다. AI 기반 도구의 부상부터 접근성의 중요성 증가까지, 개발자들에게는 기대할 만한 것들이 많습니다. 특히 AI와 머신러닝 기술이 웹 개발 프로세스에 어떻게 통합되고 있는지 살펴보겠습니다...`,
    tags: ['웹개발', '인공지능', '미래기술'],
    featuredImage: articleFeedImage,
  },
  {
    id: '2',
    author: {
      name: '박서연',
      role: 'UX 디자이너',
      avatar: articleFeedImage,
    },
    timestamp: '1일 전',
    title: '접근성을 고려한 디자인: 모두를 위한 웹',
    content: `디자인에서의 접근성은 단순히 '있으면 좋은 것'이 아니라 '필수'입니다. 이 글에서는 모든 능력의 사용자를 고려한 접근 가능한 웹사이트와 애플리케이션을 디자인하기 위한 몇 가지 모범 사례를 살펴봅니다. 색상 대비, 키보드 네비게이션, 스크린 리더 호환성 등 주요 요소들을 다룰 예정입니다...`,
    tags: ['디자인', '접근성', 'UX'],
    featuredImage: articleFeedImage,
  },
  {
    id: '3',
    author: {
      name: '이현우',
      role: '데이터 과학자',
      avatar: articleFeedImage,
    },
    timestamp: '3일 전',
    title: '웹 애플리케이션에서의 머신러닝 활용',
    content: `머신러닝은 웹 애플리케이션 구축 방식을 혁신하고 있습니다. 개인화된 추천 시스템부터 지능형 챗봇까지, ML은 더욱 매력적이고 효율적인 사용자 경험을 창출할 수 있는 새로운 가능성을 열어주고 있습니다. 이 글에서는 실제 웹 서비스에 머신러닝을 적용한 사례와 그 효과에 대해 자세히 알아보겠습니다...`,
    tags: ['머신러닝', '인공지능', '웹앱'],
    featuredImage: articleFeedImage,
  },
  {
    id: '4',
    author: {
      name: '정민재',
      role: '프론트엔드 개발자',
      avatar: articleFeedImage,
    },
    timestamp: '5일 전',
    title: 'React 18의 새로운 기능 탐구',
    content: `React 18이 출시되면서 많은 새로운 기능들이 도입되었습니다. 이 글에서는 동시성 렌더링, 자동 배치 업데이트, 서버 사이드 렌더링 개선 등 주요 변경사항들을 자세히 살펴보고, 이러한 기능들이 실제 프로젝트에서 어떻게 활용될 수 있는지 예제와 함께 설명합니다...`,
    tags: ['React', '프론트엔드', '자바스크립트'],
    featuredImage: articleFeedImage,
  },
  {
    id: '5',
    author: {
      name: '최예린',
      role: '보안 전문가',
      avatar: articleFeedImage,
    },
    timestamp: '1주일 전',
    title: '웹 보안의 최신 트렌드와 대응 방안',
    content: `날로 진화하는 사이버 위협에 대응하기 위해 웹 보안도 계속 발전하고 있습니다. 이 글에서는 최근 주목받고 있는 웹 보안 트렌드와 함께, 개발자들이 알아야 할 주요 보안 위협 및 이에 대한 효과적인 대응 방안을 소개합니다. HTTPS의 중요성, XSS 및 CSRF 방어 기법, API 보안 등 다양한 주제를 다룰 예정입니다...`,
    tags: ['보안', '웹개발', '사이버보안'],
    featuredImage: articleFeedImage,
  },
];
