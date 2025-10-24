# Práctica 2 — App Web estructural

## Requisitos
- Node.js 18.12.0 (ya viene en la imagen Docker)
- Puerto **8080**

## Cómo ejecutar con Docker
```bash
docker compose up --build
# Abrir: http://localhost:8080
```

## Estructura
```
public/
  index.html          # archivo de inicio del Front-End
aplicacion.js         # archivo de inicio del Back-End
Dockerfile
docker-compose.yml
package.json
```

## Notas
- El formulario incluye etiquetas semánticas: `<main> <header> <footer> <article> <section> <aside>`.
- Al enviar el formulario, el Back-End genera una página personalizada con todos los parámetros.
