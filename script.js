document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thanks for reaching out! We'll get back to you soon.");
      form.reset();
    });
  }
});
