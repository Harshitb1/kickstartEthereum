import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    // JSON.parse(CampaignFactory.interface),
    // '0x0B748d8Ed99847493E5e1f93B417Aae74dFF0FB8'
    JSON.parse(CampaignFactory.interface),
    "0x084796B68e3e4c22e43BA5332E40e33F824e7135"
);

export default instance; 