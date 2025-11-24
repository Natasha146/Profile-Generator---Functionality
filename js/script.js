var namebox= document.getElementById('nameInput');
console.log(namebox);

var nameAge= document.getElementById('ageInput');
console.log(nameAge);


var favColor= document.getElementById('colorInput');
console.log(favColor);

var favPet = document.querySelectorAll("input[type='radio']");
console.log(favPet);

var hobbies= document.querySelectorAll("input[type='checkbox']");
console.log(hobbies);

var button= document.getElementById('submitBtn');
console.log(button);

button.addEventListener("click",info);

function info(){
    outPut.innerHTML=namebox.value +" "+ nameAge.value +" "+ favColor.value;
    console.log(nameAge.value);
     console.log(favColor.value);
     
}

var outPut= document.getElementById('output');
console.log(outPut);

const element= document.getElementById('mybtn');
