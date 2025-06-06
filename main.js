// variables
const money = {
  cash: 0,
  coins: 0,
};

const coinsCount = [0, 0, 0, 0, 0, 0];
const coinsValues = [500, 200, 100, 50, 20, 10];

// dom connect
const cashDOM = document.querySelector(".cash");
cashDOM.addEventListener("input", (e) => {
  money.cash = +e.target.value;
  updateCashUI();
});

const coinsDOMsSummary = document.querySelectorAll('.coinsSection p');

const coinsDOMs = document.querySelectorAll('.coinsSection input');

coinsDOMs.forEach((elementDOM, i) => {
  elementDOM.addEventListener("input", (e) => {
    coinsCount[i] = +e.target.value;
    updateMoneyCoinsAndUI(i);
  });
});

// functions
function updateCashUI() {
  document.querySelector(".intermediateResult").innerHTML = `
    <p>Cash: ${money.cash}</p>
    <p>Coins: ${money.coins}</p>
    <p>Sumamry: ${money.cash + money.coins}</p>
  `;
}
function updateMoneyCoinsAndUI(ind) {
  coinsDOMsSummary[ind].innerText = `Summary: ${coinsCount[ind] * coinsValues[ind]}`;

  money.coins = 0;
  for (let i = 0; i < coinsCount.length; ++i) {
    money.coins += coinsCount[i] * coinsValues[i];
  }
  updateCashUI();
}