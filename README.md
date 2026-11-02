# Lírio — Site institucional

Projeto desenvolvido com React e Next.js 14, utilizando o Pages Router e a organização por componentes apresentada na Aula 08.

## Requisitos

- Node.js 18 ou superior
- npm

## Como executar

1. Extraia o arquivo ZIP.
2. Abra a pasta `lirio-final` no Visual Studio Code.
3. Abra o terminal integrado.
4. Instale as dependências:

   ```bash
   npm install
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

6. Acesse `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## Organização do projeto

```text
lirio-final/
├── public/
│   └── images/
│       ├── fonte-lirio.svg
│       ├── lirio.svg
│       ├── lirio-reverse.svg
│       ├── logo-lirio.svg
│       ├── tugarin.svg
│       ├── telas-tugarin.png
│       ├── mayra.png
│       └── giovanna.png
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── HomeTop.js
│   │   ├── Menu.js
│   │   ├── Projects.js
│   │   ├── SectionHeading.js
│   │   ├── Services.js
│   │   └── Team.js
│   ├── pages/
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   └── styles/
│       └── globals.css
├── .eslintrc.json
├── jsconfig.json
└── package.json
```

## Identidade visual

A interface utiliza a identidade visual enviada para a Lírio, com azul `#2777BF`, preto e branco. As imagens e versões da logo fornecidas foram colocadas em `public/images`.

## Observações

- O formulário abre o aplicativo de e-mail padrão do dispositivo. O envio real depende de um endereço oficial configurado.
- Os links de redes sociais estão como espaços reservados e devem ser substituídos pelos perfis oficiais.
- O projeto Tugarin é apresentado como projeto em destaque da equipe.
