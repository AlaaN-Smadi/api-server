'use strict';



const { Food } = require('../models/index');
const express = require('express');
const router = express.Router();


async function addNewFood(req, res) {
    let foodInfo = req.body;
    let foodA = await Food.create(foodInfo);
    res.status(201).json(foodA);
}

async function getOneFood(req, res) {
    const id = parseInt(req.params.id);
    let foodA = await Food.findOne({ where: { id: id } });
    res.status(200).json(foodA);
}

async function getAllFood(req, res) {
    let all = await Food.findAll();
    res.status(200).json(all);
}

async function updateFood(req, res) {
    const id = parseInt(req.params.id);
    let foodInfo = req.body;

    let foodA = await Food.findOne({ where: { id } });
    let updateFood = await foodA.update(foodInfo);
    res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
    const id = parseInt(req.params.id);
    let deleteFood = await Food.destroy({ where: { id } });
    res.status(204).json(deleteFood);
}





router.get('/food', getAllFood);
router.post('/food', addNewFood);
router.get('/food/:id', getOneFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);


module.exports = router;