import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/procesar", (req, res) => {
  const datos = req.body || {};
  const {
    apellido_paterno = "",
    apellido_materno = "",
    nombres = "",
    boleta = "",
    correo = "",
    grupo = "",
    tema = "",
    mensaje = "",
    acepta_terminos = ""
  } = datos;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Resultado — Práctica 2</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
  <style>
    :root { --bg:#0f172a; --card:#111827; --muted:#9ca3af; --fg:#e5e7eb; --accent:#22d3ee; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: var(--fg); background: radial-gradient(1200px 1200px at 10% 10%, #0b1220 0, var(--bg) 50%); }
    main { display: grid; grid-template-columns: 1fr 320px; gap: 1rem; padding: clamp(16px, 3vw, 32px); max-width: 1080px; margin: 0 auto; }
    header, footer { background: #0b1220; border: 1px solid #1f2937; padding: 16px; border-radius: 16px; margin: 16px auto; max-width: 1080px; }
    article, aside, section { background: var(--card); border: 1px solid #1f2937; border-radius: 16px; padding: 16px; }
    h1, h2 { margin: 0 0 8px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border-bottom: 1px solid #1f2937; padding: 8px; text-align: left; }
    code { background: #0b1220; padding: 2px 6px; border-radius: 8px; }
    a { color: var(--accent); }
    @media (max-width: 900px) { main { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <header>
    <h1>Resultado del formulario</h1>
    <p class="muted">Datos recibidos por el Back-End (Express @ puerto 8080)</p>
  </header>

  <main>
    <article>
      <section aria-labelledby="datos-estudiante">
        <h2 id="datos-estudiante">Datos del estudiante</h2>
        <table>
          <tbody>
            <tr><th>Apellido paterno</th><td>${apellido_paterno}</td></tr>
            <tr><th>Apellido materno</th><td>${apellido_materno}</td></tr>
            <tr><th>Nombre(s)</th><td>${nombres}</td></tr>
            <tr><th>Boleta</th><td>${boleta}</td></tr>
            <tr><th>Grupo</th><td>${grupo}</td></tr>
            <tr><th>Correo</th><td>${correo}</td></tr>
          </tbody>
        </table>
      </section>

      <section aria-labelledby="tema">
        <h2 id="tema">Tema / Mensaje</h2>
        <p><strong>Tema:</strong> ${tema}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      </section>
    </article>

    <aside aria-label="Estatus y acciones">
      <p><strong>¿Acepta términos?</strong> ${acepta_terminos ? "Sí" : "No"}</p>
      <p><a href="/" role="button">← Regresar al formulario</a></p>
      <section>
        <h2>Detalles técnicos</h2>
        <ul>
          <li>Node.js: 18.12.0 (Docker)</li>
          <li>Framework: Express</li>
          <li>Puerto: 8080</li>
        </ul>
      </section>
    </aside>
  </main>

  <footer>
    <small>&copy; ${new Date().getFullYear()} Práctica 2 — Tecnologías para el Desarrollo de Aplicaciones Web</small>
  </footer>
</body>
</html>`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
