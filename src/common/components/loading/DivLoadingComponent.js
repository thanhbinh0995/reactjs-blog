import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COLOR } from '../../../constants';

const style = {
    main: {
        marginTop: '40vh',
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
    },
    progress: {
        color: COLOR.DEFAULT,
    },
};

function LoadingComponent(props) {
    return (
        <div style={style.main} {...props}>
            <CircularProgress size={40} thickness={3} style={style.progress} />
        </div>
    );
}

export default LoadingComponent;
