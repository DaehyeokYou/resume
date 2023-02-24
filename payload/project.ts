import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SKR Wave1',
      startedAt: '2022-07',
      endedAt: '2023-03',
      where: 'SK(주), SK렌터카 차세대 시스템 전환 프로젝트 여정 중 첫번째 전환이 단기 렌탈 업무 영역이고 Wave1이라 부름',
      descriptions: [
        {
          content: 'SK렌터카 차세대 프로젝트에서 공통 Module, 단기 렌탈 Backend 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Spring Boot Framework를 활용하여 Backend API 개발' },
            { content: 'Event-Driven Architecture에서 Kafka를 활용하여 비동기 통신 구현' },
          ],
        }
      ],
    },
    {
      title: 'SK렌터카 EV Link',
      startedAt: '2022-01',
      endedAt: '2022-07',
      where: 'SK(주), 전기차 충전 카드 등록/관리 및 충전소 정보 등을 제공하는 전기차 고객 서비스',
      descriptions: [
        { content: 'Spring Boot Framework를 활용하여 Backend API 개발' },
        { content: 'JPA활용하여 ORM 구현' },
        { content: 'Spring Batch활용하여 Batch 관리' },
      ],
    },
    {
      title: 'SK렌터카 차세대 Azure Cloud',
      startedAt: '2021-12',
      endedAt: '2022-12',
      where: 'SK(주), SK렌터카 차세대 Azure Cloud 환경 구축',
      descriptions: [
        { content: 'Landing Zone 설계 및 구축' },
        { content: '개발 환경 설계 및 구축 (CI/CD Automation)' },
      ],
    },
    {
      title: 'SK렌터카 SmartCare',
      startedAt: '2021-06',
      endedAt: '2022-01',
      where: 'SK(주), 전기차 장기 렌트 고객 대상 차량 관리 편의 제공 서비스 (계약 관리, 정비 관리 등)',
      descriptions: [
        { content: 'Spring Boot Framework를 활용하여 Backend API 개발' },
        { content: 'Azure Redis활용하여 Session 구현' },
      ],
    },
    {
      title: 'SK네트웍스 계열 Cloud Migration',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: 'SK(주), SK네트웍스 계열(네트웍스, 워커힐 등) On-Premise System을 Cloud Migration.',
      descriptions: [
        { content: '40여개 이상의 시스템을 Cloud Migration.' },
        { content: 'Migration Assessment, Design, Implement 단계의 표준 구축' },
        { content: 'Cloud Native, Containerization, Monolithic->MSA로의 Modernization 수행' },
      ],
    },
    {
      title: 'Multiverse',
      startedAt: '2020-05',
      endedAt: '2020-12',
      where: 'SK(주), Multiverse: 인공지능(AI)과 빅데이터·클라우드·블록체인 등 최신 디지털 플랫폼과 솔루션을 한데 묶은 통합 디지털 플랫폼',
      descriptions: [
        {
          content: '3대 CSP의 K8s환경(AWS-EKS, Azure-AKS, GCP-GKE)에서의 EFK Stack으로 Logging System 구축',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Github (EFK-SSO-KubernetesLogs)',
              href: 'https://github.com/DaehyeokYou/EFK-SSO-KubernetesLogs' 
            },
          ]
        },
        { content: 'Enterprise 환경에서의 DevOps CI/CD Repo, Pipeline 설계 및 구성 (Azure DevOps)' },
        { 
          content: '(관련기사)SK Multiverse',
          href: 'https://blog.skcc.com/4082'
        }
      ],
    },
    {
      title: '롯데백화점 위챗페이',
      startedAt: '2018-12',
      endedAt: '2019-04',
      where: '롯데정보통신(주), 롯데백화점 위챗페이 결제 수단 추가 프로젝트',
      descriptions: [
        {
          content: '위챗페이 Interface 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '위챗페이와 전문 통신 Interface 구현'
            },
          ]
        },
        {
          content: '결제 Module 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'C# 공통 결제 Module에 위챗페이 개발 추가'
            },
          ]
        },
      ],
    },
    {
      title: '롯데백화점 직승인',
      startedAt: '2018-12',
      endedAt: '2019-04',
      where: '롯데정보통신(주), 롯데백화점 신용카드 결제 시, VAN사를 통하지 않고 카드사와 직접 통신하여 VAN 수수료 절감',
      descriptions: [
        {
          content: '직승인 Interface 구현 및 결제 모듈 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'C# 공통 결제 Module에 삼성, 국민, 신한, BC 카드사 직승인 개발 추가'
            },
          ]
        },
        {
          content: '직승인 우선 로직 및 Offline 시, VAN 우회 결제 로직 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '롯데백화점 무인 POS Kiosk',
      startedAt: '2018-04',
      endedAt: '2018-08',
      where: '롯데정보통신(주), 롯데백화점 푸드코트 무인 POS 개발',
      descriptions: [
        {
          content: '공통 결제 Module 개발 가이드',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '무인 POS Kiosk 개발자들에게 공통 코드 및 결제 모듈 사용법 가이드'
            },
          ]
        }
      ],
    },
    {
      title: '롯데백화점 여전법',
      startedAt: '2017-10',
      endedAt: '2018-04',
      where: '롯데정보통신(주), 여신전문금융업법(여전법) 개정에 따른 IC 카드 의무 시행에 따른 개발',
      descriptions: [
        {
          content: '결제 프로세스 수정 및 결제 모듈 추가 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'IC 카드 결제 Module 개발',
            },
            {
              content: 'IC 우선 결제 프로세스 개발',
            },
          ]
        },
        {
          content: '카드 결제 로직 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'IC 우선, IC칩 문제 발생 시 마그네틱 결제 가능, IC칩 결제 유도 안내 기능'
            },
          ]
        },
        {
          content: 'IC 결제 유도 안내 음성 출력 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '결제 유도 안내 기능 개발로 Cashier들의 업무 편의성 확대 및 고객 불만 축소'
            },
          ]
        },
      ],
    },
    {
      title: '롯데백화점 L.pay 음파결제',
      startedAt: '2017-07',
      endedAt: '2017-09',
      where: '롯데정보통신(주), L.Pay Mobile App과 롯데백화점 POS간 비가청 음파 대역으로 통신하여 결제',
      descriptions: [
        {
          content: 'POS에서 결제 음파 발생 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Mobidoo Sonic Windows SDK 활용하여 개발'
            },
          ]
        },
        {
          content: '음파 결제(L.pay) Interface 구현 및 결제 모듈 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'C# 공통 결제 Module에 음파결제(L.pay) 개발 추가'
            },
          ]
        },
        {
          content: '고객 결제 편의성 확대로 L.Pay 어플리케이션 가입자 증가 및 고객 경험 개선',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '롯데백화점 부가세 마일리지',
      startedAt: '2017-03',
      endedAt: '2017-09',
      where: '롯데정보통신(주), 롯데백화점 고객 상품 구매 시, 마일리지(자사적립)로 결제하는 경우, 마일리지 금액만큼 부가세 과세 표준에서 제외',
      descriptions: [
        {
          content: '마일리지 계산 및 과세 표준 적용, 현금영수증 발행 대상 선정 로직 개발',
          weight: 'MEDIUM'
        },
        {
          content: '에누리, 상품권, 모바일 상품권, L.Point 시스템과의 Interface 설계 및 개발',
          weight: 'MEDIUM'
        },
        {
          content: '년간 XX억 부가세 절세 효과',
          weight: 'MEDIUM'
        },
      ],
    },
    {
      title: '롯데백화점 차세대',
      startedAt: '2016-08',
      endedAt: '2017-03',
      where: '롯데정보통신(주), 롯데백화점 차세대',
      descriptions: [
        {
          content: '결제 시스템을 .Net 기반의 Cross Flatform을 실현하여 PDA, POS, KIOSK 등 다양한 장비에서 활용 가능한 공통 Module 개발',
          weight: 'MEDIUM'
        },
        {
          content: 'EAI System 개발(각 점포에서 쌓은 DB Data를 가져와서 실시간으로 매출(MSSQL), 영업(Oracle), 마케팅(MSSQL) DB로의 Parsing 및 전달하는 시스템)',
          weight: 'MEDIUM'
        },
        {
          content: '개발 생산성 증대로 급변하는 시장에 대한 민첩성 확보',
          weight: 'MEDIUM'
        },
      ],
    },
  ],
};

export default project;
