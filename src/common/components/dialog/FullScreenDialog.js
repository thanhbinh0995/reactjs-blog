import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';
import { COLOR } from '../../../constants';

const styles = {
    appBar: {
        position: 'relative',
        marginBottom: 24,
    },
    iconClose: {
        color: COLOR.DEFAULT_TEXT,
    },
    title: {
        color: COLOR.DEFAULT_TEXT,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        fontWeight: 400,
        height: 64,
        lineHeight: '64px',
        flex: 1,
    },
    toolbar: {
        paddingLeft: 12,
        paddingRight: 12,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

function FullScreenDialog(props) {
    const { classes, open, title, onClose, children, ...rest } = props;

    return (
        <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition} {...rest}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        onClick={onClose}
                        aria-label="Close"
                        className={classes.iconClose}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography color="inherit" className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            {children}
        </Dialog>
    );
}

export default withStyles(styles)(FullScreenDialog);
