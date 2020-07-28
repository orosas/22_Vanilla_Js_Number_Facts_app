let factDiv = document.getElementById('fact');
let factText = document.getElementById('factText');

let numberInput = document.getElementById('numerInput');

// Nota: Se llama a función AJAX con XMLHttpRequest
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);

// Nota: Función AJAX, utilizando XMLHttpRequest
// function getFactAjax() {
//     let number = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://numbersapi.com/${number}`);

//     xhr.onload = function () {
//         if(this.status == 200 && number!= ''){
//             console.log(this.responseText);
//             factDiv.style.display = 'block';

//             factText.innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// }

function getFactFetch() {
    let number = numberInput.value;
    console.log(number);

    fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text())
        .then(data => {
            console.log(data);
            if (number != '') {
                factDiv.style.display = 'block';
                // Nota: No funciona con innerHTML
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));

}

console.log(factDiv);
console.log(factText);