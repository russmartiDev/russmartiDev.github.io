document.addEventListener("DOMContentLoaded", ()=>{
    const game = document.querySelector("#game");
    const player = document.querySelector("#player");
    
    let playerY = -5;
    let obstacleX = -10;
    let jump =false;
    let top = false;

    let obstacle = document.createElement("div");
    obstacle.classList.add("w-[5rem]", "h-[5rem]", "bg-slate-600", "top-[-5rem]", "absolute");
    obstacle.style.right = "-10%";   

    game.appendChild(obstacle);
    let i = 0;
    setInterval(()=>{
        if(playerY < -5 && top) {
            playerY += 1.5;
            player.style.top = `${playerY}rem`
        }

        if(jump && playerY > -25) {
            playerY += -2;
            player.style.top = `${playerY}rem`
        }
        else if (jump && playerY <= -25) {
            top = true;
            jump = false
        }

        if(playerY >= -5 && top) {
            top = false;
            playerY = -5;
            player.style.top = `${playerY}rem`

        }

        if(i % 5 == 0 ) {
            if(obstacleX < 110 ) {
                obstacleX += 1;
                obstacle.style.right = `${obstacleX}%`;
            }
            else {
                obstacleX = -10;
                obstacle.style.right = `${obstacleX}%`;
    
            }
        }
        i+=5;
        
    },30)
    

    document.querySelector("body").addEventListener("click", () => {
        if(!top) {
            jump = true;

        }
    });
    document.querySelector("body").addEventListener("keyup", () => {
        if (event.code === 'Space') {
            if(!top) {
                jump = true;
    
            }        
        } 
    });
});
