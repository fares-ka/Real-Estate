// Retrieve current theme from localStorage
let currentTheme = localStorage.getItem("theme");

// Check if current theme is dark mode
if (currentTheme === "dark") {
  document.body.style.backgroundColor = "rgba(23, 22, 27, 1)";
  document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(23, 22, 27, 1)";
  document.getElementById("nav-items").style.color = "white";
  document.getElementById("copyright").style.color = "white";
  document.getElementById("footer-items").style.color = "white";
  document.getElementById("h1-text").style.color = "white";
  document.getElementById("p-text").style.color = "white";
  document.getElementById("search-container").style.backgroundColor = "rgba(23, 22, 27, 1)";
  document.getElementById("search-input").style.backgroundColor = "rgba(23, 22, 27, 1)";
  document.getElementsByTagName("form")[0].style.backgroundColor = "rgba(23, 22, 27, 1)";
  document.getElementById("toggle-theme").src = "./image/Vector (1).png";
  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.backgroundColor = "rgba(23, 22, 27, 1)";
    cards[i].style.color = "white";
  }
} else {
  currentTheme = "light";
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
  if (currentTheme === "light") {
    document.body.style.backgroundColor = "rgba(23, 22, 27, 1)";
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(23, 22, 27, 1)";
    document.getElementById("nav-items").style.color = "rgb(248, 248, 248)";
    document.getElementById("copyright").style.color = "rgb(248, 248, 248)";
    document.getElementById("footer-items").style.color = "rgb(248, 248, 248)";
    document.getElementById("h1-text").style.color = "rgb(248, 248, 248)";
    document.getElementById("p-text").style.color = "rgb(248, 248, 248)";
    document.getElementById("search-container").style.backgroundColor = "rgba(23, 22, 27, 1)";
    document.getElementById("search-input").style.backgroundColor = "rgba(23, 22, 27, 1)";
    document.getElementsByTagName("form")[0].style.backgroundColor = "rgba(23, 22, 27, 1)";
    document.getElementById("toggle-theme").src = "./image/Vector (1).png";
    let cards = document.getElementsByClassName("card");
    currentTheme = "dark";
    localStorage.setItem("theme", "dark");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "rgba(23, 22, 27, 1)";
      cards[i].style.color = "white";
    }
   
  } else {
    document.body.style.backgroundColor = "rgb(248, 248, 248)";
    document.getElementsByTagName("nav")[0].style.backgroundColor = "rgb(248, 248, 248)";
    document.getElementById("nav-items").style.color = "rgba(23, 22, 27, 1)";
    document.getElementById("copyright").style.color = "rgba(23, 22, 27, 1)";
    document.getElementById("footer-items").style.color = "rgba(23, 22, 27, 1)";
    document.getElementById("h1-text").style.color = "rgba(23, 22, 27, 1)";
    document.getElementById("p-text").style.color = "rgba(23, 22, 27, 1)";
    document.getElementById("search-container").style.backgroundColor = "white";
    document.getElementById("search-input").style.backgroundColor = "white";
    document.getElementsByTagName("form")[0].style.backgroundColor = "white";
    document.getElementById("toggle-theme").src = "./image/Vector.png";
    let cards = document.getElementsByClassName("card");
    currentTheme = "light";
    localStorage.setItem("theme", "light");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.backgroundColor = "white";
      cards[i].style.color = "rgba(23, 22, 27, 1)";
    }
    
  }
}

// Function to filter cards based on search input
function filterCards() {
  const filterValue = searchInput.value.toUpperCase();
  for (let i = 0; i < cards.length; i++) {
    const cardTitle = cards[i].getElementsByClassName("card-title")[0];
    if (cardTitle.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

const searchInput = document.getElementById("search-input");
const cards = document.getElementsByClassName("card");

// Add event listener to search input
searchInput.addEventListener("keyup", filterCards);


