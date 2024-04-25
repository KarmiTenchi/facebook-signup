// Get the form element
const form = document.getElementById("signup-form");

// Add an event listener for form submission
form.addEventListener("submit", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Perform validation
  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // Additional validation logic can be added here

  // If all validation passes, submit the form
  form.submit();
});
