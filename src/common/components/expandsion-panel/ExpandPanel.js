import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { COLOR } from '../../../constants';

const styles = () => ({
    summary: {
        backgroundColor: COLOR.DEFAULT,
    },
    icon: {
        color: COLOR.WHITE,
    },
    heading: {
        color: COLOR.WHITE,
    },
    detail: {
        padding: '8px 16px',
    },
});

function ExpandPanel(props) {
    const { classes, children, title } = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className={classes.summary}
                expandIcon={<ExpandMoreIcon className={classes.icon} />}
            >
                <Typography className={classes.heading}>{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detail}>{children}</ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

ExpandPanel.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    title: PropTypes.string,
};

ExpandPanel.defaultProps = {
    children: '',
    title: '',
};

export default withStyles(styles)(ExpandPanel);
