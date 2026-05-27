// blog-tweaks.jsx
// Tweaks app for the blog. Wires the panel up to:
//   • bgParticles: toggle the WebGL-look canvas
//   • density: list density on /artículos
//   • toc: TOC visibility on /detalle
//   • accent: brand color (curated set)
//   • articleSize: detail article body font-size

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bgParticles": true,
  "density": "comfy",
  "toc": "always",
  "accent": "#dcf05d",
  "articleSize": 17
}/*EDITMODE-END*/;

// brand bright variants per accent (slightly lifted version for primary CTA hover)
const ACCENT_BRIGHT = {
  "#dcf05d": "#dcff70",
  "#7dd3fc": "#bae6fd",
  "#fb923c": "#fdba74",
  "#a78bfa": "#c4b5fd",
};
function brightFor(c){ return ACCENT_BRIGHT[c] || c; }
function softFor(c){
  // convert hex → rgba @ .18
  const r = parseInt(c.slice(1,3),16), g = parseInt(c.slice(3,5),16), b = parseInt(c.slice(5,7),16);
  return `rgba(${r},${g},${b},.18)`;
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // sync tweaks → DOM
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--em-brand', t.accent);
    r.setProperty('--em-brand-bright', brightFor(t.accent));
    r.setProperty('--em-brand-soft', softFor(t.accent));
    r.setProperty('--em-article-size', `${t.articleSize}px`);

    const b = document.body;
    b.dataset.bg = t.bgParticles ? 'on' : 'off';
    b.dataset.density = t.density;
    b.dataset.toc = t.toc;
  }, [t]);

  return (
    <TweaksPanel title="Tweaks · Blog">
      <TweakSection label="Acento" />
      <TweakColor
        label="Color"
        value={t.accent}
        options={['#dcf05d', '#7dd3fc', '#fb923c', '#a78bfa']}
        onChange={(v) => setTweak('accent', v)}
      />

      <TweakSection label="Home" />
      <TweakToggle
        label="Fondo de partículas"
        value={t.bgParticles}
        onChange={(v) => setTweak('bgParticles', v)}
      />

      <TweakSection label="Artículos" />
      <TweakRadio
        label="Densidad"
        value={t.density}
        options={['compact', 'comfy']}
        onChange={(v) => setTweak('density', v)}
      />

      <TweakSection label="Detalle" />
      <TweakRadio
        label="Tabla de contenidos"
        value={t.toc}
        options={['always', 'hover', 'never']}
        onChange={(v) => setTweak('toc', v)}
      />
      <TweakSlider
        label="Tipografía artículo"
        value={t.articleSize}
        min={15} max={22} step={1} unit="px"
        onChange={(v) => setTweak('articleSize', v)}
      />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<App />);
