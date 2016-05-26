'use strict';

var catsPolicy = require('../policies/cats.server.policy.js'),
    cats = require('../controllers/cats.server.controller.js');

module.exports = function (app) {
    app.route('/api/cats').all(catsPolicy.isAllowed)
        .get(cats.list)
        .post(cats.create);

    app.route('/api/cats/:catId').all(catsPolicy.isAllowed)
        .get(cats.read)
        .put(cats.update)
        .delete(cats.delete);

    app.param('catId', cats.catById);

};
