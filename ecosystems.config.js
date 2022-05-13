module.exports = {
  apps: [
    {
      name: 'server-bsm',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'development',
      },
      exp_backoff_restart_delay: 100,
    },
  ],
};