// todo: delete (unused)

import React from 'react';
import { Button, Col, Row, Statistic, Card, Icon} from "antd";

export default class DisplayStatTrendCard extends React.Component {
    render() {
        return (
            <div className="stat-trend">
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic title="Active Users" value={112893} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <div>
                                Tips <Icon type="question-circle" />
                            </div>
                            <ul
                                style={{textAlign: 'left'}}
                            >
                                <li>Tip 1</li>
                                <li>Tip 2</li>
                                <li>Tip 3</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

