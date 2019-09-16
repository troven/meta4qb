import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function(qb) {

        return {
            title: "Scatter",

            create: function(el, slice) {
                var chart = dc.scatterChart(el,qb.id);
                slice = qb.chart._configure(chart, "scatter", slice);

                console.log("Scatter: ", chart, slice);
                return chart;
            },

            defaults: {
                width: 800, height: 400
            }

        }
    }
