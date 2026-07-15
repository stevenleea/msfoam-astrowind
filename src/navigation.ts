import { getPermalink, getHomePermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
      {
        text: 'Beranda',
        href: getHomePermalink(),
      },
      {
        text: 'Tentang Kami',
        href: getPermalink('/about'),
      },
      {
        text: 'Artikel',
        href: getPermalink('/blog'),
      },
      {
        text: 'Hubungi Kami',
        href: getPermalink('/contact'),
      },
    
  ],
  actions: [{ text: 'Telpon', href: 'tel:+62215580197' }],
};

export const footerData = {
  links: [
    {
      links: [
        { text: 'Beranda', href: 'https://msfoam.id' },
        { text: 'Tentang Kami', href: '/about' },
        { text: 'Artikel', href: '/blog' },
        { text: 'Hubungi Kami', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  // socialLinks: [
  //   { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  //   { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //   { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  //   { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  // ],
  // footNote: `
  //   MS Foam · All rights reserved.
  // `,
};
