
var button = document.getElementById("button");
var answer;


button.addEventListener("click", function(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var op = document.getElementById("operators").value;

	switch(op){
	case "+":
		answer = (num1 + num2).toFixed(2);
		break;
	case "-":
		answer = (num1-num2).toFixed(2);
		break;
	case "*":
		answer = (num1*num2).toFixed(2);
		break;
	case "/":
		answer = (num1 / num2).toFixed(2);
		break;
	default:
		answer = "error";
	}

	document.getElementById("result").innerHTML = `Result: ${answer}`
})
