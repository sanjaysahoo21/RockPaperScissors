let score = JSON.parse(localStorage.getItem('score')) || {wins : 0,loses : 0,ties : 0};

        updateScoreElement();
         
        function fun() {
            const RandomNumber = Math.random();

            if(RandomNumber >= 0 && RandomNumber < 1/3) {
                return 'Rock';
            } else if(RandomNumber >= 1/3 && RandomNumber < 2/3) {
                return 'Paper';
            } else {
                return 'Scissors';
            }
        }
        function RockPaperScissors(playermove) {
            let computerRandom = fun();
            let result = '';
            if(playermove === 'Rock') {
                if(computerRandom === 'Rock') {
                    result = 'tie.';
                }
                else if (computerRandom === 'Paper') {
                    result = 'You lose';
                }
                else {
                    result = 'You win.';
                }
            }
            if(playermove === 'Paper') {
                if(computerRandom === 'Rock') {
                    result = 'You win.';
                }
                else if (computerRandom === 'Paper') {
                    result = 'tie.';
                }
                else {
                    result = 'You loose.';
                }
            }
            if(playermove === 'Scissors') {
                 if(computerRandom === 'Rock') {
                    result = 'You win.';
                }
                else if (computerRandom === 'Paper') {
                    result = 'You loose.'; 
                }
                else {
                    result = 'tie.';
                }
            }
            
            if(result === 'You win.') {
                score.wins += 1;
            } else if(result === 'You loose.') {
                score.loses += 1;
            } else if(result === 'tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score',JSON.stringify(score));
            updateScoreElement();
            document.querySelector('.js-result').innerHTML = `${result}`;
            document.querySelector('.js-moves').innerHTML = `You <img class="img move moves-img" src="./images/${playermove}-img.png"/> - <img class="img move moves-img" src="./images/${computerRandom}-img.png"/> Computer`;
        }
        function updateScoreElement() {
            document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}, Loses : ${score.loses}, ties : ${score.ties}`;
        }
        function resetScore() {
            score.wins = 0;
            score.loses = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            updateScoreElement();
        }