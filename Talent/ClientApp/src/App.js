import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SalesIndex } from './components/Sales/SalesIndex';
import { Counter } from './components/Counter';
import {ProductIndex} from './components/Product/ProductIndex';
import {StoreIndex} from './components/Store/StoreIndex';
import CustomerIndex from './components/Customer/CustomerIndex';
import 'semantic-ui-css/semantic.min.css';


import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/customer' component={CustomerIndex} />
        <Route path='/product' component={ProductIndex} />
        <Route path='/sales' component={SalesIndex} />
        <Route path='/store' component={StoreIndex} />
      </Layout>
    );
  }
}
