define(function() {

    
    var internals = {}; // Internal config and state
    var externals = {}; // External api

    internals.elements = {
        app: '#app'
    };

    internals.handlers = {};

    internals.events = {
        buttonPush: bindButtonPushHandler
    };

    externals.bind = function(event, handler) {
        internals.events[event](handler);
    };

    externals.render = function(data) {

        $('#app').append('<h1 id="appname"> Starship ' + data + '</h1>')
        $('#app').append('<button id="cronolapse" type="button">Button</button>');
    }


    function bindButtonPushHandler (handler) {
        $('#cronolapse').click(function(event) {
            handler(event.target.value);
        });
    };


    return externals;
})