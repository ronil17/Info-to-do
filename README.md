# 📝 Simple React To-Do App with Context API & Tailwind CSS

A clean and responsive **To-Do List Application** built with **React.js**, **TypeScript**, **Context API** for state management, and styled using **Tailwind CSS**. This app allows you to efficiently manage tasks with features like adding, completing, deleting, and filtering tasks.  

---

## 🚀 Features

1. **Add Tasks**: Create new tasks with a title.  
2. **Mark as Completed**: Toggle task completion status.  
3. **Delete Tasks**: Remove tasks from the list.  
4. **Filter Tasks**: View tasks by status — All, Completed, or Pending.  
5. **Task Statistics**: Displays the count of completed and pending tasks.  
6. **Responsive Design**: Optimized for both desktop and mobile devices.  
7. **Dark Mode Support**: Fully functional light/dark theme.

---

## 📂 Project Structure

- **Context API**: Used for managing the global state of tasks.  
- **Functional Components**: All components are stateless and functional for simplicity and performance.  
- **Tailwind CSS**: Provides a modern, responsive, and utility-first styling approach.  

---

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   cd react-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

---

## 🖼️ Preview

![To-Do App Screenshot](https://via.placeholder.com/600x300)  
_A clean and modern interface for managing your tasks._

---

## 🔧 Technologies Used

- **React.js**: Frontend framework for building UI components.  
- **TypeScript**: Ensures type safety and better developer experience.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Vite**: Fast development environment for React.

---

## 🌟 How It Works

1. **Global State**:  
   The app uses `TaskContext` to manage task data across the app.

2. **Filter Functionality**:  
   Tasks are filtered by their status (`All`, `Completed`, `Pending`) using simple logic in the context state.

3. **Dark Mode**:  
   Automatically adapts to the user's system preferences or browser settings.

---

## 🤝 Contributing

Feel free to fork the project, create a new branch, and submit a pull request with your improvements or suggestions.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy managing your tasks with this simple and elegant to-do app! 😊

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
