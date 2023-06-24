const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);
const restartButton = document.getElementById("restart-button");

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(card);
        card.setAttribute("class", "card turned");
        // card.classList.add('turned')
      }
      setTimeout(() => {
        if (memoryGame.pickedCards.length === 2) {
          const isPair = memoryGame.checkIfPair(
            memoryGame.pickedCards[0].getAttribute("data-card-name"),
            memoryGame.pickedCards[1].getAttribute("data-card-name")
          );
          document.querySelector("#pairs-clicked").innerHTML =
            memoryGame.pairsClicked;
          if (isPair) {
            memoryGame.pickedCards.shift();
            memoryGame.pickedCards.shift();
            memoryGame.pairsGuessed++;
            document.querySelector("#pairs-guessed").innerHTML =
              memoryGame.pairsGuessed / 2;
          } else {
            memoryGame.pickedCards.forEach((card) => {
              card.setAttribute("class", "card");
              memoryGame.pickedCards = [];
            });
          }
        }
      }, 1500);
    });
  });
});

restartButton.addEventListener("click", function () {
  // Call the restartGame function when the button is clicked
  memoryGame.restartGame();
});