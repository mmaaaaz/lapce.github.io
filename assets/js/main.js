// create an enum for github links
const github = {
  repo: "https://github.com/lapce/lapce",
  windows: "Lapce-windows.msi",
  linux: "Lapce-linux.tar.gz",
  macos: "Lapce-macos.dmg",
};

// toggle menu visibility
const toggleMenu = () => {
  const menu = document.querySelectorAll(".navbar-menu");
  menu.forEach((item) => item.classList.toggle("hidden"));
};

// add event listeners to burger and close buttons
const addEventListeners = () => {
  const burger = document.querySelectorAll(".navbar-burger");
  const close = document.querySelectorAll(".navbar-close");
  const backdrop = document.querySelectorAll(".navbar-backdrop");

  burger.forEach((item) => item.addEventListener("click", toggleMenu));
  close.forEach((item) => item.addEventListener("click", toggleMenu));
  backdrop.forEach((item) => item.addEventListener("click", toggleMenu));
};

// set download link based on OS
const setDownloadLink = () => {
  const navApp = navigator.userAgent.toLowerCase();
  let OSName = "mac";

  if (navApp.includes("win")) {
    OSName = "win";
  } else if (navApp.includes("linux") || navApp.includes("x11")) {
    OSName = "linux";
  }

  const download = document.querySelector("#download");
  switch (OSName) {
    case "win":
      download.innerText = "Download for Windows";
      download.setAttribute(
        "href",
        `${github.repo}/releases/latest/download/${github.windows}`
      );
      break;
    case "mac":
      download.innerText = "Download for macOS";
      download.setAttribute(
        "href",
        `${github.repo}/releases/latest/download/${github.macos}`
      );
      break;
    case "linux":
      download.innerText = "Download for Linux";
      download.setAttribute(
        "href",
        `${github.repo}/releases/latest/download/${github.linux}`
      );
      break;
  }
};

// add event listener to DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  addEventListeners();
  setDownloadLink();
});
