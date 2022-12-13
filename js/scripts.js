// eventos 

// eventos de inputs y texarea 

const datos = {
    nombre: "",
    email: "",
    mensaje:"",
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

// input es mas rapido en tiempo real para mostrar 
// target.value es para poder ver que esta escribiendo
// click es para imagenes y enlaces y submit es para enviar formulario posta
//.preventDefault hace que no se resetee la pagina sino que envia y ya


nombre.addEventListener('input', leerTexto); 
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto); 

 // EVENTO SUBMIT

formulario.addEventListener("submit", function(e) {  
    console.log(e);
    e.preventDefault(); 
    

// VALIDAR EL FORMULARIO CON DESTRUTURING

    const { nombre, email, mensaje } = datos; 

        if(nombre === "" || email === "" || mensaje === "") {
            mostrarError("Todos los campos son obligatorios");
            return; 
        }

        mostrarenviadoCorrecto("Mensaje enviado correctamente")

});

function leerTexto(e) {
  
    datos[e.target.id] = e.target.value; // se le dio valor para que se rellene cada objeto de una vez
    
    //console.log(datos);
}

// muestra un error en pantalla 

function mostrarError(mensaje) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild( error );

// desaparecer alerta de error a los 3 segundos

    setTimeout(() => {
        error.remove();
    }, 3000);

}

// muestra que se envio correcto 

function mostrarenviadoCorrecto(mensaje) {
    const enviadoCorrecto = document.createElement("P");
    enviadoCorrecto.textContent = mensaje;
    enviadoCorrecto.classList.add("correcto");
    
    formulario.appendChild( enviadoCorrecto );
    
// desaparecer alerta de enviado correctamente a los 3 segundos
    
    setTimeout(() => {
        enviadoCorrecto.remove();
    }, 3000);

}
