/**
 * 登录业务逻辑
 */

import './list.less';
import widget from '../../utils/widget';
import storage from '../../utils/storage';

export default class List extends widget {
  constructor() {
    super();
  }

  init() {
    $('.framework7-root').on('click', '.aboutBack', () => {
      const aboutBack = this.in_array('/about', storage.get('f7router-view_main-history'));
      if(!aboutBack) {
        mainView.router.navigate('/about');
      } else {
        mainView.router.back();
      }
    });
  }
};
