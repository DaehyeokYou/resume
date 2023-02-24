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
        'SK렌터카 차세대 시스템 Backend 개발',
        'SK렌터카 차세대 Azure Cloud 환경 설계/구축',
        'SK네트웍스 계열 OnPrem to Cloud Migration (20여개 시스템)',
        'MSA구조에서 3대 CSP K8s(EKS, AKS, GKE)의 Logging/Monitoring 표준 설계 및 구축',
      ],
      skillKeywords: [
        'Microsoft Azure',
        'MSA',
        'CI/CD',
        'Spring Boot',
        'JPA',
        'MyBatis',
        'kafka',
        'Redis',
        'AWS',
        'EFK',
        'Dynatrace',
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
      ],
      skillKeywords: ['Java', 'C#', 'MSSQL', 'AWS', 'Socket', 'Fixed Length'],
    },
  ],
};

export default experience;
