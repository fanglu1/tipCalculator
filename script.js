let billAmount = document.getElementById("billAmount");
let percentTip = document.getElementById("percentTip");
let tipAmount = document.getElementById("tipAmount");
let total = document.getElementById("total");
let calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  billAmount = Number(billAmount.value);
  percentTip = Number(percentTip.value);

  if (isNaN(billAmount) || billAmount <= 0 || billAmount === null) {
    alert("Enter valid bill total");
  } else if (isNaN(percentTip) || percentTip <= 0 || percentTip === null) {
    alert("Enter invalid tip percent");
  }
  else {
      let calculatedTip = percentTip/100 * billAmount;
      tipAmount.value = '$' + calculatedTip;

      let calculatedTotal = billAmount + calculatedTip;
      total.value = '$' + calculatedTotal; 
    }
});
