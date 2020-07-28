let factDiv = document.getElementById('fact');
let factText = document.getElementById('factText');

let numberInput = document.getElementById('numerInput');

// Nota: Se llama a función AJAX con XMLHttpRequest
// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);

function showFormAlert(message, bgColor) {
    // let pError = document.createElement('p');
    // let texto = document.createTextNode(message);
    // pError.appendChild(texto);
    // let divError = document.getElementById('errorDiv');
    // divError.appendChild(pError);

    const div = document.createElement('div');
    div.className = `alert alert-${bgColor} mt-3`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.card');
    const factDiv = document.querySelector('#fact');
    // Nota: Se inserta <div> antes de div #fact
    container.insertBefore(div, factDiv);
    // Nota: Se elimina div después de 3 segundos
    setTimeout(() => div.remove(), 3000);
}

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


    // Nota: Valida que se haya escrito solo números en input.
            // Muestra div de error con otro tipo
    if (parseInt(number) < 0) {
        factDiv.style.display = 'none';
        showFormAlert('Type ONLY integer numbers >= 0.', 'danger')
    } else if (number == ''){
        factDiv.style.display = 'none';
        showFormAlert('Type integer number >= 0.', 'warning')
    } else {
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

}

// console.log(factDiv);
// console.log(factText);