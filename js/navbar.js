document.addEventListener("DOMContentLoaded", function () {
    fetch("./navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar-container").innerHTML = data;
      })
      .catch((error) => console.error("Error loading navbar:", error));
  });


// När ett menyalternativ klickas på, stäng hamburgarmenyn
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
  item.addEventListener('click', () => {
      const navbarCollapse = document.getElementById('navbarNav');
      const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
      });
      bootstrapCollapse.hide(); // Stänger menyn
  });
});
