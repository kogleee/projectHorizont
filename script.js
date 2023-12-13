var scrollBlock = document.querySelector(".main");
scrollBlock.addEventListener("wheel", function (event) {
    event.preventDefault();
    scrollBlock.scrollLeft += event.deltaY;
});
var x = document.querySelector("#x");
var o = document.querySelector("#o");
var user = document.querySelector("#user");
var bot = document.querySelector("#bot");
var restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", restartButton);
var game = document.querySelectorAll(".cell");
var current = "x";
x.addEventListener("click", function () {
    o.style.color = "#fff";
    x.style.color = "#FF6B00";
    current = "x";
    restart();
});
o.addEventListener("click", function () {
    x.style.color = "#fff";
    o.style.color = "#FF6B00";
    current = "o";
    restart();
});
function restartButton() {
    for (var _i = 0, game_2 = game; _i < game_2.length; _i++) {
        var elem = game_2[_i];
        elem.innerHTML = "";
    }
    gameMap = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    user.textContent = "Игрок: 0";
    bot.textContent = "Бот: 0";
    userCount = 0;
    botCount = 0;
}
function restart() {
    for (var _i = 0, game_3 = game; _i < game_3.length; _i++) {
        var elem = game_3[_i];
        elem.innerHTML = "";
    }
    gameMap = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
}
var gameMap = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
];
var userCount = 0;
var botCount = 0;
function win() {
    if (("x" == gameMap[0] && "x" == gameMap[1] && "x" == gameMap[2]) ||
        ("x" == gameMap[3] && "x" == gameMap[4] && "x" == gameMap[5]) ||
        ("x" == gameMap[6] && "x" == gameMap[7] && "x" == gameMap[8]) ||
        ("x" == gameMap[0] && "x" == gameMap[4] && "x" == gameMap[8]) ||
        ("x" == gameMap[2] && "x" == gameMap[4] && "x" == gameMap[6]) ||
        ("x" == gameMap[0] && "x" == gameMap[3] && "x" == gameMap[6]) ||
        ("x" == gameMap[1] && "x" == gameMap[4] && "x" == gameMap[7]) ||
        ("x" == gameMap[2] && "x" == gameMap[5] && "x" == gameMap[8])) {
        if (current == "x") {
            user.textContent = "\u0418\u0433\u0440\u043E\u043A: ".concat(++userCount);
            restart();
            return false;
        }
        if (current == "o") {
            bot.textContent = "\u0411\u043E\u0442: ".concat(++botCount);
            restart();
            return false;
        }
    }
    if (("o" == gameMap[0] && "o" == gameMap[1] && "o" == gameMap[2]) ||
        ("o" == gameMap[3] && "o" == gameMap[4] && "o" == gameMap[5]) ||
        ("o" == gameMap[6] && "o" == gameMap[7] && "o" == gameMap[8]) ||
        ("o" == gameMap[0] && "o" == gameMap[4] && "o" == gameMap[8]) ||
        ("o" == gameMap[2] && "o" == gameMap[4] && "o" == gameMap[6]) ||
        ("o" == gameMap[0] && "o" == gameMap[3] && "o" == gameMap[6]) ||
        ("o" == gameMap[1] && "o" == gameMap[4] && "o" == gameMap[7]) ||
        ("o" == gameMap[2] && "o" == gameMap[5] && "o" == gameMap[8])) {
        if (current == "o") {
            user.textContent = "\u0418\u0433\u0440\u043E\u043A: ".concat(++userCount);
            restart();
            return false;
        }
        if (current == "x") {
            bot.textContent = "\u0411\u043E\u0442: ".concat(++botCount);
            restart();
            return false;
        }
    }
    if (!gameMap.includes(0)) {
        restart();
        return false;
    }
    return true;
}
for (var _i = 0, game_1 = game; _i < game_1.length; _i++) {
    var elem = game_1[_i];
    elem.addEventListener("click", function (event) {
        if (current == "x") {
            if (gameMap[event.target.id - 1] == 0) {
                gameMap[event.target.id - 1] = "x";
                event.target.innerHTML = "<div class='crestikiUser'></div>";
                if (win())
                    botHod();
            }
        }
        if (current == "o") {
            if (gameMap[event.target.id - 1] == 0) {
                gameMap[event.target.id - 1] = "o";
                event.target.innerHTML = "<div class='nolikiUser'></div>";
                if (win())
                    botHod();
            }
        }
    });
}
function botHod() {
    while (true) {
        var hod = Math.floor(Math.random() * (9 - 0) + 0);
        if (current == "x") {
            if (gameMap[hod] == 0) {
                gameMap[hod] = "o";
                var cell = document.getElementById("".concat(hod + 1));
                cell.innerHTML = "<div class='nolikiBot'></div>";
                win();
                break;
            }
        }
        if (current == "o") {
            if (gameMap[hod] == 0) {
                gameMap[hod] = "x";
                var cell = document.getElementById("".concat(hod + 1));
                cell.innerHTML = "<div class='crestikiBot'></div>";
                win();
                break;
            }
        }
    }
}
