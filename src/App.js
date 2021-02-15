/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { hot } from 'react-hot-loader/root';
import Nav from './_pages/common/Nav';
import Footer from './_pages/common/Footer';
import Routes from './routes';

class AppPage extends Component {
    state = {};

    render() {
        return (
            <div className="app-container">
                <Nav />
                <main>
                    <Routes />
                </main>
                <Footer />
            </div>
        );
    }
}

AppPage.propTypes = {};

AppPage.defaultProps = {};

export default hot(withRouter(withNamespaces('translations')(AppPage)));
