# 💼 Portfólio Profissional

Um portfólio profissional de desenvolvimento web moderno, construído com as tecnologias mais atuais do mercado.

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org)** - Framework React com SSR/SSG
- **[React 19](https://react.dev)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[Zustand](https://zustand-demo.vercel.app)** - State management
- **[Lucide React](https://lucide.dev)** - Ícones SVG
- **[ESLint](https://eslint.org)** e **[Prettier](https://prettier.io)** - Code quality

## 📁 Estrutura do Projeto

```
app/
├── components/        # Componentes reutilizáveis
│   ├── card/         # Componente de card
│   └── dropdown/     # Componente dropdown
├── templates/        # Layouts e templates
│   ├── header/       # Cabeçalho
│   ├── home/         # Página inicial
│   ├── projetos/     # Seção de projetos
│   ├── skills/       # Seção de habilidades
│   └── trajetoria/   # Seção de trajetória
├── locales/          # Internacionalização (PT/EN)
├── styles/           # Estilos globais
├── json/             # Dados estáticos
└── store/            # Estado global (Zustand)
```

## 🛠️ Como Iniciar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar.

## 📝 Scripts Disponíveis

- `npm run dev` - Iniciar servidor de desenvolvimento
- `npm run build` - Compilar para produção
- `npm start` - Iniciar servidor de produção
- `npm run lint` - Executar ESLint
- `npm run format` - Formatar código com Prettier
- `npm run format:check` - Verificar formatação

## 🌍 Internacionalização

O projeto suporta múltiplos idiomas através de arquivos JSON localizados em `app/locales/`:
- **PT** - Português Brasileiro
- **EN** - Inglês

A troca de idioma é gerenciada pelo `langueStore` utilizando Zustand.

## 📦 Deploy

O projeto está pronto para ser deployado em plataformas como:
- [Vercel](https://vercel.com) (recomendado)
- [Netlify](https://netlify.com)
- Qualquer servidor Node.js

## 📄 Licença

Este projeto é privado.
