// Función para validar el formulario
function validateForm() {
    // Obtener los elementos del formulario
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var agree = document.getElementById("agree");

    // Validar que el nombre no esté vacío
    if (name.value == "") {
        alert("Por favor ingrese su nombre");
        name.focus();
        return false;
    }

    // Validar que el correo electrónico sea válido
    if (email.value == "" || !email.value.includes("@")) {
        alert("Por favor ingrese un correo electrónico válido");
        email.focus();
        return false;
    }

    // Validar que la contraseña tenga al menos seis caracteres
    if (password.value == "" || password.value.length < 6) {
        alert("Por favor ingrese una contraseña de al menos seis caracteres");
        password.focus();
        return false;
    }

    // Validar que la confirmación de la contraseña coincida con la contraseña
    if (confirm.value == "" || confirm.value != password.value) {
        alert("Las contraseñas no coinciden");
        confirm.focus();
        return false;
    }

    // Validar que el usuario acepte los términos y condiciones
    if (!agree.checked) {
        alert("Por favor acepte los términos y condiciones");
        agree.focus();
        return false;
    }

    // Si todo está bien, retornar verdadero
    return true;

}
