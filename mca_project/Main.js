console.log("from script file");
document.getElementById("about").onclick = function() {
    window.location.href = "About.html";
};
document.getElementById("portfolio").onclick = function() {
    window.location.href = "Portfolio.html";
};
document.getElementById("contact").onclick = function() {
    window.location.href = "contact.html";
};
function updateTime() {
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    
    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('timeDiv').textContent = currentTime;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initialize the time when the page loads
  updateTime();
  