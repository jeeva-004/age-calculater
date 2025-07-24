const form_ = document.querySelector('form');
const btn = document.querySelector('#btn')
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const day_Result = document.querySelector('.day');
const month_Result = document.querySelector('.month');
const year_Result = document.querySelector('.year');

function validate_Inputs() {
    let result = true;
    let current_Date = new Date();
    let current_Year = current_Date.getFullYear();
    if (day.value == '') {
        setError(day, 'This field is required');
        result = false;
    }
    else if (day.value > 31 || day.value <= 0) {
        setError(day, 'Must be a valid day');
        result = false;
    }

    else {
        setSuccess(day);
    }

    if (month.value == '') {
        setError(month, 'This field is required');
        result = false;
    }
    else if (month.value > 12 || month <= 0) {
        setError(month, 'Must be a valid month');
        result = false;
    }
    else {
        setSuccess(month);
    }

    if (year.value == '') {
        setError(year, 'This field is required');
        result = false;
    }
    else if (year.value <= 0) {
        setError(year, 'Must be a valid year');
        result = false;
    }
    else if (year.value > current_Year) {
        setError(year, 'Must be a past year');
        result = false;
    }
    else {
        setSuccess(year);
    }


    btn.addEventListener('click', () => {
        if (result)
            showResult(day.value, month.value, year.value);
    })

    return result;
}

btn.addEventListener('click', () => {
        if(validate_Inputs())
            showResult(day.value, month.value, year.value)
});

function showResult(day, month, year) {
    let now = new Date();
    let now_year = now.getFullYear();
    let now_month = now.getMonth()+1;
    let now_day = now.getDay();
    day_Result.textContent = pad_Zero(now_day-day);
    month_Result.textContent = pad_Zero(Math.abs(now_month-month));
    year_Result.textContent = pad_Zero(now_year-year);

    function pad_Zero(val) {
        return val < 10 ? '0' + val : val;
    }
}

function setError(day, msg) {
    let field_set = day.closest('.field');
    let error = field_set.querySelector('.error');
    let label = field_set.querySelector('label');
    let input = field_set.querySelector('input');
    input.classList.add('input-error');
    label.classList.add('label-error');
    error.textContent = msg;

}

function setSuccess(day) {
    let field_set = day.closest('.field');
    let error = field_set.querySelector('.error');
    let label = field_set.querySelector('label');
    let input = field_set.querySelector('input');
    input.classList.remove('input-error');
    label.classList.remove('label-error');
    error.textContent = '';
}