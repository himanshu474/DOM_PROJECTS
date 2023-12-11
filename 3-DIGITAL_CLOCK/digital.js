const clock=document.getElementById('clock');

setInterval(() => {
    let date= new Date(); 
    clock.innnerHTML=date.toLocaleTimeString();
}, 2000);