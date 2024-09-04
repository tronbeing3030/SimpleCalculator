input = document.getElementById("labels");
clear = document.getElementById("C");

one = document.getElementById("one");
two = document.getElementById("two");
three = document.getElementById("three");
four = document.getElementById("four");
five = document.getElementById("five");
six = document.getElementById("six");
seven = document.getElementById("seven");
eight = document.getElementById("eight");
nine = document.getElementById("nine");
zero = document.getElementById("zero");

plus = document.getElementById("plus");
min = document.getElementById("min");
mul = document.getElementById("mul");
div = document.getElementById("div");

equal = document.getElementById("eq");

input.value = ""

one.onclick = () =>{
    input.value += "1";
}
two.onclick = () =>{
    input.value += "2";
}
three.onclick = () =>{
    input.value += "3";
}
four.onclick = () =>{
    input.value += "4";
}
five.onclick = () =>{
    input.value += "5";
}
six.onclick = () =>{
    input.value += "6";
}
seven.onclick = () =>{
    input.value += "7";
}
eight.onclick = () =>{
    input.value += "8";
}
nine.onclick = () =>{
    input.value += "9";
}
zero.onclick = () =>{
    input.value += "0";
}
plus.onclick = () =>{
    input.value += "+";
}
min.onclick = () =>{
    input.value += "-";
}
mul.onclick = () =>{
    input.value += "*";
}
div.onclick = () =>{
    input.value += "/";
}
clear.onclick = function(){
    input.value = "";
}

equal.onclick = () => {
    answer = eval(input.value);
    input.value = answer;
}
