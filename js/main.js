// Move one game card at a time.
const gamesTrack = document.querySelector("#games-track");
const firstGame = document.querySelector(".game-card");
const previousGame = document.querySelector("#previous-game");
const nextGame = document.querySelector("#next-game");
const allGames = document.querySelector("#all-games");

function moveGames(direction) {
  const secondGame = firstGame.nextElementSibling;
  const distance = secondGame.offsetLeft - firstGame.offsetLeft;
  gamesTrack.scrollBy({ left: distance * direction, behavior: "smooth" });
}

previousGame.addEventListener("click", function () {
  moveGames(-1);
});

nextGame.addEventListener("click", function () {
  moveGames(1);
});

allGames.addEventListener("click", function () {
  const isExpanded = gamesTrack.classList.toggle("show-all");
  previousGame.classList.toggle("d-none", isExpanded);
  nextGame.classList.toggle("d-none", isExpanded);
  allGames.setAttribute("aria-expanded", isExpanded);
  if (isExpanded) {
    allGames.textContent = "SHOW FEWER GAMES";
  } else {
    allGames.textContent = "VIEW ALL GAMES";
    document.querySelector("#latest-games").scrollIntoView();
  }
});

// Show feedback for the demo form without sending any data.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formStatus.textContent = "Demo complete. Your message was not sent.";
  contactForm.reset();
});
