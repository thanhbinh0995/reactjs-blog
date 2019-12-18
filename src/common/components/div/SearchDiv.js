import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    labelSearch: {
        fontSize: 20,
        width: 150,
        display: 'inline-block !important',
    },
    paddingField: {
        paddingRight: 8,
        fontSize: 20,
        display: 'inline-block !important',
    },
};

function SearchDiv(props) {
    const { classes, label, field, className, ...rest } = props;

    return (
        <div className={className} {...rest}>
            <div className={classes.labelSearch}>{label}</div>
            <div className={classes.paddingField}>:</div>
            {field}
        </div>
    );
}

export default withStyles(styles)(SearchDiv);
