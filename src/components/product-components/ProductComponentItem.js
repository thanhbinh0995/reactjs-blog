import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ORIENTATION, TYPE } from './Constants';

const styles = () => ({
    itemValue: {
        backgroundSize: '100%',
        boxShadow: '0 0 1.25em 0 rgba(0,0,0,.2)',
        backgroundColor: '#fff',
        cursor: 'move',
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
    },
    itemNotValue: {
        boxShadow: 'none',
        cursor: 'auto',
    },
    itemContent: {
        textAlign: 'center',
        textTransform: 'uppercase',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        wordWrap: 'break-word',
    },
    arrow: {
        fontSize: 46,
    },
    viewBtn: {
        display: 'block',
        position: 'absolute',
        left: 0,
        top: -6,
        padding: '6px !important',
    },
});

class ProductComponentItem extends React.PureComponent {
    onViewProduct = () => {
        const { item, onOpenDialogUpdate } = this.props;
        if (item.itemType === TYPE.VALUE) {
            onOpenDialogUpdate(item);
        }
    };

    render() {
        const { item, classes } = this.props;
        let content = '';
        switch (item.itemType) {
            case TYPE.VALUE:
                content = <span className={classes.itemContent}>{`${item.name}`}</span>;
                break;
            case TYPE.EMPTY:
                content = <span className={classes.itemContent} />;
                break;
            case TYPE.ARROW:
                switch (item.orientation) {
                    case ORIENTATION.RIGHT:
                        content = <Icon className={classes.arrow}>arrow_forward</Icon>;
                        break;
                    case ORIENTATION.LEFT:
                        content = <Icon className={classes.arrow}>arrow_back</Icon>;
                        break;
                    case ORIENTATION.TOP:
                        content = <Icon className={classes.arrow}>arrow_downward</Icon>;
                        break;
                    case ORIENTATION.BOTTOM:
                        content = <Icon className={classes.arrow}>arrow_downward</Icon>;
                        break;
                    default:
                        content = <div className={classes.empty} />;
                }
                break;
            default:
                content = <span className={classes.itemContent}>{`${item.name} ${item.key}`}</span>;
        }

        return (
            <div
                className={classNames(
                    classes.itemValue,
                    item.itemType !== TYPE.VALUE && classes.itemNotValue
                )}
            >
                {item.itemType === TYPE.VALUE && (
                    <IconButton className={classes.viewBtn} onClick={this.onViewProduct}>
                        <Icon className={classes.viewIcon}>remove_red_eye</Icon>
                    </IconButton>
                )}
                {content}
            </div>
        );
    }
}

ProductComponentItem.propTypes = {
    onOpenDialogUpdate: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductComponentItem);
