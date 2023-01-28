function genRandoNum(){
    let answer = Math.floor(Math.random()*(256));
    return answer;
}

for (let x = 0; x < 81; x++) {
    let tile = document.createElement("div");
    tile.style.float = "left";
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = "11.1%";
    tile.style.backgroundColor = `rgb(${genRandoNum()}, ${genRandoNum()}, ${genRandoNum()})`
    //tile.style.backgroundColor = "red";

    document.body.appendChild(tile);
};





//tile.style.backgroundColor = "red";