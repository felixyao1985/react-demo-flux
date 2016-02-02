/**
 * 最顶层的虚拟DOM，具有Controller特性的View
 *
 * 用ES6写React最大的不同就是组件可以通过继承React.Component来得到，并且初始化state也不需要冗长的getInitialState
 * 直接在构造函数里操作this.state即可
 */
import React, { Component } from 'react';
import ButtonStore from '../stores/ButtonStore';
import ButtonActions from '../actions/ButtonAction';
import ButtonComponent from './ButtonComponent';

// 定义ButtonController为一个React组件
class ButtonController extends Component {

  // 构造函数中，将ButtonStore的Store数据提取出来，并绑定到组件的State上
  constructor(props) {
    super(props);
    this.state = {
      itemStore: ButtonStore.itemStore || []
    };
    // 将state绑定到自定义函数onChange中
    this.onChange = this.onChange.bind(this);
  }

  // 自定义函数：只有在上面bind后，才可以使用this.setState对state进行操作
  onChange() {
    this.setState({
      itemStore: ButtonStore.itemStore
    });
  }

  // 自定义函数：触发Action（行为）中的addItem方法
  createItem (event) {
    ButtonActions.addItem('new item');
  }

  // 在初始化渲染执行之后立刻调用一次
  componentDidMount() {
    ButtonStore.addChangeListener(this.onChange);
  }

  // 在组件的更新已经同步到 DOM 中之后立刻被调用
  componentDidUpdate () {
    console.log('componentDidUpdate');
  }

  // 在组件从 DOM 中移除的时候立刻被调用
  componentWillUnmount() {
    ButtonStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <ButtonComponent itemStore={ this.state.itemStore } onClick={ this.createItem } />
    );
  }
}

export default ButtonController;