import { sendActivityToBot} from "./sendActivityToBot";

export const startConnectionToBot = function() {
    fetch('https://directline.botframework.com/v3/directline/conversations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'd89d45bffb674f788bc3be1ad2e55963',
            'Authorization': 'Bearer RCurR_XV9ZA.cwA.BKA.iaJrC8xpy8qbOF5xnR2vtCX7CZj0LdjAPGfiCpg4Fv0y8qbOF5xPGfiCpg4Fv0y8qqbOF5x8qbOF5xn'

    }
    }).then(response => {
        console.log("natasha " + JSON.stringify(response));

        let temp = null;
        const res = response.json();
            res.then(function (r) {
                temp = JSON.parse(r);
                console.log("asdasdas " + r);
            })
                .catch(function (e) {
                    console.log(e);
                });
            if (res !== null) {
                sendActivityToBot(res.conversationId);
            }
        // sendActivityToBot();
        //     console.log((res));
        })
        .catch(error => console.error(error))
};