define(function () {

    var internals = {}; // Internal config and state
    var externals = {}; // External api

    externals.listt = function () {
        return 'API here';
    };

    externals.starships = function (cb) {

        $.ajax({
            url: 'https://swapi.co/api/starships/3/',
            type: 'GET',
            dataType: 'json',
            success: function (results) { processResults(null, results) },
            error: function (request) { processResults(request.responseText, null) }

        });

        function processResults (error, data) {
            if (error) {
                // error handling
                throw new Error('something went wrong');
            }

            cb(data);
        }


    }



        return externals;
    });