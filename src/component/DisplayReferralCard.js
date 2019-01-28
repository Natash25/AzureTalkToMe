import React from 'react';
import { Button, Statistic, Card } from "antd";

export default class DisplayReferralCard extends React.Component {

    referrals = 0;

    referFriend = () => {
        console.log("DisplayReferralCard::referFriend");
        this.referrals += 1;
    };

    render() {
        return (
            <div id="referral-card">
                <Card>
                    <Statistic
                        title="Referrals"
                        value={this.referrals}
                    />
                    <Button
                        style={{ marginTop: 16 }}
                        type="primary"
                        onClick={this.referFriend()}
                        htmlType={'button'}
                    >
                        Refer a friend!
                    </Button>
                </Card>
            </div>
        );
    }
}