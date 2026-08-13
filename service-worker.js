"use strict";

const CACHE_NAME = "MDCA-v2.0.12-r3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png",
  "./apple-touch-icon.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith("MDCA-") && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then(response => {
          const responseOrigin = new URL(response.url || request.url).origin;
          if (!response.ok || responseOrigin !== self.location.origin) {
            return response;
          }

          const copy = response.clone();
          return caches.open(CACHE_NAME)
            .then(cache => cache.put("./index.html", copy))
            .then(() => response)
            .catch(() => response);
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request).then(response => {
        if (
          response.ok &&
          new URL(request.url).origin === self.location.origin
        ) {
          const copy = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});
