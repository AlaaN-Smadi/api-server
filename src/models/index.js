'use strict';

// const POSTGRES_URI = process.env.POSTGRES_URI || 'postgres://localhost/postgres';
const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/postgres";
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food.model');

var sequelize = new Sequelize(POSTGRES_URI, {});

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
}

