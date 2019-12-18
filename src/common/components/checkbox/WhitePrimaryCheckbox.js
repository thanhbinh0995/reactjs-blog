import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { COLOR } from '../../../constants';

const styles = () => ({
    labelField: {
        margin: 0,
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: -8,
        left: -4,
        color: COLOR.WHITE,
    },
    root: {
        color: `${COLOR.WHITE}!important`,
    },
});

function WhitePrimaryCheckbox(props) {
    const { label, classes, ...rest } = props;
    return (
        <FormControlLabel
            control={
                <Checkbox
                    color="primary"
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                    {...rest}
                />
            }
            label={label}
            classes={{
                root: classes.labelField,
                label: classes.label,
            }}
        />
    );
}

WhitePrimaryCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
};

export default withStyles(styles)(WhitePrimaryCheckbox);
