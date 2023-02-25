import { ISkill } from '../component/skill/ISkill';

const DevAA: ISkill.Skill = {
  category: 'Dev/AA',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'C#',
      level: 3,
    },
    {
      title: 'Spring',
      level: 2,
    },
    {
      title: 'Kafka',
      level: 2,
    },
    {
      title: 'Redis',
      level: 2,
    },
    {
      title: 'Linux',
      level: 2,
    },
    {
      title: 'MSSQL',
      level: 2,
    },
    
  ],
};

const SRE: ISkill.Skill = {
  category: 'SRE',
  items: [
    {
      title: 'DevOps',
      level: 3,
    },
    {
      title: 'Logging/Monitoring',
      level: 2,
    },
    {
      title: 'IaC',
      level: 2,
    },
  ],
};

const SATA: ISkill.Skill = {
  category: 'SA/TA',
  items: [
    {
      title: 'Azure',
      level: 3,
    },
    {
      title: 'LandingZone',
      level: 3,
    },
    {
      title: 'Migration/Modernization',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 2,
    },
    {
      title: 'Docker',
      level: 2,
    },
    {
      title: 'MSA',
      level: 2,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Presentaion Skill',
    },
    {
      title: 'Knowledge Sharing Skill',
    },
    {
      title: 'Communication Skill',
    },
    {
      title: 'Collaboration Skill',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [DevAA, SRE, SATA, etc],
  tooltip: '1: 기본 업무 수행 가능, 추가적인 학습 및 도움이 필요할 수 있음\n2: 능숙하게 업무 수행이 가능, 특별한 도움이 필요 없음\n3: 다른 사람을 리드하고 교육할 수 있는 수준',
};

export default skill;
