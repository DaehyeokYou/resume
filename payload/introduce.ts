import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저는 Generalist IT인입니다. (Dev + Architecture)',
    '시스템 설계/구축(Network, 보안, Storage등)부터 웹/앱 서비스 백엔드 개발까지 IT 시스템의 End-to-End 설계/개발 경험이 있습니다. Cloud Infra 설계/구축에 대한 역량을 Landing Zone 설계/구축 및 Onprem To Cloud Migration 경험으로 쌓고 , Backend 개발 역량은 C#, Java(Spring Boot) 등을 사용하여 프로덕션 서비스를 운영/개발한 경험으로 쌓았습니다. ',
    '',
    '저는 우수 회사원입니다.',
    '첫 회사인 롯데정보통신(주)에서 신입연수에서 최우수 성적으로 수료하여 최우수 신입사원에 선정됐었고,',
    'SK(주)에서는 최단기간 CL2(Career Level) 승급이라는 기록을 세웠습니다.',
    '',
    '저는 유재석 저리가라 하는 말빨을 소유하고 있습니다.',
    '제가 가지고 있는 지식을 다른 사람들에게 공유하는 것을 좋아합니다. (자랑하기 좋아함)',
    '여기서 제 장점은 어려운 지식이나 기술을 알기 쉽게 설명합니다. 그래서 항상 동료들에게 "명강의 감사합니다"라는 말을 많이 듣습니다.',
  ],
  sign: 'Daehyeok You',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
