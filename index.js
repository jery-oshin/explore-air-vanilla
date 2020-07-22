let inputs;

document.addEventListener ('DOMContentLoaded', ()=>{

    creditCardCheckInput();

    inputs = {

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

});




document.querySelector('#submit').addEventListener('click', submit);

document.querySelector('#credit-card').addEventListener('change', creditCardCheckInput);

document.querySelector('#paypal').addEventListener('change', paypalCheckInput);


window.onload = updateSeconds;

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

const radios = {
    //Step One
    optionOne : document.querySelector('#choose-1'),
    optionTwo : document.querySelector('#choose-2'),
    optionThree : document.querySelector('#choose-3'),
}



class ValidateInput {
    constructor(inputs){
        this.inputs = inputs;
    }

    validate(){
        //console.log(inputs)
        let inputValidation = [];
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {

                let input = inputs[key];
                
                if(input !== null){
                    //console.log(input)

                    if(input.value === '' || input.validity.valid === false) {
                        // console.log(paypal.checked)
                        // if(paypal.checked)
                        //console.log(input.validity.valid)

                        if(!paypal.checked){

                            input.classList.add('is-invalid');
                            this.showErrorMessage(input.id, input.placeholder);
                            inputValidation.push(false)
                            //console.log(inputValidation)
                        } else {
                            input.classList.add('is-invalid');
                            this.showErrorMessage(input.id, input.placeholder);
                        }

                    } else {
                        //console.log(input)

                        input.classList.remove('is-invalid')
                        this.hideErrorMessage(input.id)
                        
                    }

                }
            }
        }
        //console.log(this.validateNotError(inputValidation))
        return this.validateNotError(inputValidation);
    }
    showErrorMessage(inputId, placeholder){
        const errorMessage = document.querySelector(`.${inputId}`);
        //console.log(errorMessage);
        if(errorMessage !== null ){
            errorMessage.innerHTML = '';
            errorMessage.innerHTML = `Please enter a valid ${placeholder}`;
            
        }
    }
    hideErrorMessage(inputId){
        // console.log(inputId)
        const errorMessage = document.querySelector(`.${inputId}`);
        //console.log(errorMessage)
        if (errorMessage !== null) {
            errorMessage.innerHTML =``;

        }
    }

    validateNotError(input){
        return input.find( i => i === false );
    
    }
}

class ValidateChoices {
    constructor(radios){
        this.radios = radios
    }

    validate(){
        let checked = false;
        for (const key in radios) {
            
            if (radios.hasOwnProperty(key)) {
                //console.log('OK')
                
                let radio = radios[key];
                
                if( radio.checked === true ){
                    checked = true;
                    this.hideErrorMessage();
                    
                }
                if (checked === false ){
                    this.showErrorMessage();
                }

            }
        }
        return checked

    }
    showErrorMessage(){
        const errorMessage = document.querySelector('.radio-error-message');
        //console.log(errorMessage);
        errorMessage.innerHTML = '';
        errorMessage.innerHTML = `Please choose your offer`;
    }
    hideErrorMessage(){
        const errorMessage = document.querySelector('.radio-error-message');
        //console.log(errorMessage)
        errorMessage.innerHTML = ' ';
    }
}


let creditCard = document.querySelector('#credit-card');
let paypal = document.querySelector('#paypal');
let step5 = document.querySelector('#step-5');

function creditCardCheckInput (){

    if(creditCard.checked){
        
        const addStep = document.createElement('div')

        addStep.classList.add('payment-details')

        addStep.innerHTML = `
            <h5>Step#5: Payment Details</h5>
            <div class="input-group mb-3">
                <div class="col-12 p-0">

                    <input type="text" class="form-control" placeholder="Card Number" aria-label="card-number" pattern="^(?:4[0-9]{12}(?:[0-9]{3})?)$" pattern="^(?:5[1-5][0-9]{14})$" id="card-number">
                    <small class="text-danger card-number" id="error-text"></small>
                </div>

            </div>
            <div class="card-security">
                <div class="input-group mb-3">
                    <div class="col-sm-11 p-0">
                        <input type="text" class="form-control" placeholder="MM / YYYY" aria-label="mm-yyyy" pattern="(0|1)[0-9]\/[0-9]{2}" id="card-date">
                        <small class="text-danger card-date" id="error-text"></small>

                    </div>
                </div>
                <div class="input-group mb-3">
                    <div class="col-sm-12 p-0">
                        <input type="text" class="form-control" placeholder="Security Code" aria-label="security-code" id="security-code">
                        <small class="text-danger security-code" id="error-text-security-code"></small>
                    </div>
                </div>
            </div>
        `;
        step5.appendChild(addStep)
    }
}

const validation = new ValidateInput(inputs);

function paypalCheckInput (e){
    e.preventDefault();
    
    if (paypal.checked){
        step5.innerHTML = ``;

    }
}


function submit (e){
    e.preventDefault();

    const validateChoice = new ValidateChoices(radios);

    let validChoice = validateChoice.validate();

    
    let valid = validation.validate();

    console.log(valid);

    if((valid !== false || valid === undefined) && validChoice === true){
        console.log('OK')
    } else {
        console.log('WRONG')
    }

}