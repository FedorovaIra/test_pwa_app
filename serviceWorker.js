const staticGoogleImages = "google-images-v1";
const assets = [
  "/",
  "/index.html",
  "/script.js",
  "/style.css",
  "/img/browser-1666982_1280.png",
  "/img/chromebook-5270032_1920.jpg",
  "/img/laptop_chromebook_BASELINE_P900.svg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGoogleImages).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
