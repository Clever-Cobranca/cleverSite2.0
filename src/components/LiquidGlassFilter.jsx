export default function LiquidGlassFilter() {
  return (
    <svg
      className="hidden"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Filtro para elementos pequenos (botões, ícones) — distorção mais forte */}
      <filter id="liquid-glass-refraction">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.04"
          numOctaves="4"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="8"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      {/* Filtro para containers (dropdowns, painéis) — refração bem sutil */}
      <filter
        id="liquid-glass-container-refraction"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves="2"
          seed="7"
          result="noise"
        />
        {/* Suaviza o ruído para não "quebrar" o texto dos itens do menu */}
        <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softNoise"
          scale="3"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
