# AudioCore - Sistema de Gerenciamento Full-Stack

Sistema completo de gerenciamento desenvolvido com **Django REST Framework** no backend e **React + TypeScript** no frontend. Projeto criado para fins de estudo e demonstração de habilidades em desenvolvimento full-stack.

## 🚀 Tecnologias Utilizadas

### Backend (Django)
- **Django 5.2.9** - Framework web Python
- **Django REST Framework 3.16.1** - API REST
- **Django CORS Headers 4.9.0** - Configuração CORS
- **Django REST Framework SimpleJWT 5.3.0** - Autenticação JWT
- **SQLite** - Banco de dados (desenvolvimento)

### Frontend (React)
- **React 19.2.0** - Biblioteca JavaScript
- **TypeScript 5.9.3** - Tipagem estática
- **Vite 7.2.4** - Build tool e dev server
- **Tailwind CSS 4.1.17** - Framework CSS
- **React Router DOM 7.10.1** - Roteamento
- **React Hook Form 7.68.0** - Gerenciamento de formulários
- **Zod 4.1.13** - Validação de schemas
- **Axios 1.7.9** - Cliente HTTP
- **Lucide React 0.556.0** - Ícones

## 📋 Pré-requisitos

- **Python 3.13+**
- **Node.js 18+**
- **npm** ou **yarn**
- **Git**

## 🛠️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd core-control
```

### 2. Configuração do Backend (Django)

#### Navegue para a pasta do servidor
```bash
cd server
```

#### Crie e ative o ambiente virtual
```bash
# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual (Windows)
venv\Scripts\activate

# Ativar ambiente virtual (Linux/Mac)
source venv/bin/activate
```

#### Instale as dependências
```bash
pip install -r requirements.txt
```

#### Configure o banco de dados
```bash
# Criar migrações
python manage.py makemigrations

# Aplicar migrações
python manage.py migrate

# Criar superusuário (opcional)
python manage.py createsuperuser
```

#### Execute o servidor Django
```bash
python manage.py runserver
```

**Backend disponível em:** `http://localhost:8000`

### 3. Configuração do Frontend (React)

#### Abra um novo terminal e navegue para a pasta do cliente
```bash
cd client
```

#### Instale as dependências
```bash
npm install
```

#### Execute o servidor de desenvolvimento
```bash
npm run dev
```

**Frontend disponível em:** `http://localhost:5173`

## 📁 Estrutura Detalhada do Projeto

```
core-control/
├── server/                          # Backend Django
│   ├── apps/                        # Aplicações Django
│   │   ├── __init__.py
│   │   ├── auth/                    # Autenticação JWT
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── models.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   ├── views.py
│   │   │   └── migrations/
│   │   ├── clients/                 # Gerenciamento de clientes
│   │   │   ├── __init__.py
│   │   │   ├── admin.py
│   │   │   ├── apps.py
│   │   │   ├── models.py
│   │   │   ├── serializers.py
│   │   │   ├── tests.py
│   │   │   ├── urls.py
│   │   │   ├── views.py
│   │   │   └── migrations/
│   │   └── products/                # Gerenciamento de produtos
│   │       ├── __init__.py
│   │       ├── admin.py
│   │       ├── apps.py
│   │       ├── models.py
│   │       ├── serializers.py
│   │       ├── tests.py
│   │       ├── urls.py
│   │       ├── views.py
│   │       └── migrations/
│   ├── config/                      # Configurações do Django
│   │   ├── __init__.py
│   │   ├── asgi.py
│   │   ├── settings.py              # Configurações principais
│   │   ├── urls.py                  # URLs principais
│   │   └── wsgi.py
│   ├── core/                        # Utilitários e helpers
│   ├── venv/                        # Ambiente virtual Python
│   ├── db.sqlite3                   # Banco de dados SQLite
│   ├── manage.py                    # Script de gerenciamento Django
│   ├── requirements.txt             # Dependências Python
│   └── .env.example                 # Variáveis de ambiente exemplo
│
├── client/                          # Frontend React
│   ├── public/                      # Arquivos estáticos
│   │   ├── logo.svg
│   │   └── vite.svg
│   ├── src/                         # Código fonte React
│   │   ├── assets/                  # Recursos estáticos
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   └── layout/              # Componentes de layout
│   │   │       ├── Header.tsx
│   │   │       └── Footer.tsx
│   │   ├── hooks/                   # Custom hooks
│   │   ├── pages/                   # Páginas da aplicação
│   │   │   └── Home.tsx
│   │   ├── routes/                  # Configuração de rotas
│   │   ├── schemas/                 # Schemas de validação (Zod)
│   │   ├── services/                # Serviços e APIs
│   │   ├── App.css                  # Estilos do componente App
│   │   ├── App.tsx                  # Componente principal
│   │   ├── index.css                # Estilos globais
│   │   ├── main.tsx                 # Ponto de entrada
│   │   └── vite-env.d.ts           # Tipos do Vite
│   ├── eslint.config.js             # Configuração ESLint
│   ├── index.html                   # HTML principal
│   ├── package.json                 # Dependências Node.js
│   ├── package-lock.json            # Lock das dependências
│   ├── tsconfig.json                # Configuração TypeScript
│   ├── tsconfig.app.json            # Config TS para app
│   ├── tsconfig.node.json           # Config TS para Node
│   ├── vite.config.ts               # Configuração Vite
│   └── README.md                    # Documentação do frontend
│
├── .git/                            # Controle de versão Git
├── .gitignore                       # Arquivos ignorados pelo Git
└── README.md                        # Documentação principal
```

