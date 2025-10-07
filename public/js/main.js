document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const emailInput = document.getElementById('email');
    const grupoSelect = document.getElementById('grupo');
    const rangeInput = document.getElementById('rango_experiencia');
    const rangeOutput = document.getElementById('rango_output');

    rangeInput.addEventListener('input', function() {
        rangeOutput.textContent = this.value;
    });
    nombreInput.addEventListener('input', function() {
        const value = this.value.trim();
        if (value.length < 2) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#28a745';
        }
    });

    edadInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        if (value < 1 || value > 120) {
            this.style.borderColor = '#dc3545';
        } else {
            this.style.borderColor = '#28a745';
        }
    });

    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.value)) {
            this.style.borderColor = '#28a745';
        } else {
            this.style.borderColor = '#dc3545';
        }
    });

    form.addEventListener('submit', function(e) {
        let isValid = true;
        let errorMessages = [];

        // Validar nombre
        if (nombreInput.value.trim().length < 2) {
            isValid = false;
            errorMessages.push('El nombre debe tener al menos 2 caracteres');
            nombreInput.style.borderColor = '#dc3545';
        }

        const edad = parseInt(edadInput.value);
        if (edad < 1 || edad > 120) {
            isValid = false;
            errorMessages.push('La edad debe estar entre 1 y 120 años');
            edadInput.style.borderColor = '#dc3545';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            errorMessages.push('Por favor ingresa un correo electrónico válido');
            emailInput.style.borderColor = '#dc3545';
        }

        if (grupoSelect.value === '') {
            isValid = false;
            errorMessages.push('Por favor selecciona un grupo');
            grupoSelect.style.borderColor = '#dc3545';
        }

        if (!isValid) {
            e.preventDefault();
            alert('Por favor corrige los siguientes errores:\n' + errorMessages.join('\n'));
        }
    });

    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#007bff';
        });
    });
});

function previewData() {
    const formData = new FormData(document.querySelector('.form'));
    let previewText = '=== VISTA PREVIA DE DATOS ===\n\n';
    
    previewText += '📋 INFORMACIÓN PERSONAL:\n';
    previewText += `• Nombre: ${formData.get('nombre') || 'No especificado'}\n`;
    previewText += `• Edad: ${formData.get('edad') || 'No especificado'}\n`;
    previewText += `• Email: ${formData.get('email') || 'No especificado'}\n`;
    previewText += `• Teléfono: ${formData.get('telefono') || 'No especificado'}\n`;
    previewText += `• Fecha de nacimiento: ${formData.get('fecha_nacimiento') || 'No especificado'}\n\n`;
    
    previewText += '🎓 INFORMACIÓN ACADÉMICA:\n';
    previewText += `• Grupo: ${formData.get('grupo') || 'No especificado'}\n`;
    previewText += `• Carrera: ${formData.get('carrera') || 'No especificado'}\n`;
    previewText += `• Comentarios: ${formData.get('comentarios') || 'Sin comentarios'}\n\n`;
    
    previewText += '⚙️ OPCIONES ADICIONALES:\n';
    previewText += `• Hora de contacto: ${formData.get('hora_contacto') || 'No especificado'}\n`;
    previewText += `• Sitio web: ${formData.get('sitio_web') || 'No especificado'}\n`;
    previewText += `• Color favorito: ${formData.get('color_favorito') || 'No especificado'}\n`;
    previewText += `• Nivel de experiencia: ${formData.get('rango_experiencia') || 'No especificado'}/10\n`;
    
    alert(previewText);
}