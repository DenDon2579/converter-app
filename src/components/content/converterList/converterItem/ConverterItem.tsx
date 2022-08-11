import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { IConverter } from '../../../../types';

import classes from './ConverterItem.module.scss';
interface IProps {
    data: IConverter;
}

const ConverterItem: React.FC<IProps> = ({ data }) => {
    return (
        <Link
            className={classes.link}
            to={`converter/${data.title.toLowerCase()}`}
        >
            <div className={classes.item}>
                <div className={classes.top}>
                    <FontAwesomeIcon
                        icon={data.icon}
                        className={classes.icon}
                    />
                </div>
                <div className={classes.bottom}>
                    <span className={classes.title}>{data.title}</span>
                </div>
            </div>
        </Link>
    );
};
export default ConverterItem;
