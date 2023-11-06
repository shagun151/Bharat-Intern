document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullName = document.querySelector('[placeholder="Full Name"]').value;
      const email = document.querySelector('[placeholder="Email Address"]').value;
      const mobileNumber = document.querySelector('[placeholder="Mobile Number"]').value;
      const emailSubject = document.querySelector('[placeholder="Email Subject"]').value;
      const message = document.querySelector("textarea").value;
  
      if (fullName === "" || email === "" || mobileNumber === "" || emailSubject === "" || message === "") {
        alert("Please fill in all fields.");
      } else {
        // You can send the form data to your server or perform other actions here.
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  });
  