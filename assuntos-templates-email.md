# Assuntos dos Templates de Email - Jira Dashboards Templates

Este documento contém os assuntos sugeridos para cada template de email do projeto, organizados por contexto e finalidade.

## 📋 Templates de Status de Projeto

### 🚀 Projeto Criado

**Template:** `template-projeto-criado.html`
**Assunto:** `[JIRA] Novo projeto criado: {{issue.summary}}`

### 📊 Backlog Priorizado

**Template:** `template-backlog-priorizado.html`
**Assunto:** `[JIRA] Backlog priorizado - Sprint {{issue.customfield_10345}}`

## 🔄 Templates de Status de Tarefa

### 💡 Ideação

**Template:** `template-ideacao.html`
**Assunto:** `[JIRA] Tarefa em ideação: {{issue.summary}}`

### 🔍 Análise Técnica

**Template:** `template-analise-tecnica.html`
**Assunto:** `[JIRA] Análise técnica iniciada: {{issue.summary}}`

### 🛠️ Desenvolvimento

**Template:** `template-desenvolvimento.html`
**Assunto:** `[JIRA] Desenvolvimento em andamento: {{issue.summary}}`

### 🧪 Homologação

**Template:** `template-homologacao.html`
**Assunto:** `[JIRA] Tarefa em homologação: {{issue.summary}}`

### ✅ Entregue

**Template:** `template-entregue.html`
**Assunto:** `[JIRA] Tarefa entregue: {{issue.summary}}`

### 🚫 Bloqueado

**Template:** `template-bloqueado.html`
**Assunto:** `[JIRA] Tarefa bloqueada: {{issue.summary}}`

### ❌ Cancelado

**Template:** `template-cancelado.html`
**Assunto:** `[JIRA] Tarefa cancelada: {{issue.summary}}`

### 🔧 Operação Assistida

**Template:** `template-operacao-assistida.html`
**Assunto:** `[JIRA] Operação assistida: {{issue.summary}}`

## 📝 Notas de Uso

- Substitua as variáveis entre chaves duplas `{{}}` pelos valores reais do seu projeto
- O prefixo `[JIRA]` ajuda na identificação rápida dos emails relacionados ao sistema
- Mantenha os assuntos concisos e informativos
- Considere adicionar o número da sprint ou release quando relevante

## 🔄 Variáveis Comuns dos Templates

### 📋 Variáveis Principais

- `{{issue.summary}}` - Título/nome do projeto ou tarefa
- `{{issue.key}}` - Chave da issue (ex: PROJ-123)
- `{{issue.status}}` - Status atual da tarefa
- `{{issue.priority}}` - Prioridade da tarefa
- `{{issue.description}}` - Descrição da tarefa
- `{{issue.created}}` - Data de criação
- `{{issue.resolutiondate}}` - Data de resolução/conclusão

### 👤 Informações do Solicitante

- `{{issue.customfield_10093}}` - Nome do solicitante
- `{{issue.customfield_10247}}` - E-mail do solicitante
- `{{issue.customfield_10245}}` - Departamento
- `{{issue.customfield_10250}}` - Diretor responsável

### 📅 Datas e Controle

- `{{issue.customfield_10345}}` - Data de entrada na ideação
- `{{issue.customfield_10355}}` - Data de entrega
- `{{now}}` - Data/hora atual do envio

### 🔗 Links e URLs

- `{{baseUrl}}` - URL base do Jira
- `{{baseUrl}}/browse/{{issue.key}}` - Link direto para a issue

### 📊 Campos Customizados Específicos

- `{{issue.customfield_10413}}` - Responsável final
- `{{issue.customfield_10481}}` - Objetivo do projeto
- `{{issue.customfield_10248}}` - Benefícios esperados
- `{{issue.customfield_10480}}` - Impacto esperado

---

_Documento gerado automaticamente para o projeto Jira Dashboards Templates_
