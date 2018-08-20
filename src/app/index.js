/*
 入口文件
 */

import Framework from 'framework7/framework7.esm.bundle';
import 'framework7/css/framework7.min.css';
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
  view: {
    iosDynamicNavbar: false,
    xhrCache: false,
    pushState: true,
  }
});

window.mainView = window.app.views.create('.view-main');
