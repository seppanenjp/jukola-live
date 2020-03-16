module.exports = {
    apps : [{
        name: 'API',
        script: 'dist/index.js',
        autorestart: true,
        watch: false,
        instances : "max",
        exec_mode : "cluster",
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
