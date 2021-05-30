const selectBox = document.querySelector(".select-box")
selectX = selectBox.querySelector(".playerX")
selectO = selectBox.querySelector(".playerO")
playBoard = document.querySelector(".play-board")
allBox= document.querySelectorAll("section span");
players= document.querySelectorAll (".players")
window.onload = () => {
    for (let i=0 ; i < allBox.length; i++)
        { allBox[i].setAttribute("onclick","clickedBox(this)")}
    selectX.onclick = () => {
        selectBox.classList.add("hide")
        playBoard.classList.add("show")
    }

    selectO.onclick = () => {
        selectBox.classList.add("hide")
        playBoard.classList.add("show")
        players.setAttribute("class","players active")
    }
}
let xicon="fas fa-times"
let oicon="far fa-circle"
function clickedBox(element){
    if (players.classList.contains("players")){
        element.innerHTML= `<i class="${oicon}></i>`}
        else 
        {element.innerHTML= `<i class="${xicon}></i>`}
    
}