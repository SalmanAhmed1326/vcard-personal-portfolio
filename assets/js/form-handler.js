// Add event listener for form submission
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Gather form data
  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    // Send form data using fetch API
    const response = await fetch("https://script.google.com/macros/s/AKfycbwnI-D7hUlLgcSY2QrK1o_1vDtpWPvWJsPxPqH6gSyx4XfQ23zHeswygse_BEJTeSik3A/exec", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ fullname, email, message })
    });

    const result = await response.json();

    if (result.result === "success") {
      // Show success message
      const successMessage = document.getElementById("success-message");
      successMessage.style.display = "block";

      // Clear the form fields
      document.getElementById("contact-form").reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      alert("Failed to send the message. Please try again later.");
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
    alert("An error occurred. Please try again later.");
  }
});
