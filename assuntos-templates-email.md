# Assuntos dos Templates de Email - Jira Dashboards Templates

Este documento contém os assuntos sugeridos para cada template de email do projeto, organizados por contexto e finalidade.

## 📋 Templates de Status de Projeto

### 🚀 Projeto Criado

**Template:** `template-projeto-criado.html`
**Assunto:** `[JIRA] Seu projeto foi criado: {{issue.summary}}`

### 💡 Ideação

**Template:** `template-ideacao.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de ideação: {{issue.summary}}`

### 🔍 Análise Técnica

**Template:** `template-analise-tecnica.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de análise técnica: {{issue.summary}}`

### 📊 Backlog Priorizado

**Template:** `template-backlog-priorizado.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de backlog priorizado: {{issue.summary}}`

### 🛠️ Em Desenvolvimento

**Template:** `template-desenvolvimento.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de desenvolvimento: {{issue.summary}}`

### 🧪 Em Homologação

**Template:** `template-homologacao.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de homologação: {{issue.summary}}`

### 🔧 Operação Assistida

**Template:** `template-operacao-assistida.html`
**Assunto:** `[JIRA] Seu projeto entrou no status de operação assistida: {{issue.summary}}`

### ✅ Entregue

**Template:** `template-entregue.html`
**Assunto:** `[JIRA] Seu projeto foi entregue com sucesso: {{issue.summary}}`

### ❌ Cancelado

**Template:** `template-cancelado.html`
**Assunto:** `[JIRA] Seu projeto foi cancelado: {{issue.summary}}`

### 🚫 Bloqueado

**Template:** `template-bloqueado.html`
**Assunto:** `[JIRA] Seu projeto foi bloqueado: {{issue.summary}}`

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
