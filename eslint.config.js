// eslint.config.js
/** @type {import('eslint').Linter.Config} */
const config = [
    {
      // Configuración recomendada de ESLint
      parserOptions: {
        ecmaVersion: 12,  // Usa ECMAScript 2021
        sourceType: 'module',  // Permite usar import/export
      },
      env: {
        node: true,  // Define el entorno como Node.js
        es2021: true,  // Habilita las características modernas de ECMAScript
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
  