document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("form[data-mailto-subject]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (value, key) {
        if (!value) return;
        var label = key.charAt(0).toUpperCase() + key.slice(1);
        lines.push(label + ": " + value);
      });
      var subject = encodeURIComponent(form.getAttribute("data-mailto-subject"));
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:info@landinisrl.it?subject=" + subject + "&body=" + body;
    });
  });
});
