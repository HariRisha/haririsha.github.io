// Check if we are on the first page (where the user enters their name)
const det_name_input = document.getElementById('name');
if (det_name_input) {
  // Add event listener for input changes on the first page
  det_name_input.addEventListener('input', () => {
    const det_name = det_name_input.value;
    // Save the user's input in sessionStorage
    sessionStorage.setItem('det_name', det_name);
  });
}

// Check if we are on the second page (where we display the name)
const nameDisplay = document.getElementById('name-display');
if (nameDisplay) {
  // Retrieve the detective's name from sessionStorage
  const det_name = sessionStorage.getItem('det_name');

  // If the name exists, display it in the "name-display" div
  if (det_name) {
    nameDisplay.textContent = `Detective Name: ${det_name}`;
  } else {
    nameDisplay.textContent = "No name found. Go back and enter your name.";
  }
}
