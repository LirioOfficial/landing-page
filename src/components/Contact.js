import { useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

const initialFormValues = {
  name: "",
  email: "",
  message: ""
};

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);

  function handleInputChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: fieldValue
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const emailSubject = encodeURIComponent(
      `Contato pelo site Lírio — ${formValues.name}`
    );

    const emailBody = encodeURIComponent(
      `Nome: ${formValues.name}\nE-mail: ${formValues.email}\n\nMensagem:\n${formValues.message}`
    );

    window.location.href =
      `mailto:contato@lirio.com?subject=${emailSubject}&body=${emailBody}`;
  }

  return (
    <section className="contact-section section" id="contato">
      <div className="container">
        <div className="section-label dark-label">
          <span>05</span>
          <i />
          CONTATO
        </div>

        <div className="contact-layout">
          <div className="contact-intro">
            <h2>
              Vamos conversar?
              <span>Conte sua ideia.</span>
            </h2>

            <p>
              Tem um projeto em mente, uma dúvida ou quer conhecer melhor
              nosso trabalho? Envie uma mensagem para a equipe.
            </p>

            <a href="mailto:contato@lirio.com">
              contato@lirio.com
              <ArrowUpRight size={17} />
            </a>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            <label htmlFor="contact-name">
              SEU NOME
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                placeholder="Digite seu nome"
                required
              />
            </label>

            <label htmlFor="contact-email">
              SEU E-MAIL
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                placeholder="Digite seu e-mail"
                required
              />
            </label>

            <label htmlFor="contact-message">
              SUA MENSAGEM
              <textarea
                id="contact-message"
                name="message"
                value={formValues.message}
                onChange={handleInputChange}
                placeholder="Como podemos ajudar?"
                rows="4"
                required
              />
            </label>

            <button className="pill-button blue-pill" type="submit">
              Enviar mensagem
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
