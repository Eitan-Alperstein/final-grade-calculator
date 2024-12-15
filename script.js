function calculate(currentGrade, weight, finalGradeHope) {
    let calc = (finalGradeHope - ((1 - weight/100) * currentGrade))/(weight/100);
    document.querySelector("#result").innerText = Math.round(calc*100)/100;
}

function updateValuesFromSliders() {
    let currentGrade = document.querySelector("#currentGrade");
    let weight = document.querySelector("#weight");
    let finalGradeHope = document.querySelector("#finalGradeHope");

    document.querySelector("#currentGradeValue").value = currentGrade.value;
    document.querySelector("#weightValue").value = weight.value;
    document.querySelector("#finalGradeHopeValue").value = finalGradeHope.value;

    calculate(currentGrade.value, weight.value, finalGradeHope.value);
}

document.querySelector("#currentGrade").addEventListener("input", updateValuesFromSliders);
document.querySelector("#weight").addEventListener("input", updateValuesFromSliders);
document.querySelector("#finalGradeHope").addEventListener("input", updateValuesFromSliders);