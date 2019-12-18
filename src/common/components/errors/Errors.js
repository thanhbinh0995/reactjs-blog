import { withStyles } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { COLOR } from '../../../constants';

const styles = {
    labelError: {},
    errors: {
        overflowY: 'scroll',
        height: 200,
    },
    border: {
        border: '1px solid #ccc',
    },
    errorRow: {
        width: '30%',
        display: 'inline-block',
        paddingLeft: 15,
        paddingTop: 12,
    },
    errorDescription: {
        width: '70%',
        display: 'inline-block',
        paddingTop: 5,
        wordBreak: 'break-word',
    },
    errorRowItem: {
        width: '30%',
        display: 'inline-block',
        position: 'relative',
        left: 15,
    },
    errorDescriptionItem: {
        width: '70%',
        display: 'inline-block',
        position: 'relative',
        wordBreak: 'break-word',
    },
    errorText: {},
    errorTextBody: {
        color: COLOR.DEFAULT,
    },
    noError: {
        width: '100%',
        textAlign: 'center',
        paddingTop: 80,
    },
};

function Errors(props) {
    const { classes, label, errors, ...rest } = props;

    return (
        <div {...rest}>
            <h4 className={classes.labelError}>{label}</h4>
            <div className={classes.border}>
                <div className={classes.errorRow}>
                    <p className={classes.errorText}>Row</p>
                </div>
                <div className={classes.errorDescription}>
                    <p className={classes.errorText}>Description</p>
                </div>
            </div>
            <div className={`${classes.errors} ${classes.border}`}>
                {errors.length > 0 ? (
                    errors.map((error, index) => (
                        <Fragment key={index}>
                            <div className={classes.errorRowItem}>
                                <p className={classes.errorText}>{error.row}</p>
                            </div>
                            <div className={classes.errorDescriptionItem}>
                                <p className={classes.errorTextBody}>{error.description}</p>
                            </div>
                        </Fragment>
                    ))
                ) : (
                    <div className={classes.noError}>
                        <p>No Error</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default withStyles(styles)(Errors);
