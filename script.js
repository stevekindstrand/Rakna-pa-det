let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let calc = document.getElementById("calc").value;
    let sum;

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
    console.log(sum);
    document.body.append(" " + sum)
})