import { EventEmitter } from 'events';
import assign from 'object-assign';

let ButtonStore = assign({}, EventEmitter.prototype, {

  itemStore: ['old item'],

  addItemHandler(text) {
    this.itemStore.push(text);
  },

  emitChange() {
    this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
});

export default ButtonStore;