let routes = [
  {
    name: 'about',
    path: '/about/',
    url: './src/app/about/about.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

export default routes;