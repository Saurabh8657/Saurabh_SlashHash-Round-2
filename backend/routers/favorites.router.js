const express = require("express");
const { db } = require("../config/db");

const favouriteRouter = express.Router();   

//--- favourite routes ---//
//--- get all favourites ---//
favouriteRouter.get("/", (req, res) => {
    try {  
        const query = `SELECT * FROM favourites`
        db.query(query, [], (err, result) => {
            if(err) res.status(500).json(err)
            else res.status(200).json({result})
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

//--- add favourites ---//
favouriteRouter.post("/", (req, res) => {
    try {
        const {id, content, author} = req.body;
        const query = `INSERT INTO favourites (id, content, author) VALUES (?, ?, ?)`
        db.query(query, [id, content, author], (err, result) => {
            if (err) res.status(200).json({"Error inserting data": err})
            else res.status(200).json({result})
        } )
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//--- get single favourites ---//
favouriteRouter.get("/:id", (req, res) => {
    const id = req.params.id
    try {
        const query = `SELECT * FROM favourites WHERE id = ?`
        db.query(query, [id], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})

//--- delete favourites ---//
favouriteRouter.delete("/:id", (req, res) => {
    const { id } = req.params ;
    try {
        const query = `DELETE FROM favourites WHERE id = ?`
        db.query(query, [id], (err, result) => {
            if (err) res.status(200).json({message: err})
            else res.status(200).json({Message:"Favourite Deleted",data: result})
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
})

module.exports = {
    favouriteRouter,
}




// ------------------------------------------------------------------
//--- get single reciepe ---//
// reciepeRouter.get("/:idMeal", (req, res) => {
//     const idMeal = req.params.idMeal
//     try {
//         const query = `SELECT * FROM reciepes WHERE idMeal = ?`
//         db.query(query, [idMeal], (err, result) => {
//             if (err) res.status(200).json({message: err})
//             else res.status(200).json({data: result})
//         })
//     } catch (error) {
//         res.status(500).json({message: error})
//     }
// })


//--- add reciepes ---//
// reciepeRouter.post("/", (req, res) => {
//     const { idMeal, strMealThumb, strMeal, strCategory, strArea } = req.body ;
//     try {
//         const query = `INSERT INTO reciepes (idMeal, strMealThumb, strMeal, strCategory, strArea) VALUES (?,?,?,?,?)`
//         db.query(query, [idMeal, strMealThumb, strMeal, strCategory, strArea], (err, result) => {
//             if (err) res.status(200).json({message: err})
//             else res.status(200).json({Message:"Reciepe Added to Database",data: result})
//         })
//     } catch (error) {
//         res.status(500).json({message: error})
//     }
// })


//--- delete reciepes ---//
// reciepeRouter.delete("/:idMeal", (req, res) => {
//     const { idMeal } = req.params ;
//     try {
//         const query = `DELETE FROM reciepes WHERE idMeal = ?`
//         db.query(query, [idMeal], (err, result) => {
//             if (err) res.status(200).json({message: err})
//             else res.status(200).json({Message:"Reciepe Deleted",data: result})
//         })
//     } catch (error) {
//         res.status(500).json({message: error})
//     }
// })

// module.exports = {
//     reciepeRouter,
// }
