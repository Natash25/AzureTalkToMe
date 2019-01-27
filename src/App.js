import React, { Component } from 'react';
import Sidebar from './component/Sidebar';
import './App.css';
import Azure from './component/azure.js';
import {Breadcrumb, Layout, Menu} from "antd";
import Bot from './bot.js';
// import recorder from "./backend/AudioTransformer.js";
import {requestToTextAnalytics} from "./backend/textAnalyticsSentiment.js";
import {startConnectionToBot} from "./backend/startConnectionToBot";

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  render() {
    requestToTextAnalytics();
    startConnectionToBot();
      // recorder();
    return (
      <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
              <Sider>
                <Sidebar/>
              </Sider>
              <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />]
                  <Content style={{ margin: '0 16px' }}>
                    <Azure/>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                      Ant Design ©2018 Created by Ant UED
                  </Footer>
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
