# Herramientas SEO a Conectar (con pasos)

Este documento es una checklist operativa para dejar tu blog bien conectado a las herramientas clave de SEO, medicion y rendimiento.

## 1) Google Search Console (obligatorio)

## 1.1 Crear propiedad

1. Entra a Search Console con tu cuenta Google.
2. Crea una propiedad de tipo `Dominio` (recomendado).
3. Copia el registro DNS `TXT` que te da Google.
4. Añadelo en tu proveedor DNS.
5. Vuelve a Search Console y pulsa `Verificar`.

## 1.2 Enviar sitemap

1. Ve a `Sitemaps`.
2. Envia:
- `https://TU_DOMINIO/sitemap-index.xml`
3. Confirma que detecta URLs ES y EN.

## 1.3 Flujo semanal en Search Console

1. `Rendimiento` (ultimos 28 dias):
- Detecta queries con posicion media 4-20 y CTR bajo.
- Mejora title y meta description en esas URLs.
2. `Indexacion > Paginas`:
- Revisa excluidas por error.
- Valida correcciones.
3. `Inspeccion de URL`:
- Solicita indexacion para posts nuevos importantes.
4. `Core Web Vitals`:
- Revisa estado movil y desktop.

---

## 2) Google Analytics 4 (recomendado)

1. Crea propiedad GA4.
2. Crea flujo Web (URL del blog).
3. Instala etiqueta Google (gtag o GTM).
4. Verifica eventos basicos:
- `page_view`
- `scroll` (si esta activado)
- clics de salida (opcional)
5. Crea informe de landing pages organicas.

KPI minimo mensual:
- Sesiones organicas
- Engagement rate
- Tiempo medio de interaccion
- Entradas top por SEO

---

## 3) Umami (si quieres analitica privacy-first)

1. Crea instancia (self-hosted o cloud).
2. Crea website en Umami y copia `website-id`.
3. Configura variables de entorno del sitio:
- `PUBLIC_UMAMI_URL`
- `PUBLIC_UMAMI_WEBSITE_ID`
4. Verifica que el script carga y registra vistas.

Nota: puedes usar Umami como analitica principal y GA4 como capa complementaria.

---

## 4) Bing Webmaster Tools (recomendado)

1. Entra en Bing Webmaster Tools.
2. Importa desde Search Console o agrega sitio manualmente.
3. Verifica propiedad.
4. Envia sitemap:
- `https://TU_DOMINIO/sitemap-index.xml`
5. Revisa cobertura e informes SEO basicos.

---

## 5) PageSpeed Insights y Lighthouse (obligatorio para control de calidad)

## 5.1 PageSpeed Insights

1. Analiza:
- Home ES
- Home EN
- 2-3 posts principales
2. Revisa LCP, CLS e INP en movil y desktop.
3. Prioriza mejoras de plantilla (no solo de una URL).

## 5.2 Lighthouse local

1. Ejecuta auditorias en local antes de publicar cambios grandes.
2. Verifica especialmente:
- Performance
- SEO
- Accessibility
- Best Practices

---

## 6) Herramientas de keyword research (opcional, pero muy utiles)

Opciones:
- Ahrefs
- Semrush
- Sistrix
- Ubersuggest (alternativa mas economica)

Uso minimo:
1. Encontrar keywords donde ya apareces en top 20.
2. Priorizar temas con potencial de mejora de CTR/posicion.
3. Planificar clusters (pilar + satelites).

---

## 7) Screaming Frog (opcional tecnico, muy recomendado)

1. Lanza crawl completo del dominio.
2. Revisa:
- Titles vacios/duplicados
- Descriptions vacias/duplicadas
- H1 duplicados
- Enlaces rotos
- Canonicals incorrectos
- Hreflang inconsistentes

Ideal usarlo tras cambios grandes en arquitectura o i18n.

---

## 8) Orden recomendado de conexion (para no perder tiempo)

1. Search Console
2. Sitemap enviado y validado
3. Umami o GA4 (o ambos)
4. Bing Webmaster Tools
5. PageSpeed/Lighthouse baseline
6. Keyword tool (si vas a escalar contenidos)
7. Screaming Frog para auditoria tecnica

---

## 9) Rutina operativa sugerida

## Semanal (30-60 min)

1. Search Console: rendimiento + indexacion.
2. Revisar posts nuevos indexados.
3. Mejorar snippets (title/description) de URLs con CTR bajo.

## Quincenal

1. Revisar Core Web Vitals.
2. Ajustar enlazado interno en posts nuevos.

## Mensual

1. Auditoria rapida tecnica (Screaming Frog o checklist manual).
2. Actualizacion de 1-2 posts antiguos con impresiones y bajo CTR.
3. Plan editorial del mes siguiente en base a queries reales.

---

## 10) Checklist final (estado "listo")

- [ ] Propiedad verificada en Search Console.
- [ ] Sitemap index enviado y sin errores graves.
- [ ] Analitica activa (Umami, GA4 o ambos).
- [ ] Bing Webmaster configurado.
- [ ] Baseline de rendimiento medido (PSI/Lighthouse).
- [ ] Proceso semanal de seguimiento definido.
