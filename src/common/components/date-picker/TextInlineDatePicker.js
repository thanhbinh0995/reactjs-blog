import React from 'react';
import { DatePicker } from 'material-ui-pickers';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SLASH_DATE_FORMAT } from '../../../constants';

const styles = {
    datePicker: {
        width: '100%',
    },
};
function TextInlineDatePicker(props) {
    const { classes, value, onChange, inline, ...rest } = props;

    return (
        <div className={`picker ${inline ? 'inline-block' : ''}`}>
            <DatePicker
                keyboard
                className={classes.datePicker}
                value={value}
                onChange={onChange}
                format={SLASH_DATE_FORMAT}
                mask={valueMask =>
                    valueMask ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : []
                }
                animateYearScrolling={false}
                {...rest}
            />
        </div>
    );
}

TextInlineDatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.any,
    inline: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

TextInlineDatePicker.defaultProps = {
    value: '',
    inline: false,
};

export default withStyles(styles)(TextInlineDatePicker);
