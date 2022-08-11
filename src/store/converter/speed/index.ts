import { speedMetrics } from '../../../types/speed';

interface IConverters {
    base: {
        [key in speedMetrics]: number;
    };
}

export default class SpeedConverter {
    static convert(value: number, from: speedMetrics, to: speedMetrics) {
        const basic = value / this.converters.base[from];
        return basic * this.converters.base[to];
    }
    static converters: IConverters = {
        base: {
            'm/s': 1,
            c: 3.33564095e-9,
            Ma: 0.0029385836,
            'km/h': 3.6,
            'km/s': 0.001,
            kn: 1.94384449,
            mph: 2.23693629,
            fps: 3.2808399,
            ips: 39.3700787,
        },
    };
}
