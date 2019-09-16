import _ from "lodash";
import as from "./transforms";

/**
 * An `accessor` retrives value from a summary model.
 * 
 * @param {*} options 
 */
export default function accessors(options) {
    var _options = _.defaults(options, { decimalPlaces: 2 });
    var _decimalPlaces = _options.decimalPlaces;
    var _keyField = _options.keyField | "key";
    var _valueField = _options.valueField | "value";

    return {
        key: function (r) {
            return r[_keyField];
        },
        keyDate: function (r) {
            return as.date(r, _keyField);
        },
        value: function (r) {
            return r[_valueField];
        },
        number: function (r) {
            return parseFloat(r[_valueField]).toFixed(_decimalPlaces);
        },
        total: function (r) {
            return parseFloat(r[_valueField] ? r[_valueField].total : 0).toFixed(_decimalPlaces);
        },
        count: function (r) {
            return r[_valueField] ? r[_valueField].count : 0;
        },
        average: function (r) {
            return parseFloat(r[_valueField] ? r[_valueField].average : 0).toFixed(_decimalPlaces);
        },
        min: function (r) {
            return r[_valueField] ? r[_valueField].min : 0;
        },
        max: function (r) {
            return r[_valueField] ? r[_valueField].max : 0;
        }
    }
}
