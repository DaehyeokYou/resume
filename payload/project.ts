import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'SKR Wave1',
      startedAt: '2022-07',
      endedAt: '2023-03',
      where:
        'SK(주), SK렌터카 차세대 시스템 전환 프로젝트 여정 중 첫번째 전환이 단기 렌탈 업무 영역이고 Wave1이라 부름',
      descriptions: [
        {
          content: '공통 Module 및 Backend 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'OnPrem Monolithic System을 Split하고 공통 기능을 선별' },
            { content: '공통 기능을 모아서 Restful API 개발' },
          ],
        },
        {
          content: 'Kafka CDC 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'OnPrem DB와 차세대 Cloud DB 동기화 구현' },
            { content: '차세대 MSA CQRS Pattern을 위한 Read Only DB 동기화 구현' },
          ],
        },
        {
          content: 'Wave1 참고 사이트',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'https://homepage.skcarrental.com/',
              href: 'https://homepage.skcarrental.com/',
            },
          ],
        },
      ],
    },
    {
      title: 'SK렌터카 SmartCare, EV Link',
      startedAt: '2021-06',
      endedAt: '2022-07',
      where:
        'SK(주), SmarCare: 전기차 장기 렌트 고객 대상 차량 관리 편의 제공 서비스(계약 관리, 정비 관리 등), EV Link: 전기차 충전 카드 등록/관리 및 충전소 정보 등을 제공하는 전기차 고객 서비스이고, 기존 OnPrem의 거대한 Monolithic System에서 하나의 서비스를 Cloud Migration',
      descriptions: [
        {
          content: 'Backend API 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존의 SSR에서 SPA로 렌더링 방식을 변경하면서 Rest API Backend 개발' },
            { content: '기존 MyBatis에서 ORM 도입' },
            { content: 'Spring Batch활용하여 Batch 관리' },
          ],
        },
        {
          content: 'Redis를 활용한 Session Clustering 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Azure Cloud 환경의 Redis를 활용하여 Session 관리 기능 개발 ' },
          ],
        },
        {
          content: 'SmartCare 참고 Store ',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '안드로이드 Play Store SmartCare',
              href:
                'https://play.google.com/store/apps/details?id=com.smartcare.android&hl=ko&gl=US&pli=1',
            },
            {
              content: '아이폰 App Store SmartCare',
              href:
                'https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%BC%80%EC%96%B4-sk%EB%A0%8C%ED%84%B0%EC%B9%B4-%EC%B0%A8%EB%9F%89%EA%B4%80%EB%A6%AC-%EC%84%9C%EB%B9%84%EC%8A%A4/id1515841739',
            },
          ],
        },
        {
          content: 'EV Link 참고 기사',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '전자신문 etnews 기사',
              href: 'https://www.etnews.com/20220915000021',
            },
          ],
        },
      ],
    },
    {
      title: 'SK렌터카 차세대 Azure Cloud',
      startedAt: '2021-12',
      endedAt: '2022-12',
      where: 'SK(주), SK렌터카 차세대 Azure Cloud 환경 구축',
      descriptions: [
        {
          content: 'Landing Zone 설계 및 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Azure Cloud와 SK렌터카 OnPrem과의 통신을 위한 ER 구축' },
            {
              content:
                'Cloud 환경에서의 Governance(IAM, Policy, Namming/Tagging Convention 등) 설계',
            },
            {
              content:
                'Cloud 환경에서의 운영 효율성을 높인 중앙집중 관리가 가능하고, 보안의 안정성을 높인 Hub & Spoke 구조의 네트워크 설계',
            },
            { content: '3rd Party 보안 장비와 NVA장비(F5 WAF, Fortigate Firewall) Integration ' },
            { content: '고가용성, 안정성, 보안, 성능이 우수한 DMZ Hub 설계' },
            { content: '' },
          ],
        },
        {
          content: '개발 환경 및 Micro Service Architecture 환경 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '통합 AKS Cluster 환경 구성(Private AKS) ' },
            {
              content:
                '개발 환경을 위한 JumpBox 및 Code Repository(Git Enterprise), Container Registry(ACR), Ingress(Azure AGW), Storage(Azure Files) 등 설계/구축',
            },
            { content: 'MSA를 위한 Azure DevOps CI/CD Pipeline 표준 설계/구축' },
            {
              content: 'Public Azure DevOps Service를 Enterprise환경에 맞게 Private 서비스로 구축 ',
            },
            {
              content:
                'CI/CD Automation 설계/구축 (CI Pipeline Sonarqube, Sparrow 연동 및 테스트 자동화)',
            },
          ],
        },
      ],
    },
    {
      title: 'SK네트웍스 계열 Cloud Migration',
      startedAt: '2021-01',
      endedAt: '2021-12',
      where: 'SK(주), SK네트웍스 계열(네트웍스, 워커힐 등)의 On-Premise System을 Cloud Migration.',
      descriptions: [
        {
          content: '표준 Azure Cloud Migration Process 설계',
          weight: 'MEDIUM',
          descriptions: [
            { content: '크게 Assessment, Design, Implement의 Proces로 구성된 표준 설계' },
            {
              content: 'Assessment는 Migrate Tool과 AS-IS 시스템 분석 Interview 및 Check List 작성',
            },
            { content: 'Migration 전략(6R)에 따른 표준 Architecture 설계' },
          ],
        },
        {
          content: 'Azure Cloud Migration',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30여개 이상의 시스템을 Cloud Migration 수행' },
            { content: 'Containerizing하여 확장성, 민첩성을 확보하여 Cloud Native하게 Migration' },
          ],
        },
      ],
    },
    {
      title: 'Multiverse',
      startedAt: '2020-05',
      endedAt: '2020-12',
      where:
        'SK(주), Multiverse: 인공지능(AI)과 빅데이터·클라우드·블록체인 등 최신 디지털 플랫폼과 솔루션을 한데 묶은 통합 디지털 플랫폼',
      descriptions: [
        {
          content: '(프로젝트 관련기사) SK Multiverse',
          href: 'https://blog.skcc.com/4082',
        },
        {
          content:
            '3대 CSP의 K8s환경(AWS-EKS, Azure-AKS, GCP-GKE)에서의 표준 Logging 시스템 설계/구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'EFK Stack으로 Logging System 구축 및 SSO 연동' },
            {
              content: 'Github (EFK-SSO-KubernetesLogs)',
              href: 'https://github.com/DaehyeokYou/EFK-SSO-KubernetesLogs',
            },
          ],
        },
        {
          content:
            '3대 CSP의 K8s환경(AWS-EKS, Azure-AKS, GCP-GKE)에서의 표준 API Gateway 설계/구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Kong API Gateway 구축' },
            { content: '클라이언트와 백엔드 서비스 간의 통신 중개 구현' },
            { content: '인증, 인가, 로깅, 모니터링 등에 대한 표준 수립 및 구현' },
          ],
        },
      ],
    },
    {
      title: '롯데백화점 위챗페이',
      startedAt: '2018-12',
      endedAt: '2019-04',
      where: '롯데정보통신(주), 롯데백화점 위챗페이 결제 수단 추가 프로젝트',
      descriptions: [
        {
          content: '위챗페이 Interface 설계',
          weight: 'MEDIUM',
          descriptions: [{ content: '위챗페이와 전문 통신 Interface 구현' }],
        },
        {
          content: '결제 Module 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '결제 관련 사내 Library에 위챗페이 결제 Module 추가 개발' }],
        },
      ],
    },
    {
      title: '롯데백화점 직승인',
      startedAt: '2018-07',
      endedAt: '2019-03',
      where:
        '롯데정보통신(주), 롯데백화점 신용카드 결제 시, VAN사를 통하지 않고 카드사와 직접 통신하여 VAN 수수료 절감',
      descriptions: [
        {
          content: '직승인 Interface 설계 및 결제 모듈 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '공통 결제 Library에 삼성, 국민, 신한, BC 각각의 카드사 직승인 결제 Module 개발 추가',
            },
          ],
        },
        {
          content: '직승인 관련하여 기존 신용카드 로직 변경 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'VAN승인 보다 직승인 우선 로직 개발' },
            { content: '카드사 Offline 시, VAN 우회 결제 로직 개발로 서비스 고가용성 확보' },
          ],
        },
        {
          content: 'VAN 수수료 절감',
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
          content: '무인 POS 개발 Leading',
          weight: 'MEDIUM',
          descriptions: [
            { content: '무인 POS Kiosk 개발자들에게 사내 Library 사용법 가이드 및 개발 Leading' },
          ],
        },
      ],
    },
    {
      title: '롯데백화점 여전법',
      startedAt: '2017-10',
      endedAt: '2018-04',
      where: '롯데정보통신(주), 여신전문금융업법(여전법) 개정에 따른 IC 카드 의무 시행에 따른 개발',
      descriptions: [
        {
          content: 'IC Card Interface 설계 및 결제 Module 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'IC Card에 따른 기존 신용카드 Interface 수정 설계 (전문 통신)' },
            { content: '신용카드 결제 Module에 Magnetic과 IC 칩 결제 모두 가능하게 수정 개발' },
          ],
        },
        {
          content: 'POS/PDA 카드 결제 로직 수정 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'IC 우선 결제 또는 IC칩 문제 발생 시 마그네틱 결제 가능과 같은 로직 개발' },
          ],
        },
        {
          content: 'IC 결제 유도 안내 음성 출력 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '결제 유도 안내 기능 개발로 Cashier들의 업무 편의성 확대 및 고객 불만 축소',
            },
          ],
        },
      ],
    },
    {
      title: '롯데백화점 L.pay 음파결제',
      startedAt: '2017-07',
      endedAt: '2017-09',
      where:
        '롯데정보통신(주), L.Pay Mobile App과 롯데백화점 POS간 비가청 음파 대역으로 통신하여 결제',
      descriptions: [
        {
          content: 'POS에서 결제 음파 발생 기능 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Mobidoo Sonic Windows SDK 활용하여 개발' }],
        },
        {
          content: '음파 결제(L.pay) Interface 설계 및 Module 추가 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '결제 관련 사내 Library에 음파결제(L.pay) Module 추가 개발' }],
        },
        {
          content:
            '고객 결제 편의성 확대로 L.Pay 어플리케이션 가입자 증가 및 백화점 고객 경험 개선',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '롯데백화점 부가세 마일리지',
      startedAt: '2017-03',
      endedAt: '2017-09',
      where:
        '롯데정보통신(주), 롯데백화점 고객 상품 구매 시, 마일리지(자사적립)로 결제하는 경우, 마일리지 금액만큼 부가세 과세 표준에서 제외',
      descriptions: [
        {
          content: '마일리지 계산 및 과세 표준 적용, 현금영수증 발행 대상 선정 로직 개발',
          weight: 'MEDIUM',
        },
        {
          content:
            '에누리, 상품권, 모바일 상품권, L.Point, 국세청 시스템과의 Interface 수정 설계 및 개발',
          weight: 'MEDIUM',
        },
        {
          content: '부가세 절세 효과',
          weight: 'MEDIUM',
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
          content: '결제 서비스 관련 사내 Library 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '결제 시스템을 .Net 기반의 Cross Flatform을 실현하여 PDA, POS, KIOSK 등 다양한 장비에서 활용 가능한 공통 Module 개발',
            },
            {
              content:
                '기존의 Monolithic 구조의 결제 시스템을 SOA 구조 구현하여 결제 수단의 추가 및 변경에 유연하게 설계',
            },
            {
              content:
                'VAN사 등 전문(Fixed Length) 통신을 하는 외부 Interface를 위한  Socket 서버 개발',
            },
            { content: 'Socket 통신을 위한 Module 개발' },
          ],
        },
        {
          content: '데이터 통합 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '각 점포에서 만들어진 매출 데이터를 매출(MSSQL), 영업(Oracle), 마케팅(MSSQL)로 각각 원하는 데이터만 Parsing하여 이기종 DB로 전송하는 시스템 개발',
            },
            {
              content:
                '업무의 신속성을 위해 기존 Batch성 업무를 Realtime으로 시스템에서 처리하는 로직으로 변경',
            },
            {
              content:
                '대용량 작업을 Realtime으로 원활히 처리하기 위해 프로세스 병렬화(Process Parallelization)로 구현',
            },
          ],
        },
      ],
    },
  ],
};

export default project;
