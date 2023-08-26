

let input_feet = document.querySelector('.input_feet')
let input_inches = document.querySelector('.input_inches');
let input_weight = document.querySelector('.input_weight');
let error_feet = document.querySelector('.error_feet')
let error_weight = document.querySelector('.error_weight')

let bmi_result = document.querySelector('.bmi_result');
let weight_status = document.querySelector('.weight_status');
let bmi_btn = document.querySelector('.bmi_btn');

let gender = document.querySelector('.gender');
let genderStatus = document.querySelector('.genderStatus');



bmi_btn.addEventListener('click', function () {

  if (input_feet.value == "" && input_weight.value == "") {
    error_feet.innerHTML = 'please enter the value'
    error_weight.innerHTML = 'please enter the value'
  } else {
    error_feet.innerHTML = ""
    error_weight.innerHTML = ""

    // BMI = weight(kg) / height²(m) = kg/m²
    // 1 feet = 12 inche
    // 1 inche=0.0254 m

    let height_inche = parseInt(input_feet.value) * 12 + parseInt(input_inches.value);
    let height_meter = height_inche * 0.0254;
    let solutionBim = (parseInt(input_weight.value) / (height_meter * height_meter)).toFixed(2)
    bmi_result.innerHTML = `${solutionBim} kg/m²`;

    genderStatus.innerHTML = gender.value;

    if (solutionBim < 18.5 && gender.value == 'Male') {
      weight_status.innerHTML = 'Underweight'
    } else if (solutionBim >= 18.5 && solutionBim <= 22.9 && gender.value == 'Male') {
      weight_status.innerHTML = 'Normal range'
    } else if (solutionBim >= 23 && solutionBim <= 24.9 && gender.value == 'Male') {
      weight_status.innerHTML = 'Overweight'
    } else if (solutionBim >= 25 && solutionBim <= 29.9 && gender.value == 'Male') {
      weight_status.innerHTML = 'Obesity moderate Class I'
    } else if (solutionBim >= 30.0 && solutionBim <= 34.9 && gender.value == 'Male') {
      weight_status.innerHTML = 'Obesity morbid Class II'
    } else if (solutionBim < 18.5 && gender.value == 'Female') {
      weight_status.innerHTML = 'Underweight'
    } else if (solutionBim >= 18.5 && solutionBim <= 24.9 && gender.value == 'Female') {
      weight_status.innerHTML = 'Normal weight'
    } else if (solutionBim >= 25.0 && solutionBim <= 29.9 && gender.value == 'Female') {
      weight_status.innerHTML = 'Overweight'
    } else if (solutionBim >= 30.0 && gender.value == 'Female') {
      weight_status.innerHTML = 'Obesity morbid'
    }

  }

  gender.value = ""



})