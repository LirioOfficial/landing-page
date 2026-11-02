import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const navigationLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" }
];

export default function Menu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function closeMenu() {
    setMenuIsOpen(false);
  }

  function toggleMenu() {
    setMenuIsOpen((currentState) => !currentState);
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navegação principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Lírio - início">
          <img src="/images/logo-lirio.svg" alt="Logo Lírio" className="brand-symbol" />
          <span>Lírio</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={toggleMenu}
          aria-label={menuIsOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuIsOpen}
        >
          {menuIsOpen ? <X size={25} /> : <MenuIcon size={25} />}
        </button>

        <div className={`nav-links ${menuIsOpen ? "nav-open" : ""}`}>
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
