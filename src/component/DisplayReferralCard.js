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
                    <a href={'mailto:?subject=Check out Azure Talk!&body=Improve personal communication abilities and confidence based on iterative feedback from azuretalktome.azurewebsites.net!'}>
                        <Button
                            style={{ marginTop: 16 }}
                            type="primary"
                            onClick={this.referFriend()}
                            htmlType={'button'}
                        >
                            Refer a friend!
                        </Button>
                    </a>
                </Card>
            </div>
        );
    }
}