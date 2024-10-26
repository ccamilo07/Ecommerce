document.getElementById('registro').addEventListener('submit', function (event) {
    event.preventDefault();
    let password = document.getElementById('password');
    let ConPassword = document.getElementById('ConPassword');

    if(password.value !== ConPassword.value){
        ConPassword.classList.add('is-invalid');
        alert('Las contraseñas no coinciden');
    } else {
        ConPassword.classList.remove('is-invalid');
        ConPassword.classList.add('is-valid');

        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let correo = document.getElementById('correo').value;
        let fecha = document.getElementById('fecha').valie;
        let check = document.getElementById('check').checked ? 'Aceptado' : 'No aceptado';

        alert(
            'Datos del formulario:\n'+
            'nombre:' + 
            nombre +
            '\n'+
            'Correo electronico:' +
            correo +
            '\n'+
            'Fecha de nacimiento: ' +
            '\n' +
            fecha +
            'Terminos y condiciones:' +
            check
        );
    }
});