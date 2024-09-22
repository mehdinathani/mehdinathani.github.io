'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "59db06f93bea609719dc5f7e1853fbc4",
"assets/AssetManifest.bin.json": "be754d9d4d0df4e88a1e4c80f4f25a51",
"assets/AssetManifest.json": "139ae526fc068928e214328c591a62e7",
"assets/assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/Manrope-VariableFont_wght.ttf": "cf98436d65175c509540014c3189fbc6",
"assets/assets/images/bag.svg": "749de8a823221a4153b8ce21dc226387",
"assets/assets/images/fish/crab.png": "3bb12dde22a5efc0fce208575cc55049",
"assets/assets/images/fish/crab2.png": "fde8b8fcf45630e2ea63125368117bf7",
"assets/assets/images/fish/queueFish.png": "a98622eea44689f3bf6416a8a255e456",
"assets/assets/images/fish/queueFish2.png": "1d9642293580dd35a3a94264dae33308",
"assets/assets/images/fish/slicedFish.png": "db228b05f5b43edabbd99bc22cc920f2",
"assets/assets/images/fish/slicedFish2.png": "e8575a84266db3185a2f2cead278b848",
"assets/assets/images/fish/stackFish.png": "8e9fee6625f968b1bbbc8a3e5a6b8207",
"assets/assets/images/fish/stackFish2.png": "396530f50f92030412511f98afb9f200",
"assets/assets/images/fruit/apple.png": "8d7d68522817eeca2a3f4b9e32d725ff",
"assets/assets/images/fruit/apple2.png": "4fb736827faf27957148f5c42df68916",
"assets/assets/images/fruit/lemon.png": "796ce5ec8751df16f24305db1e0eefad",
"assets/assets/images/fruit/lemon1.png": "89b8937fef6d48a8c0981c900efaeb15",
"assets/assets/images/fruit/lemon2.png": "da7f0b28ab21e28d86e89ad55e65d53d",
"assets/assets/images/fruit/strawberry.png": "f5cdbe726c298e4453cce3bddf0b5acd",
"assets/assets/images/fruit/strawberry2.png": "198206e13fda0c77269210a59c718148",
"assets/assets/images/home.svg": "4b04a0338dc04ddce8808ff234fc4b9c",
"assets/assets/images/icons/Cart.svg": "7ddea17455f8b97963ec1b1b9f1eebbe",
"assets/assets/images/icons/categoryChicken.svg": "c3db2b5ae407a38636ecee5571371244",
"assets/assets/images/icons/categoryCow.svg": "13c721238aaa9abee467a0858a7ffbcd",
"assets/assets/images/icons/categoryFish.svg": "15db9dba540aecf7806a3569ecbea364",
"assets/assets/images/icons/categoryFruit.svg": "c70b2796cbbb58aaa5767f88223d3c22",
"assets/assets/images/icons/categoryVegetable.svg": "ec6a14edbd5e121b0681488610f1af3d",
"assets/assets/images/icons/Emoji.svg": "4b04a0338dc04ddce8808ff234fc4b9c",
"assets/assets/images/icons/freeShipping.svg": "f8eb448f6c2175cad6cd87aecec1949b",
"assets/assets/images/icons/Search.svg": "0c8ecb2eb606ce8be5e067697496a100",
"assets/assets/images/icons/shoppingBag.svg": "10100b9ef0e1817cac4eeaa3b0652f9d",
"assets/assets/images/icons/Vector368.svg": "83ff06a555b31b2aee43ecf8c60d2b7a",
"assets/assets/images/Image%2520Icon.svg": "81ce44fd3a10d0bd7d05d7b587bdd8a2",
"assets/assets/images/Line%25201.svg": "e5a6b9cbcc47eb3536379c3a5e368d25",
"assets/assets/images/Line%25202.svg": "e8d3bf6d9796a70847330907c4e1fc70",
"assets/assets/images/Line%25203.svg": "b295a015bf32c0001bab8fceeaf5d308",
"assets/assets/images/meat/chickenLolipop.png": "611112e47c6f84d8cd5873ad88f359c4",
"assets/assets/images/meat/chickenLolipop2.png": "3625f8ed914622aec4ba25751a6f1090",
"assets/assets/images/meat/groundedmeat.png": "e09d23d288f270299f987e0ba4b7cbdc",
"assets/assets/images/meat/groundedmeat1.png": "eec4ba54e7b356bd276effe430c0739c",
"assets/assets/images/meat/meatChopped.png": "5eba3f3f785185b19e6966bafc9196f3",
"assets/assets/images/meat/meatChopped2.png": "bb38e2b5ac2123af0a83376c0f292295",
"assets/assets/images/meat/meatSteak.png": "b6848d3e8ac25710c319e62b581bfc27",
"assets/assets/images/meat/meatSteak2.png": "73d20fcf5f64478fbe9c7ff8de1de8bd",
"assets/assets/images/meat/meatSteak3.png": "1c422707e1d2028b444f060073a016ab",
"assets/assets/images/navbar/american.svg": "fd0e2b2db71a4cd055721fc99bbf6517",
"assets/assets/images/navbar/card-remove.svg": "7240ec8cfc7b7280cbf08a5723039482",
"assets/assets/images/navbar/CategorySelected.svg": "4c90ad47d859eda0e0d7534c4027aa69",
"assets/assets/images/navbar/CategoryUnselected.svg": "22392849d28d010dbe17e4f958031d75",
"assets/assets/images/navbar/HeartUnselected.svg": "a92d9faa72cbe513f7d388407ed2378b",
"assets/assets/images/navbar/homeSelected.svg": "ccd120507610da7c4352fefa796cce0c",
"assets/assets/images/navbar/homeUnselected.svg": "5535534d8d0811396ef404167bb61c22",
"assets/assets/images/navbar/mastercard.svg": "ad751a273b2a22e2799a9ba25af76266",
"assets/assets/images/navbar/moreUnselected.svg": "d24131aaa5d9c00124bc10c1440ddd63",
"assets/assets/images/navbar/visa.svg": "5af5da98001b39e27208059642b6470d",
"assets/assets/images/otherimages/deliverytruck.png": "99f1243828d4aee5e7efd92c80f6ae66",
"assets/assets/images/otherimages/Fresh100.png": "6f0751c919cf20eaa8e7cd638a7ffea6",
"assets/assets/images/otherimages/Halal.png": "f3fcd3d4739e8d0c2980b58507d4845a",
"assets/assets/images/otherimages/Map.png": "429b239c6d61de4b1a471c5171c8c646",
"assets/assets/images/otherimages/QuickHomeDelivery.png": "1303071f0c7d2515ef32a5414df302d6",
"assets/assets/images/otherimages/Rider.png": "aab07cdff1f8c9625ad91828e1fc867a",
"assets/assets/images/Search.svg": "ad83e787a9dc89a34a94a48ca30f2d0d",
"assets/assets/images/shopping.gif": "b15220c407f5ab9d6dd2b0fa7f60df09",
"assets/assets/images/vegetable/garlic.png": "ca4273a4bcc18148955412973757f585",
"assets/assets/images/vegetable/garlic2.png": "98feddd2adf9cf71d3be839b0d138858",
"assets/assets/images/vegetable/onion.png": "f803015018cb8dd307a55027df1c6a94",
"assets/assets/images/vegetable/onion2.png": "c83ee5412e56ecf6109032c92ce35865",
"assets/assets/images/vegetable/onion3.png": "c5056d84df5c1a9902bb34a523e4191e",
"assets/assets/images/vegetable/tomatoes.png": "9b24d8c39bac25348f9226889c4dd26e",
"assets/assets/images/vegetable/tomatoes2.png": "dec50b3fd40013f706c628bda23bfbf4",
"assets/FontManifest.json": "e1ef11e93f93ebe3f943489ab1db65f9",
"assets/fonts/MaterialIcons-Regular.otf": "98683816b69147fb1c05614f92c5a95c",
"assets/NOTICES": "0b4ea1fbcbbde754da6f37f3fd009c23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "8d39bb31bf8a254a2c5b095f3806bf3d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7f1255e0f5275efa4c64e4bd045cb134",
"/": "7f1255e0f5275efa4c64e4bd045cb134",
"main.dart.js": "ec42bdaa1fff0d723ae6a6225bcc2685",
"main.dart.mjs": "592df3fb52c254afe67b7b49540c3959",
"main.dart.wasm": "1a49b612814fa9da1ae5aac65e976116",
"manifest.json": "ef59b4673b1fc8e6c00401ab6c48a2d7",
"version.json": "3d2288a1596c89f45977d7ed7ec63ae5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
