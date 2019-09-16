import _ from "lodash";
import dc from "dc";
import Chart from "../chart";

export default function(qb) {

        return {
            title: "Geo",
            create: function(el, slice) {
                var chart = dc.geoChoroplethChart(el,qb.id);
                slice = qb.chart._configure(chart, "geo", slice);
                console.log("Geo: %o -> %o", chart, slice);

                //https://github.com/mbostock/d3/wiki/Geo-Projections
                chart.projection(d3.geo.azimuthalEqualArea()) //.scale(26778).translate([8227, 3207])
                slice.features && chart.overlayGeoJson(slice.features, 'geo', slice.featureKey )

                return chart;
            },

            defaults: {
                width: 1024, height: 600,
                featureKey: function (d) {
                    return d.properties.name
                }
            }

        }
    }
