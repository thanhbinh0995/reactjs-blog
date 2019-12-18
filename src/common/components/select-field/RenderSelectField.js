import React from 'react';
import Select from '@material-ui/core/Select';

function renderSelectField({ input, label, meta: { touched, error }, children }) {
    return (
        <Select
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
        />
    );
}

export default renderSelectField;
