import React, { Component } from 'react';

class ButtonComponent extends Component {

  render() {
    let itemStore = this.props.itemStore;

    let itemStoreList = itemStore.map((value, key) =>
      {
        return <li id={ key }>{ value }</li>;
      }
    );

    return (
      <div>
        <ul>{ itemStoreList }</ul>
        <button onClick={ this.props.onClick }>Add Item</button>
      </div>
    );
  }

}

export default ButtonComponent;