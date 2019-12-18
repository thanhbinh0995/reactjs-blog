import React from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import { DATE_TIME_FORMAT } from '../../../constants';

const renderDatePicker = ({ input, name, label, value, ...props }) => (
    <DateTimePicker
        keyboard
        label={label}
        variant="outlined"
        className="form-control"
        format={DATE_TIME_FORMAT}
        value={value || ''}
        animateYearScrolling={false}
        {...input}
        {...props}
    />
);

export default renderDatePicker;
