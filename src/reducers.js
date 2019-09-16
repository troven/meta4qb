import _ from "lodash";

/**
 * A `reducer` aggregates data to produced a summary.
 * It iterates over data rows (grouped or raw) to compute an aggregated value. 
 * 
 * @param {*} options 
 */
export default function reducers(options) {

    let self = this;
    return {
        summarize: function (meta) {
            return {
                add: function (answer, model) {
                    answer.count++;
                    var v = parseFloat(self.as.number(model, meta));
                    answer.total += v;
                    answer.average = answer.total / answer.count
                    answer.average = self.as.number(answer, "average");
                    answer.min = v < answer.min ? v : answer.min;
                    answer.max = v > answer.max ? v : answer.max;
                    answer.percent = (v / answer.total) * 100;
                    return answer;
                },
                remove: function (answer, model) {
                    answer.count--;
                    var v = parseFloat(self.as.number(model, meta));
                    answer.total -= v;
                    answer.average = (answer.total / answer.count)
                    answer.average = self.as.number(answer, "average");
                    answer.min = v < answer.min ? v : answer.min;
                    answer.max = v > answer.max ? v : answer.max;
                    return answer;
                },
                initial: function () {
                    return { count: 0, total: 0, average: 0, min: 0, max: 0, percent: 0 };
                }
            }
        },

        ratio: function (antecedent, consequent) {
            return {
                add: function (answer, model) {
                    answer.count++;
                    var a = self.as.number(model, antecedent);
                    var c = self.as.number(model, consequent);

                    var ta = answer[antecedent] += a;
                    var tc = answer[consequent] += c;
                    answer.ratio = ((ta / answer.count) / (tc / answer.count))
                    answer.ratio = self.as.number(answer, "ratio");
                    return answer;
                },
                remove: function (answer, model) {
                    answer.count--;
                    var a = self.as.number(model, antecedent);
                    var c = self.as.number(model, consequent);

                    var ta = answer[antecedent] -= a;
                    var tc = answer[consequent] -= c;
                    answer.ratio = ((ta / answer.count) / (tc / answer.count))
                    answer.ratio = self.as.number(answer, "ratio");
                    return answer;
                },
                initial: function () {
                    var answer = { count: 0, ratio: 0.0 };
                    answer[antecedent] = 0;
                    answer[consequent] = 0;
                    return answer;
                }
            }
        }
    }
}
