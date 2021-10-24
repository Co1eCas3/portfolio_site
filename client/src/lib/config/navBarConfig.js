

export const navBarConfig = [
  {
    href: '/',
    title: 'HOME',
    order: 1
  },
  {
    href: '/resume/view',
    title: 'RESUME',
    order: 2,
    expandOnMobile: false,
    next: [
      {
        href: '',
        title: 'VIEW',
        order: 1
      },
      {
        href: '?download=true',
        title: 'DOWNLOAD',
        order: 2
      }
    ]
  },
  {
    href: '/works',
    title: 'WORKS',
    order: 3
  },
  {
    href: '/contact',
    title: 'CONTACT',
    order: 4
  }
]