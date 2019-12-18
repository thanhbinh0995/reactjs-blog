import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import LessIcon from '@material-ui/icons/ExpandLess';
import MoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import React, { Component } from 'react';
import { COLOR } from '../../constants';
import { WhitePrimaryCheckbox } from '../../common/components';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: '100%',
        minWidth: 300,
    },
    right: {
        float: 'right',
    },
    main: {
        marginBottom: 16,
    },
    toolbar: {
        minHeight: 80,
    },
    root: {
        borderTop: 'solid 1px #e0e0e0',
    },
    markdown: {
        overflow: 'auto',
        // transition: transitions.create('max-height', '800ms', '0ms', 'ease-in-out'),
        marginTop: 0,
        marginBottom: 0,
        overflowX: 'hidden',
    },
    markdownRetracted: {
        maxHeight: 0,
    },
    markdownExpand: {
        padding: '24px 32px 24px 32px',
        border: `1px solid ${COLOR.BROW_LIGHT}`,
        borderTop: 'none',
    },
    title: {
        color: COLOR.DEFAULT_TEXT,
        fontSize: 20,
        marginBottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
    },
    inputRoot: {
        color: 'white',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing.unit,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'flex',
        marginTop: 12,
    },
    appbar: {
        backgroundColor: `${COLOR.DEFAULT}!important`,
    },
    cssLabel: {
        color: COLOR.WHITE,
        '&$cssFocused': {
            color: COLOR.WHITE,
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderColor: COLOR.WHITE,
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: COLOR.WHITE,
        },
    },
    notchedOutline: {},
});

class ExpandBlockDiv extends Component {
    state = {
        expand: false,
    };

    handleClick = () => {
        this.setState(
            {
                expand: !this.state.expand,
            },
            () => {
                this.state.expand && this.props.onClick();
            }
        );
    };

    render() {
        const { children, classes } = this.props;
        const { expand } = this.state;

        return (
            <div className={classes.main}>
                <AppBar
                    position="static"
                    classes={{
                        root: classes.appbar,
                    }}
                >
                    <Toolbar
                        classes={{
                            root: classes.toolbar,
                        }}
                    >
                        <div className={classes.search}>
                            <TextField
                                label="Label"
                                variant="outlined"
                                InputLabelProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <WhitePrimaryCheckbox label="Required" />
                            <IconButton color="inherit">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                className={classes.right}
                                onClick={this.handleClick}
                            >
                                {expand ? <LessIcon /> : <MoreIcon />}
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <Collapse in={expand}>
                    <div
                        className={classNames(
                            classes.markdown,
                            expand ? classes.markdownExpand : classes.markdownRetracted
                        )}
                    >
                        {children}
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(ExpandBlockDiv);
