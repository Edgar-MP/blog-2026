# SEO Posts Playbook (Blog Edgar Martinez)

## 1) Objetivo de este documento

Este playbook define como escribir, revisar, publicar y mantener posts para maximizar:

- Visibilidad organica (Google + buscadores secundarios)
- CTR en resultados (title, description, rich results, social preview)
- Tiempo de permanencia y calidad de lectura
- Autoridad tematica (clusters + enlazado interno)
- Senales E-E-A-T (experiencia, expertise, autoridad, confianza)

No es una guia teorica. Es un sistema de trabajo operativo para este repositorio.

---

## 2) Principios editoriales obligatorios

1. Escribir desde experiencia real:
- Cada post debe incluir decisiones reales, contexto de uso, limites y trade-offs.

2. Priorizar claridad sobre volumen:
- Mejor 1200-1800 palabras utiles que 3000 palabras relleno.

3. Resolver una intencion concreta:
- El usuario debe poder responder "que problema vine a resolver" al terminar de leer.

4. Verificable y actualizable:
- Evitar afirmaciones no demostrables.
- Si cambia una herramienta, el post se actualiza.

5. No publicar por publicar:
- Si no hay aporte diferencial, no se publica.

---

## 3) Flujo completo por post (de idea a mantenimiento)

## 3.1 Brief inicial (antes de escribir)

Completar este mini-brief:

- Tema central:
- Intencion principal de busqueda:
- Perfil de lector:
- Nivel (junior/intermedio/senior):
- Problema puntual:
- Solucion prometida:
- Ejemplo real a incluir:
- Palabra clave principal:
- 3-6 keywords secundarias:
- Cluster tematico al que pertenece:
- URL objetivo (slug):

Regla: si no puedes definir problema y solucion en una frase, el tema aun no esta listo.

## 3.2 Investigacion minima

Antes de redactar:

1. Revisar resultados top 5 para la keyword principal.
2. Detectar huecos:
- Que no explican bien.
- Que no muestran con ejemplos.
- Que esta desactualizado.
3. Revisar fuentes primarias:
- Documentacion oficial
- RFC o specs si aplica
- Changelogs de librerias
4. Definir tu angulo diferencial:
- "Esto ya existe, pero yo lo explico desde X experiencia y con Y criterio"

## 3.3 Estructura del contenido

Estructura recomendada:

1. Hook + promesa (primeros 2 parrafos)
2. Contexto del problema
3. Solucion principal paso a paso
4. Ejemplo real (codigo/captura/comparacion)
5. Errores comunes y como evitarlos
6. Cuando NO usar esta solucion
7. Resumen operativo (checklist corto)
8. Siguiente lectura recomendada (enlace interno)

Reglas de escaneabilidad:

- H2 cada bloque principal
- H3 para subcasos
- Parrafos cortos (2-4 lineas)
- Listas para pasos y criterios
- Tabla comparativa cuando haya trade-offs

## 3.4 Redaccion SEO on-page

### Title (meta title + H1 alineados, no identicos al 100%)

- Longitud ideal: 50-60 caracteres
- Keyword principal cerca del inicio
- Beneficio claro para el lector

Ejemplo formula:
- "[Keyword]: como [resultado] sin [problema comun]"

### Meta description

- Longitud ideal: 140-160 caracteres
- Explica beneficio + contexto
- Incluir keyword principal sin forzar

### URL / slug

- Corto, descriptivo, minusculas, con guiones
- Evitar stopwords innecesarias

### Introduccion (primeros 100-120 palabras)

- Mencionar keyword principal de forma natural
- Explicar para quien es
- Decir que resultado obtendra

### Heading hierarchy

- Un solo H1
- H2 para secciones clave
- H3 para detalles
- No saltar de H2 a H4

### Semantica y entidades

- Usar terminos de entidad relevantes del tema (framework, patron, concepto tecnico)
- Incluir sinonimos y variaciones naturales, no keyword stuffing

### Enlazado interno obligatorio

Minimo por post:

- 2 enlaces a posts del mismo cluster
- 1 enlace a categoria relacionada
- 1 enlace a pagina pilar (home/articulos/sobre/editorial segun contexto)

Anchor text:

- Descriptivo y especifico
- Evitar "haz click aqui"

### Enlaces externos

- Solo cuando aportan evidencia o ampliacion real
- Priorizar documentacion oficial y fuentes primarias

## 3.5 Multimedia y assets

Cada post debe incluir:

- Cover con `coverAlt` descriptivo
- Al menos una imagen/diagrama si mejora comprension
- Snippets de codigo ejecutables o casi ejecutables

Reglas:

- Nombres de archivo descriptivos
- Peso optimizado
- Imagenes utiles, no decorativas sin valor

## 3.6 Cierre y CTA

Cerrar con:

- Resumen accionable de 3-5 puntos
- Siguiente paso recomendado
- Enlace interno al siguiente articulo del cluster

---

## 4) Plantilla MDX obligatoria para este proyecto

Usar esta base en `site/src/content/blog/*.mdx`:

```mdx
---
title: "Titulo claro y especifico"
description: "Resumen de valor en 140-160 caracteres aprox"
date: 2026-05-30
locale: es
translationKey: "mi-post-clave"
category: "Frontend"
tags: ["astro", "seo", "contenido"]
cover: ../../assets/mi-cover.png
coverAlt: "Descripcion breve del cover"
featured: false
draft: true
---

## Problema
Contexto real y por que importa.

## Solucion
Pasos concretos.

## Ejemplo real
Codigo, resultados y limites.

## Errores comunes
- Error 1
- Error 2

## Conclusiones
Checklist final + siguiente lectura.
```

Notas:

