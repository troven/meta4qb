import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function(qb) {

        return {
            title: "Bubble",
            create: function(el, slice) {
                var chart = dc.bubbleChart(el,qb.id);
                slice = qb.chart._configure(chart, "bubble", slice);
                console.log("Bubble: ", chart, slice);

                chart
                // .x(d3.scale.ordinal())
                    .x(d3.scale.linear().nice())
                    .elasticX(slice.elasticX);
                // .xUnits(dc.units.ordinal)

                chart
                    .y(d3.scale.linear().nice())
                    .elasticY(slice.elasticY);

                chart.r(d3.scale.linear().domain([0, 4000]))

                chart.brushOn(slice.brushOn)

                chart.radiusValueAccessor(function (p) {
                    return 10;
                }).maxBubbleRelativeSize(0.3)


                //     .clipPadding(slice.clipPadding)
                //     .elasticX(slice.elasticX)
                //     .elasticY(slice.elasticY)
                return chart;
            },

            defaults: {
                width: 800,
                height: 400
            }

        }
    }
