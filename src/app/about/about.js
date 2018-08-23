/**
 * 登录业务逻辑
 */

import './about.less';
import widget from '../../utils/widget';
import storage from '../../utils/storage';

export default class About extends widget {
  constructor() {
    super();
  }

  init() {
    $('.framework7-root').on('click', '.homeBack', () => {
      const aboutBack = this.in_array('/home', storage.get('f7router-view_main-history'));
      if(!aboutBack) {
        mainView.router.navigate('/home');
      } else {
        mainView.router.back();
      }
    });
  }
};
