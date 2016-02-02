import { Dispatcher } from 'flux';
import { ADD_ITEM } from '../constants/actionTypes';
import ButtonStore from '../stores/ButtonStore';

let AppDispatcher = new Dispatcher();

AppDispatcher.register((action) => {

  switch(action.actionType) {

    case ADD_ITEM:
      ButtonStore.addItemHandler(action.text);
      ButtonStore.emitChange();
      break;

    default:
  }

});

export default AppDispatcher;
