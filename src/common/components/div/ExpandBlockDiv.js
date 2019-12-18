import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const styles = {
    root: {
        width: '100%',
    },
};

function ExpansionPanels(props) {
    const { expanded, onChange, children, classes } = props;

    return (
        <div className={classes.root}>
            <ExpansionPanel expanded={expanded} onChange={onChange}>
                {children}
            </ExpansionPanel>
        </div>
    );
}

ExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};

export default withStyles(styles)(ExpansionPanels);
