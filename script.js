document.addEventListener("DOMContentLoaded", function() {

  document.querySelector("form").addEventListener("submit",function(e) {
    e.preventDefault();

    document.getElementById("feedback").classList.remove("d-none");

    setTimeout(function() {
            feedback.classList.add("d-none");
        }, 3000);

  });
    
});

const toggleButton = document.getElementById('theme-toggle'); 

 

toggleButton.addEventListener('click', function() { 

    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 

        toggleButton.textContent = 'Light Mode'; 

    } else { 

        toggleButton.textContent = 'Dark Mode'; 

    } 

}); 
