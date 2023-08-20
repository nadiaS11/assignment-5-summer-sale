let total = 0;
let grandTotal = 0;
let discounts = 0;
const applyButton = document.getElementById("btn-apply");
const discountInput = document.getElementById("discount-input");
const totalAmount = document.getElementById("total-amount");
const discountAmount = document.getElementById("discount-amount");
const grandTotalAmount = document.getElementById("grand-amount");
const cartItems = document.getElementById("selected-items");
const purchaseButton = document.getElementById("btn-purchase");

// To apply discount after total > 200 and input is exactly SELL200
function applyDiscount() {
  if (total >= 200 && discountInput.value === 'SELL200') {
    updateDiscountAndGrandTotal();
  } else {
    alert("Coupon code invalid");
    discountInput.value = "";
  }
}

// For discount "Apply" button 
applyButton.addEventListener("click", function() {
  applyDiscount();
});

// To update the discount and grand total after applying discounts
function updateDiscountAndGrandTotal() {
  if (total >= 200 && discountInput.value === 'SELL200') {
    discounts = total * 0.2;
  } else {
    discounts = 0;
  }
  discountAmount.innerText = discounts.toFixed(2);
  grandTotal = total - discounts;
  grandTotalAmount.innerText = grandTotal.toFixed(2);
}



// To get name and totals with discount when clicked on products
function whenClicked(e) {
  const getName = e.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = getName;
  li.style.fontWeight = "600";
  cartItems.appendChild(li);
  const getPrice = parseFloat(e.childNodes[3].childNodes[5].innerText);
  total += getPrice;
  totalAmount.innerText = total.toFixed(2);
  if (total >= 200) {
    applyButton.disabled = false;
  }
  updateDiscountAndGrandTotal();
  if (total > 0) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }
}

// to reset everything to initial value
function resetAll() {
    applyButton.disabled = true;
    discountInput.value = "";
    total = 0;
    grandTotal = 0;
    discounts = 0;
    totalAmount.innerText = "00";
    discountAmount.innerText = "00";
    grandTotalAmount.innerText = "00";
    cartItems.innerText = "";
    purchaseButton.disabled = true;
  }

