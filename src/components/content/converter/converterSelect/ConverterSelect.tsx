import React from 'react';
import { destinationType, globalMetrics, IOption } from '../../../../types';
import ConvertOption from './converterOption/ConvertOption';
import classes from './ConverterSelect.module.scss';
interface IProps {
    options: IOption[];
    destination: destinationType;
    selected: globalMetrics | null;
    selectHandler: (
        metrics: globalMetrics,
        destination: destinationType
    ) => void;
}

const ConverterSelect: React.FC<IProps> = (props) => {
    return (
        <div className={classes.select}>
            {props.options.map((item, index) => (
                <ConvertOption
                    selected={props.selected}
                    destination={props.destination}
                    key={index}
                    title={item.title}
                    metrics={item.metrics}
                    selectHandler={props.selectHandler}
                />
            ))}
        </div>
    );
};
export default ConverterSelect;
