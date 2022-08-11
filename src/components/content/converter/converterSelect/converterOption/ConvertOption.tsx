import React from 'react';
import {
    destinationType,
    globalMetrics,
    globalTitle,
} from '../../../../../types';
import classes from './ConvertOption.module.scss';
interface IProps {
    title: globalTitle;
    metrics: globalMetrics;
    destination: destinationType;
    selected: globalMetrics | null;
    selectHandler: (
        metrics: globalMetrics,
        destination: destinationType
    ) => void;
}

const ConvertOption: React.FC<IProps> = (props) => {
    const clickHandler = () => {
        props.selectHandler(props.metrics, props.destination);
    };

    return (
        <div
            onClick={clickHandler}
            className={`${classes.option} ${
                props.selected === props.metrics && classes.active
            }`}
        >
            <span className={classes.title}>{props.title}</span>
            <span className={classes.metrics}>{props.metrics}</span>
        </div>
    );
};
export default ConvertOption;
