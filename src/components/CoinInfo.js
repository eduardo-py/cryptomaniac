import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinInfo = () => {
    const { coinId } = useParams();
    console.log(coinId);
    const [coinData, setCoinData] = useState({})
    const [error, setError] = useState(false)
    const [description, setDescription] = useState([]);
    const [links, setLinks] = useState([])

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            //get json from fetch
            .then(response => response.json())
            //set info using json
            .then(response => {
                //set the trendings as an array
                setCoinData(response)
                console.log(response)
            })
            .catch(err => {if(err.name === "Could not find coin with the given id"){
                setError(true)
            }else{
                console.log(err)
                setError(true)
            }})
            
    }, [coinId]);

    return (
        <div className="coin">
            {/* IF THERE'S AN ERROR THEN RENDER THIS MESSAGE*/}
            {error ? (
                <>
                    <h2>Error</h2>
                    <p>We couldn't find this cryptocoin in our register</p>
                </>) :
            /* IF THERE'S NO ERROR THEN RENDER NORMALLY */
                (<>
                    <h2>{coinData.name} ({coinData.symbol})</h2>
                    {coinData.market_data && <p><b>Current price:</b> ${coinData.market_data.current_price.usd} ({coinData.market_data.price_change_24h / 100}%)</p>}
                    {coinData.market_data && <p><b>Market Cap:</b> ${coinData.market_data.market_cap.usd}</p>}
                    {coinData.image && <img src={coinData.image.large} alt={coinData.id} />}
                    {coinData.description && <p><b>Description:</b> {coinData.description.en}</p>}
                    {/*<p><b>Coin page:</b> {coinData.links.homepage[0]}</p>*/}
                    {/*<p><b>Current price:</b> U${coinData.market_data.current_price.usd}</p>*/}
                </>)}
        </div>
    )
}

export default CoinInfo;