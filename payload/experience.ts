import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'SK(주)',
      position: '과장, Technical Architecture & Developer',
      startedAt: '2020-01',
      descriptions: [
        'SK C&C Cloud ZCP 플랫폼 개발 (Monitoring Management Service 설계/개발 (Cortex 연계 시스템)',
        'SK디스커버리 AI 활용 시스템 인프라 구축/설계 (Azure Landing Zone, VPN, Network, Azure OpenAI, AI Studio, Azure-AWS 연동)', // (https://m.boannews.com/html/detail.html?tab_type=1&idx=129965)
        'AIA생명 Vitalitity 시스템 k8s(AKS) 설계 및 DevOps(CI/CD) 설계/구축 (Gitlab, Jenkins, Nexus)',
        'AIA생명 Vitalitity 시스템 Cloud to Cloud Migration(AWS->Azure) 수행 및 DR 설계/구축',
        'SK렌터카 시스템 Cloud Migration, App Modernization 수행(MSA, Containerization), AKS 설계/구축, DevOps(CI/CD) 설계/구축 (Git Ent, Azure DevOps, AKS)',
        'SK렌터카 차세대 Cloud Infra 설계/구축 (Azure Landing Zone, VPN, Network)',
        'SK네트웍스 계열 OnPrem to Cloud Migration (20여개 시스템)',
        'SK C&C Multiverse 개발: Logging Layer 표준 설계 및 구축 ', // (https://www.mk.co.kr/news/special-edition/9830259)
      ],
    },
    {
      title: '롯데정보통신(주)',
      position: '사원, Application Architecture & Backend Developer',
      startedAt: '2016-08',
      endedAt: '2019-12',
      descriptions: [
        '롯데백화점 결제 파트 Backend 개발/운영',
        '결제 시스템 공통 Module 설계/개발',
        '데이터 통합 시스템 개발/운영',
        'POS/PDA/KIOSK 개발/운영',
      ],
    },
    {
      title: '롯데정보통신(주)',
      position: 'Intern',
      startedAt: '2016-01',
      endedAt: '2016-02',
      descriptions: [
        '롯데 신규 서비스 기획 및 개발 (장바구니 데이터를 활용한 O2O 서비스 기획 및 개발)',
      ],
    },
  ],
};

export default experience;
