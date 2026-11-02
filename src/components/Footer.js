import {
  Instagram,
  Linkedin,
  Facebook,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand footer-brand" href="#inicio">
            <img src="/images/logo-lirio.svg" alt="Logo Lírio" className="brand-symbol" />
            <span>Lírio</span>
          </a>

          <p>
            Criatividade que floresce.
            <br />
            Tecnologia que transforma.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="WhatsApp">
              <MessageCircle />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Lírio. Todos os direitos reservados.
          </span>
          <a href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
      </div>
    </footer>
  );
}
