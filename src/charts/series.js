import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function(qb) {

        return {
            title: "Series",

            create: function(el, slice) {
                var chart = dc.seriesChart(el,qb.id);
                slice = qb.chart._configure(chart, "series", slice);
                console.log("Series: ", chart, slice);

                chart.brushOn(slice.brushOn)
                    .clipPadding(slice.clipPadding)
                    .elasticX(slice.elasticX)
                    .elasticY(slice.elasticY)
                return chart;
            },

            defaults: {
                width: 800, height: 400
            }

        }
    }
