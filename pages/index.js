// import React, { Component } from 'react';
// import factory from '../ethereum/factory';
// import { Card, Button } from 'semantic-ui-react';

// class CampaignIndex extends Component {
//     // Not assigned to instances of the class.
//     // Function is assigned to the class itself
//     static async getInitialProps() {
//         const campaigns = await factory.methods.getDeployedCampaigns().call();

//         return { campaigns };
//     }

//     renderCampaigns() {
//         // console.log('desc1');

//         const items = this.props.campaigns.map(address => {
//             // console.log('desc');

//             return {
//                 header: address,
//                 description: (
//                     <a>View Campaign</a>
//                 ),
//                 fluid: true
//             };
//         });

//         return <Card.Group items={items} />
//     }



//     render() {
//         return ( 
            
//         <div>
//             <link 
//                rel="stylesheet" 
//                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css">
//                </link>
//             {this.renderCampaigns()} hi SS
            
//             <Button
//                content="create campaign" 
//                icon="add circle"
//                primary
//             />
//         </div>
//         );
//     }

// }

// export default CampaignIndex;

import React, { Component } from "react";
import factory from "../ethereum/factory.js";
import {
  Card,
  Button
} from "semantic-ui-react"; 
import Layout from "../components/Layout.js";
import { Link } from "../routes.js";

class CampaignIndex extends Component {

  static async getInitialProps() {
  
    const campaigns = await factory.methods
      .getDeployedCampaign()
      .call();
    return { campaigns };
  }

  renderCampaigns = () => {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description:(
          <Link route = {`/campaigns/${address}`}>
          <a>View campaign</a>
          </Link> ), 
        fluid: true 
      };
    });

    return (
      <Card.Group items={items} />
    );
  };

  
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              {" "}
              <Button
                content="Create Campaign"
                icon="add circle"
                labelPosition="left"
                floated="right"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

/*
export default() => {
  return <h1>This is the new campaign page!</h1>;
}
*/
export default CampaignIndex;
