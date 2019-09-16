import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function (qb) {

    return {
        title: "Data Table",

        create: function (el, slice) {
            var chart = dc.dataTable(el, qb.id);
            slice = qb.chart._configure(chart, "table", slice);
            console.log("Table: ", chart, slice);
            if (slice.dimension) chart.dimension(slice.dimension);

            chart.group(function (g) {
                console.log("Tabulate: ", g);
                return g.flavor;
            });

            slice.columns && chart.columns(slice.columns);
            //			chart.size(10)
            return chart;
        },

        defaults: {
            width: 800, height: 400
        }

    }
}
