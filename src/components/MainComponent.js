import React from "react";


import HeaderComponent from "./HeaderComponent/HeaderComponent";
import ListRandomizer from "./lists/ListRandomizerComponent";
import IntegerGenerator from "./numbers/IntegerGeneratorComponent";

const Main = () => {
    return (
        <>
            <HeaderComponent/>
            <IntegerGenerator/>
            <ListRandomizer />
        </>
    )
}

export default Main;