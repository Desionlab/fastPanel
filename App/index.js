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
    this.events.once('cli:getCommands', (cli) => {
      console.log('cli:getCommands');
    });
    
    this.events.once('db:getModels', (db) => {
      console.log('db:getModels');
    });
    
    this.events.once('web:getMiddleware', (web) => {
      console.log('web:getMiddleware');
    });
    
    this.events.once('web:getRoutes', (web) => {
      console.log('web:getRoutes');
    });
    
    this.events.once('socket:getMiddleware', (socket) => {
      console.log('socket:getMiddleware');
    });

    this.events.once('socket:getActions', (socket) => {
      console.log('socket:getActions');
    });
  }
  
  /**
   * Startup a service provider.
   */
  async startup () {}

}

module.exports.Extension = Extension;

/* End of file index.js */