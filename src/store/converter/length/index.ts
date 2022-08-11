import { lengthMetrics } from '../../../types/length';

interface IConverters {
    base: {
        [key in lengthMetrics]: number;
    };
}

export default class LengthConverter {
    static convert(value: number, from: lengthMetrics, to: lengthMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            m: 1,
            km: 0.001,
            dm: 10,
            cm: 100,
            mm: 1000,
            μm: 1000000,
            nm: 1e9,
            pm: 1e12,
            nmi: 0.000539956803,
            mi: 0.000621371192,
            fur: 0.00497096954,
            ftm: 0.546806649,
            yd: 1.0936133,
            ft: 3.2808399,
            in: 39.3700787,
            gongli: 0.001,
            li: 0.002,
            zhang: 0.3,
            chi: 3,
            cun: 30,
            fen: 300,
            lii: 3000,
            hao: 30000,
            pc: 3.24077929e-17,
            ld: 2.60145005e-9,
            '☉': 6.68458712e-12,
            ly: 1.05700083e-16,
        },
    };
}
