export default ({ palette, color }) => ({
    addBtn: {
        display: 'inline-flex',
        backgroundColor: color.white,
        '&:hover': {
            backgroundColor: color.white
        },
        marginTop: 0,
        marginBottom: 0,
        color: `${palette.primary.main} !important`,
        fontWeight: 'bold',
        float: 'right'
    },
    grid: {
        marginBottom: 0
    },
    filterBtn: {
        background: palette.primary.main,
        '&:hover': {
            backgroundColor: palette.primary.main
        },
        marginLeft: 8,
        marginRight: 5,
        boxShadow: 'none',
        minHeight: 42,
        paddingTop: 9
    },
    filterText: {
        color: color.white,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 700,
        display: 'inline-flex'
    },
    iconFilter: {
        color: color.white,
        marginLeft: 5,
        fontSize: 20
    },
    hide: {
        display: 'none'
    },
    right: {
        textAlign: 'right'
    },
    titleContainer: {
        background: palette.primary.main,
        marginBottom: 0,
        padding: 8,
        borderRadius: '8px 8px 0 0px'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex'
    },
    filterBg: {
        background: palette.primary.main,
        borderRadius: 16,
        minWidth: 240
    },
    filterTitle: {
        textAlign: 'center',
        marginBottom: 16,
        background: '#004d7f',
        borderRadius: '16px 16px 0 0',
        padding: '8px 0'
    },
    tableContainer: {
        overflow: 'auto',
        flexGrow: 1,
        flexDirection: 'column',
        maxHeight: '100%',
        display: 'flex'
    },
    filterContainer: {
        height: 'calc(100vh - 120px)',
        display: 'flex',
        overflow: 'auto',
        flexGrow: 1,
        maxHeight: '100%',
        flexDirection: 'column'
    },
    isCollapsed: {
        minWidth: 120,
        width: 120
    },
    filterButton: {
        outline: 'none',
        padding: '8px 32px',
        fontSize: 14,
        marginLeft: 8,
        minHeight: 42,
        float: 'right',
        display: 'inline-flex',
        color: color.white,
        border: `1px solid ${color.white}`
    }
});
