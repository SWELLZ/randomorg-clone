import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ListRandomizer from "./lists/ListRandomizerComponent";
import IntegerGenerator from "./numbers/IntegerGeneratorComponent";
import ErrorPage from "./ErrorPage";
import HomeComponent from "./HomeComponent";
import SpotifyComponent from "./spotifyComponent/SpotifyComponent";

const Main = () => {
    return (
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<HomeComponent/>} />
                <Route path="/list-randomizer" element={<ListRandomizer/>} />
                <Route path="/integer-generator" element={<IntegerGenerator/>} />
                <Route path="/spotify" element={<SpotifyComponent/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}

export default Main;