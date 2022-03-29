const percentBtns = document.querySelectorAll(".percent-btn");
let singlePercentValue = 0;
const inputfield1 = document.querySelector(".inputfield1");
const inputfield2 = document.querySelector(".inputfield2");
const customPercent = document.getElementById("custom-btn");
const resetBtn = document.querySelector("#rst");

let bill = 0;
let peopleNum = 0;
let customTip = 0;
let stat1 = false;
let stat2 = false;
let stat3 = false;

let totalBillPP = 0;
let totalTipPP = 0;

const checkStatus = function () {
  stat1 && stat2 && stat3 && calculate();
};
checkStatus();

for (let i = 0; i < percentBtns.length; i++) {
  percentBtns[i].addEventListener("click", function () {
    percentBtns[i].classList.add("clicked");
    document.querySelector("#rst").classList.remove("disable");
    singlePercentValue = parseFloat(percentBtns[i].name) / 100;
    stat2 = true;
    console.log(singlePercentValue);
    checkStatus();
  });
}

const getCustomTip = function () {
  customTip = Number(customPercent.value) / 100;
  stat2 = true;
  console.log(customTip);
  checkStatus();
};

function getBillAmount() {
  bill = Number(inputfield1.value);
  stat1 = true;
  console.log(bill);
  checkStatus();
}

function getPeople() {
  if (inputfield2.classList.contains("warn-outline")) {
    inputfield2.classList.remove("warn-outline");
  }
  peopleNum = parseFloat(inputfield2.value);
  stat3 = true;
  console.log(peopleNum);
  checkStatus();
  return peopleNum;
}

const calculate = function () {
  resetBtn.classList.remove("disable");
  if (peopleNum === 0) {
    document.querySelector("#msg").classList.add("visible");
    inputfield2.classList.add("warn-outline");
    return;
  } else {
    document.querySelector("#msg").classList.remove("visible");
    totalBillPP = bill / peopleNum;
    document.querySelector("#totalXP").textContent = totalBillPP.toFixed(2);

    if (customTip === 0) {
      totalTipPP = (bill * singlePercentValue) / peopleNum;
      document.querySelector("#tottip").textContent = totalTipPP.toFixed(2);
    } else if (singlePercentValue === 0) {
      totalTipPP = (bill * customTip) / peopleNum;
      document.querySelector("#tottip").textContent = totalTipPP.toFixed(2);
    }
  }
};
checkStatus();
resetBtn.addEventListener("click", reset);

function reset() {
  if (!resetBtn.classList.contains("disable")) window.location.reload();
}
