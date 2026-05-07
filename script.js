document.querySelector("form").addEventListener("submit",function(e) {
    e.preventDefault();

    document.getElementById("feedback").classList.remove("d-none");
});
