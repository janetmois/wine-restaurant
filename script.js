function openingCountdown(){                         
const openingDate = new Date ("December 25, 2025 10:00 AM"); 
const now = new Date();                              
                
const diff=openingDate-now;                         
                                

const msInSec = 1000;                               
const msInMin = 60 * 1000;                          
const msInHour = 60 * 60 * 1000;                    
const msInDay = 24 * 60 * 60 * 1000;               

const displayDay = Math.floor(diff/msInDay);        
document.querySelector(".days").textContent = displayDay; 
const displayHour = Math.floor((diff%msInDay)/msInHour); 
document.querySelector(".hours").textContent = displayHour; 
const displayMinutes = Math.floor((diff%msInHour)/msInMin); 
document.querySelector(".minutes").textContent = displayMinutes; 
const displaySeconds = Math.floor((diff%msInMin)/msInSec);  
document.querySelector(".seconds").textContent = displaySeconds; 
if (diff <= 0){                                               
    document.querySelector(".days").textContent = 0;          
    document.querySelector(".hours").textContent = 0;        
    document.querySelector(".minutes").textContent = 0;     
    document.querySelector(".seconds").textContent = 0;    
    clearInterval(timerID);                           
    
    openNow();                                      
}
}
let timerID = setInterval(openingCountdown, 1000);        


function openNow(){                             
const heading = document.querySelector("h2");    
heading.textContent = "We're open now! Welcome!";  
heading.classList.add("wlc");                   
}
const audio = document.querySelector("#myAudio");    
const button = document.querySelector("#myButt");    
button.addEventListener ("click", function(){   
if (audio.paused) {                          
    audio.play();                          
} 
else {
    audio.pause();
}   
})    