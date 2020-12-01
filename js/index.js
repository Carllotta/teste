let inputs = Array.from(document.getElementsByClassName('form-input'));
let inputsReturn = Array.from(document.getElementsByClassName('data-input'));
let spanForm = document.getElementById('span-form');

// inputsReturn.map((item) => item.style.display = "none")
let divProfile = document.querySelector(".profile-user-data")
divProfile.style.display = "none";

const button = document.querySelector(".form-btn-send")
button.addEventListener('click', () => {
    inputs.map((item, index) => {
        if (item.value) inputsReturn[index].innerHTML = item.value
        inputsReturn.map(item => item.style.display = "block")
        divProfile.style.display = "block"
        spanForm.style.display = 'none';
    })
})