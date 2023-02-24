import { ISideproject } from '../component/sideproject/ISideproject';

const sideproject: ISideproject.Payload = {
  disable: false,
  list: [
    {
      title: '장바구니 데이터를 활용한 O2O 서비스',
      startedAt: '2016-02',
      endedAt: '2016-01',
      where:
        '롯데정보통신 Intern',
      descriptions: [
        {
          content: '장바구니 데이터를 활용하여 장바구니 상품이 내 현위치(GPS) 근처에서 판매하고 있을 때 PUSH 알림을 주는 O2O 서비스',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Android Native GPS와 장바구니 상품의 오프라인 매장 좌표값 비교하여 가까울 때 Push 알림 구현' },
          ],
        },
      ],
    },
    {
      title: 'NameCard',
      startedAt: '2014-06',
      endedAt: '2014-10',
      where:
        '강원대학교 졸업작품',
      descriptions: [
        {
          content: '종이 명함을 Digital Transformation하여 전자 명함을 App에서 관리하고 NFC를 활용하여 교환할 수 있는 서비스',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Android Native NFC 기능 구현' },
          ],
        },
      ],
    },
  ],
};

export default sideproject;
