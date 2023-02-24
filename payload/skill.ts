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
    },
    {
      title: 'Redis',
    }
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
    }
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
    }
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [DevAA, SRE, SATA, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
