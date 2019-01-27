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
    .then(status)
    .then(response => response.json())
    .then(function (data) {
    console.log('Request succeeded with JSON response', data);  // Prints result from `response.json()`
    // let analysis = analyzeConversation(data);
    return data;
    })
    .catch(error => console.error(error))

  // .then(data => {
  //   let sentiments = data.results.map((feeling) => {
  //     return(
  //       <div key={feeling.results}>
  //       feeling.
  //     )
  //   })
  // })
}

// function analyzeConversation(data) {
//     let analystics = null;
//     for(var i = 0; i < data.length; i++) {
//         var obj = data[i];
//         let score = obj.score;
//         let msg = '';
//         if (score < 0.2) {
//             msg = 'Your tone tells me that you do not feel so confident. Using a clear voice may help!';
//         } else if (score < 0.4) {
//             msg = 'do later';
//         } else if (score < 0.6) {
//             msg = 'do later';
//         } else if (score < 0.8) {
//             msg = 'do later';
//         } else {
//             msg = 'You sound very confident! Keep it up!';
//         }
//         analytics[obj.id] = msg;
//         console.log(obj.id);
//     }
//     return null; // todo: finish
// }
// }
