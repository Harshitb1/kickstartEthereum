import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0B748d8Ed99847493E5e1f93B417Aae74dFF0FB8'
);

export default instance; 