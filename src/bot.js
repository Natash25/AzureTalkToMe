import { DirectLine } from 'botframework-directlinejs';
import React from 'react';
import ReactWebChat from 'botframework-webchat';

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