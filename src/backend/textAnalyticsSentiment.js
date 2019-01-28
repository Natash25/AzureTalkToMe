// todo: delete / refactor, refer to DisplayStatCard.js


export const requestToTextAnalytics = function() {

    fetch('https://centralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment', {
        method: 'POST',
        headers: {
            'Host': 'centralus.api.cognitive.microsoft.com',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'd89d45bffb674f788bc3be1ad2e55963',
        },
        body: JSON.stringify({
                "documents": [{
                    "language": "en",
                    "id": "1",
                    "text": "We love this trail and make the trip every year. The views are breathtaking and well worth the hike!"
                },
                    {
                        "language": "en",
                        "id": "2",
                        "text": "Poorly marked trails! I thought we were goners. Worst hike ever."
                    },
                    {
                        "language": "en",
                        "id": "3",
                        "text": "Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children."
                    },
                    {
                        "language": "en",
                        "id": "4",
                        "text": "It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area."
                    },
                    {
                        "language": "en",
                        "id": "5",
                        "text": "This is my favorite trail. It has beautiful views and many places to stop and rest"
                    }
                ]
            }
        )

    })
        .then(response => response.json())
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);  // Prints result from `response.json()`
            let sentences = analyzeSentences(data);
            let overallScore = computeOverallScore(data);
            let rank = computeRank(overallScore);
            let analytics = { sentences: sentences, overallScore: overallScore};
            return renderAnalytics(analytics, rank);
        })
        .catch(error => console.error(error))
};

function analyzeSentences(data) {
    let temp = data.documents;
    let length = Object.keys(temp).length;
    let analytics = {};
    for (let i = 0; i < length; i++) {
        let obj = temp[i];
        console.log(obj);

        let score = parseFloat(obj['score']);
        let msg = getMessage(score);
        analytics[obj.id.toString()] = msg;
        console.log(obj.id + ', ' + obj.score + ', ' + msg);
    }
    return analytics;
}

function computeOverallScore(data) {
    let temp = data.documents;
    let length = Object.keys(temp).length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        let obj = temp[i];
        sum += parseFloat(obj['score']);
        console.log('sum = ' + sum);
    }
    return sum / length;
}

function computeRank(overallScore) {
    return parseInt((overallScore * 10).toString());
}

export function getMessage(score) {
    let msg = '';
    if (score < 0.4) {
        msg = 'Your tone tells me that you do not feel so confident. Remember to breath! Slow down, stand up straight and end on a downbeat!';
    } else if (score < 0.6) {
        msg = 'I hear a little uncertainty in your voice. If you feel rushed, try taking a deep breath.';
    } else if (score < 0.8) {
        msg = 'Just a little more! Get that confidence booming!';
    } else {
        msg = 'You sound very confident! Keep it up!';
    }
    return msg;
}

function renderAnalytics(analytics, rank) {
    // console.log(JSON.stringify(analytics));
    let div = document.getElementById("render-here");

    if (div.innerText !== "") {
        div.innerText = "";
        return;
    }

    let score = analytics['overallScore'];
    let msg = getMessage(score);

    let br = document.createElement('br');

    let overallScore = JSON.stringify(score);
    let scoreNode = document.createTextNode('Overall score: ' + overallScore + '\n');
    let msgNode = document.createTextNode(msg);

    div.appendChild(scoreNode);
    div.appendChild(br);
    div.appendChild(msgNode);

    let rankElement = document.getElementById('rank');
    rankElement.innerText = 'Level ' + rank;
}