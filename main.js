var container = document.getElementById("container");
var myRange = document.getElementById("myRange");
var slider = document.getElementById("slider");
var clear = document.getElementById("clear");
var eraser = document.getElementById("eraser");
var currentColor = document.getElementById("currentColor");


function makeColumns(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    
    for (let i=0; i<(rows*cols);i++){
        let cell=document.createElement('div'); 
        container.appendChild(cell).className="cell"; 
    }


}



function getGridSize(){

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

myRange.addEventListener('click', getGridSize);



