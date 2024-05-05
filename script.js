document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const displayOptions = document.querySelectorAll(".option");
    const displayView = document.querySelectorAll(".menu");
    for(let i = 0; i < displayOptions.length; i++){
        displayOptions[i].addEventListener("click", function(){
            for(let display of displayView){
                display.classList.add("hidden");
            }
            displayView[i].classList.remove("hidden");
        });
    }

    let mouseIn = false;
    const techText = document.querySelectorAll(".tech");
    const techDisplay = document.querySelector("#tech-display")
    for(let tech of techText){
        tech.addEventListener("mouseover", function(){
            techDisplay.innerText = this.getAttribute("data-tech");
            mouseIn = true;
        });
        tech.addEventListener("mouseout", function(){
            techDisplay.innerText = "TechStack";
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
            console.log("test")
        }
    }, 100);
});
