import {Menu, Icon, Button, Sider} from 'antd';
import * as React from 'react';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="line-chart" />
                        <span>Analytics</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="user" />
                        <span>Profile</span>
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        );
    }
}
