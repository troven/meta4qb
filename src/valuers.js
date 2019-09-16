import _ from "lodash";

/**
 * A `valuer` returns the `value` for a model's `attribute`.
 * 
 * @param {*} options 
 */
export default function valuers(options) {

    options = _.defaults({
        decimalPlaces: 2,
        labels: _.extend({
            weekOrWeekend: ["week", "weekend"],
            daysOfWeek: ["Mon", "Tues", "Web", "Thur", "Fri", "Sat", "Sun"],
            monthsOfYear: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        })
    });

    var as = {
        value: function (model, attr) { return model[attr] },
        lookup: function (model, attr) { return options.labels[attr][model[attr]] },
        number: function (model, attr) { return (model[attr] ? parseFloat(model[attr]) : 0).toFixed(options.decimalPlaces) },
        date: function (model, attr) { return Date.parse(model[attr]) },
        day: function (model, attr) { return Date.parse(model[attr]).getDay() },
        month: function (model, attr) { return options.labels.monthsOfYear[this.as.date(model, attr).getMonth()] },
        year: function (model, attr) { var y = new Date(model[attr]); return 1900 + y.getYear() },
        week: function (model, attr) { return this.as.date(model, attr).getWeek() },
        dayOfWeek: function (model, attr) { return options.labels.daysOfWeek[this.as.day(model, attr)] },
        weekOrWeekend: function (model, attr) {
            var d = this.as.day(model, attr);
            return options.labels.weekOrWeekend[d > 0 && d < 6 ? 0 : 1]
        }
    }

    return as;
}

