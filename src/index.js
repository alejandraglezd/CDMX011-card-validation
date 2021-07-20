import validator from './validator.js';
/*Constante para traer los valores ingresados al clickear el botón Validar*/
const validateBtn = document.getElementById("btnValidar");
/*Agregamos un evento de escucha al dar click sobre el btn que aplicará la función declarada enseguida*/
validateBtn.addEventListener("click", function() {
    /*Variable para traer de html los valores ingresados en el input validateNumber*/
    let cardNumber = document.getElementById("validateNumber").value;
    /*console.log(cardNumber);*/
    /*Constante  */
    const result = validator.isValid(cardNumber);
    /*console.log(result);*/
    const numberMask = validator.maskify(cardNumber);
    if (result == true) {
        const mask = document.getElementById("validateNumber").value = numberMask
        document.getElementById("finalResult").innerHTML =
            ("Número de tarjeta válido" + mask)

    } else {
        const mask = document.getElementById("validateNumber").value = numberMask
        document.getElementById("finalResult").innerHTML =
            ("Número de tarjeta inválido" + mask)
    }
})