## 🔧 Scripts Disponíveis

### Backend (Django)
```bash
# Desenvolvimento
python manage.py runserver           # Iniciar servidor de desenvolvimento
python manage.py makemigrations      # Criar migrações
python manage.py migrate             # Aplicar migrações
python manage.py shell               # Shell interativo do Django
python manage.py createsuperuser     # Criar superusuário
python manage.py collectstatic       # Coletar arquivos estáticos

# Testes
python manage.py test                # Executar testes
```

### Frontend (React)
```bash
# Desenvolvimento
npm run dev                          # Servidor de desenvolvimento
npm run build                        # Build para produção
npm run preview                      # Preview do build
npm run lint                         # Verificar código com ESLint
```

## 🌐 Endpoints da API

### Autenticação
- `POST /api/token/` - Obter token JWT
- `POST /api/token/refresh/` - Renovar token JWT

### Clientes
- `GET /api/clients/` - Listar clientes
- `POST /api/clients/` - Criar cliente
- `GET /api/clients/{id}/` - Detalhes do cliente
- `PUT /api/clients/{id}/` - Atualizar cliente
- `DELETE /api/clients/{id}/` - Deletar cliente

### Produtos
- `GET /api/products/` - Listar produtos
- `POST /api/products/` - Criar produto
- `GET /api/products/{id}/` - Detalhes do produto
- `PUT /api/products/{id}/` - Atualizar produto
- `DELETE /api/products/{id}/` - Deletar produto

### Admin
- `GET /admin/` - Painel administrativo Django

## 🔒 Configurações de Segurança

- **CORS** configurado para desenvolvimento local
- **Autenticação JWT** com tokens de acesso e refresh
- **Validação de dados** com serializers Django e schemas Zod
- **Proteção CSRF** habilitada
- **Middleware de segurança** configurado

## 🚀 Deploy e Produção

### Variáveis de Ambiente
Crie um arquivo `.env` baseado no `.env.example`:

```env
DEBUG=False
SECRET_KEY=sua-chave-secreta-aqui
ALLOWED_HOSTS=seu-dominio.com
DATABASE_URL=sua-url-do-banco
```

### Build de Produção
```bash
# Frontend
cd client
npm run build

# Backend
cd server
pip install -r requirements.txt
python manage.py collectstatic
python manage.py migrate
```

## 🧪 Testes

### Backend
```bash
cd server
python manage.py test
```

### Frontend
```bash
cd client
npm run test
```

## 📝 Funcionalidades Implementadas

- ✅ **API REST completa** com Django REST Framework
- ✅ **Autenticação JWT** com refresh tokens
- ✅ **Interface responsiva** com Tailwind CSS
- ✅ **Validação de formulários** com React Hook Form + Zod
- ✅ **Roteamento** com React Router
- ✅ **Gerenciamento de estado** com hooks React
- ✅ **Tipagem completa** com TypeScript
- ✅ **Configuração CORS** para integração frontend/backend
- ✅ **Painel administrativo** Django
- ✅ **Estrutura modular** e escalável

## 🤝 Contribuição

Este é um projeto de estudo. Sugestões e melhorias são bem-vindas!

## 📄 Licença

Este projeto é para fins educacionais e de demonstração.

---

**Desenvolvido com ❤️ para aprendizado e demonstração de habilidades full-stack**
