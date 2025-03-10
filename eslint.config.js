// eslint.config.js
/** @type {import('eslint').Linter.Config} */
const config = [
    {
      languageOptions: {
        ecmaVersion: 12,  // Usa ECMAScript 2021
        sourceType: 'module',  // Permite usar import/export
        globals: {
          // Define las variables globales
          MyGlobalVar: 'readonly',  // ejemplo de una variable global solo lectura
        },
      },
      rules: {
        // Aquí puedes agregar tus reglas personalizadas
      },
    },
    // Configuración adicional (como reglas recomendadas)
    {
      plugins: ['node'],  // Asegúrate de tener el plugin 'node' instalado si lo usas
      rules: {
        'node/no-unsupported-features/es-syntax': 'off', // Ejemplo de regla
      },
    },
  ];
  
  module.exports = config;
  