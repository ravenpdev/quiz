function onSubmit() {
  const input = document.getElementById("data").value;

  const inputArray = input.split("");

  const digitsArray = getDigitsOnly(inputArray);

  updateResultMessage(`the number of digits entered is: ${digitsArray.length}`);
}

function getDigitsOnly(data) {
  return data.filter((val) => !isNaN(val));
}

function updateResultMessage(msg) {
  document.getElementById("result").innerText = msg;
}
