import { ISideproject } from '../component/sideproject/ISideproject';

const sideproject: ISideproject.Payload = {
  disable: false,
  list: [
    {
      title: '장바구니 데이터를 활용한 O2O 서비스',
      startedAt: '2016-02',
      endedAt: '2016-01',
      where: '롯데정보통신 Intern, 장바구니 데이터를 활용하여 장바구니 상품이 내 현위치(GPS) 근처에서 판매하고 있을 때 PUSH 알림을 주는 O2O 서비스',
      descriptions: [
        {
          content:
            '장바구니 상품의 오프라인 매장과 나의 위치를 비교하기 위해 웹으로 구현된 쇼핑몰과 내 위치를 알 수 있는 GPS(Native)를 활용하기 위해 Hybrid로 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Cordova framework 사용하여 구현', },
            { content: 'Cordova WebView를 활용하여 쇼핑몰 서비스를 제공, 내 위치를 찾는 GPS 기능 Android Native Application 기능을 활용하여 개발', },
          ],
        },
        {
          content:
            '장바구니에 담긴 상품를 판매하는 오프라인 매장과 내 위치가 가까운지 확인하는 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '내 위치 값을 LocationManager와 LocationListener를 이용하여 구현', },
            { content: '내 위치 값이 변경되는 이벤트(onLocationChanged) 발생 시, 오프라인 매장과의 거리 비교' },
          ],
        },
        {
          content:
            'https://github.com/DaehyeokYou/LDCC_HybridAndroidApp',
          weight: 'MEDIUM',
          href: 'https://github.com/DaehyeokYou/LDCC_HybridAndroidApp',
        },
      ],
    },
    {
      title: 'NameCard',
      startedAt: '2014-06',
      endedAt: '2014-10',
      where: '강원대학교 졸업작품, 종이 명함을 Digital Transformation하여 전자 명함을 App에서 관리하고 NFC를 활용하여 서로 교환할 수 있는 Application',
      descriptions: [
        {
          content:
            'Android Application에서 자신의 명함을 만들고 받은 명함을 관리하는 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content:
            'NFC를 활용하여 전자 명함을 서로 교환하는 기능 개발',
          weight: 'MEDIUM',
        },
        {
          content:
            'https://github.com/DaehyeokYou/NFC_NameCard_AndroidApp',
          weight: 'MEDIUM',
          href: 'https://github.com/DaehyeokYou/NFC_NameCard_AndroidApp',
        },
      ],
    },
  ],
};

export default sideproject;
