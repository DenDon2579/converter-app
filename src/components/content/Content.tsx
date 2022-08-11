import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks/react-redux';

import classes from './Content.module.scss';
import Converter from './converter/Converter';
import ConverterList from './converterList/ConverterList';

const Content: React.FC = () => {
    const state = useAppSelector((state) => state.main);

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>
                {state.currentConverter
                    ? `${state.currentConverter.toUpperCase() + ' CONVERTER'}`
                    : 'CONVERTER'}
            </h1>
            <Routes>
                <Route path='/' element={<ConverterList list={state.list} />} />
                {state.list.map((item, index) => (
                    <Route
                        key={index}
                        path={`converter/${item.title.toLowerCase()}`}
                        element={
                            <Converter
                                options={item.options}
                                title={item.title}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    );
};
export default Content;
