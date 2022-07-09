var container = document.getElementById("container");
var myRange = document.getElementById("myRange");
var slider = document.getElementById("slider");
var clear = document.getElementById("clear");
var eraser = document.getElementById("eraser");
var currentColor = document.getElementById("currentColor");
var colorPicker = document.getElementById("color");



function makeColumns(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (let i=0; i<(rows*cols);i++){
        let cell=document.createElement('div'); 
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        
        container.appendChild(cell).className="cell"; 

    }

}

var currentMode = 'color';
myRange.addEventListener('click', getDifferentSize);
myRange.addEventListener('click', reload);

eraser.addEventListener("click", ()=>{
    currentMode ="eraser";
    eraser.className ="active";
    colorPicker.className ="inactive";
    
});

colorPicker.addEventListener('click', ()=>{
    currentMode ="color";
    colorPicker.className="active";
    eraser.className ="inactive";

});






//currentColor.addEventListener('input', changeColor);
let mousedown = false;
document.body.onmousedown =()=>(mousedown =true);
document.body.onmouseup =() =>(mousedown =false);

function changeColor(e){
    console.log(e.target);
    if(e.type === "mouseover" && !mousedown) return;
    else if(currentMode === "color"){
        e.target.style.backgroundColor =currentColor.value;
         
    }
    else if(currentMode === "eraser"){
        e.target.style.backgroundColor = "white";
         
    }
 
    
}

function getDefaultSize(){
    var size = 16;
}

function reload(){
    container.innerHTML ="";
    var size = myRange.value;
    makeColumns(size, size);
}

function getDifferentSize(){
    var size = myRange.value;
    slider.textContent = size +" × "+size;
}

function setUpSketch(){
    reload();
    getDifferentSize();
        
}

setUpSketch();

function clearAll(e){
    console.log(e);
    container.innerHTML ="";
    reload();
    //getDifferentSize();
}

clear.addEventListener('click', clearAll);




/*function getGridSize(){

    var col = myRange.value;
  
    makeColumns(myRange.value, myRange.value);
    var newItem = myRange.value +" x "+ myRange.value;

    slider.textContent =newItem;


    var cells =document.querySelectorAll(".cell");

    cells.forEach((cell)=>{
        cell.style.backgroundColor="white";
    });



    cells.forEach((cell)=>{
        
        
        currentColor.addEventListener("input", ()=>{
            eraser.addEventListener('click', ()=>{
                cell.addEventListener('mousedown', ()=>{
                    if(cell.style.backgroundColor != "white"){
                        cell.style.backgroundColor = "white";
                    }
                    else{
                        cell.style.backgroundColor ="white";
                    }
                })
            });
            cell.addEventListener('mousedown', ()=>{
                
                cell.style.backgroundColor =currentColor.value;
            });
            
            
            clear.addEventListener('click', ()=>{
                cell.style.backgroundColor="white";

              
            });

        })

       
    })



}
getGridSize();

myRange.addEventListener('click', getGridSize);*/



