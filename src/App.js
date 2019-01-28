import * as React from 'react';
import './App.css';
import { Avatar, Icon } from 'antd';
import Layout from "antd/es/layout/layout";
import Sidebar from "./component/Sidebar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import DisplayStatCard from "./component/DisplayStatCard";
import Instructions from "./component/Instructions.js"
import { requestToTextAnalytics } from "./component/DisplayStatCard.js";
import { convertChatHistory } from "./backend/convertChatHistory.js";
import { prepareFeedback } from "./backend/convertChatHistory.js";
import { startConnectionToBot } from './backend/startConnectionToBot.js';

const {Footer, Sider, Content} = Layout;

export default class App extends React.Component {
    render() {
        requestToTextAnalytics();
        convertChatHistory("", "user1", "bot1");
        prepareFeedback("", "user1", "bot1");
        startConnectionToBot();
        return (
            <Router>
                <div className="App">
                    <Layout style={{ minHeight: '100vh' }}>
                        <Sider>
                            <Sidebar/>
                        </Sider>
                        <Layout>
                            <Content style={{ margin: '16px' }}>
                                <Route exact path="/" component={Dashboard} />
                                <Route path="/chat" component={Chat} />
                                <Route path="/profile" component={Profile} />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                            </Footer>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        );
    }
}

function Dashboard() {
    return (
        <div>
            <div
                className='azure-title'
                style={{fontSize: "35px", padding: '20px'}}>
                Welcome to Azure Talk &nbsp;<Icon type="message" />
            </div>
            <div
                className='azure-description'
                style={{fontSize: "16px"}}>
                Improve personal communication abilities and confidence based on iterative feedback from azure cognitive services.
            </div>
            <br/>
            <Instructions/>
        </div>
    );
}

function Chat() {
    WebChat();
    return (
        <div>
            <h1>Try saying "Hello!"</h1>
            <div id="webchat" role="main"></div>
        </div>

    );
}

function Profile() {
    return (
        <div className="Profile">
            <Avatar style={{ backgroundColor: '#87d068', fontSize: '30px'}} icon="user"/>
            <div className='UserName' style={{fontSize: "20px"}}>Bob Alex</div>
            <DisplayStatCard />
        </div>
    );
}

function WebChat() {
    return (async function() {
        const res = await fetch('https://webchat-mockbot.azurewebsites.net/directline/token', { method: 'POST' });
        const { token } = await res.json();

        const webchatDiv = await document.getElementById('webchat');

        console.log("do we even get here?");
        window.WebChat.renderWebChat({
            directLine: window.WebChat.createDirectLine({secret: token}),
            userID: 'default-user'
        }, webchatDiv);
        document.querySelector('#webchat > *').focus();
    })().catch(err => console.error(err));

    // console.log("do we even get here?");
    // window.WebChat.renderWebChat({
    //     directLine: window.WebChat.createDirectLine({secret: 'aNNM2PiaSdo.cwA.EP0.cBRSLtHR5MwtK0Q4Yf1YFjIDTraiw0Fqun6iExHqYXo'}),
    //     userID: 'default-user'
    // }, document.getElementById('webchat'));
    // const speechOptions = {
    //     speechRecognizer: new WebChat.Speech.BrowserSpeechRecognizer(),
    //     speechSynthesizer: new WebChat.Speech.BrowserSpeechSynthesizer()
    // };
}
