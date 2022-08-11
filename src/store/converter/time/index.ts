import { timeMetrics } from '../../../types/time';

interface IConverters {
    base: {
        [key in timeMetrics]: number;
    };
}

export default class TimeConverter {
    static convert(value: number, from: timeMetrics, to: timeMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            min: 1,
            y: 1.90258752e-6,
            wk: 9.92063492e-5,
            d: 0.000694444444,
            h: 0.0166666667,
            s: 60,
            ms: 60000,
            μs: 60000000,
            ps: 6e13,
        },
    };
}
