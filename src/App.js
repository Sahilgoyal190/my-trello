import React, { Component } from 'react';
import Header from './component/container/header';
import Footer from './component/presentation/footer';
import Roots from './roots.js';
import './App.css';


import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import configureStore from './store/configure-store';
const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router >
            {Roots}
          </Router>
        </Provider>
    );
  }
}

export default App;
