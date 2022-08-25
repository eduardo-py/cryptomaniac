import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Trending = () => {
    const [trendings, setTrendings] = useState([])

    useEffect(
        () => {
            fetch('https://api.coingecko.com/api/v3/search/trending')
                //get json from fetch
                .then(response => response.json())
                //set info using json
                .then(response => {
                    //set the trendings as an array
                    setTrendings(response.coins)
                })
                .catch(err => console.error(err))
        }, [])

    return (
        <>


            <table className='coins-container'>
                <thead>
                    <tr>
                        <th>Icon</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Current price</th>
                    </tr>
                </thead>
                <tbody>
                    {trendings.map((trending) => {
                        return (
                                <tr className='coinGeneralInfo' key={trending.item.id}>
                                    <td> <Link to={`/coin/${trending.item.id}`}><img src={trending.item.small} alt={trending.item.id} /> </Link> </td>
                                    <td> <Link to={`/coin/${trending.item.id}`}>{trending.item.name} </Link> </td>
                                    <td> <Link to={`/coin/${trending.item.id}`}>{trending.item.symbol} </Link> </td>
                                    <td>{`U$ ${trending.item.price_btc}`}</td>
                                </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}

export default Trending;