import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COLOR } from '../../../constants';
import ContentLoader from 'react-content-loader';

const style = {
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
    color: COLOR.DEFAULT,
};

function LoadingComponent(props) {
    return <ContentLoader />;
    // return <CircularProgress size={40} thickness={3} style={style} {...props} />;
}

export default LoadingComponent;
