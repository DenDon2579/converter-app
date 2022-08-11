import {
    faBitcoinSign,
    faClock,
    faCube,
    faDollar,
    faGaugeHigh,
    faMicrochip,
    faRulerHorizontal,
    faTemperatureHalf,
    faVectorSquare,
    faWeightHanging,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface Icons {
    [key: string]: IconDefinition;
}

const icons: Icons = {
    length: faRulerHorizontal,
    square: faVectorSquare,
    volume: faCube,
    temp: faTemperatureHalf,
    speed: faGaugeHigh,
    time: faClock,
    weight: faWeightHanging,
    data: faMicrochip,
    currency: faDollar,
    cryptoCurrency: faBitcoinSign,
};

export default icons;
