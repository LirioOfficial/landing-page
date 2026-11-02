import {
  Code2,
  PanelsTopLeft,
  Lightbulb,
  ArrowUpRight
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Estratégia e ideias",
    description:
      "Entendemos o desafio, organizamos possibilidades e traçamos um caminho para tirar boas ideias do papel."
  },
  {
    number: "02",
    icon: PanelsTopLeft,
    title: "Design e experiência",
    description:
      "Criamos interfaces intuitivas e experiências digitais que aproximam marcas, serviços e pessoas."
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Construímos soluções web funcionais, responsivas e preparadas para evoluir junto com cada projeto."
  }
];

export default function Services() {
  return (
    <section className="services-section section" id="servicos">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="O QUE FAZEMOS"
          title={
            <>
              Tecnologia com intenção.
              <br />
              <em>Resultado com significado.</em>
            </>
          }
          description="Cada projeto começa com uma pergunta. Nosso trabalho é encontrar, junto com você, a melhor maneira de respondê-la."
        />

        <div className="service-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <ServiceIcon size={27} strokeWidth={1.6} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href="#contato"
                  aria-label={`Conversar sobre ${service.title}`}
                >
                  <ArrowUpRight size={19} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
