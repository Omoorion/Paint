document.body.onload = ()=>{
    offset = 0
    offset1 = 0
    winWidth = window.innerWidth
    winHeight = window.innerHeight
    squareHeight = winHeight / 25
    squareWidth = winWidth / 50
    j=0;
    while(j<squareHeight - 1){
        for(i=0; i<50; i++){
            div = document.createElement("div")
            div.style.backgroundColor = "white"
            div.style.width = squareWidth + "px"
            div.style.height = squareHeight + "px"
            div.style.position = "absolute"
            div.style.marginLeft = offset + "px"
            div.style.marginTop = offset1 + "px"
            document.body.appendChild(div)
            color(div);
            offset += squareWidth
        }
        offset = 0
        offset1 += squareHeight
        j++;
    }
}

function color(div){
    div.addEventListener('mouseover', function handleMouseOver() {
        if(div.style.backgroundColor == "white")
        div.style.backgroundColor = 'grey';
    });
    div.addEventListener('click', function handleOnClick() {
        div.style.backgroundColor = 'red'
    })
    div.addEventListener('mouseout', function handleMouseOver() {
        if(div.style.backgroundColor == "grey")
            div.style.backgroundColor = 'white';
    });
}