(function (app) {
    'use strict';

    app.registerModule('cats', ['core']);
    app.registerModule('cats.services');
    app.registerModule('cats.routes', ['ui.router', 'core.routes', 'cats.services']);
}(ApplicationConfiguration));
