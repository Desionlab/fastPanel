/**
 * cli.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

/* Registered alias. */
require('module-alias/register');

/* Get core components. */
const { Cli } = require('fastpanel-core');

/* Create DI container instant. */
const container = new Cli.FactoryDefault();

/* Create handler instant. */
const handler = new Cli.Handler(container);

/* Register Redis extension. */
handler.addExtension(require('fastpanel-extension-redis'));

/* Register MongoDB extension. */
handler.addExtension(require('fastpanel-extension-mongodb'));

/* Register HTTP extension. */
handler.addExtension(require('fastpanel-extension-httpx'));

/* Register Socket.io extension. */
handler.addExtension(require('fastpanel-extension-socket.io'));

/* Register app as extension. */
handler.addExtension(require('@App/'));

/* Ready to start. */
handler
/* Init handler process. */
.init()
/* Startup success. */
.then(function () {
  /* Startup success message. */
  handler.cli.log('Cli handler startup success.');
})
/* Startup error. */
.catch(function (error) {
  /* Startup error message. */
  console.error('Cli handler startup error:', error);
});

/* End of file cli.js */