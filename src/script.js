const form_ = document.querySelector('form');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const day_Result = document.querySelector('.day');
const month_Result = document.querySelector('.month');
const year_Result = document.querySelector('.year');
form_.addEventListener('submit', (e) => {
    if (!validate_Inputs())
        e.preventDefault();
    else
        showResult();
});

function showResult(day, month, year) {

}

function validate_Inputs() {
    let result = true;
    let current_Date = new Date();
    let current_Year = current_Date.getFullYear();
    if(day.value==''){
        setError(day,'This field is required');
        result = false;
    }
    else if(day.value>31||day.value==0){
        setError(day, 'Must be a valid day');
        result = false;
    }
    
    else{
        setSuccess(day);
    }

    if(month.value==''){
        setError(month, 'This field is required');
        result = false;
    }
    else if(month.value>12||month==0){
        setError(month, 'Must be a valid month');
        result = false;
    }
    else{
        setSuccess(month);
    }

    if(year.value==''){
        setError(year, 'This field is required');
        result = false;
    }
    else if(year.value>current_Year||year==0){
        setError(year, 'Must be a valid year');
        result = false;
    }
    else{
        setSuccess(year);
    }

return result;
}


function setError(day,msg){
    let field_set = day.closest('.field');
    let error = field_set.querySelector('.error');
    let label = field_set.querySelector('label');
    let input = field_set.querySelector('input');
    input.classList.add('input-error');
    label.classList.add('label-error');
    error.textContent = msg;

}

function setSuccess(day){
    let field_set = day.closest('.field');
    let error = field_set.querySelector('.error');
    let label = field_set.querySelector('label');
    let input = field_set.querySelector('input');
    input.classList.remove('input-error');
    label.classList.remove('label-error');
    error.textContent = '';
}