

const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const filmSchema = require('../models/joi/filmSchema');

router.get('/detailsFilm/:id',
  joiMiddleware.validate(filmSchema.selectFilSchema, 'params'),
  filmController.selectById
);
module.exports = router;