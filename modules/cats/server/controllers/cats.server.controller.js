'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    Cat = mongoose.model('Cat'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
    _ = require('lodash');

exports.list = list;
exports.catById = catById;

exports.create = create;
exports.read = read;
exports.update = update;


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

function catById (req, res, next, id) {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'Cat is invalid'
        });
    }

    Cat.findById(id)
        .populate('createdBy', '-password -salt')
        .exec()
        .then((cat) => {
            req.cat = cat;
            next();
        })
        .catch((err) => res.status(404).send({
            message: 'No cat with that identifier has been found'
        }));
}

function read (req, res) {
    res.json(req.cat);
}

function update(req, res) {
    let cat = req.cat;

    cat = _.extend(cat, req.body);

    cat.save()
        .then((cat) => res.json(cat))
        .catch((err) => res.status(400).send({
            message: errorHandler.getErrorMessage(err)
        }));
}
