import express from "express"
import { Product } from "../models/product.model.js";
import mongoose from "mongoose";
import { deleteData, getData, saveNewData, updateData } from "../controllers/product.controller.js";
const router = express.Router()

// Getting data from databse
router.get("/", getData)

// Sending data to database
router.post("/", saveNewData)

// Updating data
router.put("/:id", updateData)

// Deleting data from DB
router.delete("/:id", deleteData)

export default router;