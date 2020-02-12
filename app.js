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
//chk1.addEventListener('click',showCheckBoxState);

function showCheckBoxState(event) {
    //console.log(event);
    //console.log(event.target.checked);
    const target = document.getElementById('checkBoxState');
    target.innerHTML = event.target.checked;
}

const vehicleMakes = document.getElementById('vehicleMakes');
vehicleMakes.addEventListener('change',selectionChanged);
//chk1.addEventListener('click',showCheckBoxState);

function selectionChanged(event) {
    //console.log(event);
    const target = document.getElementById('selectedMake');

    if (event.target.selectedIndex > 0) {
        target.innerHTML = event.target.selectedOptions[0].text;
    } else {
        target.innerHTML = '';
    }
}


const user = document.getElementById('user');
const pass = document.getElementById('pass');
const repass = document.getElementById('repass');

/**
 * @description Login Handler
 */
function loginHandler() {

    const target = document.getElementById('p-result');

    if (pass.value == repass.value) {
        target.innerHTML = `User: ${user.value} Pwd: ${pass.value}`;
    } else {
        target.innerHTML = 'passwords do not match';
    }
}



const vehicleModels = document.getElementById('vehicleModels');
vehicleModels.addEventListener('change',selectionChangedModels);

function selectionChangedModels(event) {
    //console.log(event);
    const target = document.getElementById('selectedModel');

    if (event.target.selectedIndex > 0) {
        target.innerHTML = event.target.selectedOptions[0].text;
    } else {
        target.innerHTML = '';
    }
}