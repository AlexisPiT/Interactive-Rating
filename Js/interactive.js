function getRatingButtons(){
    return document.querySelectorAll(".range > *");
}

var selectedRating;

getRatingButtons().forEach(function(ratingButton, idx){
    const theRating = idx + 1 ;

    ratingButton.addEventListener("click", function(){
        if (ratingButton.classList.contains("selected")){
            selectedRating = undefined;
            ratingButton.classList.remove("selected");
        }
        else{
            getRatingButtons().forEach(function(b){
                b.classList.remove("selected");
            });

            selectedRating = theRating;
            ratingButton.classList.add("selected");
        }
    });
});
    
document.getElementById("submit").addEventListener("click",function(){
    if(!selectedRating){
        return;
    }

    document.getElementById("select_range").textContent = selectedRating;


    document.getElementById("card").classList.add("hidden");
    document.getElementById("card_thanks").classList.remove("hidden");
});