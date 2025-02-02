document.querySelector(".form-container").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const name = document.getElementById("t1").value.trim(); 

    if (name !== "") {
        window.location.href = "level.html";
    } else {
        alert("Please enter your name before proceeding!");
    }
});
