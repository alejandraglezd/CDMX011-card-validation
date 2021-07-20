const validator = {
    "isValid": function(algoritmo) {
        /*Creamos nueva variable para un nuevo arreglo; con metedos para que; itere, tenga un orden inverso y trate los valores como números*/
        let array = Array.from(algoritmo).reverse().map(Number)
            /*console.log(array);*/
            /*Variable para el total sea igual a 0 */
        let total = 0
            /*Creamos bucle, variable número igual a cero, número menor al largo del arreglo, recorrer cada posición */
        for (let i = 0; i < array.length; i++) {
            /*Condicional; si el residuo */
            if (i % 2 === 1) {
                /*Variable número doble será igual al arreglo del número multiplicado por dos*/
                let numeroDoble = array[i] * 2
                    /*Condicional; si el número doble es mayor o igual a 10*/
                if (numeroDoble >= 10) {
                    let sumaNumero = numeroDoble - 9
                    total += sumaNumero
                } else {
                    total += numeroDoble;
                }
            } else {
                total += array[i];
            }
        }
        let resultado = total % 10
        if (resultado == 0) {
            return true
        } else {
            return false
        }
    },
    /*Declaramos funcion hideHum con la propiedad para enmascarar */
    "maskify": function(hideNum) {
        /*Variable originalNum será igual al largo de hideNum */
        let originalNum = hideNum.length;
        /*Condicional; si originalNum es menor o igual que 4 retornamos hideNum y se enmascaran los dugitos */
        if (originalNum <= 4) {
            return hideNum
                /*De lo contrario, variable cardNumb será igual al arreglo de hideNum */
        } else {
            let cardNum = Array.from(hideNum)
                /*Creamos bucle;  */
            for (let i = 0; i < hideNum.length - 4; i++) {
                cardNum[i] = "#"
            }
            let finalNum = cardNum.join("")
            return finalNum
        }
    }
}
export default validator;