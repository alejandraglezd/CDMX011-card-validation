import validator from './validator.js';
/*Constante para traer los valores ingresados en el input al clickear el botón Validar*/
const validateBtn = document.getElementById("btnValidar");
/*Agregamos un evento de escucha al dar click sobre el btn que aplicará la función declarada enseguida*/
validateBtn.addEventListener("click", function() {
    /*Variable para traer de html los valores ingresados en el input validateNumber*/
    let cardNumber = document.getElementById("validateNumber").value;
    /*console.log(cardNumber);*/
    /*Constante  */
    const result = validator.isValid(cardNumber);
    /*console.log(result);*/
    /*Constante para el número que queremos enmascarar; será indicado por la propiedad maskify que ya desarrollamos con los valores de cardNumber */
    const numberMask = validator.maskify(cardNumber);
    /*Condicional; siendo el resultado igual a verdadero*/
    if (result == true) {
        /*Constante mask será igual al valor de ValidateNumber igual a la constante numberMask*/
        const mask = document.getElementById("validateNumber").value = numberMask
            /*Obtener el resultado final de html y retornar un mensaje de validación al usuario */
        document.getElementById("finalResult").innerHTML =
            ("Número de tarjeta válido" + mask)
            /*De lo contrario realizar la misma acción pero retornar mensaje con invalidación*/
    } else {
        const mask = document.getElementById("validateNumber").value = numberMask
        document.getElementById("finalResult").innerHTML =
            ("Número de tarjeta inválido" + mask)
    }
})