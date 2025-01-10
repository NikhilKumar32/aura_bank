// Smooth Scroll Effect for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target.getAttribute('href');
      if (target.startsWith('#')) {
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        window.location.href = target;
      }
    });
  });
  
  // Navigate Programmatically
  function navigateTo(url) {
    window.location.href = url;
  }
  
  // Login Validation (Mock)
  if (document.title === "Login - Banking Application") {
    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('input[type="text"]').value;
      const password = document.querySelector('input[type="password"]').value;
  
      if (username === "user" && password === "password123") {
        alert("Login Successful!");
        navigateTo("index.html");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  }
  
  // EMI Calculator (Loans Page)
  if (document.title === "Loans - Banking Application") {
    document.querySelector('#calculate-emi').addEventListener('click', () => {
      const principal = parseFloat(document.querySelector('#principal').value);
      const rate = parseFloat(document.querySelector('#rate').value) / 12 / 100;
      const months = parseInt(document.querySelector('#months').value);
  
      if (principal && rate && months) {
        const emi = (principal * rate * Math.pow(1 + rate, months)) /
                    (Math.pow(1 + rate, months) - 1);
        document.querySelector('#emi-result').textContent = `EMI: ₹${emi.toFixed(2)}`;
      } else {
        document.querySelector('#emi-result').textContent = "Please fill all fields.";
      }
    });
  }
  