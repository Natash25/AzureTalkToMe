// import React from 'react';
// import Recorder from 'react-recorder-3s';
import mp3 from '../audio-test/monologue-eng-us.mp3';
// import wav from '../audio-test/monologue-eng-us.wav';



const convertToText = (blob) => {
    console.log("AudioTransformer::convertToText");

    let fd = new FormData();
    fd.append('wav-audio', blob);

    let request = new XMLHttpRequest();

    // todo: support other languages, select language through dropdown, append as params
    request.open(
        "POST",
        "https://westus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US",
        true
    );
    request.setRequestHeader("Ocp-Apim-Subscription-Key", "7d6c572a418143f2ace3fa05008da373");
    request.setRequestHeader("Content-Type", "audio/wav; codecs=audio/pcm; samplerate=16000");

    request.onreadystatechange = function() {
        let response = null;
        let text = null;
        if (request.readyState === 4 && request.status === 200) {
            response = request.response;
            // console.log("response = " + JSON.stringify(response));
        }
        if (response !== null) {
            text = response.DisplayText;
            // console.log("text = " + text);
        }
        // todo: do something with the resulting text
        console.log("response.toString() = " + response.toString());
        console.log("text = " + text)
    };

    request.send(fd);

};

// const recorder = () => (
//     <div>
//         <Recorder onStop={convertToText} />
//     </div>
// );

export default convertToText(mp3);

