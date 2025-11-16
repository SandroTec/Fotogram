

let dialogRefArray = ['first_dialog', 'second_dialog', 'third_dialog'];
currentIndex = 0;


function closeAllDialogs() {
    dialogRefArray.forEach(id => {
        const dlg = document.getElementById(id);
        if (dlg.open) dlg.close();
    });
}


function openDialog(id) {
    currentIndex = dialogRefArray.indexOf(id);
    closeAllDialogs();
    const dlg = document.getElementById(id);
    dlg.showModal();
}



let arrayLength = dialogRefArray.length ;


function nextDialog(){
    if (currentIndex < arrayLength -1) {
        currentIndex++;
        openDialog(dialogRefArray[currentIndex]);
    }
}


function prevDialog() {
    if (currentIndex > 0) {
        currentIndex--;
        openDialog(dialogRefArray[currentIndex]);
    }
}


