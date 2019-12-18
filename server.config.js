module.exports = {
    apps: [
        {
            name: 'Node React Local',
            script: './bin/www',
            instances: 0,
            exec_mode: 'cluster',
            watch: true,
            env: {
                NODE_ENV: 'production',
                PORT: '9696',
            },
        },
    ],
};
