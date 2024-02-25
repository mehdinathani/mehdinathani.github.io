'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d97ef4127b81271526ef50c006894582",
"assets/AssetManifest.bin.json": "fdb17c38272fd1b664d9d9d967871c67",
"assets/AssetManifest.json": "b80f3286ec0de853ffb551a8bfaddd90",
"assets/assets/audio/bgsound.mp3": "fc55d2fe73a6d8be47a4d60388299633",
"assets/assets/audio/birddying.mp3": "a79922a3d21e5081e459b05adc29de32",
"assets/assets/audio/birdsing.mp3": "71d7c2ecc449844b45bebd6adc1142f9",
"assets/assets/audio/explosive.mp3": "5f8b1a932d334ff34eaa0e1e4c284949",
"assets/assets/audio/loadGun.mp3": "0ede02a408bbd8142fbeb9b1c844c0a2",
"assets/assets/audio/treecutting.mp3": "4297c0b29f9ba5a48e017dc12a75cff2",
"assets/assets/images/backbutton.png": "aa71802e4dfa847b189a482f7da68275",
"assets/assets/images/bamboo_bridge.png": "7bf9889014d6c8bebc2491644fb1adfa",
"assets/assets/images/Battleaxe01.png": "7e1ca39d4c36f7d23ac103f6363881ca",
"assets/assets/images/bg1.jpg": "60ffbf9b42bd5aef140bc962750eac5e",
"assets/assets/images/bg3.jpg": "f7fe572d3d3cc2e548ab323dab590061",
"assets/assets/images/bg4.jpg": "3c039cf78de4dbeea5227efd0566a652",
"assets/assets/images/bg5.jpg": "1ce0f6e3003058142f25111787a9ffe8",
"assets/assets/images/bg6.jpg": "08d889d329cade05f2dfe0ee2ff72896",
"assets/assets/images/boy.png": "960e1eddc0c0c59ffa4aa66eb313d878",
"assets/assets/images/Bronze_1.png": "6c2af7f3a3d35588ecca68baee8c5ce1",
"assets/assets/images/Bronze_2.png": "ea6722f2a06db0d09a784a5a3c4dd640",
"assets/assets/images/castle_bridge.png": "0f43ec5b590aafae9189095e020a42e7",
"assets/assets/images/Exitbutton.png": "8d4f248526fd456c3c9e144c505c6576",
"assets/assets/images/forest_bridge.png": "38f4a77875ee942bf9ddd3a857378229",
"assets/assets/images/gamelostbg.jpg": "6ba6a098c36fb5191b4c04aa06e03a76",
"assets/assets/images/globalwarming.png": "b85bfdc06643a6cdc1e6d41a70bfb9d0",
"assets/assets/images/globe.jpg": "1b59470dc65aa771c136315a43929424",
"assets/assets/images/hearts%2520symbol.png": "4c7ee4b4ad10b36ea8fc6d27d90a20ae",
"assets/assets/images/helpButton.png": "553561ccdab80cd4b0daaf0dbd5965ad",
"assets/assets/images/homebutton.png": "568b17f9ad3e56478d7b922fe32c8525",
"assets/assets/images/ic_logo_border.png": "f0f37a81d734e32e9c91db4d35bb9c06",
"assets/assets/images/iflag.png": "1aa0a71c6cac59e48a2b97e866c7ef10",
"assets/assets/images/Missile02D.png": "f5d491495316bac9907095cb3f0b823c",
"assets/assets/images/nextbutton.png": "6a3d4de4243284425524b7032c7f498a",
"assets/assets/images/Pausebutton.png": "46bf0dd33b2a203ae06bd377988eb855",
"assets/assets/images/questionbg.jpg": "8a3128da42ebe05f878d43038670ec7a",
"assets/assets/images/Reloadbutton.png": "9a6f23686671596aed31b42af92c1aac",
"assets/assets/images/running_000.png": "49bd9180e2956fa1b2404c17a3dba4e2",
"assets/assets/images/running_001.png": "5fa970dd136617197e9b45b89a241071",
"assets/assets/images/running_002.png": "74509802655a804b9e91cd675326ba32",
"assets/assets/images/running_003.png": "78dc2b1c497776293eec5f4245f320e3",
"assets/assets/images/running_004.png": "63316c1784d8ce2a7dc50b6f4bccb1be",
"assets/assets/images/running_005.png": "6edae4c3ed83f2583de6d065861605b5",
"assets/assets/images/running_006.png": "b36f52555c536f250c75880a0cc54e9c",
"assets/assets/images/running_007.png": "960e1eddc0c0c59ffa4aa66eb313d878",
"assets/assets/images/running_008.png": "7bb7ccf4f133315fc761c5c7f97d2a2f",
"assets/assets/images/running_009.png": "782562af7ce7bdbbc7ed3daba23a7d4a",
"assets/assets/images/running_010.png": "a39945db3b86275aaed0e5f2ef592228",
"assets/assets/images/running_011.png": "02a1a347f0eaab168f7879a052cad889",
"assets/assets/images/running_012.png": "8ab64fb332807e1fb921232ea242294e",
"assets/assets/images/running_013.png": "a3dd3caad54d11b65d4255e127ebe54a",
"assets/assets/images/running_014.png": "abeeba24fc6afca45930c5b95bc464c4",
"assets/assets/images/running_015.png": "ac130b8ac93659a2de0c7ad07cd6ccd6",
"assets/assets/images/running_016.png": "49377043952a931282f803eb9febde21",
"assets/assets/images/running_017.png": "eb2aeb0011dd5a3305f4bb923c13b07b",
"assets/assets/images/running_018.png": "6f80390dc27344efdfbd77e25744a84e",
"assets/assets/images/running_019.png": "ecb6465681d2bfe0fcd9e8e2c3f61c00",
"assets/assets/images/running_020.png": "9f8029d52ce031f853cbfda9eafee0ac",
"assets/assets/images/running_021.png": "e4cc4de813d1574ea44cf1dd26adc1ca",
"assets/assets/images/running_022.png": "627379fb661d89050d87629f6e60ea41",
"assets/assets/images/running_023.png": "21fbe0a9dc54885c0c34a8e12ecbbb61",
"assets/assets/images/running_024.png": "d83f696100f34fa2e1db8aa9c38053cb",
"assets/assets/images/running_025.png": "644b7af2f257d3a60c0e29e0dd10dbeb",
"assets/assets/images/running_026.png": "c032f2b26e68d914efcc16e016c55f1d",
"assets/assets/images/running_027.png": "cb50a2dd737965e10a9d182d33c1ec77",
"assets/assets/images/running_028.png": "d6b72ca4f4791cac5919bbf1848e6a9c",
"assets/assets/images/running_029.png": "64b20bd31ad0eb3deacc96d20ce19d3b",
"assets/assets/images/running_030.png": "e473fb337cffea481bd88be4468d37d7",
"assets/assets/images/running_031.png": "f4f2c23c9fa7b8d325663a1210f3c28b",
"assets/assets/images/running_032.png": "71aef694361ee873076e91e61d5d92fd",
"assets/assets/images/running_033.png": "0617ebef174d3b1db50c2181dff44bf3",
"assets/assets/images/running_034.png": "239bfe0a6bb607ca879640088ae710d1",
"assets/assets/images/running_035.png": "e194437eb83b01b4d80ea9852758e108",
"assets/assets/images/running_036.png": "e6357154534e174ecc2c08486cb3add3",
"assets/assets/images/running_037.png": "61c96620c54c2c24020a0ef92c18ae31",
"assets/assets/images/running_038.png": "b476e761bb4410c4ee50cdf3235bea41",
"assets/assets/images/running_039.png": "69558f52cd972690c964439f034d999f",
"assets/assets/images/running_040.png": "f4b71182aea6093266a9f985c4c90767",
"assets/assets/images/running_041.png": "f88d9fb775787e7e8034d5ad464d2ae8",
"assets/assets/images/running_042.png": "487a7ac3b5788530dbda00845912554c",
"assets/assets/images/running_043.png": "57b05f654a4c88e8e7ee6e57bcb20d70",
"assets/assets/images/running_044.png": "b964d922368f80d32f6b04d086e09bfe",
"assets/assets/images/running_045.png": "9a3eebd71f149b7c86758bb1eb15149f",
"assets/assets/images/running_046.png": "774b17150fb36980fda1b6714dca4708",
"assets/assets/images/running_047.png": "5b2024f7a2767ee8ead82e3a1b017abd",
"assets/assets/images/running_048.png": "c0f374575050a8cb0883dadb81ef50bf",
"assets/assets/images/running_049.png": "0c790b406b9154b7ea674fae84d0311c",
"assets/assets/images/sharebutton.png": "59d93cdd822423f29f7b83ffe80ff06b",
"assets/assets/images/sky_bridge.png": "87dbb1522ff7fce35f4ab1fa26c1b77b",
"assets/assets/images/soundbutton.png": "1f7eec72d660e9d2fdcc38634f3b510d",
"assets/assets/images/spr_ababil_walk%2520(1).png": "9b7ac37042f3e3bc53c38f95b4841e49",
"assets/assets/images/spr_ababil_walk%2520(10).png": "dfd9f70a23788e3c0e9e762dbe4fe4f9",
"assets/assets/images/spr_ababil_walk%2520(11).png": "c18d56bfa50f22e95d2763d9bcf84504",
"assets/assets/images/spr_ababil_walk%2520(12).png": "14c57c48289994d5cba14829a4be630f",
"assets/assets/images/spr_ababil_walk%2520(13).png": "0f3d297e85f17ad3003e6a87a2b6f528",
"assets/assets/images/spr_ababil_walk%2520(14).png": "2cefc36ef6936d524f88953448655edb",
"assets/assets/images/spr_ababil_walk%2520(15).png": "4c3179274c796140df93c1e50a048662",
"assets/assets/images/spr_ababil_walk%2520(16).png": "2f919fef53de13f62ff7aaad810539d8",
"assets/assets/images/spr_ababil_walk%2520(17).png": "8aaa9798740c9ba7a691ca1259fbbfd7",
"assets/assets/images/spr_ababil_walk%2520(18).png": "834ec93e130726fc5d4a870c4411ea6e",
"assets/assets/images/spr_ababil_walk%2520(19).png": "9b667e07514118775eb59457f5c1b078",
"assets/assets/images/spr_ababil_walk%2520(2).png": "b5f4d797a07d43903d18106c50693fcb",
"assets/assets/images/spr_ababil_walk%2520(3).png": "5da2a0dfb5c06e7f7aaa96c649e60695",
"assets/assets/images/spr_ababil_walk%2520(4).png": "69bb0174abc2fedfa48b622630d4c4c7",
"assets/assets/images/spr_ababil_walk%2520(5).png": "736cebd7c7f212cdac68ac4913f9aa53",
"assets/assets/images/spr_ababil_walk%2520(6).png": "d6d546a2c71fa4764319e23b2ab4be28",
"assets/assets/images/spr_ababil_walk%2520(7).png": "9423b9f57635e5eec0dc39d690d14e1c",
"assets/assets/images/spr_ababil_walk%2520(8).png": "84dea18062ba6d7b455ff68fba85cb8b",
"assets/assets/images/spr_ababil_walk%2520(9).png": "05987617351829cd9abf315059292e0d",
"assets/assets/images/tree1.png": "8cd197d2f3de5c084878d7f179d658f7",
"assets/assets/images/tree2.png": "d4b7c19a224c9495bb4a7b76d023890c",
"assets/assets/images/tree3.png": "8c3a555fa865a8a309ca3968e495a878",
"assets/assets/images/tree4.png": "155ddfd99ea23fa08ba37ef9c24ba8ea",
"assets/assets/images/tree5.png": "ba5502ce84988ab69943eaad09a619eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "06545cb2580efabd2895aac0f41c1341",
"assets/NOTICES": "c27a49725a5ab2e9a83ebdb0169b08cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "83bfbca1372a56f268d6e91a2315a848",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "dd8b8fcbd402127af7894d7ca034e291",
"icons/Icon-512.png": "62cc6b47b1f7424b044761e92cc069e1",
"icons/Icon-maskable-192.png": "dd8b8fcbd402127af7894d7ca034e291",
"icons/Icon-maskable-512.png": "62cc6b47b1f7424b044761e92cc069e1",
"index.html": "9361297b6334089fde28d55dfb071b7a",
"/": "9361297b6334089fde28d55dfb071b7a",
"main.dart.js": "61a1b65aad3afbe81dbf3963bdb5107c",
"manifest.json": "5b1f835e1c52eda1e73970d39cc9a59e",
"version.json": "226efd915a114ff7ea608cd27eb88208"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
