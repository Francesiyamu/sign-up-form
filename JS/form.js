const formElements = document.forms["form-details"];

function loopthrough (event){
    event.preventDefault();
    let text = "";
    for(let element of formElements.elements){
    text += element.value + "<br>";
}
console.log(text);
}

formElements.addEventListener('submit', loopthrough);


