import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'SK(주)',
      position: 'Technical Architecture & Developer',
      startedAt: '2020-01',
      descriptions: [
        'SK에서 과장으로 근무하였고,',
        '이러 이러한 업무와 프로젝트 참여해서',
        '저러 저러한 일을 했다'
      ],
      skillKeywords: ['Microsoft Azure', 'MSA', 'CI/CD', 'Spring Boot', 'JPA', 'MyBatis', 'kafka', 'Redis', 'AWS'],
    },
    {
      title: '롯데정보통신(주)',
      position: 'Application Architecture & Backend Developer',
      startedAt: '2016-08',
      endedAt: '2019-12',
      descriptions: [
        '롯데정보통신에서 사원으로 근무하였고,',
        '이러 이러한 업무와 프로젝트 참여해서',
        '저러 저러한 일을 했다'
      ],
      skillKeywords: ['Java', 'C#', 'MSSQL', 'AWS', 'Socket', 'Fixed Length'],
    },
  ],
};

export default experience;
