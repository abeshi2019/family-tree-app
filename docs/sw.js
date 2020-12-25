// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    '.',
    './index.css',
    './indexPrint.css',
    'lib/backbone-min.js',
    'lib/jquery-1.9.1.js',
    'lib/json2.js',
    'lib/raphael-min.js',
    'lib/underscore.js',
    //'src/index.js',
    //'src/indexCopy.js',
    //'src/indexCreateSymbol.js',
    //'src/indexCreateTool.js',
    //'src/indexDrag.js',
    //'src/indexOther.js',
    //'src/indexPathString.js',
    //'src/indexSub.js',
    //'src/indexWrapPaper.js',
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});



