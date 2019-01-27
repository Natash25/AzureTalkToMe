import {startConnectionToBot} from "./startConnectionToBot";

export const receiveActivitiesFromBot = function(id) {
    fetch('https://directline.botframework.com/v3/directline/conversations/' + id + '/activities', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'd89d45bffb674f788bc3be1ad2e55963',
            'Authorization': 'Bearer -o2rlZdRXVk.cwA.FsU.VFpMLHbLnBUgHKtGfi2a4_Cv9KaKbcdn9Qh_q7K91S0'

        }
        // body: JSON.stringify({
        //     "activities": [
        //         {
        //             "type": "message",
        //             "channelId": "directline",
        //             "conversation": {
        //                 "id": "abc123"
        //             },
        //             "id": "abc123|0000",
        //             "from": {
        //                 "id": "user1"
        //             },
        //             "text": "hello"
        //         },
        //         {
        //             "type": "message",
        //             "channelId": "directline",
        //             "conversation": {
        //                 "id": "abc123"
        //             },
        //             "id": "abc123|0001",
        //             "from": {
        //                 "id": "bot1"
        //             },
        //             "text": "Nice to see you, user1!"
        //         }
        //     ],
        //     "watermark": "0001a-95"
        // })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
};