import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ListRandomizer from "./lists/ListRandomizerComponent";
import IntegerGenerator from "./numbers/IntegerGeneratorComponent";
import ErrorPage from "./ErrorPage";

const Main = () => {
    return (
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path="/list-randomizer" element={<ListRandomizer/>} />
                <Route path="/integer-generator" element={<IntegerGenerator/>} />
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </Router>
    )
}

export default Main;