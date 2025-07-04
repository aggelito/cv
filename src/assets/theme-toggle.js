document.addEventListener("DOMContentLoaded", () => {
  const swap = document.querySelector(".swap");
  const themeIcons = document.querySelectorAll(".theme-icon");

  const observer = new IntersectionObserver(() => {    
    themeIcons.forEach(icon => {
      icon.classList.remove("transition-none");
    });    
    observer.unobserve(swap);
  });

  observer.observe(swap);
  
  const checkbox = document.getElementById("themeToggle");
  if (!checkbox) return;

  checkbox.addEventListener("change", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme == "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
