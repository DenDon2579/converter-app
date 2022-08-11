import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/react-redux';
import {
    convertValue,
    setCurrentConverter,
    setSelectedOptionFrom,
    setSelectedOptionTo,
} from '../../../store/mainReducer';

import {
    destinationType,
    globalMetrics,
    IOption,
    titleType,
} from '../../../types';
import classes from './Converter.module.scss';
import ConverterSelect from './converterSelect/ConverterSelect';

interface IProps {
    options: IOption[];
    title: titleType;
}

const Converter: React.FC<IProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');
    const selectedTo = useAppSelector((state) => state.main.selectedOptionTo);
    const value = useAppSelector((state) => state.main.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentConverter(props.title));
        return function () {
            dispatch(setCurrentConverter(null));
        };
    }, [dispatch, props.title]);

    const selectedFrom = useAppSelector(
        (state) => state.main.selectedOptionFrom
    );

    const selectHandler = (
        metrics: globalMetrics,
        destination: destinationType
    ) => {
        if (destination === 'from') {
            dispatch(setSelectedOptionFrom(metrics));
        } else if (destination === 'to') {
            dispatch(setSelectedOptionTo(metrics));
        }
        dispatch(convertValue(+inputValue));
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        dispatch(convertValue(+value));
    };

    return (
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <input
                    onChange={inputOnChange}
                    value={inputValue}
                    className={classes.input}
                    type='number'
                    disabled={!selectedFrom}
                    pattern='[A-Za-z]{3}'
                />
                <div className={classes.metrics}>{selectedFrom}</div>
                <ConverterSelect
                    selected={selectedFrom}
                    options={props.options}
                    destination={'from'}
                    selectHandler={selectHandler}
                />
            </div>
            <div className={classes.mid}>
                <FontAwesomeIcon className={classes.icon} icon={faArrowRight} />
            </div>
            <div className={classes.right}>
                <div className={classes.output} data-disabled={!selectedTo}>
                    {value}
                </div>
                <div className={classes.metrics}>{selectedTo}</div>
                <ConverterSelect
                    selected={selectedTo}
                    options={props.options}
                    destination={'to'}
                    selectHandler={selectHandler}
                />
            </div>
        </div>
    );
};
export default Converter;
