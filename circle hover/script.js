const squareArray = document.getElementsByClassName("square");

const colors = ["#e74c3c","#8e44ad","#3498db","#e67e22","2ecc71"];

const defaultColor = "red";

for(const square of squareArray){
    square.addEventListener("mouseenter",()=>{
        const randomNum = parseInt(math.random() * colors.length);
        
        square.style.background = colors[randomNum];

        square.style.transition = "background-color 1s ease";

        square.style.boxshadow = "1px 1px 10px" + colors[randomNum];

        });

        square.addEventListener("mouseleave",()=>{
        
        square.style.backgroundcolor = defaultColor;

        square.style.transition = "background-color 1s ease";

        square.style.boxshadow = "";
    });
}