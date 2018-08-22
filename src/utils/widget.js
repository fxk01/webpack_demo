/**
 * 公共类
 */

export default class widget {
  renderTpl(tpl, data) {
    return Template7.compile(tpl)(data);
  }
};
