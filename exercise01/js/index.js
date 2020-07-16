function onSubmit() {
  const input = document.getElementById("data").value;

  let rationalNumbers = input.split(",");

  if (checkNegativeNumbers(rationalNumbers)) {
    updateResultMessage("Please enter only positive numbers");
  } else {
    const average = getAverage(rationalNumbers);

    updateResultMessage(average);
  }
}

function checkNegativeNumbers(numbers) {
  const filteredNumbers = numbers.filter((number) => parseFloat(number) < 0);

  if (filteredNumbers.length > 0) {
    return true;
  }

  return false;
}

function updateResultMessage(msg) {
  document.getElementById("result").innerText = msg;
}

function getAverage(numbers) {
  const avg =
    numbers.reduce((prev, cur) => parseFloat(prev) + parseFloat(cur), 0) /
    numbers.length;

  return avg;
}
