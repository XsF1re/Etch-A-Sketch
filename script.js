//prepare for 16x16 grid
let xSize = 16;
let ySize = 16;

function start() {
    //get container
    let container = document.getElementById("container");

    //set css in container
    container.style.gridTemplateColumns = `repeat(${xSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${ySize}, 1fr)`;
    container.style.width = '500px';
    container.style.height = '500px';
    container.style.display = 'grid';
    container.style.margin = '0px auto';

    //make div in container and initialize passCount
    for (let i = 0; i < xSize * ySize; i++) {
        let div = document.createElement('div');
        div.setAttribute("passCount", 0);
        container.appendChild(div);
    }

    //get divOfContainer
    let divOfContainer = container.getElementsByTagName("div");

    for (let i = 0; i < divOfContainer.length; i++) {
        //set css in divOfContainer
        divOfContainer[i].style.background = 'white';
        divOfContainer[i].style.border = '1px solid black';

        //listen mouse to divOfContainer
        //increase passCount and set color each of div
        divOfContainer[i].addEventListener("mouseover", () => {
            let passCount = Number(divOfContainer[i].getAttribute("passCount"));
            if(passCount == 0) {
                //color hex from https://www.design-seeds.com/spring-issue-no-2/rock-candy/
                let initialRGB = new Array('#DEED9F', '#C93928', '#E7C860', '#E44A6A', '#FE8342', '#FEB1B1');
                divOfContainer[i].style.background = initialRGB[Math.floor(Math.random() * initialRGB.length)];;
            }
            else if(passCount <= 10) {
                let brightPercent = 100 - 10 * passCount;
                divOfContainer[i].style.filter = `brightness(${brightPercent}%)`;
            }
            divOfContainer[i].setAttribute("passCount", passCount + 1);
        });
    }
}

//start!!!
start();

//add reset button to top
let reset = document.createElement("button");
reset.style.display = 'block';
reset.style.margin = '15px auto';
reset.textContent = 'Reset!';
document.body.prepend(reset);

//reset when click
reset.addEventListener("click", () => {
    //remove all child
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    xSize = prompt("Input xSize.");
    while (isNaN(xSize) || xSize < 0 || xSize > 100)
        xSize = prompt("Please retry input xSize.");
    ySize = prompt("Input ySize.");
    while (isNaN(ySize) || xSize < 0 || xSize > 100)
        xSize = prompt("Please retry input ySize.");

    //rebuild
    start();
});