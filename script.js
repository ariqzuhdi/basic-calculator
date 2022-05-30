function display(num){
    document.getElementById("result").value += num
}

function clearscreen(){
    document.getElementById("result").value = ""
}

function calculate() {
    var temp = document.getElementById("result").value;
    var result = eval(temp);
    document.getElementById("result").value = result;
   }