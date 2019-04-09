
module.exports = {
  walkDOM: walkDOM,
  createObserver: createObserver
}

/*
*@description 遍历DOM
*@ param target {dom}
*@ return null 
**/
function walkDOM(target) {
  do {
    console.log(target)
    if (target.hasChildNodes()) {
      walkDOM(target.firstChild);
    }
  } while (target = target.nextSibling)
}

/*
* @description 创建观察者 
 */
function createObserver() {
  var observer = {
    addSubscriber: function (callback) {
      if (typeof callback === 'function') {
        this.subscribers[this.subscribers.length] = callback;
      }
    },

    removeSubscriber: function (callback) {
      for (var i = 0; i < this.subscribers.length; i++) {
        if (this.subscribers[i] === callback) {
          delete this.subscribers[i]
        }
      }
    },

    publish: function (what) {
      for (var i = 0; i < this.subscribers.length; i++) {
        if (typeof this.subscribers[i] === 'function') {
          this.subscribers[i](what);
        }
      }
    },

    make: function (o) { // turns an object into a publisher
      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          o[i] = this[i];
          o.subscribers = [];
        }
      }
    }
  }
  return observer; 
}
