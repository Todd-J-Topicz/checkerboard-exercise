function genRandoNum(){
    let answer = Math.floor(Math.random()*(256));
    return answer;
}

let baseColor = genRandoNum();

for (let x = 0; x < 81; x++) {
    let tile = document.createElement("div");
    tile.style.float = "left";
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = "11.1%";
    //USING RGB METHOD to create radient scale: (this works):
    tile.style.backgroundColor = `rgb(${baseColor + (x*5)}, ${baseColor + (x*2)}, ${baseColor + (x*10)})`

    //HSL method for gradient colors (sort of works for gradience)
    //tile.style.backgroundColor = `hsl(${(15*x)}, 100%, 40%)`
    
  
    document.body.appendChild(tile);
};