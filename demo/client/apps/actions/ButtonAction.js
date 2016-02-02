import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_ITEM } from '../constants/actionTypes';

let ButtonActions  = {
  addItem(text) {
    AppDispatcher.dispatch({
      actionType: ADD_ITEM,
      text: text
    });
  }
};

export default ButtonActions;