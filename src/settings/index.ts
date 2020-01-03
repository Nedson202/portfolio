import artMuseum from '../assets/projects/art-museum.png';
import IPLookup from '../assets/projects/ip-web.png';
import KStoreWeb from '../assets/projects/k-store-web.png';
import Weconnect from '../assets/projects/weconnect.png';
import { IThemeProps } from '../types';
import { IContactFormErrors } from './../types/index.d';

export const STORAGE = 'storage';
// Theme
export const THEME = 'theme';
export const LIGHT = 'light';
export const DARK = 'dark';
export const FLIP_THEME: IThemeProps = {
  dark: LIGHT,
  light: DARK,
};
export const THEME_ICON: IThemeProps = {
  dark: 'toggle_on',
  light: 'toggle_off',
};
export const THEME_ATTRIBUTE = 'data-theme';

export const GET_TO_KNOW_ME = `
  I am a Fullstack Software Engineer based in Nigeria. With 2 years of
  experience, I design backend systems with different languages and
  versatile with frontend engineering.
`;

export const NAV_LINKS = [
  {
    key: 'Projects',
    link: '/projects',
  },
  {
    key: 'Contact',
    link: '/contact',
  },
];

export const PROJECT_LIST = [
  {
    key: 1,
    title: 'Harvard Art Museum',
    image: artMuseum,
    description: `Built on Harvard's Art Museum robust API, ART Museum offers
      a different feel of art collections and publications from the
      Harvard Art Museum archives.`,
    link: 'https://art-museum-harvard.netlify.com',
    githubLink: 'https://github.com/Nedson202/Harvard-arts',
  },
  {
    key: 4,
    title: 'Knowledge Store Web',
    image: KStoreWeb,
    description: ` The knowledge store is a book archive project leveraging
      the google books api to introduce you to thousands of books. On this platform,
      you can search and filter books using full text search, bookmark books,
      make your book visible, leave reviews etc.`,
    link: 'https://lorester-bookstore.netlify.com',
    githubLink: 'https://github.com/Nedson202/Knowledge-store-front',
  },
  {
    key: 2,
    title: 'IP Lookup',
    image: IPLookup,
    description: `A Node.js and Vue application focused on delivering contents
      like local weather, IP data, twitter trends etc. based on a users' IP
      address.`,
    link: 'https://ip-web-lookup.herokuapp.com',
    githubLink: 'https://github.com/Nedson202/IP-lookup',
  },
  {
    key: 3,
    title: 'WeConnect',
    image: Weconnect,
    description: `WeConnect provides a platform that brings businesses and
      individuals together. This platform creates awareness for businesses and
      gives the users the ability to write reviews about the businesses they
      have interacted with. `,
    link: 'https://weconnect-samson.herokuapp.com',
    githubLink: 'https://github.com/Nedson202/WeConnect',
  },
];

export const BLOG_URL = 'https://blog-samsonnegedu.netlify.com';

export const errorsMap: IContactFormErrors = {
  name: 'Please leave a name',
  email: 'Please leave an email',
  message: 'Please leave a message',
};

export const PARTICLES_JS_CONFIG: object = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    size: {
      value: 3,
    },
    line_linked: {
      enable: true,
      color: '#b9b9b9',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

export const ENGINEER_NAME = 'Samson Negedu';
