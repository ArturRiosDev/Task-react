import {useState, useEffect} from 'react'
import api from '../lib/api';
import {nextPage} from '../funct/functions'
import CardCrypto from './CardCrypto'

export default function Title() {

    useEffect(()=>{
        api.getData().then(res=>{
          setCryptoList(res.slice(0,5))
         })
    },[])

    const [cryptoList,setCryptoList] = useState([])
    const [filteredCoin,setFilteredCoin] = useState(null)

    const loadData = ()=>{
        if(nextPage(cryptoList)){
         return 
        }
        api.getData().then(res => setCryptoList(res.slice(0, cryptoList.length + 5)))
       }

    const filterData = e =>{
        let input = e.target.value
        let updated = cryptoList.filter(({name})=> name.toLowerCase().includes(input.toLowerCase()))
        !input? setFilteredCoin(null): setFilteredCoin(updated)
      }

  return (
    <>
      <h1>
        JS Challenge
        <i className="fa-solid fa-rotate" id="more" onClick={loadData}></i>
      </h1>
      <div className="Form">
        <input onChange={filterData} id="filter" />
        <label id="results">
          Results: <span>{!filteredCoin ? cryptoList.length : filteredCoin.length}</span>
        </label>
        <label id="market_cap">
          Sum Market Cap: $ <span>{!filteredCoin? cryptoList.reduce((i,val)=>i+val.current_price,0): filteredCoin.reduce((i,val)=>i+val.current_price,0)
          }</span>
        </label>
      </div>
      <CardCrypto
        cryptoList={cryptoList}
        filteredCoins={filteredCoin}
      />
    </>
  );
}
