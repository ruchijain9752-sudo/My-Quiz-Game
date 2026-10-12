let count = 0;
const countDisplay = document.getElementById("countNumber");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

plusBtn.addEventListener("click", () => {
    count++;
    countDisplay.innerText = count;
});

minusBtn.addEventListener("click", () => {
    count--;
    countDisplay.innerText = count;
});
