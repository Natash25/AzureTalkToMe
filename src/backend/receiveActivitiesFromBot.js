import {startConnectionToBot} from "./startConnectionToBot";

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
        return data})
};