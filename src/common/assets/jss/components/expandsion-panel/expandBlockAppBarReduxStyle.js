import { defaultColor, browLightColor } from '../../theme';

const expandBlockAppBarReduxStyle = () => ({
    right: {
        marginLeft: 0,
        marginRight: 6,
    },
    main: {
        marginBottom: 16,
    },
    toolbar: {
        minHeight: 60,
        paddingLeft: 6,
        paddingRight: 0,
    },
    markdown: {
        overflow: 'auto',
        marginTop: 0,
        marginBottom: 0,
        overflowX: 'hidden',
    },
    markdownRetracted: {
        maxHeight: 0,
    },
    markdownExpand: {
        padding: '4px 0 4px 24px',
        border: `1px solid ${browLightColor}`,
        borderTop: 'none',
    },
    appbar: {
        backgroundColor: `${defaultColor}!important`,
    },
    leftBar: {
        marginRight: 6,
        width: 'calc(100% - 156px)',
    },
});

export default expandBlockAppBarReduxStyle;
