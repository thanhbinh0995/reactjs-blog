import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withRedux from 'next-redux-wrapper';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';
import store from '../store/ssrStore';
import i18n from '../config/i18n';
import '../../public/css/font-awesome/css/font-awesome.min.css';
import '../../public/css/bootstrap.css';
import '../../public/css/clean-blog.min.css';
import '../../public/css/style.css';
import '../../public/css/index.scss';

const theme = createMuiTheme({
    color: {
        white: '#ffffff',
        red: '#CB0021',
        brow: '#e0e0e0',
        black: '#000',
        newColor: '#4A4A4A',
        success: '#48C445',
        check: '#2D7FFB',
        checkCancel: '#d9534f',
        disabled: 'rgba(0, 0, 0, 0.26)',
        menuText: 'rgba(0, 0, 0, 0.87)',
    },
    radius: '8px',
    palette: {
        primary: {
            light: '#004d7f',
            main: '#004d7f',
            dark: '#004d7f',
            contrastText: '#004d7f',
        },
        danger: {
            contrastText: '#ffffff',
            main: '#ED4740',
            light: '#FEF6F6',
            dark: '#BF0E08',
        },
    },
    text: {
        main: '#ffffff',
    },
    background: {
        primary: {
            main: '#004d7f',
        },
        secondary: {
            main: '#d2edff',
        },
        tertiary: {
            main: '#85ceff',
        },
    },
    typography: {
        fontSize: 14,
        useNextVariants: true,
    },
    spacing: {
        unit: 12,
    },
    overrides: {
        MuiSnackbarContent: {
            root: {
                justifyContent: 'center',
            },
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#004d7f',
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                fontSize: 16,
                MuiTypography: {
                    fontSize: 16,
                },
            },
            dayLabel: {
                fontSize: 16,
            },
        },
        MuiPickersDay: {
            day: {
                fontSize: 14,
            },
            isSelected: {
                fontSize: 16,
                backgroundColor: '#004d7f',
                '&:hover': {
                    backgroundColor: '#004d7f',
                },
            },
            current: {
                fontSize: 16,
                color: '#004d7f',
            },
        },
        MuiPickerDTTabs: {
            tabs: {
                backgroundColor: '#004d7f',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                fontSize: 16,
                color: '#004d7f',
            },
        },
        MuiInput: {
            root: {
                fontSize: 16,
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: 14,
            },
        },
        MuiPickersClockNumber: {
            clockNumber: {
                top: -6,
            },
        },
    },
});

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    render() {
        const { Component, pageProps, store: storeProps } = this.props;

        return (
            <Provider store={storeProps}>
                <MuiThemeProvider theme={theme}>
                    <DragDropContextProvider backend={HTML5Backend}>
                        <I18nextProvider i18n={i18n}>
                            <Component {...pageProps} />
                        </I18nextProvider>
                    </DragDropContextProvider>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
