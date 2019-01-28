import { Menu, Icon } from 'antd';
import * as React from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'left'}}>
                <React.Fragment>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        <Menu.Item key="1">
                            <Icon type="home" />
                            <span>Dashboard</span>
                            <Link to="/" />
                        </Menu.Item>
                        <Menu.Item key="2">
                            {/*<Icon type="line-chart" />*/}
                            <Icon type="message" />
                            <span>Chat</span>
                            <Link to="/chat" />
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span>Profile</span>
                            <Link to="/profile" />
                        </Menu.Item>
                    </Menu>
                </React.Fragment>
            </div>
        );
    }
}
