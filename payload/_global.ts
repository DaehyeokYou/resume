import favicon from '../asset/favicon.ico';
import previewImage from '../asset/photo.jpeg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Resume: Daehyeok You';
const description = 'Hi~ I am David';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '유대혁',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Daehyeok',
        lastName: 'You',
        username: 'David',
        gender: 'male',
      },
    },
  },
};
