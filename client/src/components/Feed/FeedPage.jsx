import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    Outlet,
    Route,
    Routes,
  } from "react-router-dom";
import "../../styles/feedPage.css"
import { RoomMatesList } from "./RoomMates/RoomMatesList";
import { FlatList } from "./Flat/FlatList"
import "../../styles/feedPage.css";

export const FeedPage = () => {
  return (
    <>

    <ul className='flex flex-row gap-10 content-center items-center gap-x-20 z-10 mx-7 mb-2'>
            <Link className='nav' to='roomMates'>Flat Mates</Link>
            <Link className='nav' to='flats'>Flats</Link>
    </ul>
    <Outlet/>


    </>
  );
};
