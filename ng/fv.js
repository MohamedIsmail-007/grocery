

    function handleLogin(event) {
        // Prevent the form from submitting
        event.preventDefault();
  
        // Get the input values
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const sub= document.getElementById('password').value.trim();
        //const message = document.getElementById('message').value.trim();
        // Check if any field is empty
        if (!email || !password) {
            event.preventDefault(); // Prevent form submission
            alert('Please fill in all fields before submitting the form.');
          }
        if (email || password) {
            event.preventDefault(); // Prevent form submission
            alert('Login successful');
          }
          document.getElementById('email').value = "";
          document.getElementById('password').value = "";
        // If both fields are filled, allow submission
     // Optional: Replace this with actual form submission logic
        // For actual submission, remove the `event.preventDefault()` line above
      }