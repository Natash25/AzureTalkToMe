// todo: hook this component up realtime to chatbot responses (line by line)

import React from 'react';
import {Statistic, Card, Row, Col, Icon} from 'antd';

export default class DisplayStatCard extends React.Component {

    state = {
        currentScore: 0,
        level: "",
        message: "",
        icons: <div></div>
    };

    formatArrow(isUp) {
        if (isUp) {
            return <Icon type="arrow-up"/>
        }
        return <Icon type="arrow-down"/>
    }

    updateScore = () => {
        console.info("DisplayStatCard::updateScore");
        let newScore = Math.random();
        let isUp = newScore >= this.state.currentScore;
        this.setState({
                currentScore: newScore,
                icons: this.formatArrow(isUp),
                level: (parseInt(this.state.level + 1))
            },
            () => {
                this.updateMessage(this.state.currentScore)
            });
    };

    updateMessage = (score) => {
        let msg = '';
        if (score < 0.4) {
            msg = 'Your tone tells me that you do not feel very confident. Remember to breath! Slow down, stand up straight and end on a downbeat!';
        } else if (score < 0.6) {
            msg = 'I hear a little uncertainty in your voice. If you feel rushed, try taking a deep breath.';
        } else if (score < 0.8) {
            msg = 'Just a little more! Get that confidence booming!';
        } else {
            msg = 'You sound very confident! Keep it up!';
        }
        this.setState({message: msg});
    };


    render() {
        return (
            <div style={{background: '#ECECEC', padding: '30px'}} onClick={this.updateScore}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Your current score: "
                                value={this.state.currentScore}
                                precision={2}
                                valueStyle={{color: '#3f8600'}}
                                prefix={this.state.icons}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Your current level"
                                value={this.state.level}
                                precision={1}
                                valueStyle={{color: '#3f8600'}}
                                prefix={this.state.icons}
                            />
                        </Card>
                    </Col>
                </Row>
                <br/><br/>
                <div style={{alignContent: 'center', fontSize: "30px", fontWeight: 'bold'}}>{this.state.message}</div>
            </div>);
    }
}
