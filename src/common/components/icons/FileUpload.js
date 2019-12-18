import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { withStyles } from '@material-ui/core/styles';
import { COLOR } from '../../../constants';

const styles = {
    icon: {
        color: COLOR.DEFAULT_TEXT,
    },
};

function FileUpload(props) {
    const { classes } = props;

    return (
        <SvgIcon {...props} className={classes.icon}>
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </SvgIcon>
    );
}

export default withStyles(styles)(FileUpload);
