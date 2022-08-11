import { globalMetrics, titleType } from '../../types';
import { areaMetrics } from '../../types/area';
import { dataMetrics } from '../../types/data';
import { lengthMetrics } from '../../types/length';
import { speedMetrics } from '../../types/speed';
import { tempMetrics } from '../../types/temp';
import { timeMetrics } from '../../types/time';
import { volumeMetrics } from '../../types/volume';
import { weightMetrics } from '../../types/weight';
import AreaConverter from './area';
import DataConverter from './data';
import LengthConverter from './length';
import SpeedConverter from './speed';
import TempConverter from './temp';
import TimeConverter from './time';
import VolumeConverter from './volume';
import WeightConverter from './weight';

function convert(
    type: titleType,
    value: number,
    from: globalMetrics,
    to: globalMetrics
): number {
    switch (type) {
        case 'Length':
            return LengthConverter.convert(
                value,
                from as lengthMetrics,
                to as lengthMetrics
            );
        case 'Area':
            return AreaConverter.convert(
                value,
                from as areaMetrics,
                to as areaMetrics
            );
        case 'Volume':
            return VolumeConverter.convert(
                value,
                from as volumeMetrics,
                to as volumeMetrics
            );
        case 'Temp':
            return TempConverter.convert(
                value,
                from as tempMetrics,
                to as tempMetrics
            );
        case 'Speed':
            return SpeedConverter.convert(
                value,
                from as speedMetrics,
                to as speedMetrics
            );
        case 'Time':
            return TimeConverter.convert(
                value,
                from as timeMetrics,
                to as timeMetrics
            );
        case 'Weight':
            return WeightConverter.convert(
                value,
                from as weightMetrics,
                to as weightMetrics
            );
        case 'Data':
            return DataConverter.convert(
                value,
                from as dataMetrics,
                to as dataMetrics
            );
    }
}

export default convert;
