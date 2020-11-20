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

    //make div in container
    for (let i = 0; i < xSize * ySize; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
    }

    //get divOfContainer
    let divOfContainer = container.getElementsByTagName("div");

    for (let i = 0; i < divOfContainer.length; i++) {
        //set css in divOfContainer
        divOfContainer[i].style.background = 'white';
        divOfContainer[i].style.border = '1px solid black';

        //listen mouse to divOfContainer
        divOfContainer[i].addEventListener("mouseover", () => {
            let initialRGB = 'yellow';
            divOfContainer[i].style.background = initialRGB;
        });
    }
}

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

    //ask to change grid value
    xSize = prompt("Input xSize.");
    ySize = prompt("Input ySize.");

    //rebuild
    start();
});