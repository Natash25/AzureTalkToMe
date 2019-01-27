import {startConnectionToBot} from "./startConnectionToBot";

export const receiveActivitiesFromBot = function() {
    fetch('https://directline.botframework.com/v3/directline/conversations/activities', {
        method: 'GET',
        // headers: {
        //
        // }
        body: JSON.stringify({
            "activities": [
                {
                    "type": "message",
                    "channelId": "directline",
                    "conversation": {
                        "id": "abc123"
                    },
                    "id": "abc123|0000",
                    "from": {
                        "id": "user1"
                    },
                    "text": "hello"
                },
                {
                    "type": "message",
                    "channelId": "directline",
                    "conversation": {
                        "id": "abc123"
                    },
                    "id": "abc123|0001",
                    "from": {
                        "id": "bot1"
                    },
                    "text": "Nice to see you, user1!"
                }
            ],
            "watermark": "0001a-95"
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
};