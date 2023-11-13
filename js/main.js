// FORMULARIO
function validarFormulario() {
    var nombre = document.forms["miFormulario"]["nombre"].value;
    var correo = document.forms["miFormulario"]["correo"].value;

    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (correo == "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    // Aquí puedes agregar más validaciones según tus necesidades

    // Enviar el formulario y mostrar el mensaje de enviado
    alert(`Formulario enviado correctamente ${nombre} 😀`)
    return true;
}



// ABOUT
function aumentarNumeros() {
    var numeroElement1 = document.getElementById("n1");
    var numeroElement2 = document.getElementById("n2");
    var numeroElement3 = document.getElementById("n3");
    var numeroElement4 = document.getElementById("n4");
    
    var numero1 = parseInt(numeroElement1.innerHTML);
    var numero2 = parseInt(numeroElement2.innerHTML);
    var numero3 = parseInt(numeroElement3.innerHTML);
    var numero4 = parseInt(numeroElement4.innerHTML);
    
    var limite1 = 232; // Límite para n1
    var limite2 = 18; // Límite para n2
    var limite3 = 521
    var limite4 = 16
    
    if (numero1 < limite1) {
        numero1++;
        numeroElement1.innerHTML = numero1;
    }
    
    if (numero2 < limite2) {
        numero2++;
        numeroElement2.innerHTML = numero2;
    }

    if (numero3 < limite3) {
        numero3++;
        numeroElement3.innerHTML = numero3;
    }

    if (numero4 < limite4) {
        numero4++;
        numeroElement4.innerHTML = numero4;
    }
    
    if (numero1 < limite1 || numero2 < limite2 || numero3 < limite3 || numero4 < limite4) {
        setTimeout(aumentarNumeros, 5); // Aumentar cada 0.1 segundo (100 milisegundos)
    }
}

// Llamar a la función cuando se carga la página
window.onload = aumentarNumeros;


