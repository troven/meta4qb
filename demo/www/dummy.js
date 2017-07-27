if (top != self) { top.location.replace(self.location.href); }

// setup the require.js configuration
// define the paths for common 3rd party libraries
// meta4 specific

require.config({
    baseUrl: "/bower_components/",
    waitSeconds: 10,
    paths: {
        jquery: "/bower_components/jquery/dist/jquery.min",
        underscore: "/bower_components/underscore/underscore",
        bootstrap: "/bower_components/bootstrap/bootstrap",
        marionette: "/bower_components/backbone.marionette/lib/backbone.marionette",

        backbone: "/bower_components/backbone/backbone",

// QB
        colorbrewer: "/bower_components/colorbrewer/colorbrewer",
        crossfilter: "/bower_components/crossfilter/crossfilter",
        moment: "/bower_components/moment/moment",

        dc: "/bower_components/dcjs/dc",
        d3: "/bower_components/d3/d3",

        defaults: "meta4qb/defaults",
        qb: "meta4qb/qb",
        qbd: "meta4qb/qbd",
        qbs: "meta4qb/qbs"

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
            url: "/dummy/data.json",
            charts: [
                {
                    "width": 800, "height": 400,
                    "header": "Total",
                    "type": "bar",
                    "renderLabel": true,
                    "valueAccessor": "total",
                    "measure": "qty",
                    "dimension": "flavor"
                }
                ,
                {
                   "width": 200, "height": 200,
                   "header": "Average",
                   "type": "row",
                   "valueAccessor": "count",
                   "measure": "value",
                   "dimension": "qty"
                },
                //{
                //    "width": 200, "height": 200,
                //    "header": "Price",
                //    "type": "row",
                //    "valueAccessor": "average",
                //    "measure": "count",
                //    "dimension": "price"
                //}
            ]
        }]
    });
})
