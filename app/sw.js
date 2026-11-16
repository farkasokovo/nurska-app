// Service worker "de baja": la app web se mudó a https://app.nurska.app.
// Reemplaza al anterior en las instalaciones viejas, borra la copia guardada,
// se da de baja y recarga las ventanas abiertas para que muestren el aviso.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const ks = await caches.keys();
    await Promise.all(ks.filter((k) => k.startsWith('nurska-')).map((k) => caches.delete(k)));
    await self.clients.claim();
    const ventanas = await self.clients.matchAll({ type: 'window' });
    await self.registration.unregister();
    await Promise.all(ventanas.map((v) => v.navigate(self.registration.scope).catch(() => {})));
  })());
});
