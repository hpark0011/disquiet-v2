import { Scenario, Quiz } from '@/types/quiz';

export const scenarios: Scenario[] = [
  {
    title: '새로운 기능 출시 딜레마',
    scenario:
      '당신의 팀이 사용자 경험을 크게 개선할 수 있는 새로운 기능을 개발했지만, 일부 사용자에게는 앱 속도가 느려질 수 있습니다. 어떻게 하시겠습니까?',
    options: [
      {
        text: '즉시 모든 사용자에게 기능을 출시한다',
        emoji: '🚀',
        outcomes: {
          userGrowth: 5,
          revenueGrowth: 2,
          userRetention: -3,
          signUpConversion: 1,
        },
      },
      {
        text: '소규모 사용자 그룹으로 A/B 테스트를 진행한다',
        emoji: '🧪',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
      {
        text: '기능 출시를 지연하고 성능을 최적화한다',
        emoji: '⏳',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: -2,
          userRetention: 4,
          signUpConversion: 0,
        },
      },
      {
        text: '기능을 선택적으로 만들고 사용자가 결정하게 한다',
        emoji: '🔀',
        outcomes: {
          userGrowth: 3,
          revenueGrowth: 2,
          userRetention: 2,
          signUpConversion: 1,
        },
      },
    ],
  },
  {
    title: '경쟁사 가격 대응 전략',
    scenario:
      '주요 경쟁사가 더 낮은 가격으로 유사한 제품을 출시했습니다. 어떻게 대응하시겠습니까?',
    options: [
      {
        text: '경쟁사와 동일한 수준으로 가격을 낮춘다',
        emoji: '📉',
        outcomes: {
          userGrowth: 4,
          revenueGrowth: -3,
          userRetention: 2,
          signUpConversion: 3,
        },
      },
      {
        text: '제품의 고유한 특징을 강조하는 마케팅 캠페인을 시작한다',
        emoji: '📢',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
      {
        text: '높은 가격을 정당화할 새로운 프리미엄 기능을 추가한다',
        emoji: '💸',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: 4,
          userRetention: 1,
          signUpConversion: -2,
        },
      },
      {
        text: '경쟁사를 무시하고 현재 전략을 고수한다',
        emoji: '🙅‍♂️',
        outcomes: {
          userGrowth: -3,
          revenueGrowth: -1,
          userRetention: -2,
          signUpConversion: -3,
        },
      },
    ],
  },
  {
    title: '사용자 참여 감소 위기',
    scenario:
      '지난 한 달 동안 사용자 참여 지표가 감소하고 있습니다. 첫 번째 조치로 무엇을 하시겠습니까?',
    options: [
      {
        text: '사용자 설문을 진행하여 감소 이유를 파악한다',
        emoji: '📊',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: 0,
          userRetention: 3,
          signUpConversion: 1,
        },
      },
      {
        text: '새로운 기능을 출시하여 사용자를 재참여시킨다',
        emoji: '🚀',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: -1,
          signUpConversion: 2,
        },
      },
      {
        text: '마케팅 비용을 증가하여 새로운 사용자를 유치한다',
        emoji: '📈',
        outcomes: {
          userGrowth: 4,
          revenueGrowth: -2,
          userRetention: 0,
          signUpConversion: 3,
        },
      },
      {
        text: '신규 사용자를 위한 온보딩 프로세스를 최적화한다',
        emoji: '📚',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 1,
          userRetention: 1,
          signUpConversion: 4,
        },
      },
    ],
  },
  {
    title: 'UI 리디자인 제안',
    scenario: '개발팀이 UI 전체 리디자인을 제안했습니다. 어떻게 하시겠습니까?',
    options: [
      {
        text: '제안을 승인하고 즉시 자원을 할당한다',
        emoji: '🎨',
        outcomes: {
          userGrowth: 3,
          revenueGrowth: -1,
          userRetention: -2,
          signUpConversion: 4,
        },
      },
      {
        text: '작은 단계로 리디자인을 진행하도록 요청한다',
        emoji: '📈',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: 1,
          userRetention: 2,
          signUpConversion: 2,
        },
      },
      {
        text: '결정하기 전에 프로토타입으로 사용자 테스트를 진행한다',
        emoji: '👥',
        outcomes: {
          userGrowth: 2,
          revenueGrowth: 2,
          userRetention: 3,
          signUpConversion: 3,
        },
      },
      {
        text: '제안을 거부하고 점진적인 개선에 집중한다',
        emoji: '🚫',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: 2,
          userRetention: 1,
          signUpConversion: -1,
        },
      },
    ],
  },
  {
    title: '보안 취약점 관리',
    scenario: '제품에 보안 취약점을 발견했습니다. 어떻게 처리하시겠습니까?',
    options: [
      {
        text: '영향을 받은 기능을 즉시 중단하고 수정될 때까지 대기한다',
        emoji: '🚫',
        outcomes: {
          userGrowth: -3,
          revenueGrowth: -4,
          userRetention: 2,
          signUpConversion: -2,
        },
      },
      {
        text: '사용자에게 알리지 않고 조용히 문제를 해결한다',
        emoji: '🤐',
        outcomes: {
          userGrowth: 0,
          revenueGrowth: 1,
          userRetention: -4,
          signUpConversion: 0,
        },
      },
      {
        text: '사용자에게 알리고 사과하며 수정 일정을 공유한다',
        emoji: '📢',
        outcomes: {
          userGrowth: -1,
          revenueGrowth: -2,
          userRetention: 4,
          signUpConversion: 1,
        },
      },
      {
        text: '외부 보안 회사를 고용하여 감사 및 수정을 진행한다',
        emoji: '🔍',
        outcomes: {
          userGrowth: 1,
          revenueGrowth: -3,
          userRetention: 3,
          signUpConversion: 2,
        },
      },
    ],
  },
];

export const mockPMGame: Quiz = {
  description:
    '실제 상황을 바탕으로 한 시나리오로 제품 관리 능력을 테스트해보세요! 빠르게 변화하는 스타트업 환경에서 사용자 성장, 수익, 유지율, 그리고 신규 사용자 유치의 균형을 맞출 수 있나요?',
  questions: scenarios,
};
