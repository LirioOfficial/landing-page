import { Github, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Mayra Coutinho da Costa",
    role: "Desenvolvimento",
    photo: "/images/mayra.png",
    photoDescription: "Foto de perfil de Mayra"
  },
  {
    name: "Giovanna Agatha Pereira Morais",
    role: "Design e desenvolvimento",
    photo: "/images/giovanna.png",
    photoDescription: "Foto de perfil de Giovanna"
  }
];

export default function Team() {
  return (
    <section className="team-section section" id="equipe">
      <div className="container">
        <div className="section-label">
          <span>04</span>
          <i />
          NOSSO TIME
        </div>

        <div className="team-heading">
          <h2>
            Pessoas e ideias
            <span> em movimento.</span>
          </h2>

          <p>
            Uma equipe que une diferentes perspectivas, criatividade e
            dedicação para construir soluções.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <img
                className="team-avatar"
                src={member.photo}
                alt={member.photoDescription}
              />

              <div className="team-person">
                <h3>{member.name}</h3>
                <p>{member.role}</p>

                <div className="social-mini">
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin size={17} />
                  </a>
                  <a href="#" aria-label="GitHub">
                    <Github size={17} />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Instagram size={17} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
