// eslint.config.js
/** @type {import('eslint').Linter.Config} */
const config = [
    {
      languageOptions: {
        ecmaVersion: 12,  // Usa ECMAScript 2021
        sourceType: 'module',  // Permite usar import/export
      },
      plugins: {
        node: require('eslint-plugin-node'),  // Asegúrate de tener el plugin correctamente configurado
      },
      rules: {
        // Aquí puedes agregar tus reglas personalizadas
      },
    },
    // Configuración adicional (como reglas recomendadas)
    {
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',  // Ejemplo de regla
      },
    },
  ];
  
  module.exports = config;
  