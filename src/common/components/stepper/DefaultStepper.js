import React, { Component } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    stepButton: {
        fontSize: 16,
        textTransform: 'capitalize',
    },
    text: {
        fontSize: 14,
        margin: 0,
    },
    iconContainer: {
        color: '#ccc',
    },
};

class DefaultStepper extends Component {
    handleStep = step => () => {
        this.props.changeStep(step);
    };

    render() {
        const { classes, steps, activeStep } = this.props;

        return (
            <Stepper nonLinear activeStep={activeStep}>
                {steps.map((step, index) => {
                    const props = {};
                    const labelProps = {};
                    labelProps.optional = <Typography>{step.optional}</Typography>;
                    return (
                        <Step key={index} {...props}>
                            <StepButton
                                className={classes.stepButton}
                                onClick={this.handleStep(index)}
                            >
                                <Typography className={classes.text}>{step.value}</Typography>
                            </StepButton>
                        </Step>
                    );
                })}
            </Stepper>
        );
    }
}
DefaultStepper.propTypes = {
    steps: PropTypes.array,
    activeStep: PropTypes.number,
};

export default withStyles(styles)(DefaultStepper);
