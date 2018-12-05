/**
 * cli.js
 * 
 * @author    Desionlab <fenixphp@gmail.com>
 * @copyright 2018 Desionlab
 * @license   MIT
 */

/* Get node modules. */
const fs = require('fs');

/* Registered alias. */
require('module-alias/register');

/* Get core components. */
const { Cli, BOOT_FILE } = require('@fastpanel/core');

/* Create DI container instant. */
const container = new Cli.FactoryDefault();

/* Create handler instant. */
const handler = new Cli.Handler(container);

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
  handler.cli.log('Cli handler startup success.');
})
/* Startup error. */
.catch(function (error) {
  /* Startup error message. */
  console.error('Cli handler startup error:', error);
});

/* End of file cli.js */