export const sections = [
  'Home',
  'About',
  'Resume',
  'Portfolio',
  'Blog',
  'Contact',
] as const;
export const labels = {
  general: {
    name: 'Kamil',
  },

  preloader: {
    nickName: 'Donikk',
  },

  heroSection: {
    greeting: 'Hello',
    im: "I'm",
    nameSurname: 'Kamil Pawełek',
    occupation: 'Front-End Developer',
    quote: {
      talkIs: 'Talk is',
      openingBracket: '{',
      closingBracket: '}',
      cheap: 'cheap',
      showMeThe: 'show me the',
      openingTag: '<',
      closingTag: '>',
      code: 'code',
      author: '- Linus Torvalds',
    },
  },
} as const;

export const socialData = [
  {
    icon: 'github',
    title: 'Github',
    backgroundColor: '#333',
    link: '/',
  },
  {
    icon: 'youtube',
    title: 'Youtube',
    backgroundColor: '#ff0000',
    link: '/',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    backgroundColor: '#4267B2',
    link: '/',
  },
];
