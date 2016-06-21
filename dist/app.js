"use strict";
require('jquery');
var fastclick_1 = require('fastclick');
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Imperial Assault';
        config.map([
            { route: ['', 'attack-calc'], name: 'attack-calc', moduleId: 'pages/attack-calc', nav: true, title: 'Attack' },
            { route: 'attribute-test', name: 'attribute-test', moduleId: 'pages/attribute-test', nav: true, title: 'Attribute Test' },
        ]);
        this.router = router;
    };
    App.prototype.attached = function () {
        fastclick_1.attach(document.body);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map