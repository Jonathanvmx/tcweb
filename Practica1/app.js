const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/submit_form.php", (req, res) => {
  console.log("=== DATOS RECIBIDOS DEL FORMULARIO ===");
  console.log("📋 Información Personal:");
  console.log(`• Nombre: ${req.body.nombre}`);
  console.log(`• Edad: ${req.body.edad}`);
  console.log(`• Email: ${req.body.email}`);
  console.log(`• Teléfono: ${req.body.telefono}`);
  console.log(`• Fecha de nacimiento: ${req.body.fecha_nacimiento}`);
  
  console.log("\n🎓 Información Académica:");
  console.log(`• Grupo: ${req.body.grupo}`);
  console.log(`• Carrera: ${req.body.carrera}`);
  console.log(`• Comentarios: ${req.body.comentarios}`);
  
  console.log("\n⚙️ Opciones Adicionales:");
  console.log(`• Hora de contacto: ${req.body.hora_contacto}`);
  console.log(`• Sitio web: ${req.body.sitio_web}`);
  console.log(`• Color favorito: ${req.body.color_favorito}`);
  console.log(`• Nivel de experiencia: ${req.body.rango_experiencia}/10`);
  console.log("=====================================\n");

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Datos Recibidos</title>
        <link rel="stylesheet" href="/css/styles.css">
        <style>
            .result-container {
                max-width: 800px;
                margin: 2em auto;
                background-color: #fff;
                padding: 2em;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            .data-table {
                width: 100%;
                border-collapse: collapse;
                margin: 1em 0;
                font-size: 16px;
            }
            
            .data-table th,
            .data-table td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }
            
            .data-table th {
                background-color: #b700ffbf;
                color: white;
                font-weight: bold;
            }
            
            .data-table tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            
            .data-table tr:hover {
                background-color: #e8f4f8;
            }
            
            .section-title {
                color: #333;
                margin-top: 2em;
                margin-bottom: 0.5em;
                font-size: 1.2em;
                font-weight: bold;
            }
            
            .back-button {
                display: inline-block;
                background-color: #28a745;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 2em;
                transition: background-color 0.3s ease;
            }
            
            .back-button:hover {
                background-color: #1e7e34;
            }
        </style>
    </head>
    <body>
        <div class="result-container">
            <h1>Formulario Enviado</h1>
            <h2 class="section-title">Información Personal</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Nombre</strong></td>
                        <td>${req.body.nombre || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Edad</strong></td>
                        <td>${req.body.edad || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Correo Electrónico</strong></td>
                        <td>${req.body.email || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Teléfono</strong></td>
                        <td>${req.body.telefono || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Fecha de Nacimiento</strong></td>
                        <td>${req.body.fecha_nacimiento || 'No especificado'}</td>
                    </tr>
                </tbody>
            </table>
            
            <h2 class="section-title">Información Académica</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Grupo</strong></td>
                        <td>${req.body.grupo || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Carrera</strong></td>
                        <td>${req.body.carrera || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Comentarios</strong></td>
                        <td>${req.body.comentarios || 'Sin comentarios'}</td>
                    </tr>
                </tbody>
            </table>
            
            <h2 class="section-title">Opciones Adicionales</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Hora de Contacto</strong></td>
                        <td>${req.body.hora_contacto || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Sitio Web</strong></td>
                        <td>${req.body.sitio_web || 'No especificado'}</td>
                    </tr>
                    <tr>
                        <td><strong>Color Favorito</strong></td>
                        <td>
                            <span style="display: inline-block; width: 20px; height: 20px; background-color: ${req.body.color_favorito}; border: 1px solid #ccc; border-radius: 3px; vertical-align: middle; margin-right: 8px;"></span>
                            ${req.body.color_favorito || 'No especificado'}
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Nivel de Experiencia</strong></td>
                        <td>${req.body.rango_experiencia || 'No especificado'}/10</td>
                    </tr>
                </tbody>
            </table>
            
            <a href="/" class="back-button">Volver al Formulario</a>
        </div>
    </body>
    </html>
  `;

  res.send(htmlResponse);
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log("=== APLICACIÓN WEB LISTA ===");
  console.log("Todas las etiquetas HTML5 implementadas:");
  console.log("   • <form>, <input>, <label>, <button>");
  console.log("   • <textarea>, <select>, <option>, <optgroup>");
  console.log("   • <datalist>, <fieldset>, <legend>");
  console.log("Servidor backend configurado para recibir datos");
  console.log("Estilos CSS aplicados");
  console.log("JavaScript con validaciones activo");
  console.log("==============================");
});
