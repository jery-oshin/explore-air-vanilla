
document.querySelector('#submit').addEventListener('click', submit);

document.querySelector('#credit-card').addEventListener('change', creditCardCheckInput);

document.querySelector('#paypal').addEventListener('change', paypalCheckInput);

let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let email = document.querySelector('#email');
let phoneNumber = document.querySelector('#phone-number')



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

//validator
//validateStepOne
function validateStepOne(){
    
}
//validateStepTwo
//validateStepThree
//validateStepFour
//validateStepFive





function submit (e){
    e.preventDefault();
    console.log('OK')




    // if( email.validity.valid === true ) {
    //     console.log('input valid');

    // } else {
    //     console.log('ERROR');
    // }
    
}