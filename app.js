let scond=document.querySelector("#second");
let mint=document.querySelector("#mint");
let min=0;
let hours=document.querySelector("#hours");
let hour=0

let count=0;
let timer;

function timerStart(){
     timer= setInterval(function(){
           scond.innerHTML= `${count ++} `;
                if(count>60){
                    count=0;
                    mint.innerHTML= `${++min} `
                }
                if(min>=60){
                    min=0;
                    hours.innerHTML= `${++hour} `
                }
            
    },100)
    
}


function timerStop(){
    clearInterval(timer)

}
function timerRest(){
    count=0;
    scond.innerHTML=0
    mint.innerHTML=0;
    hours.innerHTML=0;
    clearInterval(timer);

    
}