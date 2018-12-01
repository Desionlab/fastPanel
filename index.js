/**
 * index.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2014 - 2018 Desionlab
 * @license   MIT
 */

/* Get node modules. */
const fs = require('fs');

/* Registered alias. */
require('module-alias/register');

/* Get core components. */
const { Cluster, BOOT_FILE } = require('fastpanel-core');

/* Create DI container instant. */
const container = new Cluster.FactoryDefault();

/* Create handler instant. */
const handler = new Cluster.Handler(container);

/* Load extensions. */
if (fs.existsSync(BOOT_FILE)) {
  let boot = JSON.parse(fs.readFileSync(BOOT_FILE));
  for (const key in boot) {
    if (boot.hasOwnProperty(key)) {
      const extension = boot[key];
      try {
        handler.addExtension(require(key));
      } catch (error) {
        console.error(error);
      }
    }
  }
}

/* Register app as extension. */
handler.addExtension(require('@App/'));

/* Ready to start. */
handler
/* Init handler process. */
.init()
/* Startup success. */
.then(function () {
  /* Startup success message. */
  handler.logger.info('[√][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup success.');
})
/* Startup error. */
.catch(function (error) {
  /* Startup error message. */
  console.error('[×][' + (new Date()).toISOString() + ']' + '[' + process.ppid + '][' + process.pid + '] Startup error.', error);
});

/* End of file index.js */