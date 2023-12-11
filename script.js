
let page = document.querySelector(".main")
page.addEventListener("wheel", function(event){
    event.preventDefault()
    page.scrollLeft += event.deltaY  
})


let x = document.querySelector("#x")
let o = document.querySelector("#o")
let user = document.querySelector("#user")
let bot = document.querySelector("#bot")
let restartBtn = document.querySelector("#restart")
restartBtn.addEventListener("click", restart)

let game = document.querySelectorAll(".cell")

let current = "x"

x.addEventListener("click", ()=>{
    o.style.color = "#fff"
    x.style.color = "#FF6B00"
    current = "x"
    restart()
    user.textContent = "Игрок: 0"
    bot.textContent = "Бот: 0"
    userCount = 0;
    botCount = 0;
})

o.addEventListener("click", ()=>{
    x.style.color = "#fff"
    o.style.color = "#FF6B00"
    current = "o"
    restart()
    user.textContent = "Игрок: 0"
    bot.textContent = "Бот: 0"
    userCount = 0;
    botCount = 0;
})

function restart() {
    for (elem of game){
        elem.innerHTML = ""
    }
    gameMap = [
        0,0,0,
        0,0,0,
        0,0,0
    ]

}

let gameMap = [
    0,0,0,
    0,0,0,
    0,0,0
]

let userCount = 0;
let botCount = 0;

function win(){
   

    if (
    ("x" == gameMap[0] & "x" == gameMap[1] & "x" == gameMap[2]) || 
    ("x" == gameMap[3] & "x" == gameMap[4] & "x" == gameMap[5]) ||
    ("x" == gameMap[6] & "x" == gameMap[7] & "x" == gameMap[8]) ||
    ("x" == gameMap[0] & "x" == gameMap[4] & "x" == gameMap[8]) ||
    ("x" == gameMap[2] & "x" == gameMap[4] & "x" == gameMap[6]) ||
    ("x" == gameMap[0] & "x" == gameMap[3] & "x" == gameMap[6]) ||
    ("x" == gameMap[1] & "x" == gameMap[4] & "x" == gameMap[7]) ||
    ("x" == gameMap[2] & "x" == gameMap[5] & "x" == gameMap[8])
    ){
        if (current == "x"){
            
            user.textContent = `Игрок: ${++userCount}`
            restart()
        }
        if (current == "o"){
            bot.textContent = `Бот: ${++botCount}`
            restart()
        }
    }

    if (
        ("o" == gameMap[0] & "o" == gameMap[1] & "o" == gameMap[2]) || 
        ("o" == gameMap[3] & "o" == gameMap[4] & "o" == gameMap[5]) ||
        ("o" == gameMap[6] & "o" == gameMap[7] & "o" == gameMap[8]) ||
        ("o" == gameMap[0] & "o" == gameMap[4] & "o" == gameMap[8]) ||
        ("o" == gameMap[2] & "o" == gameMap[4] & "o" == gameMap[6]) ||
        ("o" == gameMap[0] & "o" == gameMap[3] & "o" == gameMap[6]) ||
        ("o" == gameMap[1] & "o" == gameMap[4] & "o" == gameMap[7]) ||
        ("o" == gameMap[2] & "o" == gameMap[5] & "o" == gameMap[8])
        ){
            if (current == "o"){
                user.textContent = `Игрок: ${++userCount}`
                restart()
            }
            if (current == "x"){
                bot.textContent = `Бот: ${++botCount}`
                restart()

            }
        }

    if (!gameMap.includes(0)){
        restart()
    }


}

for (elem of game){
    elem.addEventListener("click", (event)=>{
        if (current == "x"){
            
            if (gameMap[event.target.id-1] == 0){
                gameMap[event.target.id - 1] = "x"
                event.target.innerHTML = "<div class='crestikiUser'></div>"
                win()
                botHod()
            }
            
            
    }
        if (current == "o"){
            
            
            if (gameMap[event.target.id-1] == 0){
                gameMap[event.target.id - 1] = "o"
                event.target.innerHTML = "<div class='nolikiUser'></div>"
                win()
                botHod()
            }
        
           
    }
})

}

function botHod(){
    while (true){
        let hod = Math.floor(Math.random() * (9 - 0) + 0);
        if (current == "x"){
            if (gameMap[hod] == 0){
                gameMap[hod] = "o"
                let cell = document.getElementById(`${hod+1}`)
                cell.innerHTML = "<div class='nolikiBot'></div>"
                win()
                break;
            } 
        }
        if (current == "o"){
            if (gameMap[hod] == 0){
                gameMap[hod] = "x"
                let cell = document.getElementById(`${hod+1}`)
                cell.innerHTML = "<div class='crestikiBot'></div>"
                win()
                break;
            }
            
        }
    }
    
}




