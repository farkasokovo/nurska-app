# Nurska — Landing page

Sitio estático (HTML/CSS, sin frameworks) para distribuir el APK de **Nurska**, la app de referencia clínica offline para enfermería. Pensado para alojarse gratis en **GitHub Pages**.

```
nurska-landing/
  index.html                 ← todo el sitio (CSS embebido, un solo archivo)
  assets/
    nurska_icon.png          ← logo de la app
    screenshots/             ← aquí van tus capturas (ver más abajo)
```

---

## 1. Publicar el sitio en GitHub Pages

1. Crea un repo en GitHub llamado **`nurska-landing`**.
   > El nombre importa: el botón de descarga apunta a `github.com/farkasokovo/nurska-landing/...`. Si usas otro nombre, edita las 2 URLs en `index.html` (busca `nurska.apk`).
2. Sube el contenido de esta carpeta (`index.html`, `assets/`) a la rama `main`.
3. En GitHub: **Settings → Pages**.
4. En "Build and deployment", fuente: **Deploy from a branch**.
5. Branch: **`main`**, carpeta: **`/ (root)`**. Guarda.
6. Espera ~1 minuto. El sitio queda en:
   `https://farkasokovo.github.io/nurska-landing/`

Igual que hiciste con el aviso de privacidad.

---

## 2. Subir el APK (release)

El botón "Descargar APK" apunta a:

```
https://github.com/farkasokovo/nurska-landing/releases/latest/download/nurska.apk
```

`latest/download/` sirve **siempre el release más reciente**, así que NO tienes que editar el HTML cada vez que saques versión nueva. Solo:

1. En el repo: **Releases → Draft a new release**.
2. Crea un tag (ej. `v1.0.0`) y un título.
3. Arrastra tu APK a la zona de "Attach binaries".
4. **Renómbralo exactamente `nurska.apk`** antes de publicar (el nombre debe coincidir con la URL).
5. **Publish release.**

Para una versión nueva después: repite con un tag distinto (`v1.1.0`, etc.), subiendo de nuevo el archivo como `nurska.apk`. El link de la landing seguirá funcionando solo.

---

## 3. Agregar las capturas de pantalla

En `index.html` ya hay 5 `<img>` esperando estos archivos:

```
assets/screenshots/screenshot1.png   → Inicio
assets/screenshots/screenshot2.png   → Escalas
assets/screenshots/screenshot3.png   → Ficha de fármaco
assets/screenshots/screenshot4.png   → Calculadora
assets/screenshots/screenshot5.png   → Turno activo
```

Solo suelta esos 5 archivos en `assets/screenshots/` (con esos nombres) y aparecen solas.

- **Formato:** vertical, proporción tipo 9:19 (como sale del celular). `object-fit: cover` las recorta para llenar el marco aunque no midan exacto.
- **Peso:** compríme un poco los PNG/JPG para que el sitio cargue rápido en datos móviles.
- ¿Quieres más o menos de 5? Agrega o quita bloques `<div class="shot">...</div>` en la sección de capturas del `index.html`.

---

## Editar contenido rápido

Todo vive en `index.html`. Puntos que quizá quieras tocar:

- **Tagline / textos:** están en el `<header class="hero">` y en cada sección.
- **Colores:** en el bloque `:root { ... }` del `<style>` — son la paleta real de la app (café/tierra).
- **Contacto:** `nurska.app@gmail.com` (busca `mailto:`).
- **Aviso de privacidad:** ya enlazado a `https://farkasokovo.github.io/nurska-privacidad/`.
