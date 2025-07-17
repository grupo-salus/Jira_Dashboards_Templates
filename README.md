# 📧 Sistema Visualizador de Templates

Um sistema simples e elegante para visualizar templates HTML de notificações de projetos. Organizado de forma modular com JavaScript ES6.

## 🚀 Funcionalidades

- ✅ Visualização de 10 templates diferentes para status de projetos
- ✅ Interface responsiva e moderna
- ✅ Navegação por teclado (setas, números)
- ✅ Menu mobile com hamburger
- ✅ Estrutura modular e organizada
- ✅ Sistema de navegação intuitivo

## 📁 Estrutura do Projeto

```
testestes/
├── assets/
│   ├── css/
│   │   └── main.css          # Estilos principais
│   └── js/
│       ├── app.js            # Arquivo principal da aplicação
│       ├── templates-config.js # Configurações dos templates
│       ├── navigation.js      # Módulo de navegação
│       └── template-viewer.js # Visualizador principal
├── templates/
│   ├── template-projeto-criado.html
│   ├── template-ideacao.html
│   ├── template-analise-tecnica.html
│   ├── template-backlog-priorizado.html
│   ├── template-desenvolvimento.html
│   ├── template-homologacao.html
│   ├── template-operacao-assistida.html
│   ├── template-entregue.html
│   ├── template-cancelado.html
│   └── template-bloqueado.html
├── index.html               # Arquivo principal
├── package.json            # Dependências e scripts
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (opcional, para servidor local)

### Instalação

1. Clone ou baixe o projeto
2. Navegue até a pasta do projeto
3. (Opcional) Instale as dependências de desenvolvimento:
   ```bash
   npm install
   ```

### Executar

**Opção 1: Servidor local (recomendado)**

```bash
npm run dev
```

**Opção 2: Servidor simples**

```bash
npm start
```

**Opção 3: Abrir diretamente**
Abra o arquivo `index.html` em seu navegador.

## ⌨️ Atalhos de Teclado

- `←` / `→` - Navegar entre templates
- `1-9` - Ir para template específico (1-9)
- `0` - Ir para o 10º template (Bloqueado)
- `ESC` - Fechar menu mobile

## 🎨 Templates Disponíveis

1. **Projeto Criado** - Notificação de criação de projeto
2. **Ideação** - Fase inicial de concepção
3. **Análise Técnica** - Avaliação de viabilidade
4. **Backlog Priorizado** - Projeto aprovado e priorizado
5. **Em Desenvolvimento** - Desenvolvimento ativo
6. **Em Homologação** - Fase de testes
7. **Operação Assistida** - Produção com suporte
8. **Entregue** - Projeto concluído
9. **Cancelado** - Projeto cancelado
10. **Bloqueado** - Projeto com impedimentos

## 🏗️ Arquitetura

### Módulos JavaScript

- **`app.js`** - Ponto de entrada da aplicação
- **`templates-config.js`** - Configurações dos templates
- **`navigation.js`** - Lógica de navegação e atalhos
- **`template-viewer.js`** - Visualizador principal

### Características Técnicas

- **ES6 Modules** - Código modular e organizado
- **CSS Separado** - Estilos organizados em arquivo próprio
- **Responsivo** - Funciona em desktop e mobile
- **Sem Dependências** - Funciona apenas com HTML/CSS/JS

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Dispositivos mobile

## 🔧 Personalização

### Adicionar Novo Template

1. Crie o arquivo HTML na pasta `templates/`
2. Adicione a configuração em `assets/js/templates-config.js`
3. Adicione o item na lista do `index.html`

### Modificar Estilos

Edite o arquivo `assets/css/main.css` para personalizar a aparência.

## 📝 Uso com Jira Automation

Este sistema é ideal para visualizar templates que serão usados em scripts de automação do Jira. Os templates HTML podem ser facilmente integrados em workflows de automação.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Faça um push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `package.json` para detalhes.
