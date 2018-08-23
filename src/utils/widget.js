/**
 * 公共类
 */

export default class widget {
  bindEvents(events){
    for (let i = 0, l = events.length; i < l; i++) {
      if (!events[i].element) {
        $(events[i].target).on(events[i].event, events[i].handler)
      } else {
        $(events[i].element).on(events[i].event, events[i].target, events[i].handler)
      }
    }
  }
  renderTpl(tpl, data) {
    return Template7.compile(tpl)(data);
  }
  in_array(stringToSearch, arrayToSearch) {
    for (let s = 0; s < arrayToSearch.length; s++) {
      let thisEntry = arrayToSearch[s].toString();
      if (thisEntry == stringToSearch) {
        return true;
      }
    }
    return false;
  }
};
