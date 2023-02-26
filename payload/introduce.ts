import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '저라는 사람을 "Generalist"와 "+@Devleper"란 Keyword로 소개를 하려고 합니다.',
    'Generalist',
    'Enterprise환경에서 Production End-to-End를 모두 경험했습니다.',
    '기획-설계-개발-테스트-배포-운영/유지보수 단계까지의 모든 과정을 경험했습니다.',
    'Application에 대한 기획, 설계, 개발 뿐 만 아니라, Cloud Infra 설계, DevOps 구현, Cloud Network(보안, 고가용성 등), Cloud Migration/Modernizatoin 등과 같은 IT라는 거대한 분야에 굉장히 넓은 영역에 경험과 역량이 있습니다.',
    '+@Devloper',
    '많은 프로젝트와 사업에 참여하면서 개발도 많이 했지만, 더 나은 IT인이 되기 위해서는 개발 외적인 부분의 역량도 중요하다고 생각합니다.',
    '고객과 같은 다양한 이해 관계자와 의사소통을 원활히 하고 협업하여 비즈니스 목표를 달성하였고 프로그래밍 언어, 프레임워크와 같은 기술적인 지식 뿐만 아니라, 프로젝트 관리 및 비즈니스 분석, 시스템 아키텍처 및 인프라 구성 등 다양한 분야에 대한 지식과 경험을 가지고 있습니다.',
  ],
  sign: 'Daehyeok You',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
