function calculate(currentGrade, weight, finalGradeHope) {
    let calc = (finalGradeHope - ((1 - weight/100) * currentGrade))/(weight/100);
    document.querySelector("#result").innerText = Math.round(calc*100)/100;
    document.querySelector("#result").style.color = calc > 100 ? "red" : "green";
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

function updateSlidersFromValues() {
    let currentGrade = document.querySelector("#currentGradeValue");
    let weight = document.querySelector("#weightValue");
    let finalGradeHope = document.querySelector("#finalGradeHopeValue");

    document.querySelector("#currentGrade").value = currentGrade.value;
    document.querySelector("#weight").value = weight.value;
    document.querySelector("#finalGradeHope").value = finalGradeHope.value;

    calculate(currentGrade.value, weight.value, finalGradeHope.value);
}

document.querySelector("#currentGradeValue").addEventListener("input", updateSlidersFromValues);
document.querySelector("#weightValue").addEventListener("input", updateSlidersFromValues);
document.querySelector("#finalGradeHopeValue").addEventListener("input", updateSlidersFromValues);

document.querySelector("#currentGrade").addEventListener("input", updateValuesFromSliders);
document.querySelector("#weight").addEventListener("input", updateValuesFromSliders);
document.querySelector("#finalGradeHope").addEventListener("input", updateValuesFromSliders);

