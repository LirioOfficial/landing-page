import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="about-section section" id="sobre">
      <div className="container">
        <SectionHeading number="01" eyebrow="SOBRE A LÍRIO" light />

        <div className="about-content">
          <div className="about-text">
            <h2>
              Criamos com propósito.
              <span> Desenvolvemos com significado.</span>
            </h2>

            <p className="about-lead">
              A tecnologia pode aproximar pessoas, ideias e possibilidades.
            </p>

            <p>
              A Lírio é uma equipe que acredita no poder da criatividade
              aplicada à tecnologia. Nosso trabalho é transformar necessidades
              em soluções digitais claras, funcionais e pensadas para pessoas.
            </p>

            <p>
              Cada projeto é uma oportunidade de aprender, experimentar e
              construir algo relevante. Valorizamos a colaboração, a atenção
              aos detalhes e a busca constante por novas possibilidades.
            </p>
          </div>

          <div className="about-symbol">
            <div className="symbol-ring">
              <img src="/images/logo-lirio.svg" alt="Símbolo da Lírio" />
            </div>
            <span>CRIAR · CONECTAR · TRANSFORMAR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
