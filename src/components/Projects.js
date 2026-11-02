import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section className="project-section section" id="projetos">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="PROJETO EM DESTAQUE"
          title={
            <>
              Ideias que saem
              <br />
              <em>do papel.</em>
            </>
          }
          description="Conheça um dos projetos desenvolvidos pela equipe Lírio."
        />

        <div className="project-layout">
          <div className="project-copy">
            <span className="project-overline">TECNOLOGIA COM PROPÓSITO</span>
            <img
               src="/images/tugarin.svg"
               alt="Logo Tugarin"
              className="tugarin-logo"
                />

            <p>
              Uma aplicação voltada ao registro e ao acompanhamento de
              ocorrências de tartarugas marinhas. O projeto explora a visão
              computacional como ferramenta de apoio ao monitoramento e à
              conservação da vida marinha.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Visão computacional</span>
              <span>Conservação</span>
            </div>

            <a className="pill-button blue-pill" href="#contato">
              Saiba mais
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="project-visual">
            <img
              src="/images/telas.png"
              alt="Apresentação das telas do aplicativo Tugarin em três celulares"
            />
            <span className="visual-caption">TUGARIN · PROJETO LÍRIO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
