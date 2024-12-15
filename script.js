function calculate(currentGrade, weight, finalGradeHope) {
    let calc = (finalGradeHope - currentGrade * (1 - weight)) / weight;
    let finalGrade = Math.round(calc*100)/100;
    document.querySelector("#result").innerText = finalGrade;
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