const express = require("express");
const cors = require("cors");
const { favouriteRouter } = require("./routers/favorites.router");
const { createFavouritesTable } = require("./model/createFavouritesTable.model");
const PORT = 3001


//--- express envoke ---//
const app = express();

app.use(express.json()) ;
app.use(express.text()) ;
app.use(cors()) ;

app.use("/favourites", createFavouritesTable, favouriteRouter)

app.get("/", (req, res) => {
    res.status(200).json({Message: "Welcome to Backend"})
})


//--- server starting ---//
app.listen(PORT , () => {
    console.log(`Server is listning at ${PORT}`)
})