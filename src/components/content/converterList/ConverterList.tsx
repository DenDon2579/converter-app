import React from 'react';
import { IConverter } from '../../../types';

import ConverterItem from './converterItem/ConverterItem';
import classes from './ConverterList.module.scss';
interface IProps {
    list: IConverter[];
}

const ConverterList: React.FC<IProps> = ({ list }) => {
    return (
        <div className={classes.list}>
            {list.map((item, index) => (
                <ConverterItem key={index} data={item} />
            ))}
        </div>
    );
};
export default ConverterList;
