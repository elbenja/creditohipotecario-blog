// Site-wide links and copy used by the nav and footer. Edit here, not in components.
export const SITE = {
  name: 'CréditoHipotecar.io',
  wordmark: 'creditohipotecar.io',
  blogPath: '/blog',
  rss: '/blog/rss.xml',
  author: 'Equipo CréditoHipotecar.io',
};

export const SITES = [
  {
    title: 'Analiza tu crédito y depa',
    subtitle: 'Cuotas, valuación y rentabilidad',
    href: 'https://creditohipotecar.io',
    icon: 'home',
    current: true,
  },
  {
    title: 'Depas para invertir',
    subtitle: 'Negociamos por ti, tú pagas menos',
    href: 'https://invierte.creditohipotecar.io',
    icon: 'trend',
    current: false,
  },
] as const;

export const NAV_LINKS = [
  { label: 'Beneficios', href: 'https://landing-dev.creditohipotecar.io/#beneficios' },
  { label: 'Precios', href: 'https://landing-dev.creditohipotecar.io/#precios' },
  { label: 'Comunidad', href: 'https://landing-dev.creditohipotecar.io/#comunidad', icon: 'users' },
  { label: 'Blog', href: '/blog', key: 'blog' },
] as const;

export const ACCOUNT_LINKS = {
  signIn: { label: 'Ir a mi cuenta', mobileLabel: 'Iniciar Sesión', href: 'https://app.creditohipotecar.io/signin' },
  signUp: { label: 'Crear Cuenta', href: 'https://app.creditohipotecar.io/signup' },
};
