# Guia de Instalação e Execução do Projeto

Este projeto contém um backend Django (api-wind) e um frontend React (client-wind).

## Pré-requisitos

- Python 3.13 (ou superior)
- Node.js (versão 18 ou superior)
- npm ou yarn

---

## 🔧 Configuração do Backend (Django)

### 1. Navegar até a pasta do backend

```cmd
cd api-wind
```

### 2. Criar e ativar o ambiente virtual

**Criar o ambiente virtual:**

```cmd
python -m venv venv
```

**Ativar o ambiente virtual:**

```cmd
venv\Scripts\activate
```

Você verá `(venv)` no início da linha do terminal quando estiver ativado.

### 3. Instalar as dependências

```cmd
pip install -r requirements.txt
```

### 4. Executar as migrações do banco de dados

```cmd
python manage.py migrate
```

### 5. (Opcional) Criar um superusuário

```cmd
python manage.py createsuperuser
```

### 6. Rodar o servidor Django

```cmd
python manage.py runserver
```

O backend estará rodando em: **http://localhost:8000**

---

## ⚛️ Configuração do Frontend (React)

### 1. Abrir um NOVO terminal e navegar até a pasta do frontend

```cmd
cd client-wind
```

### 2. Instalar as dependências

```cmd
npm install
```

### 3. Rodar o servidor de desenvolvimento

```cmd
npm run dev
```

O frontend estará rodando em: **http://localhost:5173** (ou outra porta que o Vite indicar)

---

## 🚀 Executando o Projeto Completo

Você precisa manter **2 terminais abertos**:

### Terminal 1 - Backend (Django)

```cmd
cd api-wind
venv\Scripts\activate
python manage.py runserver
```

### Terminal 2 - Frontend (React)

```cmd
cd client-wind
npm run dev
```

---

## 📝 Comandos Úteis

### Backend (Django)

```cmd
# Criar novas migrações após alterar models
python manage.py makemigrations

# Aplicar migrações
python manage.py migrate

# Acessar o shell do Django
python manage.py shell

# Criar um app novo
python manage.py startapp nome_do_app
```

### Frontend (React)

```cmd
# Rodar em modo desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Verificar erros de lint
npm run lint
```

---

## 🔍 Verificando se está funcionando

1. Backend: Acesse http://localhost:8000/admin (se criou superusuário)
2. Frontend: Acesse http://localhost:5173
3. API: Teste endpoints como http://localhost:8000/api/clients/

---

## ⚠️ Problemas Comuns

### Erro: "No module named 'rest_framework'"

**Solução:** Certifique-se de que o ambiente virtual está ativado e rode:

```cmd
pip install djangorestframework
```

### Erro: "npm: command not found"

**Solução:** Instale o Node.js de https://nodejs.org/

### Erro: "python: command not found"

**Solução:** Certifique-se de que o Python está instalado e adicionado ao PATH

### Porta já em uso

**Solução:** Especifique outra porta:

```cmd
# Backend
python manage.py runserver 8001

# Frontend (edite vite.config.ts ou use --port)
npm run dev -- --port 5174
```

---

## 📂 Estrutura do Projeto

```
.
├── api-wind/          # Backend Django
│   ├── apps/          # Aplicações Django
│   ├── config/        # Configurações do projeto
│   ├── venv/          # Ambiente virtual Python
│   └── manage.py      # Script de gerenciamento Django
│
└── client-wind/       # Frontend React
    ├── src/           # Código fonte React
    ├── public/        # Arquivos estáticos
    └── package.json   # Dependências Node
```
