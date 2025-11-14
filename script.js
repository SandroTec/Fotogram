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

const currentIndex = 0;
function leftDialog(dialogRefArray){
    const prevIndex = (currentIndex - 1 + dialogRefArray.length) % dialogRefArray.length;
    openDialog(dialogRefArray[prevIndex]);
    closeDialog(dialogRefArray[currentIndex]);
    
}

function rightDialog(dialogRefArray) {
   
    const nextIndex = (currentIndex + 1) % dialogRefArray.length;
    openDialog(dialogRefArray[nextIndex]);
    closeDialog(dialogRefArray[currentIndex]);
}