

let dialogRefArray = ['first_dialog', 'second_dialog', 'third_dialog','fourth_dialog', 'fifth_dialog','sixth_dialog'];
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
    }else openDialog(dialogRefArray[0])
}


function prevDialog() {
    if (currentIndex > 0) {
        currentIndex--;
        openDialog(dialogRefArray[currentIndex]);
    }else openDialog(dialogRefArray[arrayLength-1])
}


const currentIndex = 0;


