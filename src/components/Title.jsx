import {useState, useEffect} from 'react'
import api from '../lib/api';
import {nextPage} from '../funct/functions'
import CardCrypto from './CardCrypto'

export default function Label() {

    useEffect(()=>{
        api.getData().then(res=>{
          setCryptoList(res.slice(0,5))
         })
    },[])

    const [cryptoList,setCryptoList] = useState([])

    const loadData = ()=>{
        if(nextPage(cryptoList)){
         return 
        }
        api.getData().then(res => setCryptoList(res.slice(0, cryptoList.length + 5)))
       }

    let sumMarket = cryptoList.reduce((i,val)=>i+val.current_price,0)

    const filterData = e =>{
        let input = e.target.value
        let updated = cryptoList.filter(({name})=> name.includes(input))
        setCryptoList(updated)
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
          Results: <span>{cryptoList.length}</span>
        </label>
        <label id="market_cap">
          Sum Market Cap: $ <span>{sumMarket}</span>
        </label>
      </div>
      <CardCrypto
        cryptoList={cryptoList}
      />
    </>
  );
}
