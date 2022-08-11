import { areaMetrics } from '../../../types/area';

interface IConverters {
    base: {
        [key in areaMetrics]: number;
    };
}

export default class AreaConverter {
    static convert(value: number, from: areaMetrics, to: areaMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            'm²': 1,
            'km²': 1e-6,
            ha: 0.0001,
            a: 0.01,
            'dm²': 100,
            'cm²': 10000,
            'mm²': 1000000,
            'μm²': 1e12,
            ac: 0.000247105407,
            'mile²': 3.86102159e-7,
            'yd²': 1.19599005,
            'ft²': 10.7639104,
            'in²': 1550.0031,
            'rd²': 0.039536861,
            qing: 1.5e-5,
            mu: 0.0015,
            'chi²': 9,
            'cun²': 900,
            'gongli²': 1e-6,
        },
    };
}
