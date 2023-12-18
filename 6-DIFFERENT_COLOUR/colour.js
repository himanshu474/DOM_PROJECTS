const randomColour=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+= hex[Math.floor(Math.random()*16)];
    }

    return color;
};

let id;
const changecolor=function(){
    if(!id){
        id=setInterval(bgcolour,1000);
    }
function bgcolour(){
    document.body.style.backgroundColor=randomColour();
}
};

const stopcolur=function(){
clearInterval(id);
id=null;
};

document.querySelector('#start').addEventListener('click',changecolor);

document.querySelector('#stop').addEventListener('click',stopcolur);