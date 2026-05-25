// 1. SELECT OUR HTML ELEMENTS
const billInput = document.getElementById('bill');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');

const tipPerPersonDisplay = document.getElementById('tip-per-person');
const totalPerPersonDisplay = document.getElementById('total-per-person');

const billErrorText = document.getElementById('bill-error');
const peopleErrorText = document.getElementById('people-error');

const btn10 = document.getElementById('btn-10');
const btn15 = document.getElementById('btn-15');
const btn20 = document.getElementById('btn-20');

// 2. STATE STORAGE VARIABLES
let billAmount = 0;
let tipPercentage = 0; // Will be numbers like 10, 15, 20
let numberOfPeople = 1;

// 3. CORE CALCULATION ENGINE
function runCalculations() {
  // If inputs are bad, set displays back to zero and exit early
  if (billAmount <= 0 || numberOfPeople < 1) {
    tipPerPersonDisplay.textContent = "0.00";
    totalPerPersonDisplay.textContent = "0.00";
    return; 
  }

  // Calculate numbers
  let totalTipMoney = billAmount * (tipPercentage / 100);
  let overallBillTotal = billAmount + totalTipMoney;

  let tipEachPerson = totalTipMoney / numberOfPeople;
  let totalEachPerson = overallBillTotal / numberOfPeople;

  // Render to page using standard two-decimal point rounding (.toFixed)
  tipPerPersonDisplay.textContent = tipEachPerson.toFixed(2);
  totalPerPersonDisplay.textContent = totalEachPerson.toFixed(2);
}

// 4. PRESET BUTTON CLICK ACTIONS
function clearButtonHighlights() {
  btn10.classList.remove('active');
  btn15.classList.remove('active');
  btn20.classList.remove('active');
}

function selectTip10() {
  clearButtonHighlights();
  btn10.classList.add('active'); // highlight this button
  customTipInput.value = "";     // erase custom input text
  tipPercentage = 10;
  runCalculations();
}

function selectTip15() {
  clearButtonHighlights();
  btn15.classList.add('active');
  customTipInput.value = "";
  tipPercentage = 15;
  runCalculations();
}

function selectTip20() {
  clearButtonHighlights();
  btn20.classList.add('active');
  customTipInput.value = "";
  tipPercentage = 20;
  runCalculations();
}

// 5. LISTENING FOR TYPED ENTRIES

// When user types inside Bill input
billInput.addEventListener('input', function() {
  billAmount = parseFloat(billInput.value) || 0;

  // Show inline error if text is entered and it's 0 or less
  if (billInput.value !== "" && billAmount <= 0) {
    billErrorText.style.display = "block";
  } else {
    billErrorText.style.display = "none";
  }
  runCalculations();
});

// When user types inside Custom Tip percent input
customTipInput.addEventListener('input', function() {
  clearButtonHighlights(); // turn off preset buttons
  tipPercentage = parseFloat(customTipInput.value) || 0;
  runCalculations();
});

// When user types inside Number of People input
peopleInput.addEventListener('input', function() {
  numberOfPeople = parseInt(peopleInput.value) || 0;

  // Show inline error if text is entered and people amount is below 1
  if (peopleInput.value !== "" && numberOfPeople < 1) {
    peopleErrorText.style.display = "block";
  } else {
    peopleErrorText.style.display = "none";
  }
  runCalculations();
});

// 6. THE RESET BUTTON FUNCTION
function resetAll() {
  // Clear variable records
  billAmount = 0;
  tipPercentage = 0;
  numberOfPeople = 1;

  // Empty fields
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";

  // Hide color indicators and texts
  clearButtonHighlights();
  billErrorText.style.display = "none";
  peopleErrorText.style.display = "none";

  // Re-render empty baseline numbers
  tipPerPersonDisplay.textContent = "0.00";
  totalPerPersonDisplay.textContent = "0.00";
}