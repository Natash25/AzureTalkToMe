// import React from 'react';
// import Recorder from 'react-recorder-3s';
// import mp3 from '../audio-test/monologue-eng-us.mp3';
import wav from '../audio-test/monologue-eng-us.wav';



const convertToText = (blob) => {
    console.log("asdasdas");

    let fd = new FormData();
    fd.append('wav-audio', blob);

    let xhttp = new XMLHttpRequest();
    xhttp.open(
        "POST",
        "https://westus.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=en-US",
        // todo: support other languages, select language through dropdown, append as params
    );
    xhttp.send(fd);
    xhttp.addEventListener("readystatechange", processRequest);

    function processRequest(event) {
        let response = null;
        let text = null;
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            response = xhttp.response;
            // let response = JSON.parse(xhttp.responseText);
        }
        if (response !== null) {
            text = response.DisplayText;
        }
        // todo: do something with the resulting text
        console.log("response.toString() = " + response.toString());
        console.log("text = " + text)
    }
};

// const recorder = () => (
//     <div>
//         <Recorder onStop={convertToText} />
//     </div>
// );
export default convertToText(wav);

