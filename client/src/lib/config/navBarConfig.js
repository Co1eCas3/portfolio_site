

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
    order: 3,
    expandOnMobile: true,
    next: [
      {
        href: '/projects',
        title: 'PROJECTS',
        order: 1
      },
      {
        href: '/codewars',
        title: 'CODEWARS KATAS',
        order: 2
      },
      {
        href: '/music',
        title: 'MUSIC',
        order: 3
      }
    ]
  },
  {
    href: '/contact',
    title: 'CONTACT',
    order: 4
  }
]