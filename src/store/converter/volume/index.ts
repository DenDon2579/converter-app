import { volumeMetrics } from '../../../types/volume';

interface IConverters {
    base: {
        [key in volumeMetrics]: number;
    };
}

export default class VolumeConverter {
    static convert(value: number, from: volumeMetrics, to: volumeMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            'm³': 1,
            'dm³': 1000,
            'cm³': 1000000,
            'mm³': 1e9,
            hl: 10,
            l: 1000,
            dl: 10000,
            cl: 100000,
            ml: 1000000,
            'ft³': 35.3146667,
            'in³': 61023.7441,
            'yd³': 1.30795062,
            'af³': 0.000810372771,
        },
    };
}
