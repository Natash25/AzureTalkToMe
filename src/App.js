import React, { Component } from 'react';
import Sidebar from './component/Sidebar';
import './App.css';
import Azure from './component/azure.js';
import {Breadcrumb, Layout, Menu, Button} from "antd";
// import recorder from "./backend/AudioTransformer.js";
import {requestToTextAnalytics} from "./backend/textAnalyticsSentiment.js";

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  render() {

    // function renderAnalytics() {
    //     let analytics = requestToTextAnalytics();
    //     // console.log(JSON.stringify(analytics));
    //     let div = document.createElement('div');
    //     let text = JSON.stringify(analytics['overallScore']);
    //     let textNode = document.createTextNode(text);
    //     div.appendChild(textNode);
    //     document.getElementById("render-here").appendChild(div);
    // }

    return (
      <div className="App">
          <Layout style={{ minHeight: '100vh' }}>
              <Sider>
                <Sidebar/>
              </Sider>
              <Layout>
                  <Header style={{ background: '#fff', padding: 0 }} />
                  <Content style={{ margin: '0 16px' }}>
                    <Azure/>
                      <input type="file" accept="audio/*;capture=microphone"></input>
                      <div><Button type="primary" onClick={requestToTextAnalytics}>Get results!</Button></div>
                      <div id="render-here"></div>
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
