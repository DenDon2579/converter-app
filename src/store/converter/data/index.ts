import { dataMetrics } from '../../../types/data';

interface IConverters {
    base: {
        [key in dataMetrics]: number;
    };
}

export default class DataConverter {
    static convert(value: number, from: dataMetrics, to: dataMetrics) {
        const basic = value * this.converters.base[from];
        return basic / this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            B: 1,
            Bt: 8,
            Kb: 2 ** 13,
            Mb: 2 ** 23,
            Gb: 2 ** 33,
            Tb: 2 ** 43,
            Pb: 2 ** 53,
        },
    };
}
