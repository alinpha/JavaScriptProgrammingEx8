/**
 * Author:Aline Vetrov
 * Date: Feb.11, 2020
 * Title: JS Ex8 - js
 */

const myDivTag = document.getElementById('myDiv');
myDivTag.innerHTML = 'Hello World';

function clickHandler() {
    const inputElement = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');
    target.innerHTML = inputElement.value;
    //console.log("btn click");
}

const button = document.getElementById('btnClickMe');
button.addEventListener('click',clickHandler);

const chk1 = document.getElementById('chkMyCheckBox');
chk1.addEventListener('change',showCheckBoxState);

function showCheckBoxState(event) {
    //console.log(event);
    //console.log(event.target.checked);
    
}

