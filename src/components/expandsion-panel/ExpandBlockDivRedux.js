import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import LessIcon from '@material-ui/icons/ExpandLess';
import MoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { COLOR } from '../../constants';

const styles = theme => ({
    right: {
        float: 'right',
    },
    main: {
        marginBottom: 16,
    },
    toolbar: {
        minHeight: 60,
        paddingLeft: 6,
        paddingRight: 0,
        borderRight: '1px solid #e0e0e0',
        boxShadow: 'none',
    },
    markdown: {
        marginTop: 0,
        marginBottom: 0,
        overflow: 'hidden',
    },
    markdownRetracted: {
        maxHeight: 0,
    },
    markdownExpand: {
        padding: '4px 0 4px 24px',
        border: `1px solid ${COLOR.BROW_LIGHT}`,
        borderTop: 'none',
    },
    leftBar: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        width: 'calc(100% - 60px)',
    },
    rightBar: {
        marginRight: 6,
    },
    appbar: {
        backgroundColor: `${COLOR.DEFAULT}!important`,
    },
});

class ExpandBlockDivRedux extends Component {
    state = {
        expand: false,
    };

    handleClick = () => {
        this.setState(state => {
            if (!state.expand) {
                const { onClick } = this.props;
                onClick();
            }
            return {
                expand: !state.expand,
            };
        });
    };

    render() {
        const { children, leftBar, classes } = this.props;
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
                        <Grid container direction="row" justify="space-between" spacing={0}>
                            <Grid item className={classes.leftBar}>
                                {leftBar}
                            </Grid>
                            <Grid item className={classes.rightBar}>
                                <IconButton
                                    color="inherit"
                                    className={classes.right}
                                    onClick={this.handleClick}
                                >
                                    {expand ? <LessIcon /> : <MoreIcon />}
                                </IconButton>
                            </Grid>
                        </Grid>
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

ExpandBlockDivRedux.propTypes = {
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    leftBar: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
};

ExpandBlockDivRedux.defaultProps = {
    onClick() {},
};

export default withStyles(styles)(ExpandBlockDivRedux);
