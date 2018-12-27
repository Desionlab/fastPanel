/**
 * index.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

const { Extensions } = require('@fastpanel/core');

/**
 * Class Extension
 * 
 * Initialization of the extension.
 * 
 * @version 1.0.0
 */
class Extension extends Extensions.ExtensionDefines {

  /**
   * Registers a service provider.
   */
  async register () {
    
    this.events.on('app:watchdog', async (app) => {});

    /* --------------------------------------------------------------------- */

    this.events.once('cli:getCommands', async (cli) => {});

    this.events.on('app:getSetupSubscriptions', (list) => {});
    
    /* --------------------------------------------------------------------- */

    this.events.once('db:getModels', async (db) => {});

    this.events.on('db:getSeedsSubscriptions', (list) => {});

    /* --------------------------------------------------------------------- */

    this.events.once('web:getMiddleware', async (web) => {});

    this.events.once('web:getRoutes', async (web) => {});

    /* --------------------------------------------------------------------- */

    this.events.once('socket:getMiddleware', async (socket) => {});

    this.events.once('socket:getActions', async (socket) => {});
  }
  
  /**
   * Startup a service provider.
   */
  async startup () {}

}

module.exports.Extension = Extension;

/* End of file index.js */