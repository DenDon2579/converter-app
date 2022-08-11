import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { areaMetrics, areaTitle } from './area';
import { dataMetrics, dataTitle } from './data';
import { lengthMetrics, lengthTitle } from './length';
import { speedMetrics, speedTitle } from './speed';
import { tempMetrics, tempTitle } from './temp';
import { timeMetrics, timeTitle } from './time';
import { volumeMetrics, volumeTitle } from './volume';
import { weightMetrics, weightTitle } from './weight';

export interface IOption {
    title: globalTitle;
    metrics: globalMetrics;
}

export interface IConverter {
    title: titleType;
    icon: IconDefinition;
    options: IOption[];
}

export type globalTitle =
    | lengthTitle
    | areaTitle
    | volumeTitle
    | tempTitle
    | speedTitle
    | timeTitle
    | weightTitle
    | dataTitle;

export type globalMetrics =
    | lengthMetrics
    | areaMetrics
    | volumeMetrics
    | tempMetrics
    | speedMetrics
    | timeMetrics
    | weightMetrics
    | dataMetrics;

export type titleType =
    | 'Length'
    | 'Area'
    | 'Volume'
    | 'Temp'
    | 'Speed'
    | 'Time'
    | 'Weight'
    | 'Data';

export type destinationType = 'from' | 'to';
