document.addEventListener('DOMContentLoaded', () => {
    const playerscoredisplay = document.getElementById('playerscore');
    const computerscoredisplay = document.getElementById('computerscore');
    const movesnumber = document.getElementById('movesnumber');
    const btns = document.getElementById('buttons');
    const startbtn = document.getElementById('startbtn');
    const playagainbtn = document.getElementById('playagainbtn');
    const wondiv = document.getElementById('wondiv');
    const playerwon = document.getElementById('playerwon');
    const compwon = document.getElementById('compwon');
    const draw = document.getElementById('draw');

    let playerscore = 0;
    let computerscore = 0;
    let movesleft = 3;

    function playRound(playerinput) {
        const computerinput = Math.floor(Math.random() * 3) + 1;

        playerwon.classList.add('hidden');
        compwon.classList.add('hidden');
        draw.classList.add('hidden');
        wondiv.classList.remove('hidden');

        if (
            (playerinput === "Rock" && computerinput === 1) ||
            (playerinput === "Paper" && computerinput === 2) ||
            (playerinput === "Scissor" && computerinput === 3)
        ) {
            draw.classList.remove('hidden');
        } else if (
            (playerinput === "Rock" && computerinput === 3) ||
            (playerinput === "Paper" && computerinput === 1) ||
            (playerinput === "Scissor" && computerinput === 2)
        ) {
            playerscore++;
            playerscoredisplay.innerText = playerscore;
            playerwon.classList.remove('hidden');
        } else {
            computerscore++;
            computerscoredisplay.innerText = computerscore;
            compwon.classList.remove('hidden');
        }

        movesleft--;
        movesnumber.innerText = movesleft;

        if (movesleft === 0) {
            btns.classList.add('pointer-events-none', 'opacity-50');
        }
    }

    btns.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON" && movesleft > 0) {
            playRound(e.target.innerText);
        }
    });

    startbtn.addEventListener('click', () => {
        startbtn.classList.add('hidden');
        playagainbtn.classList.remove('hidden');
        btns.classList.remove('hidden', 'pointer-events-none', 'opacity-50');
    });

    playagainbtn.addEventListener('click', () => {
        playerscore = 0;
        computerscore = 0;
        movesleft = 3;

        playerscoredisplay.innerText = playerscore;
        computerscoredisplay.innerText = computerscore;
        movesnumber.innerText = movesleft;

        wondiv.classList.add('hidden');
        btns.classList.remove('pointer-events-none', 'opacity-50');
    });
});
