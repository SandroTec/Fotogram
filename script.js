const dialogRef = document.getElementById('first_dialog');
const dialogRefTwo = document.getElementById('second_dialog');
const dialogRefThree = document.getElementById('third_dialog')
const dialogRefFourth= document.getElementById('fourth_dialog');

let dialogRefArray = [dialogRef, dialogRefTwo, dialogRefThree, dialogRefFourth];

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

function openDialog(dialogRefArray) {
    dialogRefArray.showModal();
}

function closeDialog(dialogRefArray) {
    dialogRefArray.close();
    dialogRefArray.classList.remove('opened');
    
}

currentIndex = 0;
let arrayLength = dialogRefArray.length;
function rightDialog(dialogRefArray){
    for (let i = 0; i <= arrayLength; i++) {
        let nextDialog = currentIndex +1;
        openDialog(nextDialog);
    
    }
}
