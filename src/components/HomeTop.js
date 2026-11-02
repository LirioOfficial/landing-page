import { ArrowUpRight } from "lucide-react";

export default function HomeTop() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">
            <i />
            TECNOLOGIA · CRIATIVIDADE · RESULTADOS
          </span>

          <h1>
            Ideias que florescem.
            <span> Soluções que transformam.</span>
          </h1>

          <p>
            Somos a Lírio. Unimos criatividade, estratégia e desenvolvimento
            para transformar boas ideias em experiências digitais.
          </p>

          <a className="pill-button" href="#sobre">
            Conheça a Lírio
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="hero-caption">
          <span>01 / 04</span>
          <span className="caption-rule" />
          <span>CRIATIVIDADE EM MOVIMENTO</span>
        </div>
      </div>
    </section>
  );
}
