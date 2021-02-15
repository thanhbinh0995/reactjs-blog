import App from 'next/app';
import { Provider } from 'react-redux';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import store from '../store/ssrStore';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store: storeProps } = this.props;

        return (
            <Provider store={storeProps}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
