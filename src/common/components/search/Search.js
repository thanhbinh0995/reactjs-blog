import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';
import classNames from 'classnames';

const styles = {
    root: {
        height: 48,
        display: 'flex',
        justifyContent: 'space-between',
    },
    iconButton: {
        opacity: 0.54,
        transform: 'scale(1, 1)',
        transition: 'transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
    },
    iconButtonDisabled: {
        opacity: 0.38,
    },
    icon: {
        opacity: 0.54,
        transition: 'opacity 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        color: grey[500],
    },
    input: {
        width: '100%',
    },
    searchContainer: {
        margin: 'auto 16px',
        width: 'calc(100% - 48px - 32px)',
    },
};

class Search extends Component {
    onKeyUp = e => {
        const { onClick, onClear } = this.props;
        if (e.charCode === 13 || e.key === 'Enter') {
            onClick();
        } else if (e.charCode === 27 || e.key === 'Escape') {
            onClear();
        }
    };

    render() {
        const {
            inProgress,
            keywordSearch,
            disabled = false,
            onChange,
            onClick,
            onClear,
            classes,
            rootClassName,
            ...rest
        } = this.props;
        const isShow = keywordSearch !== '';
        return (
            <Paper className={classNames(classes.root, rootClassName)}>
                <div className={classes.searchContainer}>
                    <Input
                        value={keywordSearch}
                        onChange={onChange}
                        onKeyUp={this.onKeyUp}
                        className={classes.input}
                        disabled={disabled}
                        disableUnderline
                        fullWidth
                        {...rest}
                    />
                </div>
                {isShow ? (
                    <IconButton
                        onClick={onClear}
                        classes={{
                            root: classes.iconButton,
                            disabled: classes.iconButtonDisabled,
                        }}
                        disabled={disabled}
                    >
                        <ClearIcon className={classes.icon} />
                    </IconButton>
                ) : (
                    <IconButton
                        onClick={onClick}
                        classes={{
                            root: classes.iconButton,
                            disabled: classes.iconButtonDisabled,
                        }}
                        disabled={disabled}
                    >
                        <SearchIcon className={classes.icon} />
                    </IconButton>
                )}
            </Paper>
        );
    }
}

const propTypes = {
    onClear: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    inProgress: PropTypes.bool,
    keywordSearch: PropTypes.string,
    count: PropTypes.number,
    classes: PropTypes.object.isRequired,
};

const defaultProps = {
    inProgress: false,
    keywordSearch: '',
    count: 0,
};

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default withStyles(styles)(Search);
