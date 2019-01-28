import * as React from "react";
import { Card } from 'antd';

export default class Instructions extends React.Component {
    render() {
        return (
            <Card
                title="Instructions"
                // extra={<a href="#">More</a>}
            >
                <div
                    style={{textAlign: 'left'}}
                >
                    Navigate to the 'Chat' tab on the sidebar to the left to begin.
                    Initiate the conversation by saying "Hello!"
                    When you are finished, end the conversation by saying "Goodbye."
                    <br/><br/>
                    <div
                        style={{textAlign: 'center', fontSize: 16, fontStyle: 'italic'}}
                    >
                        Happy chatting!
                    </div>
                </div>
            </Card>
        );
    }
}