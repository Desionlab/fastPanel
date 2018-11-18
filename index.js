/**
 * index.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
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

/* Ready to start. */
handler
/* Init handler process. */
.init()
/* Startup success. */
.then(function () {
  /* Startup success message. */
  console.info('[√][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup success.');
})
/* Startup error. */
.catch(function (error) {
  /* Startup error message. */
  console.error('[×][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup error.', error);
});

/* End of file index.js */