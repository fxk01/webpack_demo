/*
 入口文件
 */

import jq from 'jquery';
import homeHtml from '../pages/home.html';
import Framework from 'framework7/js/framework7';
import 'framework7/css/framework7.ios.min.css';
import {
  Home,
  About,
  List,
} from './page';
import routes from './routes';

const pageEvent = {
  pageInitJs(name) {
    switch (name) {
      case 'home':
        new Home().init();
        break;
      case 'about':
        new About().init();
        break;
      case 'list':
        new List().init();
        break;
      default:
        break;
    }
  },
};

window.$ = jq;
$('.view').append(homeHtml);

window.app = new Framework({
  root: '#app',
  name: 'My App',
  id: 'com.myapp.test',
  panel: {
    swipe: 'left',
  },
  theme: 'ios',
  routes: routes,
  on: {
    pageBeforeIn(pageData) {
      pageEvent.pageInitJs(pageData.name);
    },
    routerAjaxStart() {
      window.app.preloader.show()
    },
    routerAjaxComplete() {
      window.app.preloader.hide()
    }
  },
  dialog: {
    title: '提示',
  },
  view: {
    iosDynamicNavbar: false,
    xhrCache: false,
    pushState: true,
    history: true,
    stackPages: true,
  }
});

window.mainView = window.app.views.create('.view-main');

if(window.app.views.current.router.history.length === 1) {
  pageEvent.pageInitJs('home');
}
