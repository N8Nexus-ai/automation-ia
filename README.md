# 🤖 Automation IA

> **Uma plataforma moderna de automação inteligente construída com Next.js, TypeScript e Tailwind CSS**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.9-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## 📖 Sobre o Projeto

**Automation IA** é uma aplicação web moderna e responsiva desenvolvida para demonstrar soluções de automação inteligente. O projeto combina as melhores práticas de desenvolvimento frontend com uma interface elegante e componentes reutilizáveis.

### ✨ Características Principais

- 🎨 **Design Moderno**: Interface limpa e profissional com tema escuro/claro
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Construído com Next.js 14 para máxima performance
- 🧩 **Componentes Modulares**: Biblioteca completa de componentes UI reutilizáveis
- 🎭 **Animações Suaves**: Transições e micro-interações para melhor UX
- 🌙 **Modo Escuro/Claro**: Tema adaptável com persistência de preferências
- 🔧 **TypeScript**: Tipagem estática para maior segurança e produtividade

## 🚀 Tecnologias Utilizadas

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - Framework React para produção
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript com tipagem estática
- **[React 18](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário

### UI Components & Libraries
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e sem estilo
- **[Lucide React](https://lucide.dev/)** - Ícones SVG modernos
- **[Geist Font](https://vercel.com/font)** - Tipografia otimizada
- **[Class Variance Authority](https://cva.style/)** - Utilitário para variantes de classes

### Development Tools
- **[ESLint](https://eslint.org/)** - Linting de código
- **[PostCSS](https://postcss.org/)** - Processamento de CSS
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes rápido

## 🛠️ Instalação e Configuração

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 18.17 ou superior)
- [pnpm](https://pnpm.io/) (recomendado) ou npm/yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/marco-lima-1/automation-ia.git
   cd automation-ia
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia o servidor de desenvolvimento
pnpm build        # Cria build de produção
pnpm start        # Inicia o servidor de produção
pnpm lint         # Executa o linter

# Build e Deploy
pnpm build        # Gera build otimizado
pnpm start        # Serve a aplicação em produção
```

## 📁 Estrutura do Projeto

```
automation-ia/
├── 📁 app/                    # App Router do Next.js
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── 📁 components/             # Componentes React
│   ├── 📁 ui/                # Componentes base (shadcn/ui)
│   ├── animated-background.tsx
│   ├── cta-section.tsx
│   ├── data-flow.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── process-section.tsx
│   ├── services-section.tsx
│   ├── stats-section.tsx
│   └── theme-provider.tsx
├── 📁 hooks/                  # Custom React Hooks
├── 📁 lib/                    # Utilitários e configurações
├── 📁 public/                 # Arquivos estáticos
│   ├── *.png, *.jpg, *.svg   # Imagens e ícones
├── 📁 src/                    # Código fonte adicional
├── 📁 styles/                 # Estilos adicionais
├── components.json            # Configuração do shadcn/ui
├── next.config.mjs           # Configuração do Next.js
├── package.json              # Dependências e scripts
├── postcss.config.mjs        # Configuração do PostCSS
├── tailwind.config.js        # Configuração do Tailwind
└── tsconfig.json             # Configuração do TypeScript
```

## 🎨 Componentes UI

O projeto inclui uma biblioteca completa de componentes baseados no [shadcn/ui](https://ui.shadcn.com/):

### Componentes Principais
- **Layout**: Header, Footer, Navigation
- **Formulários**: Input, Button, Select, Checkbox, etc.
- **Feedback**: Toast, Alert, Progress, Skeleton
- **Navegação**: Tabs, Accordion, Breadcrumb
- **Dados**: Table, Card, Chart
- **Overlay**: Dialog, Popover, Tooltip, Sheet

### Como Usar os Componentes

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExampleComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exemplo</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Clique aqui</Button>
      </CardContent>
    </Card>
  )
}
```

## 🌟 Funcionalidades

### Página Principal
- **Hero Section**: Apresentação impactante com animações
- **Seção de Serviços**: Cards informativos sobre automação
- **Processo de Trabalho**: Timeline visual do processo
- **Estatísticas**: Métricas e KPIs em tempo real
- **Call-to-Action**: Seções para engajamento

### Recursos Técnicos
- **SSR/SSG**: Renderização do lado do servidor
- **Otimização de Imagens**: Next.js Image component
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Acessibilidade**: Componentes acessíveis com Radix UI
- **Performance**: Lazy loading e code splitting

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à [Vercel](https://vercel.com/)
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push na branch main

### Outras Plataformas

```bash
# Build para produção
pnpm build

# Servir localmente
pnpm start

# Ou deploy para outras plataformas como Netlify, Railway, etc.
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Siga estes passos:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra** um Pull Request

### Padrões de Código

- Use TypeScript para todas as novas funcionalidades
- Siga as convenções de nomenclatura do projeto
- Adicione testes quando apropriado
- Mantenha a documentação atualizada

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Marco Lima**
- GitHub: [@marco-lima-1](https://github.com/marco-lima-1)
- Projeto: [automation-ia](https://github.com/marco-lima-1/automation-ia)

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis
- [shadcn/ui](https://ui.shadcn.com/) - Sistema de design
- [Lucide](https://lucide.dev/) - Ícones

---

<div align="center">
  <p>Feito com ❤️ por <strong>Marco Lima</strong></p>
  <p>⭐ Deixe uma estrela se este projeto foi útil!</p>
</div>