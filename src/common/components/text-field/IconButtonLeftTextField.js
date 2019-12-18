import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { COLOR } from '../../../constants';

const style = {
    main: {
        position: 'relative',
        display: 'inline-block',
        marginRight: 16,
    },
    textField: {
        paddingRight: 24,
        width: 320,
    },
    iconButton: {
        position: 'absolute',
        right: 0,
        top: 10,
        width: 24,
        height: 24,
        padding: 0,
    },
    underlineFocusStyle: {
        borderColor: COLOR.DEFAULT,
    },
};

function IconButtonLeftTextField(props) {
    const { showIcon, onClickIcon, icon, ...rest } = props;

    return (
        <div style={style.main}>
            <TextField
                style={style.textField}
                underlinefocusstyle={style.underlineFocusStyle}
                {...rest}
            />
            {showIcon && (
                <IconButton
                    style={style.iconButton}
                    onClick={onClickIcon}
                    iconStyle={{ width: 14 }}
                >
                    {icon}
                </IconButton>
            )}
        </div>
    );
}

IconButtonLeftTextField.propTypes = {
    onClickIcon: PropTypes.func,
    showIcon: PropTypes.bool,
};

export default IconButtonLeftTextField;
