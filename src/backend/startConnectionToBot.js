import { sendActivityToBot} from "./sendActivityToBot";
import { receiveActivitiesFromBot } from './receiveActivitiesFromBot.js';
// import { sendActivityToBot } from './sendActivityToBot';

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
            receiveActivitiesFromBot(id);
            sendActivityToBot(id);
            // return id;
        })
        .catch(error => console.error(error))
};