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
Jira_Dashboards_Templates/
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
└── README.md               # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- VS Code com extensão Live Server
- Extensão MinifyAll para VS Code

### Instalação

1. Clone ou baixe o projeto
2. Abra a pasta no VS Code
3. Instale a extensão **Live Server** no VS Code
4. Instale a extensão **MinifyAll** no VS Code

### Executar

1. Abra o arquivo `index.html` no VS Code
2. Clique com o botão direito no arquivo
3. Selecione "Open with Live Server"
4. O projeto será aberto no navegador automaticamente

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

### Configuração no Jira

1. Acesse o [Jira Automation](https://tigruposalus.atlassian.net/jira/software/c/projects/EP/settings/automate#/rule-list?systemLabelId=project&page=1&pageSize=20&sortKey=name&sortOrder=ASC)
2. Navegue até a seção de **Emails**
3. Configure suas regras de automação

### Preparando Templates para Email

Para usar os templates no Jira Automation, é necessário comprimir o HTML em uma única linha:

1. **Instale a extensão MinifyAll** no VS Code
2. **Abra o template HTML** que deseja usar
3. **Clique com o botão direito** no arquivo
4. **Selecione a opção de minificação** da extensão MinifyAll
5. **Um novo arquivo será criado** com o HTML comprimido em uma única linha
6. **Copie o conteúdo** do arquivo minificado
7. **Cole no campo de template** do Jira Automation

### Por que Minificar?

Os templates HTML precisam estar em uma única linha para funcionar corretamente nos scripts de automação do Jira. A extensão MinifyAll facilita esse processo automaticamente.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Faça um push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
