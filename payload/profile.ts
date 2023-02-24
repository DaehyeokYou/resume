import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
// import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/photo.jpeg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '유대혁',
    small: '(David)',
  },
  contact: [
    {
      title: 'ydh4085@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/DaehyeokYou',
      link: 'https://github.com/DaehyeokYou',
      icon: faGithub,
    },
  ],
  notice: {
    title: '반갑습니다! 개발자 유대혁입니다. 잘 부탁드립니다!',
    icon: faBell,
  },
};

export default profile;
