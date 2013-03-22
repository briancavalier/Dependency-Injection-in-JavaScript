(function() {

  curl.config({
    packages: {
      scripts:  { location: 'scripts',  config: { moduleLoader: 'curl/loader/cjsm11' } },
      curl: { location: 'lib/curl/src/curl' },
      wire: { location: 'lib/wire', main: 'wire' },
      when: { location: 'lib/when', main: 'when' },
      meld: { location: 'lib/meld', main: 'meld' },
      poly: { location: 'lib/poly', main: 'poly' }
    },
    preloads: ['poly/all']
  });

  curl(['wire!scripts/app']);

}());