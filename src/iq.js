import _ from "lodash";

export default function iq(options, qb) {

    var fns = _.extend({}, options.fn);
    var fnKeyAttribute = options.fnKeyAttribute || "type";

    return {
        resolve: function (meta, keyAttribute) {
            if (_.isFunction(meta)) {
                return meta;
            }
            if (_.isString(meta)) {
                return fns[meta];
            }
            if (_.isObject(meta)) {
                var key = meta[keyAttribute || fnKeyAttribute];
                return fns[key];
            }
        }
    }
}
