function calculateBMI(){

let weight=document.getElementById("weight").value;

let height=document.getElementById("height").value;


let bmi = weight/(height*height);


document.getElementById("result").innerHTML =
"Your BMI is: " + bmi.toFixed(1);

}
