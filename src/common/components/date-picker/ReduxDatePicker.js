import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import renderDatePicker from './RenderDatePicker';

const styles = () => ({
    labelField: {
        margin: '3px auto',
        position: 'relative',
    },
});

function ReduxDatePicker(props) {
    const { labelPlacement = 'top', classes, ...rest } = props;

    return (
        <FormControlLabel
            control={<Field component={renderDatePicker} {...rest} />}
            classes={{
                root: classes.labelField,
            }}
            labelPlacement={labelPlacement}
        />
    );
}

ReduxDatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReduxDatePicker);
