const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8'); // <-- Agregado UTF-8

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(`
      <html>
        <head>
          <title>Bienvenidos a mi servidor Node.js</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f8ff;
              text-align: center;
              padding: 50px;
            }
            h1 {
              color: #4682b4;
            }
            p {
              font-size: 18px;
              color: #2f4f4f;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: gray;
            }
          </style>
        </head>
        <body>
          <h1>¡Hola, Mundo!</h1>
          <p>Servidor Node.js en funcionamiento</p>
          <p>Hora actual: ${new Date().toLocaleString()}</p>
          <div class="footer">
            <p>Servidor corriendo en http://localhost:${PORT}/</p>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === '/json') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8'); // <-- Agregado UTF-8
    res.end(JSON.stringify({
      message: '¡Hola, Mundo!',
      date: new Date().toLocaleString(),
      status: 'Servidor en ejecución'
    }));
  } else {
    res.statusCode = 404;
    res.end('<html><body><h1>404 Not Found</h1></body></html>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
