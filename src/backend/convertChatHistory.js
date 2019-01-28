// import React, {Component} from 'react';
//
// class textAnalyticsSentiment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       array: [],
//     };
//   }
function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }

function isEven(n) {
    return n % 2 == 0;
 }
 

export function convertChatHistory  (data, chatbotID, userID) {
    // var inputJson = '{"activities":[{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0000","from":{"id":"user1"},"text":"hello"},{"type":"message","channelId":"directline","conversation":{"id":"abc123"},"id":"abc123|0001","from":{"id":"bot1"},"text":"Nice to see you, user1!"}],"watermark":"0001a-95"}';
    //TODO: change inputjson to data after json file is good
    // console.log("uaskdhksajdhsak " + Object.keys(data).length);
    var chatHistoryJson = data;
    var requestBodyForTextAnalytics = {};
    var requestBodyForTextAnalyticsDocuments = [];

    for (var i = 0; i < Object.keys(chatHistoryJson.activities).length; i++){
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
    
}

export const prepareFeedback = (data, chatbotID, userID) => {
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
}

