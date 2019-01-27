export const sendActivityToBot = function() {
    fetch('https://directline.botframework.com/v3/directline/conversations/abc123/activities', {
        method: 'POST',
        // headers: {
        //
        // }
        body: JSON.stringify({
            "type": "message",
            "from": {
                "id": "user1"
            },
            "text": "hello"
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
};