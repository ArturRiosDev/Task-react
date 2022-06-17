const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false'

export default{
    getData : ()=>{
        return fetch(API).then(res => res.json())           
    }
}