# Componentes de Prosa para Artículos MDX

Documentación de los componentes reutilizables disponibles en artículos MDX.

## Importar componentes

En la cabecera de tu archivo `.mdx`, importa los componentes que necesites:

```astro
---
title: "Tu artículo"
description: "..."
date: 2026-05-28
category: Frontend
tags: [...]
---

import Callout from '../../components/Callout.astro';
import CodeBlock from '../../components/CodeBlock.astro';
import Quote from '../../components/Quote.astro';
```

## Callout

Cajas destacadas con 4 variantes: nota, consejo, error-común, resumen.

### Nota (tipo: 'nota')

```jsx
<Callout type="nota">
  **Información adicional** que complementa el párrafo anterior pero no es crítica para entender el concepto.
</Callout>
```

Color: Azul cielo (sky)

### Consejo (tipo: 'consejo')

```jsx
<Callout type="consejo">
  **Recomendación práctica** basada en experiencia. Algo que deberías hacer o considerar.
</Callout>
```

Color: Verde lima (brand)

### Error Común (tipo: 'error-común')

```jsx
<Callout type="error-común">
  **Trampa frecuente**: muchos desarrolladores creen que... pero en realidad...
</Callout>
```

Color: Naranja (orange)

### Resumen (tipo: 'resumen')

```jsx
<Callout type="resumen">
  **Lo importante**: si solo recuerdas una cosa de este artículo, que sea esto.
</Callout>
```

Color: Violeta (violet)

---

## CodeBlock

Bloques de código con encabezado mostrando nombre de archivo y lenguaje.

### Sintaxis

```jsx
<CodeBlock 
  filename="src/components/Button.astro"
  lang="astro"
  code={`---
export interface Props {
  variant?: 'primary' | 'secondary';
}

const { variant = 'primary' } = Astro.props;
---
<button class:list={['btn', variant]}>
  <slot />
</button>`}
/>
```

### Props

- `filename` (string) — Ruta o nombre del archivo. Opcional.
- `lang` (string) — Lenguaje para el label. Opcional. Default: `'text'`.
- `code` (string) — El contenido del bloque de código. Requerido.

### Características

- Numeración de líneas automática
- Encabezado con nombre de archivo y lenguaje
- Sintaxis resaltada con Shiki (integrado en Astro)
- Scroll horizontal para código largo
- Copiar código fácil en el navegador

---

## Quote

Citas destacadas, opcionalmente con autoría.

### Sin autor

```jsx
<Quote>
  "No todo lo que aprendes merece ser un curso. A veces basta con una nota bien escrita."
</Quote>
```

### Con autor

```jsx
<Quote author="Anonymous">
  "La sencillez es la máxima sofisticación."
</Quote>
```

### Props

- `author` (string) — Nombre del autor. Opcional.
- `children` — Contenido de la cita (texto o párrafos).

---

## Elementos Inline Automáticos

### Listas (ul, ol)

Las listas Markdown estándar funcionan con estilos predefinidos:

```markdown
- Elemento 1
- Elemento 2
  - Subelemento 2.1
  - Subelemento 2.2
```

Se renderizan con bullets automáticos y espaciado consistente.

### Código Inline

Usa backticks para código inline:

```markdown
La función `getCollection()` recupera posts del repositorio.
```

Se renderiza con fondo gris, borde sutil y fuente monoespaciada.

### Tablas

Markdown estándar para tablas:

```markdown
| Encabezado 1 | Encabezado 2 |
|---|---|
| Celda 1 | Celda 2 |
| Celda 3 | Celda 4 |
```

Se renderizan con bordes, header con fondo sutil, y tipografía apropiada.

### Blockquotes (Markdown)

```markdown
> Esto es una cita del tipo blockquote.
> Útil para poesía, referencias, o énfasis narrativo.
```

Se renderizan con borde izquierdo verde lima, fondo sutil, e itálica.

---

## Ejemplo Completo

Aquí está una estructura de artículo usando todos los componentes:

```mdx
---
title: "Aprendizajes desde la práctica"
description: "Notas sobre decisiones técnicas"
date: 2026-05-28
category: Frontend
tags: [Astro, Tailwind]
---

import Callout from '../../components/Callout.astro';
import CodeBlock from '../../components/CodeBlock.astro';
import Quote from '../../components/Quote.astro';

## Introducción

Párrafo introductorio con contexto.

<Callout type="nota">
Este artículo asume familiaridad con Astro y Tailwind CSS.
</Callout>

## Problema

Describimos un escenario técnico y luego lo solucionamos.

<Callout type="error-común">
Un error frecuente es no usar `client:` directives cuando importas componentes React en Astro.
</Callout>

## Solución

```markdown
Código Markdown inline aquí.
```

O usa `<CodeBlock>` para algo más elaborado:

<CodeBlock 
  filename="src/components/Card.astro"
  lang="astro"
  code={`---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<div class="card">
  <h3>{title}</h3>
  <slot />
</div>`}
/>

<Callout type="consejo">
Mantén tus componentes lo más simples posible. La complejidad es el enemigo silencioso.
</Callout>

## Conclusión

Una última reflexión.

<Quote author="Tu nombre">
"Conclusión o reflexión final."
</Quote>
```

---

## Notas de Estilo

- Los `Callout` se espacian automáticamente con márgenes arriba/abajo.
- El `CodeBlock` incluye numeración de líneas y puede hacer scroll si es necesario.
- Las listas usan bullets (ul) y números (ol) automáticamente.
- Las tablas tienen header destacado y bordes sutiles.
- Los links en prosa son azules lima (brand) y subrayados al pasar el ratón.

---

## Accesibilidad

- Todos los componentes respetan `prefers-reduced-motion`.
- Los colores tienen suficiente contraste para WCAG AA.
- Las listas tienen padding y margins apropiados para lectores de pantalla.
- Los links tienen `:focus-visible` para navegación por teclado.
