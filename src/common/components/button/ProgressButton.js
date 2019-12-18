import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { COLOR } from '../../../constants';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        color: 'white !important',
        backgroundColor: COLOR.DEFAULT,
        outline: 'none',
        '&:hover': {
            backgroundColor: COLOR.DEFAULT,
        },
        fontSize: 14,
    },
    progress: {
        position: 'absolute',
    },
});

function ProgressButton(props) {
    const { classes, progress = true, label, progressColor = COLOR.DEFAULT_TEXT, ...rest } = props;
    let progressIcon = '';
    let labelButton = label;
    const styleProgress = {
        color: progressColor,
    };
    if (progress && rest.disabled) {
        progressIcon = (
            <CircularProgress
                size={28}
                thickness={6}
                style={styleProgress}
                className={classes.progress}
            />
        );
        labelButton = '';
    }

    return (
        <Button
            classes={{
                root: classes.root,
            }}
            variant="contained"
            color="primary"
            {...rest}
        >
            {labelButton}
            {progressIcon}
        </Button>
    );
}

const propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    progress: PropTypes.bool,
    progressColor: PropTypes.string,
};

const defaultProps = {
    progress: true,
    progressColor: COLOR.DEFAULT_TEXT,
};

ProgressButton.propTypes = propTypes;
ProgressButton.defaultProps = defaultProps;

export default withStyles(styles)(ProgressButton);
