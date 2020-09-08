let cahcheData = 'TRELLO';

this.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(cahcheData).then((data) => {
        data.addAll([
          'AppStateContect',
          'index.html',
          '/',
          '/static/js/bundle.js',
          '/static/js/0.chunk.js',
          '/static/js/main.chunk.js',
          '/manifest.json',
          'static / media / stopwatch.9fb404c9.png',
        ])
      }).catch((err) => {
        console.log('err', err)
      })
    )
  })