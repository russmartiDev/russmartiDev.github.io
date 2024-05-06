document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    let display = 0;
    const displayOptions = document.querySelectorAll(".option");
    const displayView = document.querySelectorAll(".menu");
    const nextDisplay = document.querySelectorAll(".next");
    const prevDisplay = document.querySelectorAll(".prev");
    for(let i = 0; i < displayOptions.length; i++){
        displayOptions[i].addEventListener("click", function(){
            for(let display of displayView){
                display.classList.add("hidden");
            }
            displayView[i].classList.remove("hidden");
            display = i;
        });
    }
    for(let next of nextDisplay){
        next.addEventListener("click", function () {
            if(display < nextDisplay.length - 1) {
                for(let display of displayView){
                    display.classList.add("hidden");
                }
                display += 1;
                displayView[display].classList.remove("hidden");
            }
        });
    }
    for(let prev of prevDisplay){
        prev.addEventListener("click", function () {
            if(display > 0) {
                for(let display of displayView){
                    display.classList.add("hidden");
                }
                display -= 1;
                displayView[display].classList.remove("hidden");
            }
        });
    }

    let mouseIn = false;
    const techText = document.querySelectorAll(".tech");
    const techDisplay = document.querySelector("#tech-display");
    let textDisplay = "";
    let textCount = 0;
    for(let tech of techText){
        tech.addEventListener("mouseover", function(){
            // techDisplay.innerText = this.getAttribute("data-tech");
            textDisplay = this.getAttribute("data-tech");
            mouseIn = true;
        });
        tech.addEventListener("mouseout", function(){
            techDisplay.innerText = "TechStack";
            textDisplay = "";
            textCount = 0;
            mouseIn = false;
        });
    }
    

    setInterval(function(){
        if(!mouseIn) {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
            let text = "";
            for(let i = 0; i < 10; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                text += characters[randomIndex];
            }
            techDisplay.innerText = text;
        }
        else if(mouseIn && textCount <= textDisplay.length){
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
            let randomIndex = Math.floor(Math.random() * characters.length);
            let text = textDisplay.slice(0, textCount);

            for(let i = textCount; i < textDisplay.length; i++) {
                let randomIndex = Math.floor(Math.random() * characters.length);
                text += characters[randomIndex];
            }

            textCount++;
            techDisplay.innerText = text;
        }
    }, 100);
});
