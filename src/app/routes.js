let routes = [
  {
    name: 'home',
    path: '/home',
    async(routeTo, routeFrom, resole, reject) {
      if (routeTo.name === 'home') {
        resole({ url: './src/pages/home.html' })
      }
    },
  },
  {
    name: 'about',
    path: '/about',
    async(routeTo, routeFrom, resole, reject) {
      if (routeTo.name === 'about') {
        resole({ url: './src/pages/about.html' })
      }
    },
  },
  {
    name: 'list',
    path: '/list',
    url: './src/pages/list.html',
    async(routeTo, routeFrom, resole, reject) {
      if (routeTo.name === 'list') {
        resole({ url: './src/pages/list.html' })
      }
    },
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

export default routes;
