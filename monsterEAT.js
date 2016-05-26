/**
 * Created by Thornton on 4/28/16.
 */
// create an array of food items for the monster to eat
var foodarr = ["Chocolate", "carrots", "Cotton Candy", "Apples", "broccoli", "Bananas", "Pizza", "popcorn", "salad"];


// start the game with a function
function rungame(){
    var thefood = getfood();
    setfood(thefood);
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length));
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
    return currentfood[randomfood]
}

function eatit(){
    //if the food is good
    if(currentfood == "Chocolate" || currentfood == "popcorn" || currentfood == "Cotton Candy" || currentfood == "Pizza" || currentfood == "Bacon"){
        document.getElementById("commentbox").innerHTML = " That's Delicious";
        var thefood = getfood();
        setfood(thefood);
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "What are you doing";


    }

}

function trashit(){
    //if the food is good
    if(currentfood == "Chocolate" || currentfood == "popcorn" || currentfood == "Cotton Candy" || currentfood == "Pizza" || currentfood == "Bacon"){
        document.getElementById("commentbox").innerHTML = "NO! don't throw that away";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Nice job that was gross";
        var thefood = getfood();
        setfood(thefood);
    }

}