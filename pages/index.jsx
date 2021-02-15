import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

class App extends React.Component {
    static getInitialProps({ store }) {}

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <h1>{this.props.counter}</h1>
                <div className="App">
                    {/* <Nav /> */}
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
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
