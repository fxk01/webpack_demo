let routes = [
  {
    name: 'home',
    path: '/home/',
    url: './src/pages/home.html',
    options: {
      history: true,
      pushState: true,
    },
  },
  {
    name: 'about',
    path: '/about/',
    url: './src/pages/about.html',
    options: {
      history: true,
      pushState: true,
    },
  },
  {
    name: 'list',
    path: '/list',
    url: './src/pages/list.html',
    options: {
      history: true,
      pushState: true,
    },
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

export default routes;
