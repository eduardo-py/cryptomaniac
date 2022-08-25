import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    /* SEARCH INPUT */
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchText = (e) => {
        setSearchText(e.target.value.toString());
    }

    useEffect(() => {
        /*wait until typed down everything to start searching and save your search*/
        fetch(`https://api.coingecko.com/api/v3/search?query=${searchText}`)
            //get json from fetch
            .then(response => response.json())
            //set info using json
            .then(response => {
                //set the trendings as an array
                setSearchResults(response.coins)
            })
            .catch(err => console.error(err))
        /*Wait a second until searching */
    }, [searchText])

    const coinClicked = () => {
        setSearchText('');
    }

    const clearSearch = () => {
        setSearchText('');
    }

    return (
        <div className="search">
            <div className="searchingSection">
                <input
                    type="text"
                    onChange={handleSearchText}
                    value={searchText}
                    className='input'
                    placeholder="Search..." />
                <button onClick={clearSearch}>clear</button>
            </div>
            {(searchText != '') &&
                (<div>
                    {searchResults.map((results) => {
                        return (<div key={results.id}>
                            {/*<img src={results.thumb} alt={results.id} />*/}
                            <h3>
                                <Link to={`/coin/${results.id}`} onClick={coinClicked}>{results.name} ({results.id}) </Link>
                            </h3>
                        </div>)
                    }
                    )}
                </div>)}
        </div>
    )
}

export default Search;