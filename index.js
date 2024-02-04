//Hacer calculadora funcional. Se deben escribir los números en 2 campos de un formulario, la operación y sacarlo por pantalla
function calcular(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var op = document.getElementById("operacion").value;
    var num2 = parseFloat(document.getElementById("num2").value);
    if(op == "sumar"){
        document.getElementById("resul").value = num1 + num2;
    }
    if(op == "restar"){
        document.getElementById("resul").value = num1 - num2;
    }
    if(op == "multiplicar"){
        document.getElementById("resul").value = num1 * num2;
    }
    if(op == "dividir"){
        document.getElementById("resul").value = num1 / num2;
    }
}