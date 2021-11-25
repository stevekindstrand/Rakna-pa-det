let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let calc = document.getElementById("calc").value;
    let sum;

    let ul = document.createElement("ul");
    document.body.append(ul);
    
    var li = document.createElement("li");
    ul.append(li);

    switch(calc) {
        case "+":
            sum = +input1 + +input2;
            break;
        case "-":
            sum = input1 - input2;
            break;
        case "/":
            sum = input1 / input2;
            break;
        case "*":
            sum = input1 * input2;
            break;
    }
    li.appendChild(document.createTextNode(input1 + " " + calc + " " + input2 + " " + "=" + " " + sum + " "));
})