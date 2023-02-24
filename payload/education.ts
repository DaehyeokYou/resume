import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '강원대학교',
      subTitle: '컴퓨터정보통신공학 학사 졸업, 전공 평점: 4.25/4.5',
      startedAt: '2009-03',
      endedAt: '2015-08',
    },
    {
      title: '명륜 고등학교',
      subTitle: '이과 졸업 (강원도 강릉시)',
      startedAt: '2006-03',
      endedAt: '2009-02',
    },
  ],
};

export default education;
