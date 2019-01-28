
// todo: migrate, then delete
import * as React from 'react';
import UserProfile from "./UserProfile";
import DisplayStatCard from "./DisplayStatCard.js";
import { requestToTextAnalytics } from "./DisplayStatCard.js";
import { convertChatHistory } from "../backend/convertChatHistory.js";
import { prepareFeedback } from "../backend/convertChatHistory.js";
import { startConnectionToBot } from '../backend/startConnectionToBot.js';

export default class Azure extends React.Component {
 
  render() {
    requestToTextAnalytics();
    // TODO: add history json from chat bot later
    convertChatHistory("", "user1", "bot1");
    prepareFeedback("", "user1", "bot1");//"", "user1", "bot1"
  
    startConnectionToBot();
    return (
      <div>
          <div className='azure-title' style={{fontSize: "20px", padding: '20px'}}>Welcome to Azure Talk</div>
        <br /><br />
        <UserProfile />
        <DisplayStatCard />        
        <div id="render-here"></div>
      </div>
    );
  }
}
//<Button type="primary" onClick={requestToTextAnalytics}>Get results!</Button>

