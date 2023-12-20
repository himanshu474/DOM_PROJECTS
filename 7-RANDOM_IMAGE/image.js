const imageURL="https://source.unsplash.com/random/";
const content=document.querySelector('.content');

const rows =6;

for(let i=0;i<rows;i++){
    const img=document.createElement('img')
    img.src=`${imageURL}${getRandomSize()}`
    content.appendChild(img)
}

function getRandomSize(){
    return`{getRandomNum()x${getRandomNum()}}`
}

function getRandomNum(){
    return Math.floor(Math.random()*10)+300;
}