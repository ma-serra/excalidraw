# FIRAC Legal Editor

Um editor jurídico estruturado baseado na metodologia FIRAC (Facts, Issue, Rule, Application, Conclusion) para análise legal sistemática.

## 📋 Sobre o FIRAC

FIRAC é uma metodologia fundamental para análise jurídica que divide o processo em cinco componentes essenciais:

- **F - Facts (Fatos)**: Descrição objetiva dos fatos relevantes do caso
- **I - Issue (Questão)**: Identificação da questão legal principal
- **R - Rule (Regra)**: Citação da lei, jurisprudência ou doutrina aplicável
- **A - Application (Aplicação)**: Aplicação da regra aos fatos específicos
- **C - Conclusion (Conclusão)**: Conclusão baseada na análise realizada

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18.0.0 ou superior
- Yarn ou npm

### Instalação

1. Navegue até o diretório do projeto:

```bash
cd examples/excalidraw/firac-editor
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

### Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

O editor será aberto automaticamente em `http://localhost:3000`

### Build

Para criar uma versão de produção:

```bash
yarn build
# ou
npm run build
```

Para visualizar a versão de produção:

```bash
yarn preview
# ou
npm run preview
```

## 🎨 Funcionalidades

- ✍️ **Edição Estruturada**: Cinco seções dedicadas seguindo a metodologia FIRAC
- 💾 **Exportação**: Exporte sua análise em formato JSON
- 🗑️ **Limpeza Rápida**: Limpe todo o conteúdo com um clique
- 📊 **Contador de Caracteres**: Acompanhe o tamanho de cada seção
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- 🎨 **Interface Moderna**: Design limpo e intuitivo

## 💻 Tecnologias Utilizadas

- React 18.2.0
- TypeScript 4.9.4
- Vite 5.0.12
- CSS3 com design responsivo

## 📖 Como Usar

1. **Facts (Fatos)**: Comece descrevendo os fatos objetivos e relevantes do seu caso
2. **Issue (Questão)**: Identifique a questão legal principal que precisa ser resolvida
3. **Rule (Regra)**: Cite as leis, jurisprudências ou princípios legais aplicáveis
4. **Application (Aplicação)**: Aplique as regras legais aos fatos específicos do caso
5. **Conclusion (Conclusão)**: Apresente sua conclusão baseada na análise

### Exportando sua Análise

Clique no botão "Exportar Análise" para baixar um arquivo JSON com todo o conteúdo da sua análise jurídica, incluindo timestamp.

## 📝 Estrutura do Projeto

```
firac-editor/
├── src/
│   ├── FIRACEditor.tsx    # Componente principal do editor
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── styles.css         # Estilos do editor
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração TypeScript
├── vite.config.ts         # Configuração Vite
└── README.md             # Este arquivo
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📄 Licença

Este projeto faz parte do repositório Excalidraw e segue a licença MIT.
