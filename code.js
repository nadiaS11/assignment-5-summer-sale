let total = 0;
let grandTotal = 0;
let discounts= 0;
const applyButton = document.getElementById("btn-apply");
const discountInput = document.getElementById("discount-input");


// To apply discount after total>200 and input is exactly SELL200
function applyDiscount() {
    if (total > 200 && discountInput.value==='SELL200') {
      discounts = total * 0.2;
      const discountAmount = document.getElementById("discount-amount");
      discountAmount.innerText = discounts.toFixed(2);
      updateGrandTotal();
    }
  }

// For discount "Apply" button 
applyButton.addEventListener("click", function() {
  applyDiscount();
  applyButton.disabled = true;
});

function whenClicked(e){
    const cartItems = document.getElementById("selected-items");
  const totalAmount = document.getElementById("total-amount");
//   const grandTotalAmount = document.getElementById("grand-amount");
//   const discountAmount = document.getElementById("discount-amount");
  const getPrice = parseFloat(e.childNodes[3].childNodes[5].innerText);

  //get the product name
  const getName = e.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
    li.innerText = getName;
    li.style.fontWeight = "500"
    cartItems.appendChild(li)

  //set the total and grand total
  total = parseFloat(total) + parseFloat(getPrice);
  discounts= total*0.2
  discountAmount.innerText = discounts.toFixed(2)

  totalAmount.innerText = total.toFixed(2);
  grandTotal = total - discounts;
  grandTotalAmount.innerText = grandTotal.toFixed(2);


  const purchaseButton = document.getElementById("btn-purchase");
  if (total > 0) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }

    // console.log(discounts)
}


 // To enable "Make Purchase" button when total>0
 
