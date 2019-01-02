requirejs.config({
    // path to fetch all modules
    baseUrl: '/js/app'
});

// app entry point
requirejs(['main'], function() {
    console.log('All modules have finished loading.')
});