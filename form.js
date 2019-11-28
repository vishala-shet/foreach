function addNumber(){
    var firstNumber=parseInt(document.getElementById("firstnumber").value);
    if(firstNumber === "  "){
        alert("field is required");
        return;
    }
var secondNumber=parseInt(document.getElementById("secondnumber").value);
    if(secondNumber === "  "){
        alert("field is required");
        return;
    }
  
    if(isNan(firstNumber)||isNan(secondNumber)){
        alert('please enter number');
    }else{
    document.getElementById('result').value = parseInt(firstNumber) + parseInt(secondNumber);
    }
}