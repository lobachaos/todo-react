# 📋 Todo React

A modern task management application, developed with React, TypeScript, and Tailwind CSS.

## 🚀 Technologies

- **React 19** - UI Framework
- **TypeScript** - Static typing
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **React Router** - Page routing
- **Phosphor Icons** - Icon library
- **usehooks-ts** - Custom hooks utilities

## 📁 Project Architecture

```
src/
├── components/              # Reusable components
│   ├── Badge.tsx           # Badge component with variants
│   ├── Buttons.tsx         # Button component with CVA
│   ├── TaskItem.tsx        # Individual task item
│   └── TaskList.tsx        # Task list container
├── core-components/        # Layout components
│   ├── Header.tsx          # Application header
│   └── Footer.tsx          # Application footer
├── hooks/                  # Custom React Hooks
│   ├── useTask.ts          # Hook for task operations
│   └── useTasks.ts         # Hook for task calculations
├── models/                 # Type definitions and constants
│   └── task.ts             # Task types and enums
├── pages/                  # Page components
│   ├── pageHome.tsx        # Home page
│   └── layoutMain.tsx      # Main layout wrapper
├── App.tsx                 # Root component with routing
├── main.tsx                # Application entry point
└── index.css               # Global styles with Tailwind
```

## 🏗️ Detailed Architecture

### **Models** (`src/models/`)
Defines data structures and constants:
- `TaskStatus`: Completion states (PENDING, COMPLETED)
- `TaskState`: Editing states (CREATING, CREATED)
- `Task`: Main interface with id, title, status, state

### **Hooks** (`src/hooks/`)
- **`useTask.ts`**: Manages CRUD operations
  - `prepareTask()` - Creates new task
  - `updateTask()` - Updates task title
  - `updateTaskStatus()` - Marks as completed/pending
  - `deleteTask()` - Removes task
  - Also returns: `createdTasks`, `concludedTasks`

- **`useTasks.ts`**: Calculates statistics
  - Filters tasks by status
  - Returns counts for badges

### **Components** (`src/components/`)
- **`TaskList.tsx`**: Main container
  - Manages task list rendering
  - Displays statistics badges
  - Add new task button

- **`TaskItem.tsx`**: Individual item
  - Checkbox to mark as complete
  - Inline title editing
  - Edit and delete buttons
  - Visual effect (line-through) for completed tasks

- **`Buttons.tsx`**: Reusable button component
  - Variants: primary, secondary, tertiary
  - Sizes: small, medium, large
  - Uses CVA (Class Variance Authority)

- **`Badge.tsx`**: Badge component
  - Variants: green, pink
  - Displays task counts

### **Core Components** (`src/core-components/`)
- **`Header.tsx`**: Application header
- **`Footer.tsx`**: Fixed footer at bottom of page

### **Data Persistence**
- Uses `useLocalStorage` to persist tasks
- Key: `tasks`
- Real-time automatic updates

## 🎯 Data Flow

```
App (Router)
  └─ LayoutMain
      ├─ Header
      ├─ PageHome
      │   └─ TaskList (useTask, useTasks)
      │       └─ TaskItem[] (useTask)
      └─ Footer
```

## 💾 Local State (localStorage)

```json
{
  "tasks": [
    {
      "id": "abc123",
      "title": "Buy groceries",
      "status": "PENDING",
      "state": "CREATED"
    }
  ]
}
```

## 🔧 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📝 Styling

- **Tailwind CSS v4**: Utility-first styling
- **Custom theme**: Colors (green, pink, gray)
- **Responsive**: Mobile-first design
- **Breakpoints**: sm, md, lg

## 🎨 Color Palette

- `green-base`: #52A350 - Created tasks
- `green-dark`: #2F5C2D
- `green-light`: #CDDFCC
- `pink-base`: #C257A4 - Completed tasks
- `pink-dark`: #884074
- `pink-light`: #E9CCE1

## 📦 Main Dependencies

- `react`: UI library
- `react-router`: Page routing
- `usehooks-ts`: Custom hooks utilities
- `@phosphor-icons/react`: Icons
- `tailwindcss`: CSS utilities
- `class-variance-authority`: Component variants

---

**Built with ❤️ using React + TypeScript**
