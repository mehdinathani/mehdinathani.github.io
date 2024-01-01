'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5a3e4ea9677623b783ba6d712d721332",
"assets/AssetManifest.bin.json": "a2a2f022ebd2ca8d76a5a5b5985b921f",
"assets/AssetManifest.json": "e9e75bc1e65132ca180aefc39cd98d2a",
"assets/assets/audio/babycrysound.mp3": "8a1b8f3f30eeddb9d077b4f31f76ef22",
"assets/assets/audio/bgsound.mp3": "fc55d2fe73a6d8be47a4d60388299633",
"assets/assets/audio/loadGun.mp3": "0ede02a408bbd8142fbeb9b1c844c0a2",
"assets/assets/audio/missileattack.mp3": "b8aeac62288d33e30991cb40a5d60d00",
"assets/assets/audio/pHappy.mp3": "3c50b0afd3a85e765afe3c3c2d1777b8",
"assets/assets/audio/pSad.mp3": "b71368866a8f9cbbc6f4ec6386ba3dc8",
"assets/assets/audio/strike.mp3": "333aa0c1125042afc4b1ab426f4db261",
"assets/assets/images/backbutton.png": "aa71802e4dfa847b189a482f7da68275",
"assets/assets/images/bamboo_bridge.png": "7bf9889014d6c8bebc2491644fb1adfa",
"assets/assets/images/bg1.jpg": "71bb833d841075325dee971458d69242",
"assets/assets/images/bg2.jpg": "80a5a17f9feb27439a6d40b1f66b8845",
"assets/assets/images/bg3.jpg": "92e3f6ef492218685274f73609f72fba",
"assets/assets/images/bg4.jpg": "3c039cf78de4dbeea5227efd0566a652",
"assets/assets/images/bg4.png": "03dfcd2f4d0ce0b828f54823c127a480",
"assets/assets/images/boy.png": "960e1eddc0c0c59ffa4aa66eb313d878",
"assets/assets/images/Bronze_1.png": "6c2af7f3a3d35588ecca68baee8c5ce1",
"assets/assets/images/Bronze_2.png": "ea6722f2a06db0d09a784a5a3c4dd640",
"assets/assets/images/castle_bridge.png": "0f43ec5b590aafae9189095e020a42e7",
"assets/assets/images/dp001.png": "bcf85ac0623646ecbdce40cadbd361e7",
"assets/assets/images/dp002.png": "59ddd75f9958dbf631b557a2e684a7c0",
"assets/assets/images/dp003.png": "3fb2d0bc43eb2a0aaf9ac1484f4fe7bb",
"assets/assets/images/dp004.png": "d48130462f4b7f4fb1c78aec103a484a",
"assets/assets/images/dp005.png": "f5a7673856c1a1caacf26c84eb46d2b6",
"assets/assets/images/dp006.png": "bc0f837e8f440bd0004afda766e0fc0e",
"assets/assets/images/dp007.png": "44d0f4483a94e8881ee2eed334b4a013",
"assets/assets/images/dp008.png": "7af00d9790b151638d9c958216bde200",
"assets/assets/images/dp009.png": "ad0781b81559eb02f860dd5b6f44c169",
"assets/assets/images/dp010.png": "e1b68b6c2c95f404bc524088241e3833",
"assets/assets/images/dp011.png": "277ca4f9ea656bf48431044828dc9b9c",
"assets/assets/images/dp012.png": "1442ca57583dbe5ecd2a025bfef92e56",
"assets/assets/images/dp013.png": "94c99a26abe7618244048e2142078632",
"assets/assets/images/dp014.png": "643be9b94af5cd0491802775056042f5",
"assets/assets/images/dp015.png": "2b9f111c153a3b0784eb6a5d1d58110d",
"assets/assets/images/dp016.png": "0a8e93365a87bb8a1dfedc14b4e6a7ce",
"assets/assets/images/dp017.png": "195dc6ffc805ca9cde7c0a5250c40d76",
"assets/assets/images/dp018.png": "c80b3c57e881f04822760d002ccc3fa1",
"assets/assets/images/dp019.png": "fbd0c0dddaf9eb96b3115d59a80bcc99",
"assets/assets/images/dp020.png": "ace907de94e81f18255fdfb4b9c19753",
"assets/assets/images/dp021.png": "2dd4bacb7314e253b6abcc51a975a007",
"assets/assets/images/dp022.png": "926e2cf6e586f52a283f67ee45e988fc",
"assets/assets/images/dp023.png": "0c6aae3c46f779e5c4f2072fb6178516",
"assets/assets/images/dp024.png": "a71158cc6cf4b51345783364e14586e4",
"assets/assets/images/enegy%2520symbol.png": "6fe1d6b5b180bfc3711021c773130137",
"assets/assets/images/Exitbutton.png": "8d4f248526fd456c3c9e144c505c6576",
"assets/assets/images/forest_bridge.png": "38f4a77875ee942bf9ddd3a857378229",
"assets/assets/images/hearts%2520symbol.png": "4c7ee4b4ad10b36ea8fc6d27d90a20ae",
"assets/assets/images/helpButton.png": "553561ccdab80cd4b0daaf0dbd5965ad",
"assets/assets/images/homebutton.png": "568b17f9ad3e56478d7b922fe32c8525",
"assets/assets/images/iflag.png": "1aa0a71c6cac59e48a2b97e866c7ef10",
"assets/assets/images/Missile02D.png": "f5d491495316bac9907095cb3f0b823c",
"assets/assets/images/nextbutton.png": "6a3d4de4243284425524b7032c7f498a",
"assets/assets/images/no.png": "f31b7873b29031fd33a88fd8f59652b9",
"assets/assets/images/Pausebutton.png": "46bf0dd33b2a203ae06bd377988eb855",
"assets/assets/images/pflag.png": "0e91a00eb85f5fcff013e42b0e4bd993",
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
"assets/assets/images/yes_button.png": "981215f81cec1b3a1b1c02d8a812fda2",
"assets/assets/player.png": "99d5e5437bfc8dd05b3954c6604ad80e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4435ac036dc93243db896c5cfe4c20e2",
"assets/NOTICES": "0dcb3885267e64b2a2f463766987be36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "52da1782b02f9e9bb36d3e964f5fcf15",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "0d7505199449d2822235b8a06e32645e",
"icons/android-chrome-512x512.png": "f21849888d157abf3f32effce5486ee4",
"icons/apple-touch-icon.png": "f025a60f7075e1144545b6305139a7eb",
"icons/favicon-16x16.png": "288b977458832c3e063954041a54f69a",
"icons/favicon-32x32.png": "52da1782b02f9e9bb36d3e964f5fcf15",
"icons/favicon.ico": "f2839966eb68d0b347dcb19e0501c003",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/mstile-150x150.png": "a9a3e617ad6b8837e7260c421c2fc62c",
"index.html": "0fa1ce5b8757bb37eeede8b5fe05575c",
"/": "0fa1ce5b8757bb37eeede8b5fe05575c",
"main.dart.js": "b7f8c387f7f1b5f5331c004f8ba39970",
"manifest.json": "b178a6912930786d13fffde94c61fa5f",
"version.json": "c36c37d33c0a7f300e4f927e6270984b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
