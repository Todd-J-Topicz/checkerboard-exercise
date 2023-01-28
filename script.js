// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`

//for loop to create 81 divvs/blocks (checkers is 9x9 = 81):
// for (let x =0; x < 81; x++){
//     let block = document.createElement("div");
    
// };
for (let x = 0; x < 81; x++) {
    let tile = document.createElement("div");
    tile.style.float = "left";
    tile.style.minWidth = "11.1%";
    tile.style.paddingBottom = "11.1%";

    x % 2 === 0 ? tile.style.backgroundColor = "black" : tile.style.backgroundColor = "red";

    document.body.appendChild(tile);
};


//git branch - status of branch
//git checkout -b "NAME"  - creates 
//git merge develop (develop is standard, which holds all up to date branches)
//

