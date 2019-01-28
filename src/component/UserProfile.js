// todo: delete

import React from 'react';
import { Avatar } from "antd";

export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="UserProfile">
                <Avatar style={{ backgroundColor: '#87d068', fontSize: '30px'}} icon="user"/>
                <div className='UserName' style={{fontSize: "20px"}}>Bob Alex</div>
            </div>
        );
    }
}