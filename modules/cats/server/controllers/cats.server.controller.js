'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    Cat = mongoose.model('Cat'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.create = create;

function create (req, res) {
    let cat = new Cat(req.body);
    cat.createdBy = req.user;

    cat.save()
        .then((cat) => res.json(cat))
        .catch((err) => res.status(400).send({
            message: errorHandler.getErrorMessage(err)
        }));
}
