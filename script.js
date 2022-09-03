var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var currentNumber1 = 0;

function increment() {

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

function decrement() { 

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

}

document.getElementById('adicionar').addEventListener("click", incremento);

document.getElementById('subtrair').addEventListener("click", decremento);


function incremento() {
    currentNumber1 = currentNumber1 + 1;
    document.getElementById("currentNumber1").innerHTML = currentNumber1;
  }

  function decremento() {
    currentNumber1 = currentNumber1 - 1;
    document.getElementById("currentNumber1").innerHTML = currentNumber1;
  }