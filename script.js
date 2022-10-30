let cont = document.getElementsByClassName("cont");
let card = document.createElement("div");
card.setAttribute("class", "card");
function cards() {
    // for(i = 0; i < 256; i++) {
    //         let card = document.createElement("div");
    //         card.setAttribute("class", "card");
    //         cont[0].appendChild(card);
    // }

    for(j = 0; j < 16; j++) {
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        cont[0].appendChild(row);
        let br = document.createElement("br");
        cont[0].appendChild(br);
        for(i = 0; i < 16; i++) {
            let card = document.createElement("div");
            card.setAttribute("class", "card");
            row.appendChild(card);
        }
    }
}
cards();

function manualGrid() {
    cont[0].innerHTML = "";
    let gridSideNumber = prompt("How many grinds grids on side would you like?");
    if(gridSideNumber <= 100) {
        for(j = 0; j < gridSideNumber; j++) {
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            cont[0].appendChild(row);
            let br = document.createElement("br");
            cont[0].appendChild(br);
            for(i = 0; i < gridSideNumber; i++) {
                let card = document.createElement("div");
                card.setAttribute("class", "card");
                row.appendChild(card);
            }
        }
    }
    else if(gridSideNumber > 100 || gridSideNumber !== Number) {
        Alert("You put a numebr bigger than 100 or not a number");
    }
}