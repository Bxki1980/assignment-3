/*global document,localstorage

/*img changer*/
var Anime = document.querySelector("img");

document.onclick=function(){
    var second=Anime.getAttribute("src");
    if(second=="Image/naghshe jahan.jpg"){
        Anime.setAttribute("src","Image/isfahan-iran-naqshe-jahan-square.jpg");
    }else{
        Anime.setAttribute("src","Image/naghshe jahan.jpg");
    }

}



document.querySelector("html").onclick=function(){
    alert("ouch! Stop it!");
}



// Username code


document.addEventListener("DOMContentLoaded", function() {
    var heading = document.querySelector("h1");
    var greetingText = document.getElementById("greeting-text");
    var nameForm = document.getElementById("name-form");
    var nameInput = document.getElementById("name-input");
    var changeNameBtn = document.getElementById("change-name-btn");

    function setUsername(name) {
        localStorage.setItem("name", name);
        greetingText.textContent = "Hi " + name;
        // Hide the form after setting the name
        nameForm.style.display = "none";
        changeNameBtn.style.display = "block"; // Show the "Change Name" button
    }

    var storedName = localStorage.getItem("name");
    if (storedName) {
        greetingText.textContent = "Hi " + storedName;
        changeNameBtn.style.display = "block"; // Show the "Change Name" button
    } else {
        // Show the name input form if no name is stored
        nameForm.style.display = "block";
    }

    // Add event listener for form submission
    nameForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        var name = nameInput.value;
        setUsername(name);
    });

    // Add event listener for "Change Name" button
    changeNameBtn.addEventListener("click", function() {
        nameForm.style.display = "block"; // Show the name input form
        changeNameBtn.style.display = "none"; // Hide the "Change Name" button
    });
});








//feeedback on website
function submitFeedback() {
    var feedbackText = document.getElementById("feedback-text").value;
    if (feedbackText.trim() !== "") {
        var feedbackBox = document.getElementById("feedback-box");
        var feedbackItem = document.createElement("div");
        feedbackItem.classList.add("feedback-item");
        feedbackItem.textContent = feedbackText;
        feedbackBox.appendChild(feedbackItem);
        document.getElementById("feedback-text").value = "";
    } else {
        alert("Please enter your feedback before submitting.");
    }
}