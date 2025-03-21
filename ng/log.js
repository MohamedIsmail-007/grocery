function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation
  if (!name || !email || !mobile || !message) {
    alert('Please fill in all fields before submitting the form.');
    return;
  }

  // Validate mobile number (10 digits)
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number.');
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If all validations pass, show success message and redirect
  alert('Form submitted successfully!');
  window.location.href = 'index.html'; // Redirect to the home page
}