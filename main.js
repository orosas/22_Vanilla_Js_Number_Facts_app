let factDiv = document.getElementById('fact');
let factText = document.getElementById('factText');

let numberInput = document.getElementById('numerInput');

numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    let number = numberInput.value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/${number}`);

    xhr.onload = function () {
        if(this.status == 200 && number!= ''){
            console.log(this.responseText);
            factDiv.style.display = 'block';

            factText.innerHTML = this.responseText;
        }
    }
    xhr.send();
}

console.log(factDiv);
console.log(factText);