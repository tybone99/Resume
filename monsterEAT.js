/**
 * Created by Thornton on 4/28/16.
 */
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ["Bubble Gum", "cotton Candy",  "Taffy" ,"salad" ,"carots" , "bannana"];
var currentfood ="";
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
    return currentfood[randomfood];
}

function eatit() {
    //if the food is good
    if (currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy"){
        document.getElementById("commentbox").innerHTML = "yummy";
    var thefood = getfood();
    setfood(thefood)
}

    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "yuk dont eat that";
    }

}

function trashit() {
    //if the food is good
    if ( currentfood == "salad" || currentfood == "carots" ||  currentfood == "bannana") {
    document.getElementById("commentbox").innerHTML = "yeah throw it out";
}
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "no dont  trash that";
        var thefood =getfood();
        setfood(thefood);
    }
}



                     