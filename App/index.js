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
  async register () {}
  
  /**
   * Startup a service provider.
   */
  async startup () {}

}

module.exports.Extension = Extension;

/* End of file index.js */