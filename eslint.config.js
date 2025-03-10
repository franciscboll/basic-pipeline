// eslint.config.js
module.exports = {
    extends: [
      'eslint:recommended',  // Establece las reglas recomendadas por ESLint
      'plugin:node/recommended' // Añade las reglas recomendadas para Node.js (opcional)
    ],
    env: {
      node: true,  // Define el entorno de Node.js
      es2021: true  // Habilita las características modernas de JavaScript
    },
    parserOptions: {
      ecmaVersion: 12,  // Usa la versión de ECMAScript que prefieras
      sourceType: 'module',  // Para usar imports/export en lugar de require
    },
    rules: {
      // Aquí puedes agregar reglas personalizadas
    },
  };
  