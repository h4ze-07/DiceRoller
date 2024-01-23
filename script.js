const rollBtn = document.getElementById('rollBtn');
const diceContainer = document.getElementById('diceContainer');

const randomNumGenerator = () => Math.floor(Math.random() * 6) + 1;

rollBtn.onclick = function() {
    diceContainer.innerHTML = '';

    let result = [randomNumGenerator(), randomNumGenerator()];
    
    diceContainer.innerHTML =     
        `
            <img src="/images/${result[0]}.png" alt="dice1">
            <img src="/images/${result[1]}.png" alt="dice2">
        `
}