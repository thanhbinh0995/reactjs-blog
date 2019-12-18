import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import { COLOR } from '../../../constants';

const style = {
    marginTop: 15,
    textAlign: 'center',
    color: COLOR.BLUE_LIGHT,
};

function ErrorComponent(props) {
    return (
        <div style={style}>
            <p>{<InfoIcon color="inherit" />}</p>
            <p>{props.errors}</p>
        </div>
    );
}

export default ErrorComponent;
