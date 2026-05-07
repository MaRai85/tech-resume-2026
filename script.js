const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

function updateLocalTime() {
  const timeElement = document.querySelector("#local-time");

  if (!timeElement) return;

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit"
  });

  timeElement.textContent = `Florianópolis / Brazil — ${time} GMT-3`;
}

updateLocalTime();
setInterval(updateLocalTime, 60000);
