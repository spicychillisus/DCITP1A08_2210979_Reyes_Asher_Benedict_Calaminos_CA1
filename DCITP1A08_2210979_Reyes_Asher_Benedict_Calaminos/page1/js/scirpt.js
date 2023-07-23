function showSubmissionPopup() {
  // Create the popup element
  var popup = document.createElement("div");
  popup.className = "submission-popup";
  popup.innerHTML = "Submission successful!";
  
  // Add the popup to the body
  document.body.appendChild(popup);
  
  // Remove the popup after a certain time (e.g., 3 seconds)
  setTimeout(function() {
      popup.remove();
  }, 3000);
}