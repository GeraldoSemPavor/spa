define(['services/listing-service', 'views/listing-view'], function(listingService, listingView) {

    var internals = {}; // Internal config and state
    var externals = {}; // External api

    externals.start = function() {

        var results = listingService.starships(function(data) {
            console.log('on controller', data);
            listingView.render(JSON.stringify(data));
        });
        bindEvents();

    }

    function bindEvents() {
        listingView.bind('buttonPush', buttonHandler);
    }

    function buttonHandler() {
        console.log('button clicked');
    }


    return externals;
})