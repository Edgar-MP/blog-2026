# Blog · Edgar Martínez

Blog personal sobre frontend, diseño y sistemas web. Construido con **Astro 5 + Tailwind CSS v4**, desplegado como sitio estático en VPS con Docker.

## 📋 Stack

| Tecnología                                 | Uso                                           |
| ------------------------------------------ | --------------------------------------------- |
| [Astro 5](https://astro.build)             | Framework SSG (static site generation)        |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos con design system vía `@theme`        |
| MDX + Astro Content Collections            | Artículos con componentes reutilizables       |
| [Shiki](https://shiki.matsuza.dev)         | Resaltado de código sintáctico                |
| @astrojs/sitemap                           | Generación automática de sitemap              |
| @astrojs/rss                               | Feed RSS para suscriptores                    |
| Fontsource                                 | Fuentes self-hosted (sin Google Fonts)        |
| [Umami](https://umami.is)                  | Analítica sin cookies (self-hosted en Docker) |
| nginx                                      | Servidor web (en VPS)                         |
| Docker + Docker Compose                    | Contenerización (Umami + base de datos)       |

---

## 🚀 Inicio rápido (Desarrollo local)

### Requisitos

- **Node.js** ≥ 22.12.0
- **npm** ≥ 10.x

### Setup

```bash
cd site
npm install
npm run dev        # Abre http://localhost:3000
```

El servidor recarga automáticamente al guardar cambios.

```bash
npm run build      # Genera dist/ (HTML estático)
npm run preview    # Sirve el build localmente para probar
```

---

## ✍️ Escribir un artículo

### 1. Crear archivo MDX

```bash
touch src/content/blog/mi-articulo.mdx
```

### 2. Frontmatter (requerido)

```mdx
---
title: "Título del artículo"
description: "Resumen de una o dos frases."
date: 2026-05-27
category: Frontend
tags: [Astro, Tailwind, CSS]
cover: ../../assets/mi-cover.webp
coverAlt: "Descripción de la imagen"
featured: false
draft: false
---

Tu contenido en Markdown aquí...
```

### 3. Propiedades del frontmatter

| Propiedad     | Tipo     | Notas                                                    |
| ------------- | -------- | -------------------------------------------------------- |
| `title`       | string   | Título del artículo                                      |
| `description` | string   | Resumen corto para meta tags y cards                     |
| `date`        | date     | Formato: `YYYY-MM-DD`                                    |
| `category`    | string   | Una sola categoría (ej: Frontend, Astro, Design Systems) |
| `tags`        | string[] | Lista de etiquetas (ej: [Astro, Tailwind])               |
| `cover`       | image    | Ruta relativa a imagen de portada (21:9)                 |
| `coverAlt`    | string   | Texto alternativo para la imagen                         |
| `featured`    | boolean  | `true` para destacar en Home (máximo uno)                |
| `draft`       | boolean  | `true` para guardar como borrador (no aparece en build)  |

### 4. Componentes disponibles en MDX

Importa al inicio del archivo:

```mdx
import Callout from "../../components/Callout.astro";
import CodeBlock from "../../components/CodeBlock.astro";
import Quote from "../../components/Quote.astro";
```

**Callout** — Cajas destacadas (4 variantes):

```mdx
<Callout type="nota">Información adicional pero no crítica.</Callout>

<Callout type="consejo">Recomendación práctica.</Callout>

<Callout type="error-común">Trampa frecuente: ...</Callout>

<Callout type="resumen">Lo más importante de este artículo.</Callout>
```

**CodeBlock** — Bloques de código con encabezado:

```mdx
<CodeBlock
	filename="src/components/Button.astro"
	lang="astro"
	code={`---
export interface Props {
  variant?: 'primary' | 'secondary';
}
---
<button class:list={['btn', variant]}>
  <slot />
</button>`}
/>
```

**Quote** — Citas destacadas:

```mdx
<Quote author="Alguien famoso">
	"Una cita memorable sobre desarrollo web."
</Quote>
```

Para más detalles, consulta [PROSE_COMPONENTS.md](./PROSE_COMPONENTS.md).

### 5. Publicar

```bash
# Hacer commit con el artículo
git add src/content/blog/mi-articulo.mdx
git commit -m "feat: add new article about X topic"

# El build automático (CI/CD) o manual despliega los cambios
npm run build
# ... (ver sección de Despliegue abajo)
```

---

## 🌐 Variables de entorno

Copia `.env.example` a `.env` en la carpeta `site/`:

```bash
cp .env.example .env
```

Rellena con tus valores:

```bash
# Umami analytics (solo necesario si usas Umami self-hosted)
PUBLIC_UMAMI_URL=https://umami.tudominio.com/script.js
PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

**Notas:**

- Sin estas variables, Umami no carga pero no hay errores.
- Las variables con prefijo `PUBLIC_` se incluyen en el build.
- Las sin prefijo solo existen en el servidor.

---

## 🐳 Despliegue en VPS con Docker

### Requisitos en el VPS

- **Docker** ≥ 24.0
- **Docker Compose** ≥ 2.20
- **nginx** (para servir el sitio estático)
- Dominio con DNS apuntando al VPS

### 1. Estructura en el VPS

```
/var/www/
  blog/                    ← Sitio estático (HTML)
  umami/
    docker-compose.yml     ← Orquestación Umami + PostgreSQL
    .env                   ← Credenciales
```

### 2. Build local e upload

En tu máquina local:

```bash
cd site
npm install
npm run build          # Genera dist/
```

Sube a VPS:

```bash
rsync -avz --delete dist/ root@vps:/var/www/blog/
```

O si usas GitHub Actions (CI/CD automático), configura un workflow que:

1. Hace checkout del repo
2. Instala dependencias
3. Hace build
4. Sube a VPS (via SSH key o webhook)

### 3. Configurar nginx

En el VPS, crea `/etc/nginx/sites-available/blog`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name blog.edgarmartinez.dev;

    # Redirigir HTTP → HTTPS (recomendado)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name blog.edgarmartinez.dev;

    # SSL (ej: Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/blog.edgarmartinez.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/blog.edgarmartinez.dev/privkey.pem;

    # Raíz del sitio
    root /var/www/blog;
    index index.html;

    # Rutas SPA (fallback a index.html)
    location / {
        try_files $uri $uri/ /404.html;
    }

    # Assets con hash inmutable (Astro)
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compresión
    gzip on;
    gzip_types text/plain text/css text/javascript application/json application/javascript image/svg+xml;
    gzip_min_length 1000;

    # Seguridad
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

Activa el sitio:

```bash
ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled/
nginx -t                    # Verifica la configuración
systemctl reload nginx
```

### 4. Umami (Analítica self-hosted)

#### Opción A: Docker Compose (recomendado)

En el VPS, crea `/var/www/umami/docker-compose.yml`:

```yaml
version: "3.8"

services:
  umami-db:
    image: postgres:15-alpine
    container_name: umami-db
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: ${DB_PASSWORD} # Genera una contraseña segura
    volumes:
      - ./db:/var/lib/postgresql/data
    restart: unless-stopped
    networks:
      - umami-net

  umami:
    image: ghcr.io/umami-software/umami:latest
    container_name: umami-app
    depends_on:
      - umami-db
    environment:
      DATABASE_URL: postgresql://umami:${DB_PASSWORD}@umami-db:5432/umami
      DATABASE_TYPE: postgresql
      HASH_SALT: ${HASH_SALT} # Genera: openssl rand -base64 32
      TRACKER_SCRIPT_NAME: script # Cambia de "umami" a algo custom
    ports:
      - "3001:3000" # Expone localmente en :3001 (nginx lo proxea)
    restart: unless-stopped
    networks:
      - umami-net

networks:
  umami-net:
    driver: bridge

volumes:
  db:
```

Crea `.env` en la misma carpeta:

```bash
DB_PASSWORD=tu_contraseña_muy_segura_aqui
HASH_SALT=$(openssl rand -base64 32)
```

Inicia Umami:

```bash
cd /var/www/umami
docker compose up -d
```

Verifica:

```bash
docker compose logs umami    # Debe mostrar "Listening on 0.0.0.0:3000"
```

#### Opción B: Proxy nginx hacia Umami

Si ya tienes Umami corriendo en `localhost:3001`, proxea desde nginx:

```nginx
location /analytics/ {
    proxy_pass http://localhost:3001/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Luego accede a Umami en: `https://blog.edgarmartinez.dev/analytics/`

### 5. Configurar Umami en el blog

#### Primer acceso

1. Abre `https://blog.edgarmartinez.dev/analytics/` (o `http://localhost:3001` si es local)
2. Login con credenciales por defecto (cambia después):
   - Usuario: `admin`
   - Contraseña: `umami`
3. Crea un **sitio nuevo** con nombre `Blog Edgar Martínez`
   - Obtendrás un `website-id` (UUID)

#### Agregar script al blog

En el `.env` del blog (VPS):

```bash
PUBLIC_UMAMI_URL=https://blog.edgarmartinez.dev/analytics/script
PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

O si usas un tracker custom:

```bash
PUBLIC_UMAMI_URL=https://blog.edgarmartinez.dev/script
PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Haz rebuild:

```bash
npm run build
rsync -avz --delete dist/ root@vps:/var/www/blog/
```

Verifica en DevTools → Network que `script.js` cargue sin errores.

---

## 📊 Flujo completo de publicación

```
┌─ Local (tu máquina)
│
├─ 1. Escribir artículo
│   └─ touch src/content/blog/nuevo.mdx
│
├─ 2. Probar en dev
│   └─ npm run dev → http://localhost:3000
│
├─ 3. Commit y push
│   └─ git add src/content/blog/nuevo.mdx
│   └─ git commit -m "feat: add article about X"
│   └─ git push origin main
│
└─ 4. Build y deploy a VPS
    └─ npm run build
    └─ rsync dist/ → /var/www/blog/
    └─ ✅ Live en https://blog.edgarmartinez.dev

┌─ VPS
│
├─ nginx sirve /var/www/blog/ (HTML estático)
├─ Umami recopila analytics en /var/www/umami/
└─ PostgreSQL almacena datos de Umami
```

### Script de deploy (opcional)

Crea `deploy.sh` en la carpeta raíz del proyecto:

```bash
#!/bin/bash
set -e

echo "🔨 Building..."
cd site
npm run build

echo "📤 Uploading to VPS..."
rsync -avz --delete dist/ root@vps:/var/www/blog/

echo "✅ Deploy complete!"
```

Hazlo ejecutable y corre:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📁 Estructura del proyecto

```
site/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ArticleCard.astro
│   │   ├── ParticlesBg.astro        ← Fondo de partículas interactivo
│   │   ├── TableOfContents.astro    ← TOC sticky en artículos
│   │   ├── BaseHead.astro           ← Meta tags, SEO, OG
│   │   ├── Callout.astro            ← Componente para callouts
│   │   ├── CodeBlock.astro          ← Bloque de código con encabezado
│   │   └── Quote.astro              ← Componente para citas
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro         ← Layout principal (header, footer, particles)
│   │   └── ArticleLayout.astro      ← Layout para artículos (cover, TOC, prose)
│   │
│   ├── content/
│   │   ├── blog/                    ← Artículos en MDX
│   │   │   ├── componentes-reutilizables-astro-tailwind.mdx
│   │   │   ├── como-plantearía-un-sistema-de-diseno.mdx
│   │   │   └── ...
│   │   └── config.ts                ← Schema Zod para Content Collections
│   │
│   ├── pages/
│   │   ├── index.astro              ← Home
│   │   ├── sobre.astro              ← Página Sobre
│   │   ├── articulos/
│   │   │   ├── index.astro          ← Listado de artículos + filtro categoría
│   │   │   └── [slug].astro         ← Detalle de artículo
│   │   ├── categorias/
│   │   │   └── [cat].astro          ← Artículos por categoría
│   │   ├── rss.xml.ts               ← Feed RSS
│   │   └── 404.astro                ← Página de error
│   │
│   ├── styles/
│   │   └── global.css               ← Design system (@theme tokens, clases base)
│   │
│   ├── assets/                      ← Imágenes (covers, avatars)
│   │   ├── profile.png
│   │   ├── cover-*.png
│   │   └── ...
│   │
│   └── plugins/
│       └── remark-reading-time.mjs  ← Plugin para calcular tiempo de lectura
│
├── public/
│   ├── robots.txt
│   └── favicon.svg
│
├── dist/                            ← Build output (se genera con npm run build)
├── .env.example                     ← Plantilla de variables de entorno
├── .env                             ← Variables de entorno (local, no versionado)
├── astro.config.mjs                 ← Configuración de Astro
├── tailwind.config.js               ← Configuración de Tailwind
├── package.json
├── tsconfig.json
└── README.md                        ← Este archivo
```

---

## 🎨 Personalización

### Design System

Los tokens del diseño viven en `src/styles/global.css`:

```css
@theme {
	/* Colores */
	--color-em-brand: #dcf05d; /* Verde lima */
	--color-em-fg-1: #fafafa; /* Texto principal */
	--color-em-fg-2: #d0d0d0; /* Texto secundario */
	--color-em-border-1: #2a2a2f; /* Border sutil */

	/* Radios */
	--radius-sm: 4px;
	--radius-md: 8px;
	--radius-lg: 12px;
	--radius-xl: 16px;

	/* Fonts */
	--font-display: "Montserrat Variable", sans-serif;
	--font-body: system-ui, sans-serif;
	--font-mono: "JetBrains Mono", monospace;
}
```

Cambialos según tu marca.

### Fonts

Las fuentes se cargan desde Fontsource (sin Google Fonts):

```css
@import "@fontsource-variable/montserrat";
@import "@fontsource-variable/source-serif-4";
@import "@fontsource/jetbrains-mono";
@import "@fontsource/caveat";
```

---

## 🧹 Mantenimiento

### Actualizar dependencias

```bash
npm outdated          # Ver qué puede actualizarse
npm update            # Actualizar menores y patches
npm install @package@latest  # Instalar versión específica
```

### Limpiar build

```bash
rm -rf dist node_modules
npm install
npm run build
```

### Validar build

```bash
npm run build 2>&1 | grep -i "error\|warn"
```

---

## 🚨 Troubleshooting

### Umami no recibe eventos

1. Abre DevTools → Console y busca errores de script
2. Verifica que `PUBLIC_UMAMI_WEBSITE_ID` sea correcto (UUID válido)
3. Confirm que el dominio de Umami esté accesible desde el navegador
4. Recarga la página varias veces

### Build falla con errores de MDX

Verifica el frontmatter de los artículos:

```bash
# Chequea que existan estos campos:
title, description, date, category, tags, draft
```

### nginx devuelve 404

```bash
# Verifica que dist/ esté en /var/www/blog/
ls -la /var/www/blog/

# Recarga nginx
systemctl reload nginx

# Chequea logs
tail -f /var/log/nginx/error.log
```

---

## 📝 Licencia

Contenido del blog © 2026 Edgar Martínez. Código fuente disponible bajo la licencia que especifiques.

---

## 📧 Contacto

- 🌐 [edgarmartinez.dev](https://edgarmartinez.dev)
- 📧 [edgar@edgarmartinez.dev](mailto:edgar@edgarmartinez.dev)
- 🐙 [github.com/edgarmartinez](https://github.com/edgarmartinez)
