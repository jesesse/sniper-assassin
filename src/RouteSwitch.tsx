import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import './assets/styles/main.css'


function RouteSwitch() {

    return (
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/game/' element={<Game />} />
         </Routes>
        </BrowserRouter>
      );
}

export default RouteSwitch;
