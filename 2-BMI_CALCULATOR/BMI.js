 const form=document.querySelector('form')
  
 form.addEventListener('submit',function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')


    if(height=== ''|| height<0 || isNaN(height)){
         results.innerHTML="Please enter a valid height"
    }else if(weight=== ''|| weight<0 || isNaN(weight)){
         results.innerHTML="Please enter a valid weight"
    }
    else{
       const bmi= (weight/((height*height)/10000)).toFixed(2);
       if (bmi < 18.6) results.innerHTML =
       `Under Weight : <span>${bmi}</span>`;

   else if (bmi >= 18.6 && bmi < 24.9) 
       results.innerHTML = 
           `Normal : <span>${bmi}</span>`;

   else results.innerHTML =
       `Over Weight : <span>${bmi}</span>`;
           
    }

 });