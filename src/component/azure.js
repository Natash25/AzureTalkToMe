import * as React from 'react';
import UserProfile from "./UserProfile";
import DisplayStatTrendCard from "./DisplayStatTrendCard";
import DisplayStatCard from "./DisplayStatCard.js";
import { requestToTextAnalytics } from "./DisplayStatCard.js";
import { Button } from 'antd';
// import {receiveActivitiesFromBot} from "../backend/receiveActivitiesFromBot";
import {sendActivityToBot} from "../backend/sendActivityToBot";

var globalId = null;
var globalData = null;

export const startConnectionToBot = function() {

    fetch('https://directline.botframework.com/v3/directline/conversations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'd89d45bffb674f788bc3be1ad2e55963',
            'Authorization': 'Bearer -o2rlZdRXVk.cwA.FsU.VFpMLHbLnBUgHKtGfi2a4_Cv9KaKbcdn9Qh_q7K91S0'

        }
    }).then(function (response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }).then(response => response.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);  // Prints result from `response.json()`
            // let analysis = analyzeConversation(data);
            let id = data['conversationId'];

            console.log("the id is: " + id);

            receiveActivitiesFromBot(id);
            sendActivityToBot(id);
            globalId = id;
            return id;
        })
        .catch(error => console.error(error))
};


export const receiveActivitiesFromBot = function(id) {
    fetch('https://directline.botframework.com/v3/directline/conversations/' + id + '/activities', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'd89d45bffb674f788bc3be1ad2e55963',
            'Authorization': 'Bearer -o2rlZdRXVk.cwA.FsU.VFpMLHbLnBUgHKtGfi2a4_Cv9KaKbcdn9Qh_q7K91S0'

        }
    })
        .then(response => response.json())
        .then(function (data){
            globalData = data;
            return data})
};



export function convertChatHistory  (chatbotID, userID) {
    let data = globalData;
    console.log('asdasdasdas' + data);
    // var inputJson = '{"activities":[{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0000","from":{"id":"user1"},"text":"hello"},{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0001","from":{"id":"bot1"},"text":"Nice to see you, user1!"}],"watermark":"0001a-95"}';
    //TODO: change inputjson to data after json file is good
    // console.log("uaskdhksajdhsak " + Object.keys(data).length);
    var chatHistoryJson = data;
    var requestBodyForTextAnalytics = {};
    var requestBodyForTextAnalyticsDocuments = [];

    for (var i = 0; i < chatHistoryJson.activities.length; i++){
        var activity = chatHistoryJson.activities[i];
        var text = activity.text;
        var from = activity.from.id;
        console.log("line 33: " + text);
        if (from == userID){
            requestBodyForTextAnalyticsDocuments.push(
                {"language": "en",
                    "id": (i+1)/2,
                    "text": text
                }
            )
        }

    }
    console.log(requestBodyForTextAnalyticsDocuments);
    requestBodyForTextAnalytics.documents = requestBodyForTextAnalyticsDocuments;

    console.log("hello?????" + JSON.stringify(requestBodyForTextAnalytics));
    return requestBodyForTextAnalytics;

}

export const prepareFeedback = (chatbotID, userID) => {
    // let inputJson = receiveActivitiesFromBot(startConnectionToBot());
    var inputJson = '{"activities":[{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0000","from":{"id":"user1"},"text":"hello"},{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0001","from":{"id":"bot1"},"text":"Nice to see you, user1!"}],"watermark":"0001a-95"}';
    //TODO: change inputjson to data after json file is good
    var chatHistoryJson = JSON.parse(inputJson);
    var jsonForFeedBackHistory = [];

    var i = 0;
    while (i < chatHistoryJson.activities.length){
        var activity = chatHistoryJson.activities[i];
        var text = activity.text;
        var from = activity.from.id;
        console.log(text);
        if (from == userID){
            jsonForFeedBackHistory.push(
                {"user": text,
                    "chatbot": chatHistoryJson.activities[i+1].text}
            )
        }
        else if (from == chatbotID) {
            jsonForFeedBackHistory.push(
                {"chatbot": text,
                    "user": chatHistoryJson.activities[i+1].text}
            )
        }
        else console.log("error: invalid ID inputted");
        i = i + 2;
    }
    console.log("line 73: " + JSON.stringify(jsonForFeedBackHistory));
    return jsonForFeedBackHistory;
};

export default class Azure extends React.Component {

  render() {
    // TODO: add history json from chat bot later
    //   var id = startConnectionToBot();
    //   console.log("hello the id?? " + id);
      // var json = receiveActivitiesFromBot(id);
      // console.log("hello line 19:" + json.toLocaleString());
    convertChatHistory("user1", "bot1");
    prepareFeedback("user1", "bot1");//"", "user1", "bot1"
    requestToTextAnalytics();


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
