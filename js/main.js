document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#nome").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#messaggio").value.trim();
      var subject = encodeURIComponent("Richiesta informazioni dal sito - " + name);
      var body = encodeURIComponent(message + "\n\nContatto: " + name + " (" + email + ")");
      window.location.href = "mailto:info@landinisrl.it?subject=" + subject + "&body=" + body;
    });
  }

  var applyForm = document.getElementById("apply-form");
  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = applyForm.querySelector("#nome").value.trim();
      var email = applyForm.querySelector("#email").value.trim();
      var telefono = applyForm.querySelector("#telefono").value.trim();
      var ruolo = applyForm.querySelector("#ruolo").value;
      var message = applyForm.querySelector("#messaggio").value.trim();
      var subject = encodeURIComponent("Candidatura spontanea dal sito - " + name);
      var body = encodeURIComponent(
        "Ruolo: " + ruolo + "\nContatto: " + name + " (" + email + (telefono ? ", " + telefono : "") + ")\n\n" + message
      );
      window.location.href = "mailto:info@landinisrl.it?subject=" + subject + "&body=" + body;
    });
  }
});
