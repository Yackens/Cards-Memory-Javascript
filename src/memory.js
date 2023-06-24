class MemoryGame {
  constructor(cards) {
    this.gameScreen = document.getElementById("score");
    this.gameEndScreen = document.getElementById("game-end");
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    this.gameEndScreen.style.display = "none"; 
    if (!this.cards || this.cards.length === 0) {
      return undefined
    }

    let cardsRemaining = this.cards.length;

    while (cardsRemaining > 0) {
      let randomIndex = Math.floor(Math.random() * cardsRemaining);
      [this.cards[cardsRemaining - 1], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[cardsRemaining - 1]];
      cardsRemaining -= 1;
      }
    }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      this.gameEndScreen.style.display = "block";
      return true;
    } else {
      return false;
    }
  }
  
  restartGame() {
    location.reload();
  }
}