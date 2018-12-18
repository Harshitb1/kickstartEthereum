import web3 from './web3'; 
import CampaignFactory from './build/CampaignFactory.json';


const instance =  new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3794C29868a00F665Acef568c08aff9900C8df4C'
);

export default instance;
