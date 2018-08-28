/**
 * 登录业务逻辑
 */

import './home.less';
import { postAllGoods } from '../../api/home';
import widget from '../../utils/widget';
import fundGoodList from '../../components/fundGoodList/fundGoodList.html';
import '../../components/fundGoodList/fundGoodList';

export default class Home extends widget {
  constructor() {
    super();
  }

  init() {
    postAllGoods({
      action: 'ChanpinList',
      company_type: 1,
      cid: 2,
      qScore: 87,
      typeJudge: 1,
      sfwzytzz: 0,
      idCard: 2017092001
    }, (json) => {
      let fundGoodListTpl = this.renderTpl(fundGoodList, json);
      $('.homeList').html('').append($(fundGoodListTpl));
      console.log(json);
    })
  }
};
