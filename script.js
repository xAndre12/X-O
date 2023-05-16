const row1 = document.querySelector(".row-1");
const row2 = document.querySelector(".row-2");
const row3 = document.querySelector(".row-3");
let turn = 0;

const bord = [
    row1.children,
    row2.children,
    row3.children,
]

const rowCheck = () => {
    let xNumber = 0;
    let oNumber = 0;
    for(let i = 0; i < 3; i++){
        oNumber = 0;
        xNumber = 0;
        for(let j = 0; j < 3; j++){
            if(bord[i][j].innerHTML === "x"){
                xNumber++
            }
            if(bord[i][j].innerHTML === "o"){
                oNumber++
            }
        }
        if(xNumber === 3 || oNumber === 3){
            console.log("corect");
        }
    }
    
};
const colCheck = () => {
    let xNumber = 0;
    let oNumber = 0;
    for(let i = 0; i < 3; i++){
        oNumber = 0;
        xNumber = 0;
        for(let j = 0; j < 3; j++){
            if(bord[j][i].innerHTML === "x"){
                xNumber++
            }
            if(bord[j][i].innerHTML === "o"){
                oNumber++
            }
        }
        if(xNumber === 3 || oNumber === 3){
            console.log("corect");
        }
    }
    
};


bord.forEach((row)=> {
    const arr = [...row];
    arr.forEach((box)=>{  
        box.addEventListener("click", ()=>{
           if(turn % 2 === 0){
            box.innerHTML = "x";
           }
           else{
            box.innerHTML = "o";
           }
           turn++
           rowCheck();
           colCheck();
        })
    })
})
