
roll = true;
prevNum = 1;


function diceRoll(){

    if(roll == true){
    randomNumber1 = Math.floor(Math.random()*6+1);
    if(randomNumber1 == prevNum){
        if(randomNumber1 == 1){
            randomNumber1 = randomNumber1 + 1;
        }else{
            randomNumber1 = randomNumber1 - 1;
        }
    }
    
        prevNum = randomNumber1;



    switch (randomNumber1)
    {
        case 1: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal1.png"); break;
        case 2: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal2.png"); break;
        case 3: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal3.png"); break;
        case 4: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal4.png"); break;
        case 5: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal5.png"); break;
        case 6: 
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal6.png"); break;
    }

    
        setTimeout(diceRoll, 200);
    }
    
}

//if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    function choose(){
        roll = false;
        randomNumber1 = Math.floor(Math.random()*6+1);

        console.log("log is:" + randomNumber1);

        if(randomNumber1 == 1){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal1.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Giant_panda'");
        }
        if(randomNumber1 == 2){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal2.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Peafowl'");
        }
        if(randomNumber1 == 3){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal3.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Tiger'");
        }
        if(randomNumber1 == 4){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal4.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Lion'");
        }
        if(randomNumber1 == 5){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal5.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Horse'");
        }
        if(randomNumber1 == 6){
            document.getElementsByClassName("img1")[0].setAttribute("src", "images/animal6.png");
            document.getElementsByClassName("animalBtn")[0].setAttribute("onclick", "window.location.href='https://en.wikipedia.org/wiki/Eagle'");
        }
        document.getElementsByClassName("animalBtn")[0].querySelector("span").textContent = "More informations";
        document.getElementsByClassName("animalBtn")[0].setAttribute("class", "btnAnim button-64 animalBtn");
    
    }
    

//}
//else
//{
    if(roll == true){
        diceRoll();
    }

//}