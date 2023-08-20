let total = 0;
let grandTotal = 0;
let discounts= 0;
const applyButton = document.getElementById("btn-apply");
const discountInput = document.getElementById("discount-input");


// To apply discount after total>200 and input is exactly SELL200
function applyDiscount() {
    if (total >= 200 && discountInput.value==='SELL200') {
        updateDiscountAndGrandTotal();
        
    }
    else{alert("Coupon code invalid")
    discountInput.value=""
    
}
  }
  
// For discount "Apply" button 
applyButton.addEventListener("click", function() {
  applyDiscount();
  
});

// to update the grand total after applying discounts
function updateDiscountAndGrandTotal() {
  if (total >= 200 && discountInput.value==='SELL200') {
        discounts = total * 0.2;
      } else {
        discounts = 0;
      }
      const discountAmount = document.getElementById("discount-amount");
      discountAmount.innerText = discounts.toFixed(2);
    grandTotal = total - discounts;
    const grandTotalAmount = document.getElementById("grand-amount");
    grandTotalAmount.innerText = grandTotal.toFixed(2);
  }

function whenClicked(e){
    const cartItems = document.getElementById("selected-items");
  const totalAmount = document.getElementById("total-amount");

  //get the product name
  const getName = e.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
    li.innerText = getName;
    li.style.fontWeight = "600"
    cartItems.appendChild(li)



  const getPrice = parseFloat(e.childNodes[3].childNodes[5].innerText);
  total += getPrice;
  totalAmount.innerText = total.toFixed(2);
  if (total >= 200) {
    document.getElementById("btn-apply").disabled = false;
  }
  updateDiscountAndGrandTotal()
 

  const purchaseButton = document.getElementById("btn-purchase");
  if (total > 0) {
    purchaseButton.disabled = false;
  } else {
    purchaseButton.disabled = true;
  }

    // console.log(discounts)
}


 // To Go home page
 function goHome(e){
  window.location.href='index.html'
 }
 
