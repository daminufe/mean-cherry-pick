'use strict';

var catsPolicy = require('../policies/cats.server.policy.js'),
    cats = require('../controllers/cats.server.controller.js');

module.exports = function (app) {
    app.route('/api/cats').all(catsPolicy.isAllowed)
        .get(cats.list)
        .post(cats.create);
};