- `translationKey` debe ser identico entre ES y EN.
- `draft: true` hasta pasar QA.
- `tags` deben conectar con clusters reales del blog.

---

## 5) Workflow bilingue ES/EN

1. Publicar primero idioma base (normalmente ES).
2. Crear version EN con mismo `translationKey`.
3. Mantener estructura equivalente:
- Mismo valor de contenido
- Adaptacion cultural/idiomatica, no traduccion literal ciega
4. Verificar que el selector de idioma resuelve al post equivalente.
5. Revisar `hreflang` y canonicals en ambas versiones.

---

## 6) Checklist QA antes de publicar

## 6.1 SEO tecnico

- [ ] Title y description definidos y utiles
- [ ] Canonical correcto
- [ ] Alternates ES/EN correctos
- [ ] Open Graph image valida
- [ ] Twitter card valida
- [ ] JSON-LD valido (BlogPosting + Breadcrumb)
- [ ] URL limpia y final

## 6.2 Contenido

- [ ] Intencion de busqueda resuelta
- [ ] Ejemplo real incluido
- [ ] Seccion de limites/trade-offs incluida
- [ ] Sin relleno ni parrafos duplicados
- [ ] Ortografia y estilo revisados

## 6.3 UX y accesibilidad

- [ ] Jerarquia de headings correcta
- [ ] Contraste legible
- [ ] Alt text correcto (si aplica)
- [ ] Enlaces con texto descriptivo
- [ ] Navegable con teclado

## 6.4 Rendimiento

- [ ] Cover optimizada
- [ ] Sin imagenes pesadas innecesarias
- [ ] CLS/LCP aceptables en PageSpeed

---

## 7) Mantenimiento post-publicacion (muy importante)

Revisar cada post cada 90-180 dias:

- Sigue vigente el stack citado?
- Cambiaron APIs o recomendaciones?
- Se puede ampliar con nuevo aprendizaje real?
- Hay nuevas oportunidades de enlazado interno?

Si hay cambios fuertes:

- Actualizar contenido
- Ajustar description/title si mejora CTR
- Mantener slug estable (evitar cambios de URL)

---

## 8) Google Search Console: que debes hacer si o si

## 8.1 Configuracion inicial

1. Crear propiedad de dominio (preferible) o URL-prefix.
2. Verificar propiedad por DNS.
3. Enviar sitemap index:
- `https://TU-DOMINIO/sitemap-index.xml`
4. Confirmar que indexa rutas ES y EN.

## 8.2 Operativa semanal (15-30 min)

1. Informe de rendimiento:
- Filtrar por ultimos 28 dias.
- Detectar queries con posicion 4-20 y CTR bajo.
- Mejorar title/description de esas URLs.

2. Informe de indexacion:
- Corregir paginas excluidas por error (si no es intencional).
- Validar fixes despues de cambios.

3. Inspeccion de URL para posts nuevos:
- Solicitar indexacion cuando publiques post importante.

4. Core Web Vitals:
- Vigilar LCP/CLS/INP por tipo de dispositivo.

## 8.3 Operativa mensual

1. Detectar canibalizaciones:
- Varias URLs atacando la misma intencion sin diferenciacion.
2. Detectar contenidos con impresiones pero poco clic:
- Reescribir title/description y primer bloque.
3. Detectar contenidos con posicion estable pero bajo crecimiento:
- Mejorar profundidad y enlazado interno.

---

## 9) Otras herramientas recomendadas y uso practico

## 9.1 Google Analytics 4 (o Umami + analitica complementaria)

Objetivo:
- Ver engagement real por articulo.

Mirar:
- Entradas organicas por landing page
- Engagement time
- Scroll depth / eventos de lectura si los mides

## 9.2 PageSpeed Insights / Lighthouse

Objetivo:
- Detectar cuellos de botella de CWV.

Mirar:
- LCP en home y posts top
- CLS en templates
- JS/CSS bloqueante

## 9.3 Bing Webmaster Tools

Objetivo:
- Cobertura extra de buscadores y auditorias SEO gratuitas.

Acciones:
- Enviar sitemap
- Revisar indexacion y errores

## 9.4 Ahrefs / Semrush / Sistrix (opcional)

Objetivo:
- Priorizar oportunidades de keywords y gaps de contenido.

Uso recomendado:
- Encontrar queries donde ya sales en top 20
- Expandir clusters con posts satelite

## 9.5 Screaming Frog (opcional, muy util)

Objetivo:
- Auditoria tecnica del sitio completo.

Mirar:
- Titles/descriptions duplicados o vacios
- H1 duplicados
- Enlaces rotos
- Hreflang/canonical inconsistentes

---

## 10) Plan de crecimiento por clusters (para posicionar mas)

Para cada cluster principal:

1. Crear pagina pilar (concepto amplio)
2. Crear 3-6 posts de soporte (casos concretos)
3. Enlazado bidireccional:
- Pilar -> soporte
- Soporte -> pilar y soporte relacionado
4. Actualizar cluster trimestralmente

Clusters sugeridos para este blog:

- Astro y arquitectura frontend
- Design systems y UI engineering
- Performance web real
- Flujo de trabajo developer/designer

---

## 11) Errores que no se deben repetir

- Publicar sin intencion definida
- Traducir sin adaptar contexto
- No enlazar internamente
- Slugs largos o confusos
- Cambiar URLs ya indexadas sin redirecciones
- Ignorar Search Console durante semanas
- No revisar posts antiguos

---

## 12) Definition of Done (DoD) para publicar

Un post esta terminado solo si:

- Cumple el checklist QA completo
- Tiene version ES y EN (si aplica a estrategia bilingue)
- Esta conectado al menos a un cluster
- Fue validado en build sin errores
- Se envio a indexacion en Search Console
- Tiene plan de revision futura (fecha objetivo)

