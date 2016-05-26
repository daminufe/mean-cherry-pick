'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    Cat = mongoose.model('Cat'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    _ = require('lodash');

exports.list = list;
// exports.catById = catById;

exports.create = create;
// exports.read = read;
// exports.update = update;


function create (req, res) {
    let cat = new Cat(req.body);
    cat.createdBy = req.user;

    cat.save()
        .then((cat) => res.json(cat))
        .catch((err) => res.status(400).send({
            message: errorHandler.getErrorMessage(err)
        }));
}

function list (req, res) {
    Cat.find()
        .populate('createdBy', '-password -salt')
        .exec()
        .then((cats) => res.json(cats))
        .catch((err) => res.status(400).send({
            message: errorHandler.getErrorMessage(err)
        }));
}

