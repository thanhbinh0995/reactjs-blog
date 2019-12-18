import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { COLOR } from '../../../constants';

const styles = () => ({
    root: {
        '&$checked': {
            color: COLOR.DEFAULT,
        },
    },
    checked: {},
});

function PrimaryRadio(props) {
    const { classes, ...rest } = props;
    return (
        <Radio
            classes={{
                root: classes.root,
                checked: classes.checked,
            }}
            {...rest}
        />
    );
}

PrimaryRadio.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimaryRadio);
