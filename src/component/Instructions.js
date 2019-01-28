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
                    <h4>Dashboard</h4>
                    <p>Card content</p>
                    <h4>Chat</h4>
                    <p>Card content</p>
                    <h4>Profile</h4>
                    <p>Card content</p>
                </div>
            </Card>
        );
    }
}