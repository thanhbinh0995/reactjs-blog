import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import RenderReduxTextArea from './RenderReduxTextArea';

const styles = () => ({});

function ReduxTextArea(props) {
    const { classes, ...rest } = props;
    return <Field component={RenderReduxTextArea} {...rest} />;
}

ReduxTextArea.propTypes = {
    classes: PropTypes.object.isRequired,
};

ReduxTextArea.defaultProps = {};

export default withStyles(styles)(ReduxTextArea);
