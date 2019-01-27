// import React, {Component} from 'react';
//
// class textAnalyticsSentiment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       array: [],
//     };
//   }

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
    .then(data => {
        
      console.log(data) // Prints result from `response.json()`
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
// }
