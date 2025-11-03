# ⚡ Interativo - Plataforma de Cursos de IA

Landing page para estudo. Nesta landing page contem a divulgação de cursos de Inteligência artifical, de uma empresa fictícia cujo o nome é "Interativo". Nenhum dado divulgado nesta página é real, apenas dádos fictícios.

## 🎨 Características

- **Design Moderno**: Interface dark com gradientes azuis e efeitos visuais profissionais
- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Carregamento rápido e experiência fluida
- **Integração com API**: Consome dados do backend REST em tempo real
- **Animações Suaves**: Transições e efeitos hover para melhor UX

## 🚀 Tecnologias Utilizadas

- **Angular 18** - Framework principal
- **Angular Material** - Componentes UI profissionais
- **TypeScript** - Linguagem de programação
- **SCSS** - Pré-processador CSS
- **RxJS** - Programação reativa para consumo da API

## 📋 Pré-requisitos

- Node.js 18+ e npm
- Backend API rodando na porta 8080 (veja [backend-api/README.md](../backend-api/README.md))

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# O projeto já vem com todas as dependências instaladas
```

## 🏃 Como Executar

### 1. Iniciar o Backend (em outro terminal)

```bash
cd ../backend-api
npm start
```

O backend estará disponível em: `http://localhost:8080`

### 2. Iniciar o Frontend

```bash
# Desenvolvimento
npm start
# ou
ng serve

# Acesse: http://localhost:4200
```

A aplicação será automaticamente recarregada quando você modificar os arquivos fonte.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── app.component.*       # Componente principal
│   ├── app.config.ts         # Configurações da aplicação
│   └── shared/
│       ├── components/
│       │   └── curso-card/   # Card de exibição de curso
│       └── services/
│           └── cursos.service.ts  # Serviço de comunicação com API
├── index.html
├── main.ts
└── styles.scss               # Estilos globais e tema dark
```

## 🎯 Funcionalidades

### Página Principal
- **Hero Section**: Banner com chamada principal e CTAs
- **Grid de Cursos**: Exibição em cards responsivos
- **Estados de Loading**: Feedback visual durante carregamento
- **Empty State**: Mensagem quando não há cursos disponíveis

### Cards de Curso
Cada card exibe:
- Título e descrição do curso
- Preço à vista e parcelado
- Botão de call-to-action
- Efeitos hover elegantes

## 🔗 Integração com Backend

O frontend consome a API REST do backend através do serviço `CursosService`:

- **Endpoint**: `http://localhost:8080/api/cursos`
- **Método**: GET
- **Resposta**: Array de objetos com `titulo`, `descricao`, `valorAA`, `valorMes`

Exemplo de resposta esperada:
```json
[
  {
    "titulo": "Introdução à Inteligência Artificial",
    "descricao": "Curso completo para iniciantes...",
    "valorAA": "1.200,00",
    "valorMes": "150,00"
  }
]
```

## 🎨 Paleta de Cores

O projeto utiliza uma paleta dark moderna:

- **Preto Profundo**: `#0a0a0a`, `#121212`, `#1a1a1a`
- **Azul Escuro**: `#0d1b2a`, `#1b263b`, `#415a77`
- **Azul Vibrante**: `#4a9eff`, `#0066ff`
- **Acentos**: Gradientes azuis para destaques

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm start          # Inicia servidor de desenvolvimento
ng serve          # Alternativa

# Build
ng build          # Build para produção
ng build --prod   # Build otimizado para produção

# Testes
ng test           # Executar testes unitários
ng e2e            # Executar testes end-to-end

# Análise
ng lint           # Verificar código com ESLint
```

## 📦 Build para Produção

```bash
# Gerar build otimizado
ng build --configuration production

# Os arquivos serão gerados em dist/interativo/
# Prontos para deploy em qualquer servidor web estático
```

## 🔄 Deploy

O build pode ser feito deploy em:
- **Netlify** / **Vercel** - Deploy automático
- **GitHub Pages** - Hospedagem estática
- **AWS S3** / **Azure Storage** - Cloud storage
- Qualquer servidor web estático (Nginx, Apache)

## 🐛 Troubleshooting

### Backend não conecta
- Verifique se o backend está rodando em `http://localhost:8080`
- Confirme que o CORS está habilitado no backend
- Verifique o console do navegador para erros

### Estilos não aplicados
- Execute `npm install` novamente
- Limpe o cache: `ng cache clean`

### Porta 4200 já em uso
```bash
ng serve --port 4201  # Use outra porta
```

## 📚 Recursos

- [Documentação Angular](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [TypeScript](https://www.typescriptlang.org)

## 👨‍💻 Desenvolvimento

### Gerar Componente
```bash
ng generate component nome-do-componente
```

### Gerar Serviço
```bash
ng generate service shared/services/nome-do-servico
```

## 📝 Licença

Este projeto é privado e propriedade de Interativo.

---

**Desenvolvido com ❤️ para Interativo**
