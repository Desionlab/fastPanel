/**
 * index.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

const { Extensions } = require('fastpanel-core');

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
    this.events.once('app:setup', (app) => {});
    this.events.once('cli:getCommands', (cli) => {});
    /* --------------------------------------------------------------------- */
    this.events.once('db:getModels', (db) => {});
    this.events.on('db:getSeedsTasks', (db, list) => {});
    /* --------------------------------------------------------------------- */
    this.events.once('web:getMiddleware', (web) => {});
    this.events.once('web:getRoutes', (web) => {});
    /* --------------------------------------------------------------------- */
    this.events.once('socket:getMiddleware', (socket) => {});
    this.events.once('socket:getActions', (socket) => {});
  }
  
  /**
   * Startup a service provider.
   */
  async startup () {}

}

module.exports.Extension = Extension;

/* End of file index.js */