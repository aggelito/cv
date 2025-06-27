document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("themeToggle");
  if (!checkbox) return;

  checkbox.addEventListener("change", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme == "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
