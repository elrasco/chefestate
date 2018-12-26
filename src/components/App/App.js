import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';

import { Layout, Spin } from 'antd';
import { withRouter } from 'react-router-dom';

import ContentRouter from './ContentRouter';
import Header from './Header';
import Footer from './Footer';

import { api } from '../../services';

//NOTE: I added @withRouter decorator because --> https://github.com/mobxjs/mobx-react/issues/210

@withRouter
@inject('translationsStore', 'authStore', 'commonStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentDidMount = () => {};

  render() {
    const { translationsStore, commonStore } = this.props;
    return (
      <Layout style={{ minHeight: '100%' }} className={`App ${commonStore.loading ? 'loading' : ''}`}>
        <Spin spinning={commonStore.loading} tip={commonStore.loadingMessage}>
          <Header />
          <ContentRouter />
          <Footer />
        </Spin>
      </Layout>
    );
  }
}

export default App;
