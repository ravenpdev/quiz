let msg = "";
const thousand = 1000;
const fiveHundred = 500;
const twoHundred = 200;
const oneHundred = 100;
const fifty = 50;
const twenty = 20;
const ten = 10;
const five = 5;
const one = 1;

function onSubmit() {
  let input = document.getElementById("data").value;

  if (isNaN(parseFloat(input))) {
    updateResultMessage("Please enter a valid amount");
  }

  input = parseFloat(input);

  countBillDenomination(input);

  updateResultMessage(msg);

  msg = "";
}

function countBillDenomination(value) {
  if (value >= thousand) {
    msg += `${thousand} = ${parseInt(value / thousand)}pc/s `;
    countBillDenomination(value % thousand);
  } else if (value >= fiveHundred) {
    msg += `${fiveHundred} = ${parseInt(value / fiveHundred)}pc/s `;
    countBillDenomination(value % fiveHundred);
  } else if (value >= twoHundred) {
    msg += `${twoHundred} = ${parseInt(value / twoHundred)}pc/s `;
    countBillDenomination(value % twoHundred);
  } else if (value >= oneHundred) {
    msg += `${oneHundred} = ${parseInt(value / oneHundred)}pc/s `;
    countBillDenomination(value % oneHundred);
  } else if (value >= fifty) {
    msg += `${fifty} = ${parseInt(value / fifty)}pc/s `;
    countBillDenomination(value % fifty);
  } else if (value >= twenty) {
    msg += `${twenty} = ${parseInt(value / twenty)}pc/s `;
    countBillDenomination(value % twenty);
  } else if (value >= ten) {
    msg += `${ten} = ${parseInt(value / ten)}pc/s `;
    countBillDenomination(value % ten);
  } else if (value >= five) {
    msg += `${five} = ${parseInt(value / five)}pc/s `;
    countBillDenomination(value % five);
  } else if (value >= one) {
    msg += `${one} = ${parseInt(value / one)}pc/s `;
    countBillDenomination(value % one);
  } else {
    return;
  }
}

function updateResultMessage(msg) {
  document.getElementById("result").innerText = msg;
}
