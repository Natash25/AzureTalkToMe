// todo: delete (unused)

import React from 'react';
import { Button, Col, Row, Statistic, Card } from "antd";

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
                        {/*<Card>*/}
                            {/*<Statistic title="Referrals" />*/}
                            {/*<Button style={{ marginTop: 16 }} type="primary">Refer a friend!</Button>*/}
                        {/*</Card>*/}
                    </Col>
                </Row>
            </div>
        );
    }
}

