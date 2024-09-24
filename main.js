let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');
let mensajeValidacion = document.getElementById('mensajeValidacion');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function generar() {

    let numeroDigitado = parseInt(cantidad.value);


    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password += caracterAleatorio;

    }
    
    contrasena.value = password;
    validacion(password);

}    

function limpiar() {
        cantidad.value = '';
        contrasena.value = '';
        mensajeValidacion.textContent = '';
        mensajeValidacion.style.backgroundColor = '';
}

function validacion(contrasena) {

    const siTieneMayusculas = /[A-Z]/.test(contrasena);
    const siTieneMinusculas = /[a-z]/.test(contrasena);
    const siTieneNumeros = /[0-9]/.test(contrasena);
    const siTieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contrasena);

    
    if (siTieneMayusculas && siTieneMinusculas && siTieneNumeros && siTieneCaracteresEspeciales) {

        mensajeValidacion.textContent = "La contraseña es segura.";
        mensajeValidacion.style.backgroundColor = "green";
    } 
    else {
        mensajeValidacion.textContent = "La contraseña no es segura.";
        mensajeValidacion.style.backgroundColor = "red";
    }
}













