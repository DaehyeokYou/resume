import { ISideproject } from '../component/sideproject/ISideproject';

const sideproject: ISideproject.Payload = {
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
          content: 'SK렌터카 차세대 프로젝트에서 공통 Module, 단기 렌탈 Backend 시스템 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Spring Boot Framework를 활용하여 Backend API 개발' },
            { content: 'Event-Driven Architecture에서 Kafka를 활용하여 비동기 통신 구현' },
          ],
        },
      ],
    },
  ],
};

export default sideproject;
