import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import FavouritesPage from '../Pages/FavouritesPage'
import Navbar from '../Components/Navbar'
import SinglePage from '../Components/SinglePage'

export default function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={"/favourites"} element={<FavouritesPage/>} />
            <Route path={"/favourites/details/:id"} element={<SinglePage/>} />
        </Routes>
    </div>
  )
}
