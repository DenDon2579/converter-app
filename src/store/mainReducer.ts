import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import icons from '../icons';
import { IConverter, globalMetrics, titleType } from '../types';

import convert from './converter';

import { options } from './options';

interface IState {
    value: number | null;
    list: IConverter[];
    currentConverter: titleType | null;
    selectedOptionFrom: globalMetrics | null;
    selectedOptionTo: globalMetrics | null;
}

const initialState: IState = {
    value: null,
    currentConverter: null,
    selectedOptionFrom: null,
    selectedOptionTo: null,
    list: [
        {
            title: 'Length',
            icon: icons.length,
            options: options.length,
        },
        {
            title: 'Area',
            icon: icons.square,
            options: options.area,
        },
        {
            title: 'Volume',
            icon: icons.volume,
            options: options.volume,
        },
        {
            title: 'Temp',
            icon: icons.temp,
            options: options.temp,
        },
        {
            title: 'Speed',
            icon: icons.speed,
            options: options.speed,
        },
        {
            title: 'Time',
            icon: icons.time,
            options: options.time,
        },
        {
            title: 'Weight',
            icon: icons.weight,
            options: options.weight,
        },
        {
            title: 'Data',
            icon: icons.data,
            options: options.data,
        },
        // { title: 'Currency', icon: icons.currency },
        // { title: 'Crypto\ncurrency', icon: icons.cryptoCurrency },
    ],
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCurrentConverter(state, action: PayloadAction<titleType | null>) {
            state.currentConverter = action.payload;
            state.selectedOptionFrom = null;
            state.selectedOptionTo = null;
            state.value = null;
        },
        setSelectedOptionFrom(state, action: PayloadAction<globalMetrics>) {
            state.selectedOptionFrom = action.payload;
        },
        setSelectedOptionTo(state, action: PayloadAction<globalMetrics>) {
            state.selectedOptionTo = action.payload;
        },
        convertValue(state, action: PayloadAction<number>) {
            if (
                action.payload &&
                state.currentConverter &&
                state.selectedOptionFrom &&
                state.selectedOptionTo
            ) {
                state.value = +convert(
                    state.currentConverter,
                    action.payload,
                    state.selectedOptionFrom,
                    state.selectedOptionTo
                ).toFixed(4);
            } else {
                state.value = null;
            }
        },
    },
});
export const {
    setCurrentConverter,
    setSelectedOptionFrom,
    setSelectedOptionTo,
    convertValue,
} = mainSlice.actions;
export default mainSlice.reducer;
