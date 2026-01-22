# 📋 Todo React

Uma aplicação de gerenciamento de tarefas moderna, desenvolvida com React, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilização
- **React Router** - Roteamento
- **Phosphor Icons** - Ícones
- **usehooks-ts** - Custom hooks

## 📁 Arquitetura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── Badge.tsx           # Componente de badge com variantes
│   ├── Buttons.tsx         # Componente de botões com CVA
│   ├── TaskItem.tsx        # Item individual de tarefa
│   └── TaskList.tsx        # Lista de tarefas
├── core-components/        # Componentes de layout
│   ├── Header.tsx          # Cabeçalho da aplicação
│   └── Footer.tsx          # Rodapé da aplicação
├── hooks/                  # Custom React Hooks
│   ├── useTask.ts          # Hook para operações de tarefas individuais
│   └── useTasks.ts         # Hook para cálculos e leitura de tarefas
├── models/                 # Definições de tipos e constantes
│   └── task.ts             # Tipos de Task, TaskStatus, TaskState
├── pages/                  # Componentes de páginas
│   ├── pageHome.tsx        # Página principal
│   └── layoutMain.tsx      # Layout principal
├── App.tsx                 # Componente raiz com rotas
├── main.tsx                # Entry point da aplicação
└── index.css               # Estilos globais com Tailwind
```

## 🏗️ Arquitetura Detalhada

### **Models** (`src/models/`)
Define a estrutura de dados e constantes:
- `TaskStatus`: Estados de conclusão (PENDING, COMPLETED)
- `TaskState`: Estados de edição (CREATING, CREATED)
- `Task`: Interface principal com id, title, status, state

### **Hooks** (`src/hooks/`)
- **`useTask.ts`**: Gerencia operações CRUD
  - `prepareTask()` - Cria nova tarefa
  - `updateTask()` - Atualiza título
  - `updateTaskStatus()` - Marca como concluída/pendente
  - `deleteTask()` - Remove tarefa
  - Retorna também: `createdTasks`, `concludedTasks`

- **`useTasks.ts`**: Calcula estatísticas
  - Filtra tarefas por status
  - Retorna contagens para as badges

### **Componentes** (`src/components/`)
- **`TaskList.tsx`**: Container principal
  - Gerencia lista de tarefas
  - Exibe badges com estatísticas
  - Botão para adicionar nova tarefa

- **`TaskItem.tsx`**: Item individual
  - Checkbox para marcar como concluído
  - Edição inline de título
  - Buttons de editar e deletar
  - Efeito visual (line-through) para concluídas

- **`Buttons.tsx`**: Componente de botões reutilizável
  - Variantes: primary, secondary, tertiary
  - Tamanhos: small, medium, large
  - Usa CVA (Class Variance Authority)

- **`Badge.tsx`**: Componente de badge
  - Variantes: green, pink
  - Exibe contagens de tarefas

### **Core Components** (`src/core-components/`)
- **`Header.tsx`**: Cabeçalho da aplicação
- **`Footer.tsx`**: Rodapé fixo no final da página

### **Persistência de Dados**
- Usa `useLocalStorage` para persistir tarefas no localStorage
- Chave: `tasks`
- Atualização automática em tempo real

## 🎯 Fluxo de Dados

```
App (Router)
  └─ LayoutMain
      ├─ Header
      ├─ PageHome
      │   └─ TaskList (useTask, useTasks)
      │       └─ TaskItem[] (useTask)
      └─ Footer
```

## 💾 Estado Local (localStorage)

```json
{
  "tasks": [
    {
      "id": "abc123",
      "title": "Fazer compras",
      "status": "PENDING",
      "state": "CREATED"
    }
  ]
}
```

## 🔧 Scripts

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📝 Estilos

- **Tailwind CSS v4**: Estilização utilitária
- **Tema customizado**: Cores (green, pink, gray)
- **Responsivo**: Mobile-first design
- **Breakpoints**: sm, md, lg

## 🎨 Paleta de Cores

- `green-base`: #52A350 - Tarefas criadas
- `green-dark`: #2F5C2D
- `green-light`: #CDDFCC
- `pink-base`: #C257A4 - Tarefas concluídas
- `pink-dark`: #884074
- `pink-light`: #E9CCE1

## 📦 Dependências Principais

- `react`: UI library
- `react-router`: Roteamento de páginas
- `usehooks-ts`: Utilities hooks
- `@phosphor-icons/react`: Ícones
- `tailwindcss`: CSS utilities
- `class-variance-authority`: Variantes de componentes

---

**Desenvolvido com ❤️ usando React + TypeScript**
