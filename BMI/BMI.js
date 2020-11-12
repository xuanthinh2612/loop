function checkbmi() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = weight / (height * height);
    let output = document.getElementById("result");
    bmi < 18.5 ? output.innerText = 'Under Weight' : bmi < 25 ? output.innerText = 'Normal' : bmi <= 30 ? output.innerText = 'Over Weight' : output.innerText = "Obese";
}