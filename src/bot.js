import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';
const restify = require('restify');

export default class Chatbot extends React.Component {
    constructor(props) {
        super(props);

        this.directLine = new DirectLine({ token: '-o2rlZdRXVk.cwA.FsU.VFpMLHbLnBUgHKtGfi2a4_Cv9KaKbcdn9Qh_q7K91S0' });
    }

    render() {
        return (
            <ReactWebChat directLine={ this.directLine } userID="default-user" />
    );
    }
}

// Create HTTP server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    // console.log(`\n${ server.name } listening to ${ server.url }`);
    // console.log(`\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator`);
    // console.log(`\nTo talk to your bot, open basic-bot.bot file in the Emulator`);
});