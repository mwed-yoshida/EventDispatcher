'use strict';

class EventDispatcher {
  constructor(){
    this.listeners = {};
  }

  addEventListener(type, listener) {
    if (!type || !listener) return;

    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(listener);
  }

  removeEventListener(type, listener) {
    if (!type || !listener) return;

    let listeners = this.listeners[type];
    if (listeners) {
      let len = listeners.length;
      for (let i = len - 1; i >= 0; --i) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
        }
      }
    }
  }

  dispatchEvent(type) {
    let event = {
      target: this,
      type: type
    };

    if (this.listeners[type]) {
      let len = this.listeners[type].length;
      for (let i = 0; i < len; ++i) {
        this.listeners[type][i](event);
      }
    }
  }
}
