/**
 * index.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

/* Registered alias. */
require('module-alias/register');

/* Get core components. */
const { Cluster } = require('fastpanel-core');

/* Create DI container instant. */
const container = new Cluster.FactoryDefault();

/* Create handler instant. */
const handler = new Cluster.Handler(container);

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
  console.log(handler);
  /* Startup success message. */
  console.info('[√][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup success.');
})
/* Startup error. */
.catch(function (error) {
  /* Startup error message. */
  console.error('[×][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup error.', error);
});

/* End of file index.js */