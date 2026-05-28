# Blog · Edgar Martínez

Blog personal sobre frontend, diseño y sistemas web. Construido con **Astro 5 + Tailwind CSS v4**.

## Stack

| Tecnología | Uso |
|---|---|
| [Astro 5](https://astro.build) | Framework SSG |
| [Tailwind CSS v4](https://tailwindcss.com) | Estilos (design system via `@theme`) |
| MDX | Artículos con componentes |
| Shiki | Resaltado de código |
| @astrojs/sitemap | Sitemap automático |
| @astrojs/rss | Feed RSS |
| Fontsource | Fuentes self-hosted (sin Google Fonts) |
| Umami | Analítica sin cookies (self-hosted) |

## Desarrollo local

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/ (estático)
npm run preview    # sirve el build localmente
```

## Escribir un artículo

1. Crea un archivo `.mdx` en `src/content/blog/`:

```mdx
---
title: "Título del artículo"
description: "Resumen de una o dos frases."
date: 2026-05-27
category: Frontend
tags: [Astro, Tailwind]
cover: ../../assets/mi-cover.webp
coverAlt: "Descripción de la imagen de portada"
featured: false
draft: false
---

Contenido en Markdown/MDX...
```

2. Guarda y el servidor de desarrollo recarga automáticamente.
3. `draft: true` para borradores (no aparecen en el build).
4. `featured: true` para destacar en la Home (solo uno a la vez).

## Variables de entorno

Copia `.env.example` a `.env` y rellena:

```bash
PUBLIC_UMAMI_URL=https://umami.tudominio.com/script.js
PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

Sin estas variables, Umami simplemente no carga (sin errores).

## Despliegue en VPS (nginx)

```bash
npm run build           # genera dist/
rsync -avz dist/ user@vps:/var/www/blog/
```

Configuración nginx mínima:

```nginx
server {
    listen 80;
    server_name blog.edgarmartinez.dev;
    root /var/www/blog;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }

    # Cache de assets con hash (inmutable)
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/html text/css application/javascript image/svg+xml;
}
```

## Estructura del proyecto

```
site/
  src/
    components/     Header, Footer, ArticleCard, ParticlesBg, TOC, BaseHead
    layouts/        BaseLayout.astro, ArticleLayout.astro
    content/
      blog/         *.mdx (los artículos)
    pages/
      index.astro               Home
      articulos/index.astro     Listado de artículos
      articulos/[slug].astro    Detalle de artículo
      categorias/[cat].astro    Artículos por categoría
      sobre.astro               Página Sobre
      rss.xml.ts                Feed RSS
      404.astro                 Página de error
    styles/
      global.css                Design system (tokens @theme + clases)
  public/
    robots.txt
    favicon.svg
  .env.example                  Variables de entorno (copiar a .env)
  content.config.ts             Esquema Zod de Content Collections
```
