

let imgArray = ['./img/bay-9939855_1280.jpg','./img/faroe-islands-9939486_1280.jpg','./img/rose-9939147_1280.jpg','./img/flying-9940425_1280.jpg','./img/africa-9904004_1280.jpg','./img/poisonous-snake-9829897_1280.jpg']
let imgDescription = ['Ufer','Insel','Rose','Vögel','Globus','Schlange']

function render() {
    
    let container = document.getElementById('imgContainer');
        for (let i = 0; i < imgArray.length; i++) {
                container.innerHTML += getImg(i);
        }
    function getImg(i) {
        return  `<div class="startseite">
                    <img data-index="${i}" src="${imgArray[i]}" alt="${imgDescription[i]}">
                </div>`
    }}

function getImgAndText(i) {
        return  `<div class="imgContainer">
                    <p>
                        ${imgDescription[i]}
                    </p>
                    <br>
                    <br>
                    <img src="${imgArray[i]}" alt="${imgDescription[i]}">
                    
                </div>`
    }
const imgContainer = document.querySelector("#imgContainer");
const dialog = document.querySelector("#dialog");
const dialogImgContainer = document.querySelector("#dialogImgContainer");

imgContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const index = event.target.dataset.index;

        currentIndex = Number(index);   

        dialog.showModal();
        dialogImgContainer.innerHTML = getImgAndText(currentIndex);

    }
});


const closeBtn = document.querySelector(".escBtn");

closeBtn.addEventListener("click", () => {
    dialog.close();
});


let currentIndex = 0;

const prevBtn = document.querySelector('#prevBtn');

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) currentIndex = imgArray.length - 1;
    dialogImgContainer.innerHTML = getImgAndText(currentIndex);

});

const nextBtn = document.querySelector('#nextBtn')

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= imgArray.length) currentIndex = 0;
    dialogImgContainer.innerHTML = getImgAndText(currentIndex);
    
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

    