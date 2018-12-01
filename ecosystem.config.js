/**
 * ecosystem.config.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    /**
     * Cluster worker.
     */
    {
      name   : 'fastpanel-worker',
      script : 'index.js',
      env : {
        NODE_ENV      : 'develop',
        HOST          : '0.0.0.0',
        PORT          : 3000,
        APP_PATH      : 'App',
        CONFIG_PATH   : 'App/Config',
        LOGGER_PATH   : 'App/Logs'
      },
      env_staging : {
        NODE_ENV     : 'staging',
        HOST          : '0.0.0.0',
        PORT          : 3000,
        APP_PATH      : 'App',
        CONFIG_PATH   : 'App/Config',
        LOGGER_PATH   : 'App/Logs'
      },
      env_production : {
        NODE_ENV      : 'production',
        HOST          : '0.0.0.0',
        PORT          : 80,
        APP_PATH      : 'App',
        CONFIG_PATH   : 'App/Config',
        LOGGER_PATH   : 'App/Logs'
      },
      pmx         : false,
      exec_mode   : 'cluster',
      instances   : 2
    }
  ]
};

/* End of file ecosystem.config.js */