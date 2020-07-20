
document.querySelector('#submit').addEventListener('click', submit);

document.querySelector('#credit-card').addEventListener('change', creditCardCheckInput);

document.querySelector('#paypal').addEventListener('change', paypalCheckInput);

// firstName = document.querySelector('#first-name');
// firstName = document.querySelector('#first-name');
// lastName = document.querySelector('#last-name');
// email = document.querySelector('#email');
// phoneNumber = document.querySelector('#phone-number');

window.onload = updateSeconds;


// let minits = 14;
// let seconds = 59;

// function updateMinits() {
//     console.log(minits);
//     if(minits==0){
//         console.log('Final');
//     }else{
//         minits-=1;
//         setTimeout("updateMinits()", 60000);
//     }
// }

let seconds = document.querySelector('.seconds')
let minutes = document.querySelector('.minutes')


function updateSeconds() {
    let minutes_in_future_15 = new Date(Date.now() + (15 * 60 * 1000));

    let interval = setInterval(()=> {
        let now = Date.now();
        let new_date = new Date(minutes_in_future_15 - now);
        if (new_date.getMinutes() < 59 && new_date.getSeconds() < 59){

            //console.log(new_date.getMinutes(), new_date.getSeconds())
            minutes.innerHTML = `${new_date.getMinutes()}`;
            seconds.innerHTML = `${new_date.getSeconds()}`;
        }

        if(minutes_in_future_15.getTime() <= now) {
            clearInterval(interval);
        }
    }, 999)
}

for(let min = 14; min > 0; min-- ){
    
    //window.onload = updateSeconds;

    
}



const inputs = {
    //Step Two
    firstName : document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    email: document.querySelector('#email'),
    phoneNumber: document.querySelector('#phone'),

    //Step Three
    townCity: document.querySelector('#town-city'),
    streetHouse: document.querySelector('#street-house'),
    zipCode: document.querySelector('#zip-code'),

    //Step Five
    cardNumber: document.querySelector('#card-number'),
    date: document.querySelector('#card-date'),
    securityCode: document.querySelector('#security-code'),

}


class ValidateInput {
    constructor(inputs){
        this.inputs = inputs;
    }

    validate(inputs){
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {

                let input = inputs[key];

                if(input.value === '' || input.validity.valid === false) {
                    // console.log(input)
                    input.classList.add('is-invalid');
                    this.showErrorMessage(input.id, input.placeholder);


                } else {
                    input.classList.remove('is-invalid')
                    this.hideErrorMessage(input.id)
                }
            }
        }
    }
    showErrorMessage(inputId, placeholder){
        const errorMessage = document.querySelector(`.${inputId}`);
        //console.log(errorMessage);
        errorMessage.innerHTML = '';
        errorMessage.innerHTML = `Please enter a valid ${placeholder}`;
    }
    hideErrorMessage(inputId){
        const errorMessage = document.querySelector(`.${inputId}`);
        console.log(errorMessage)
        errorMessage.innerHTML = ' ';
    }
}


let creditCard = document.querySelector('#credit-card');
let paypal = document.querySelector('#paypal');
let step5 = document.querySelector('#step-5');

function creditCardCheckInput (e){
    e.preventDefault();
    if(creditCard.checked){
        step5.classList.remove('hidden-step');
    }
}
function paypalCheckInput (e){
    e.preventDefault();
    if (paypal.checked){
        step5.classList.add('hidden-step');

    }
}

function submit (e){
    e.preventDefault();

    const validation = new ValidateInput(inputs);

    validation.validate(inputs);

}