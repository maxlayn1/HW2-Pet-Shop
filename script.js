const submitButton = document.getElementById('submitButton');
const header = document.getElementById('header');
const petNameInput = document.getElementById('petName');
const dogRadioButton = document.getElementById('dogRadio');
const catRadioButton = document.getElementById('catRadio');
const drop1 = document.getElementById('drop1');
const drop2 = document.getElementById('drop2');
const checkList = [document.getElementById('check1'), document.getElementById('check2'), document.getElementById('check3'), 
    document.getElementById('check4'), document.getElementById('check5'), document.getElementById('check6')];

let selectedRadioButton;
let radioButtonText;

submitButton.addEventListener('click', checkIfNoRadioSelected);

function checkIfNoRadioSelected() {
    if (!dogRadioButton.checked && !catRadioButton.checked) {
        alert('Please select whether you would like a cat or a dog');
    }
    else {
        selectedRadioButton = dogRadioButton.checked ? document.getElementById('dogRadio') : document.getElementById('catRadio');
        radioButtonText = selectedRadioButton.id === 'dogRadio' ? 'dog' : 'cat';
        checkIfNoName();
    }
}

function makeCheckboxList() {
    let featureList = '';
    checkList.forEach((el) => {
        if (el.checked) {
            featureList += '     ' + el.name + '\n';
        }
    });
    return featureList;
}

function checkIfNoName() {
    if (petNameInput.value === '') {
        alert("Please enter a pet name");
    }
    else if (radioButtonText === 'dog' && checkList[5].checked) {
        alert('Only a cat can be a purring animal');
    }
    else {
        successfulAdoption();
    }
}

function successfulAdoption() {
    let featureList = makeCheckboxList();
    alert(`Congratulations! You have adopted ${petNameInput.value}!\n${petNameInput.value} is a ${radioButtonText} with ${drop1.value} fur and ${drop2.value} eyes.\n${petNameInput.value} is also a:\n${featureList}`);
    return true;
}