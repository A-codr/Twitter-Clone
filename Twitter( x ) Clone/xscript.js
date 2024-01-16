
 // Add click event listener to toggle the menu visibility
 document.getElementById("settingsIcon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var settingMenu = document.getElementById("settingMenu");
    settingMenu.style.display = (settingMenu.style.display === "none") ? "block" : "none";
  });


  
  
  
  