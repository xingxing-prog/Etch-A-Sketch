var container = document.getElementById("container");
var myRange = document.getElementById("myRange");
var slider = document.getElementById("slider");
var cells = document.getElementsByClassName("cell"); 


function makeColumns(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (let i=0; i<(rows*cols);i++){
        let cell=document.createElement('div'); 
        container.appendChild(cell).className="cell";
        
    }
    

}




function getGridSize(e){

    e.preventDefault();

    var col = myRange.value;
    var rangeValue =col;
    makeColumns(rangeValue, rangeValue);
    var newItem = col +" x "+ col;

    slider.textContent =newItem;
    console.log(col);
    
    
}

myRange.addEventListener('change', getGridSize);

cells.forEach((cell)=> {
    cell.addEventListener('click', ()=>{
        cell.style.backgroundColor="green"});
    })


