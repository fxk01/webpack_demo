let routes = [
  {
    name: 'about',
    path: '/about/',
    url: './src/pages/about.html',
  },
  {
    name: 'list',
    path: '/list',
    url: './src/pages/list.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

export default routes;
