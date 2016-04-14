import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers'; 
import chaiJquery from 'chai-jquery';

// 设置一个类浏览器的命令行测试环境
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// 创建一个‘renderComponent’函数来render react class

function renderComponent(ComponentClass, props, state) {
// React Add-Ons : renderIntoDocument 
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // 生成 HTML => jquery element
}


// 模拟事件simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };