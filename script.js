function openEmployer(employerName, elmnt, color, hide1, hide2) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(employerName).style.display = "flex";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = 'var(--brand-color-lighter)';
    elmnt.style.borderBottomColor = 'var(--brand-color-lighter)'

    document.getElementById(hide1).style.borderBottomColor = 'white';
    document.getElementById(hide2).style.borderBottomColor = 'white';
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("dino-button").click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}