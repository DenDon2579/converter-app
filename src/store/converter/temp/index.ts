import { tempMetrics } from '../../../types/temp';

interface IConverters {
    base: {
        [key in tempMetrics]: (v: number) => number;
    };
    out: {
        [key in tempMetrics]: (v: number) => number;
    };
}

export default class TempConverter {
    static convert(value: number, from: tempMetrics, to: tempMetrics) {
        const basic = this.converters.base[from](value);
        return this.converters.out[to](basic);
    }
    static converters: IConverters = {
        base: {
            K: (v) => v,
            '°C': (v) => v + 273.15,
            '°F': (v) => (v - 32) * (5 / 9) + 273.15,
        },
        out: {
            K: (v) => v,
            '°C': (v) => v - 273.15,
            '°F': (v) => (v - 273.15) * (9 / 5) + 32,
        },
    };
}
