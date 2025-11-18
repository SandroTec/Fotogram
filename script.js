

let imgArray = ['./img/bay-9939855_1280.jpg','./img/faroe-islands-9939486_1280.jpg','./img/rose-9939147_1280.jpg','./img/flying-9940425_1280.jpg','./img/africa-9904004_1280.jpg','./img/poisonous-snake-9829897_1280.jpg']

const container = document.getElementById('imgContainer');

for (let i = 0; i < imgArray.length; i++) {
            const img = document.createElement('img');
            img.src = imgArray[i];
            container.appendChild(img);
}


const imgContainer = document.querySelector("#imgContainer");
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector(".escBtn");


imgContainer.addEventListener("click", (event, i) => {
    if (event.target.tagName === "IMG") {
        dialog.showModal();
        const img = document.createElement('img');
        img.src = imgArray[i];
    }
});



closeBtn.addEventListener("click", () => {
    dialog.close();
});

