import React from "react";
import Search from "../components/Search";
import MainCard from "../components/MainCard";

function MainPage() {

    return (
    <>
        <Search />
        <h1 className="title">Hello, Haley 
            <div className="hvr-icon-pulse-shrink">
            <i className="fa hvr-icon">☔</i>
            </div>
        </h1>
        <MainCard />
        
    </>
    )
}

export default MainPage