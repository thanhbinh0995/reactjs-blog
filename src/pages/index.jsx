import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';
import { decrementCounter, incrementCounter, loadArticles } from '../action-creators';

class App extends React.Component {
    state = {};

    componentDidMount() {
        const { loadArticles: loadArticlesProps } = this.props;
        loadArticlesProps();
    }

    render() {
        const {
            incrementCounter: increment,
            decrementCounter: decrement,
            counter,
            articles,
        } = this.props;
        console.log('articles', articles);

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
    ...state.articles,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            incrementCounter,
            decrementCounter,
            loadArticles,
        },
        dispatch
    );

App.propTypes = {
    incrementCounter: PropTypes.func.isRequired,
    decrementCounter: PropTypes.func.isRequired,
    loadArticles: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    articles: PropTypes.array,
};

App.defaultProps = {
    articles: [],
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
