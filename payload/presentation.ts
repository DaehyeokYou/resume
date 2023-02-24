import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '엔터프라이즈 환경에서의 Azure 집중 탐구',
      subTitle: 'Microsoft Azure Immersion Workshop',
      at: '2021-09',
      descriptions: [
        {
          content: 'Azure DevOps Adoption for Enterprise',
        },
        {
          content: 'Public한 Azure DevOps를 Enterprise 환경에서 사용하기 위한 Private 전략',
        },
        {
          content: 'Enterprise에서 다양한 환경에 대한 CD 전략',
        },
        {
          content: '행사링크',
          postHref: 'https://app.livestorm.co/sharedit-1/live-73-microsoft-azure-immersion-workshop-azure',
        },
      ],
    },
  ],
};

export default presentation;
