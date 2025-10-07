# 📋 Formulario

## 📖 Descripción
Aplicación Web que implementa un formulario completo.

## ✅ Etiquetas HTML5 Implementadas

### Formulario Principal:
- ✅ `<form>` - Contenedor principal del formulario
- ✅ `<input>` - Campos de entrada (text, email, number, tel, date, time, url, color, range)
- ✅ `<label>` - Etiquetas para campos
- ✅ `<button>` - Botones de envío, reset y vista previa
- ✅ `<textarea>` - Área de texto para comentarios
- ✅ `<select>` - Lista desplegable para grupos
- ✅ `<option>` - Opciones del select
- ✅ `<optgroup>` - Agrupación de opciones
- ✅ `<datalist>` - Listas de sugerencias para inputs
- ✅ `<fieldset>` - Agrupación semántica de campos
- ✅ `<legend>` - Títulos para los fieldsets

## 🚀 Características

### Frontend:
- 📱 **Diseño Responsivo**
- ✨ **Validación en tiempo real**
- 🔍 **Vista previa de datos**
- 📋 **Organización por secciones**

### Backend:
- 🗄️ **Servidor Express.js**
- 📊 **Procesamiento de datos**
- 🖥️ **Logs en consola**
- 📋 **Respuesta HTML**

## 📁 Estructura del Proyecto

```
tcweb/
├── app.js                 # Servidor Node.js/Express.js
├── package.json           # Dependencias y scripts
├── README.md             # Documentación
├── Dockerfile            # Configuración Docker
├── public/               # Archivos estáticos
│   ├── css/
│   │   └── styles.css    # Estilos CSS
│   └── js/
│       └── main.js       # JavaScript del frontend
└── views/
    └── index.html        # Formulario principal
```

### 3. Abrir en el navegador:
```
http://localhost:8080
```

## Tipos de Input Implementados

| Tipo | Descripción | Validación |
|------|-------------|------------|
| `text` | Nombre | Mínimo 2 caracteres |
| `number` | Edad | Entre 1 y 120 |
| `email` | Correo electrónico | Formato válido |
| `tel` | Teléfono | Con datalist de sugerencias |
| `date` | Fecha de nacimiento | - |
| `time` | Hora de contacto | - |
| `url` | Sitio web personal | - |
| `color` | Color favorito | - |
| `range` | Nivel de experiencia | 1-10 con output |

## Funcionalidades JavaScript

- **Validación en tiempo real**
- **Validación antes del envío**
- **Feedback visual (colores de borde)**
- **Vista previa de datos**
- **Control del range slider**
- **Limpieza de estilos en focus**

## 📊 Respuesta del Servidor

Cuando el formulario se envía:
1. 📡 Los datos se envían al servidor Express.js
2. 🖥️ Se muestran en la consola del servidor
3. 📋 Se genera una tabla HTML5 con todos los datos
4. ✅ El usuario ve una página de confirmación

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura y formularios
- **CSS3** - Estilos y diseño responsivo
- **JavaScript ES6** - Validaciones y interactividad
- **Node.js** - Runtime del servidor
- **Express.js** - Framework web
- **Nodemon** - Desarrollo con recarga automática

## 📈 Cumplimiento de Requerimientos

**Etapa 1**: Todas las etiquetas HTML5 fueron implementadas
**Etapa 2**: Aplicación Node.js y Express.js
**Frontend**: Formulario index.html completo
**Backend**: Procesamiento y respuesta de datos
**Documentación**: Proyecto completamente documentado