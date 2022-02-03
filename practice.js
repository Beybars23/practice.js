document.querySelector("h1").innerHTML="Beybars CS2117";

const now=new Date();
alert("Year: " +now.getFullYear());
alert("Today is: " +now.getDay());
alert("Date: " +now.getDate());
alert("Month: " +now.getMonth(+1));
alert("Current time is: " + now.getHours() + ":" + now.getMinutes());

var y = now.getFullYear();
var m = now.getMonth();
var d = now.getDate();
var sum = y * 365 + m * 31 + d;
var days = 365 * 2024 - sum;
document.write("Days until graduation: " + days);

function multiplyBy(){
	num1=document.getElementById("1Num").value;
	num2=document.getElementById("2Num").value;
	document.getElementById("result").innerHTML=num1 * num2;
}
function divideBy(){
	num1=document.getElementById("1Num").value;
	num2=document.getElementById("2Num").value;
	document.getElementById("result").innerHTML=num1 / num2;
}

