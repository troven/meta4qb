if (top != self) { top.location.replace(self.location.href); }

// setup the require.js configuration
// define the paths for common 3rd party libraries
// meta4 specific

require.config({
    baseUrl: "/js",
    waitSeconds: 10,
    paths: {
        jquery: "/js/jquery/dist/jquery.min",
        underscore: "/js/underscore/underscore",
        bootstrap: "/js/bootstrap/bootstrap",
        marionette: "/js/backbone.marionette/lib/backbone.marionette",

        backbone: "/js/backbone/backbone",

// QB
        colorbrewer: "/js/colorbrewer/colorbrewer",
        crossfilter: "/js/crossfilter/crossfilter",
        moment: "/js/moment/moment",

        dc: "/js/dcjs/dc",
        d3: "/js/d3/d3",

        qb: "/src/qb",
        qbd: "/src/qbd",
        qbs: "/src/qbs"

    },
    wrapShim: true,
    shim : {
      underscore : {
        exports : '_'
      },
      "crossfilter": {
        exports : 'crossfilter'
      },
      "colorbrewer": {
        exports : 'colorbrewer'
      },
      "d3": {
        deps : ['underscore'],
        exports : 'd3'
      },
      "dc": {
        deps : [ 'd3', 'colorbrewer', 'crossfilter'],
        exports : 'dc'
      },
      marionette : {
        deps : ['jquery', 'underscore', 'backbone'],
        exports : 'Marionette'
      }

    }
});
requirejs(["qbd"], function(qbd) {

	console.log("Started: %o", qbd);

    new qbd({
        qbd: [{
            url: "/dummy/data0.json"
        }]
    });
})
