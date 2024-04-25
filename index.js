const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

function color() {
    if (count == 0) {
        countLabel.style.color = 'white';
    } else if (count > 0) {
        countLabel.style.color = 'rgb(137, 255, 128)';
    } else if (count === -1) {
        countLabel.style.color = 'rgb(255, 80, 80)';
    }
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
    color();
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
    color();
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    color();
}