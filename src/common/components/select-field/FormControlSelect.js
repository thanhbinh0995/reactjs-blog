import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PremiumSelectField from './PremiumSelectField';

const styles = {
    inputLabel: {
        fontSize: 15,
    },
};

class FormControlSelect extends Component {
    render() {
        const { classes, labelDefault, ...props } = this.props;
        return (
            <FormControl>
                <InputLabel className={classes.inputLabel}>{labelDefault}</InputLabel>
                <PremiumSelectField {...props} />
            </FormControl>
        );
    }
}

FormControlSelect.propTypes = {
    labelDefault: PropTypes.string,
};

export default withStyles(styles)(FormControlSelect);
