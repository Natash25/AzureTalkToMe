import * as React from 'react';
import UserProfile from "./UserProfile";
import DisplayStatTrendCard from "./DisplayStatTrendCard";
import DisplayStatCard from "./DisplayStatCard";


export default class Azure extends React.Component {
  render(){
    return (
        <div>
            <br/><br/>
          <UserProfile/>
          {/*<DisplayStatTrendCard/>*/}
          {/*<DisplayStatCard/>*/}
      <div className='azure-title'>Welcome to Chat Improve</div>

    </div>);
  }
}
