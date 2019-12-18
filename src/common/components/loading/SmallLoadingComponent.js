import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COLOR } from '../../../constants';

const style = {
    align: 'center',
    color: COLOR.DEFAULT,
};

function SmallLoadingComponent(props) {
    return <CircularProgress size={24} thickness={2} style={style} />;
}

export default SmallLoadingComponent;
