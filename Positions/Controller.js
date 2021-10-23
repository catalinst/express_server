const express = require('express');
const positionService = require('./Service');

const positionRouter = express.Router();

positionRouter.route('').post(createPosition);

function createPosition(request, response) {
    const value = request.body;

    positionService.create(
        value,
        data => response.status(201).json(data),
        error => response.status(400).json(error),
    );
}

module.exports = positionRouter;
