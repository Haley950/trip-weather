import React from "react";
import Search from "../components/Search";
import MainCard from "../components/MainCard";
import Contents from "../components/Contents";

//로딩
//시간, 기간, 셀렉박스 ui/ux
//카드 슬라이드

function MainPage() {
    return (
    <>
        <Search />
        <h1 className="title">Hello,Haley 
            <div className="hvr-icon-pulse-shrink">
            <i className="fa hvr-icon">☔</i>
            </div>
        </h1>
        <MainCard />
        <Contents />
    </>
    )
}

export default MainPage