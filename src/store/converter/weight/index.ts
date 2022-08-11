import { weightMetrics } from '../../../types/weight';

interface IConverters {
    base: {
        [key in weightMetrics]: number;
    };
}

export default class WeightConverter {
    static convert(value: number, from: weightMetrics, to: weightMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            kg: 1,
            t: 0.001,
            g: 1000,
            mg: 1000000,
            μg: 1e9,
            ct: 5000,
            lb: 2.20462262,
        },
    };
}
