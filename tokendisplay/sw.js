importScripts('js/sw-toolbox.js');

toolbox.precache([
  
  'js/BluetoothTerminal.js',
  'js/companion.js',
  'js/main.js',
  'desktop.html',
]);

toolbox.router.default = toolbox.networkFirst;
toolbox.options.networkTimeoutSeconds = 5;

toolbox.router.get('icons/*', toolbox.fastest);