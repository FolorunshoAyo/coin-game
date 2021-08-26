(function () {
    class CoinGame {
        constructor() {
            this.player1Selection = document.getElementById("player-selection");
            this.player2Selection = document.getElementById("computer-selection");
            this.winner = document.getElementById("winner");
            this.coinImage = document.getElementById("coin-image");
            this.playerScore = document.getElementById("player-score");
            this.computerScore = document.getElementById("computer-score");
            this.headButton = document.getElementById("heads");
            this.tailButton = document.getElementById("tails");
        }

        addplayerScore() {
            let currentScore = parseInt(this.playerScore.textContent);
            let updatedScore = currentScore + 1;
            setTimeout(() => {
                this.playerScore.textContent = updatedScore;
            }, 500);
        }
        addcomputerScore() {
            let currentScore = parseInt(this.computerScore.textContent);
            let updatedScore = currentScore + 1;
            setTimeout(() => {
                this.computerScore.textContent = updatedScore;
            }, 500);
        }
        backToDefault() {
            this.player1Selection.textContent = "??";
            this.player1Selection.style.color = "initial";
            this.player2Selection.textContent = "??";
            this.player2Selection.style.color = "initial";
            this.winner.textContent = "";
            this.headButton.removeAttribute("disabled");
            this.tailButton.removeAttribute("disabled");
        }
        checkScores() {
            let computerScore = parseInt(this.computerScore.textContent);
            let playerScore = parseInt(this.playerScore.textContent);

            if (computerScore == 5) {
                window.alert("Computer has won the game, starting over....");
                window.location.reload();
            }
            if (playerScore == 5) {
                window.alert("You have won this game congratulations, starting over....");
                window.location.reload();
            }
        }
        clickedHeads() {
            let counter = 0;
            let cardNoDeterminant = Math.floor(Math.random() * 2);
            let cardChoices = ['tail', 'head'];
            this.player1Selection.textContent = "Heads";
            this.player1Selection.style.color = "green";
            this.player2Selection.textContent = "Tails";
            this.player2Selection.style.color = "blue";

            setTimeout(() => {
                let flipping = setInterval(() => {
                    this.coinImage.src = "images/tail.png";
                    this.coinImage.alt = "tail of coin";

                    setTimeout(() => {
                        this.coinImage.src = "images/head.png";
                        this.coinImage.alt = "head of coin";
                    }, 500);
                    counter += 1;
                    if (counter == 5) {
                        clearInterval(flipping);
                        console.log(cardNoDeterminant);
                        setTimeout(() => {
                            let result = cardChoices[cardNoDeterminant];
                            if (cardNoDeterminant == 0) {
                                this.coinImage.src = "images/tail.png";
                                this.coinImage.alt = "tail of coin";
                            } else {
                                this.coinImage.src = "images/head.png";
                                this.coinImage.alt = "head of coin";
                            }
                            if (result === 'tail') {
                                this.winner.style.color = 'blue';
                                setTimeout(() => {
                                    this.winner.textContent = "Computer wins";
                                }, 500);
                                this.addcomputerScore();
                                setTimeout(() => {
                                    this.backToDefault();
                                    setTimeout(() => { this.checkScores() },2000);
                                }
                                    , 3000);
                            } else {
                                this.winner.style.color = 'green';
                                setTimeout(() => {
                                    this.winner.textContent = "You won";
                                }, 500);
                                this.addplayerScore();
                                setTimeout(() => {
                                    this.backToDefault()
                                    setTimeout(() => { this.checkScores() },2000);
                                }
                                    , 3000);
                            }
                        }, 1000);
                    }
                }, 1000);
            }, 1500);
        }
        clickedTails() {
            let counter = 0;
            let cardNoDeterminant = Math.floor(Math.random() * 2);
            let cardChoices = ['tail', 'head'];
            this.player1Selection.textContent = "Tails";
            this.player1Selection.style.color = "blue";
            this.player2Selection.textContent = "Heads";
            this.player2Selection.style.color = "green";

            setTimeout(() => {
                let flipping = setInterval(() => {
                    this.coinImage.src = "images/tail.png";
                    this.coinImage.alt = "tail of coin";

                    setTimeout(() => {
                        this.coinImage.src = "images/head.png";
                        this.coinImage.alt = "head of coin";
                    }, 500);
                    counter += 1;
                    if (counter == 5) {
                        clearInterval(flipping);
                        console.log(cardNoDeterminant);
                        setTimeout(() => {
                            let result = cardChoices[cardNoDeterminant];
                            if (cardNoDeterminant == 0) {
                                this.coinImage.src = "images/tail.png";
                                this.coinImage.alt = "tail of coin";
                            } else {
                                this.coinImage.src = "images/head.png";
                                this.coinImage.alt = "head of coin";
                            }
                            if (result === 'tail') {
                                this.winner.style.color = 'blue';
                                setTimeout(() => {
                                    this.winner.textContent = "You win";
                                }, 500);
                                this.addplayerScore();
                                setTimeout(() => {
                                    this.backToDefault();
                                    setTimeout(() => {
                                        this.checkScores();
                                    }, 2000);
                                }
                                    , 3000);
                            } else {
                                this.winner.style.color = 'green';
                                setTimeout(() => {
                                    this.winner.textContent = "Computer won";
                                }, 500);
                                this.addcomputerScore();
                                setTimeout(() => {
                                    this.backToDefault()
                                    setTimeout(() => {
                                        this.checkScores();
                                    }, 2000);
                                }
                                    , 3000);
                            }
                        }, 1000);
                    }
                }, 1000);
            }, 1500);
        }
    }

    let headButton = document.getElementById("heads");
    let tailButton = document.getElementById("tails");
    let game = new CoinGame();

    headButton.addEventListener("click", function () {
        headButton.setAttribute("disabled", "disabled");
        tailButton.setAttribute("disabled", "disabled");
        game.clickedHeads();
    }, false);

    tailButton.addEventListener("click", function () {
        tailButton.setAttribute("disabled", "disabled");
        tailButton.setAttribute("disabled", "disabled");
        game.clickedTails();
    }, false);
}());