const express = require('express');
const cors = require('cors');

module.exports = app => {
    app.use(express.json()) 
    app.use(cors()) // Lida com APIS, em multiplas portas
}