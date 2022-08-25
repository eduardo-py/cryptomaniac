import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CoinsTable = () => {
    const [coinsInfo, setCoinsInfo] = useState([])
    const [coinPage, setcoinPage] = useState(1)

    useEffect(
        () => {
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=${coinPage}&sparkline=false`)
            .then(response => response.json())
            .then(response => {
              console.log(response)
              setCoinsInfo(response)
            })
            .catch(err => console.error(err))
        }, [coinPage])

    return (
        <div>
        <table className='coins-container'>
            <thead>
                <tr>
                    <th>Icon</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current price</th>
                    <th>Market capitalization</th>
                    <th>24 hs</th>
                </tr>
            </thead>
            <tbody>
                {coinsInfo.map((coin) => {
                    return (
                        <tr className='coinGeneralInfo' key={coin.id}>
                            
                            <td><Link to={`/coin/${coin.id}`}><img src={coin.image} alt={coin.name} /></Link></td>
                            <td><Link to={`/coin/${coin.id}`}>{coin.name}</Link></td>
                            <td><Link to={`/coin/${coin.id}`}>{coin.symbol}</Link></td>
                            <td>{`U$ ${coin.current_price}`}</td>
                            <td>{`U$ ${coin.market_cap}`}</td>
                            <td>{`U$ ${coin.market_cap_change_24h}`}</td>
                           
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className='pageNumber'> 
            
            {/* IF PAGE NUMBER EQUALS TO 1 */}
            {coinPage==1 &&
            <>
            <button> {'<'} </button>
            <button className='pageSelected'>{coinPage}</button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}>{coinPage+1}</button>
            <button onClick={() =>{ setcoinPage(coinPage+2)}}>{coinPage+2}</button>
            <button onClick={() =>{ setcoinPage(500)}}> {'500'} </button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}> {'>'} </button>
            </>}
            {/* IF PAGE NUMBER EQUALS TO 2 */}
            {coinPage==2 &&
            <>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}> {'<'} </button>
            <button className='pageSelected'>{coinPage}</button>
            <button>{coinPage+1}</button>
            <button>{coinPage+2}</button>
            <button onClick={() =>{ setcoinPage(500)}}> {'500'} </button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}> {'>'} </button>
            </>}
            {/* IF PAGE NUMBERS IS BETWEEN 3 AND 498 */}
            {coinPage>=3 && coinPage<=498 &&
            <>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}> {'<'} </button>
            <button onClick={() =>{ setcoinPage(1)}}> {'1'} </button>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}>{coinPage - 1}</button>
            <button className='pageSelected'>{coinPage}</button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}>{coinPage+1}</button>
            <button onClick={() =>{ setcoinPage(500)}} > {'500'} </button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}> {'>'} </button>
            </>}
            {/* IF PAGE NUMBERS IS 499 */}
            {coinPage==499 &&
            <>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}> {'<'} </button>
            <button onClick={() =>{ setcoinPage(1)}}> {'1'} </button>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}>{coinPage - 1}</button>
            <button className='pageSelected'>{coinPage}</button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}>{coinPage+1}</button>
            <button onClick={() =>{ setcoinPage(coinPage+1)}}> {'>'} </button>
            </>}
            {/* IF PAGE NUMBERS IS 500 */}
            {coinPage==500 &&
            <>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}> {'<'} </button>
            <button onClick={() =>{ setcoinPage(coinPage-1)}}>{coinPage-1}</button>
            <button className='pageSelected'>{coinPage}</button>
            <button> {'>'} </button>
            </>}
            </div>
        </div>
    )
}

export default CoinsTable;