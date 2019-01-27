import * as React from 'react';
import UserProfile from "./UserProfile";
import DisplayStatTrendCard from "./DisplayStatTrendCard";
import DisplayStatCard from "./DisplayStatCard.js";
import { requestToTextAnalytics } from "./DisplayStatCard.js";
import {convertChatHistory} from "../backend/convertChatHistory.js";
import {prepareFeedback} from "../backend/convertChatHistory.js";
import { Button } from 'antd';


export default class Azure extends React.Component {
 
  render() {
    requestToTextAnalytics();
    // TODO: add history json from chat bot later
    convertChatHistory("", "user1", "bot1");
    prepareFeedback("", "user1", "bot1");//"", "user1", "bot1"
  
    //startConnectionToBot();
    return (
      <div>
        <br /><br />
        <UserProfile />
        <DisplayStatTrendCard />
        <DisplayStatCard />

      <div className='azure-title'>Welcome to Chat Improve</div>
        <Button type="primary" onClick={requestToTextAnalytics}>Get results!</Button>
        <div id="render-here"></div>
      </div>);
  }
}
