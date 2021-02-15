import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

class App extends React.Component {
    state = {};

    render() {
        const { incrementCounter: increment, decrementCounter: decrement, counter } = this.props;

        return (
            <div>
                <button type="button" onClick={increment}>
                    Increment
                </button>
                <button type="button" onClick={decrement}>
                    Decrement
                </button>
                <h1>{counter}</h1>
                <div className="App">
                    <div className="menu-container">
                        <Link href="/Home">
                            <div className="menu">Home </div>
                        </Link>
                        <Link href="/About">
                            <div className="menu">About Us</div>
                        </Link>
                        <Link href="/ContactUs">
                            <div className="menu">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value,
});

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter,
};

App.propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
