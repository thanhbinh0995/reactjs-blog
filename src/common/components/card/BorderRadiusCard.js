import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        borderRadius: 22,
        padding: 16,
    },
};

function BorderRadiusCard(props) {
    const { classes } = props;

    return <Card className={classes.card}>{props.children}</Card>;
}

export default withStyles(styles)(BorderRadiusCard);
