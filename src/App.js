import React, { useState } from 'react';
import CoinsTable from './components/CoinsTable';
import MenuBar from './components/Menubar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Trending from './components/Trending';
import CoinInfo from './components/CoinInfo';
import CoinDoesntExist from './components/CoinDoesntExist';
import Search from './components/Search';

//max paginas será 500 pags.

function App() {
  const [coinsInfo, setCoinsInfo] = useState([]);

  return (
    <>
      <BrowserRouter>
      {/* NAVBAR */}
      <MenuBar/>
      {/* SEARCHING BAR */}
      <Search/>
      {/* EVERY OTHER PAGE IN THE WEBSITE */}
      <Routes>
        {/* HOMEPAGE */}
        <Route path='/cryptomaniac.github.io/' element={<CoinsTable />} />
        <Route path='/cryptomaniac.github.io/about' element={<About />}/>
        <Route path='/cryptomaniac.github.io/trending' element={<Trending />}/>
        <Route path='/cryptomaniac.github.io/coin/:coinId' element={<CoinInfo/>}/>
        <Route path='/cryptomaniac.github.io/coin/*' element={<CoinDoesntExist/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
