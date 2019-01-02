/**
 * Router Module
 */

 define(function() {

    var internals = {}; // Internal config and state
    var externals = {}; // External api

    internals.routes = {
        list: {
            hash: '#list',
            controller: 'list-controller'
        },
        details: {
            hash: '#details',
            controller: 'details-controller'
        }
    }

    internals.currentHash = ''; // Required to check hash changes

    /**
     * Start the routing process
     */
    externals.start = function() {
        window.location.hash = internals.routes.list.hash;
        setInterval(hashCheck, 100);
        console.log('All good')
    };

    function hashCheck() {

        // nothing to do if route has not changed
        if (window.location.hash === internals.currentHash) {
            return;
        }

        // hash change detected
        var routeName = Object.keys(internals.routes).find(function(name) {
            return window.location.hash === internals.routes[name].hash;
        });

        // null or undefined hash - load default route
        if(!routeName) {
            loadDefaultRoute();
            return;
        }

        // load route if valid hash is given
        loadController(internals.routes[routeName].controller);
    }

    function loadDefaultRoute() {
       window.location.hash = internals.routes.list.hash;
       loadController(internals.routes.list.controller);
    }

    function loadController(controllerName) {

        internals.currentHash = window.location.hash;
        require(['controllers/' +controllerName], function(controller) {
            controller.start();                        
        })
    }

    return externals;

 });