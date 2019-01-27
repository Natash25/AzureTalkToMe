import React, { Component } from 'react';
import {Avatar} from "antd";

export default class UserProfile extends React.Component {


    render() {
        return (
            <div className="UserProfile">
                <Avatar style={{ backgroundColor: '#87d068'}} icon="user"/>
                <div className='UserName'>Bob Alex</div>
                <div className='Rank'>Level 2</div>
            </div>
        );
    }
}

