function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
  
    // Validar formato de email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert("Por favor, ingresa un email válido.");
      return false;
    }
  
    // Si todos los campos son válidos, se envía el formulario
    alert("¡Formulario enviado correctamente!");
    return true;
  }
  