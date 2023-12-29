const colors = ["red","pink","white","green","yellow","blue","orange","lightblue","lightgreen"];

let box = document.querySelector(".box");
for(let i = 0;i<8000;i++){
    let s = document.createElement("div");
    s.className = "s-box";
    
    s.addEventListener('mouseover', (ele)=>{
        setcolor(ele.target);
    });
    s.addEventListener('mouseout', (ele) => {
        removecolor(ele.target);
    })
    box.appendChild(s);
}
function setcolor(ele){
    let rCol = getColor();
    ele.style.backgroundColor = `${rCol}`;
    ele.style.boxShadow = `0px 0px 2px ${rCol} , 0px 0px 10px ${rCol}`;
}
function removecolor(ele){
    ele.style.backgroundColor = 'rgb(57, 55, 55)';
    ele.style.boxShadow = '0px 0px 2px gray'
}
function getColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}


