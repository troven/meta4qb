define(["underscore",
    "/src/charts/bar.js",
    "/src/charts/bubble.js",
    "/src/charts/column.js",
    "/src/charts/count.js",
    "/src/charts/donut.js",
    "/src/charts/geo.js",
    "/src/charts/line.js",
    "/src/charts/pie.js",
    "/src/charts/row.js",
    "/src/charts/scatter.js",
    "/src/charts/series.js",
    "/src/charts/table.js",
    "/src/charts/time.js"
], function (_, Bar, Bubble, Column, Count, Donut, Geo, Line, Pie, Row, Scatter, Series, Table, Time) {

    return function(qb) {
        console.log("Chart Factory: %o", qb);

        var defaults = {
            width: 192, height: 192,
            renderArea: true, renderLabel: true, renderTitle: true,
            elasticY: true, elasticX: true, margins: {top: 10, right: 10, bottom: 10, left: 40},
            brushOn: true, transitionDuration: 500,
            required: ["dimension", "measure", "reducer"],
            x_colors: ['#ccc', '#E2F2FF', '#C4E4FF', '#9ED2FF', '#81C5FF', '#6BBAFF', '#51AEFF', '#36A2FF', '#1E96FF', '#0089FF', '#0061B5'],
        };

        return {
            bar: new Bar(qb, defaults),
            bubble: new Bubble(qb, defaults),
            column: new Column(qb, defaults),
            count: new Count(qb, defaults),
            donut: new Donut(qb, defaults),
            geo: new Geo(qb, defaults),
            line: new Line(qb, defaults),
            pie: new Pie(qb, defaults),
            row: new Row(qb, defaults),
            scatter: new Scatter(qb, defaults),
            series: new Series(qb, defaults),
            table: new Table(qb, defaults),
            time: new Time(qb, defaults)
        }
    }
});
