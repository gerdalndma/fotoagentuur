document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    services: Array.from(document.querySelectorAll('input[name="services"]:checked'))
      .map(cb => cb.value),
    message: document.getElementById("message").value
  };

  console.log("Form data:", data);
  // Here you can send it with fetch() to your backend
});