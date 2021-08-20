// Initialize important Elemet or Select
const memory8 = document.getElementById("memory-8gb");
const memory16 = document.getElementById("memory-16gb");
const storage256 = document.getElementById("storage-256gb");
const storage512 = document.getElementById("storage-512gb");
const storage1tb = document.getElementById("storage-1tb");
const freeDelivery = document.getElementById("free-delivery");
const expressDelivery = document.getElementById("express-delivery");
const extraMemoryCost = document.getElementById("extra-memory");
const extraStorageCost = document.getElementById("extra-storage");
const extradeliveryCost = document.getElementById("delivery-cost");
const bestPrice = document.getElementById("best-price");
const promoInput = document.getElementById("promo-input");
const promoBtn = document.getElementById("promo-btn");
const totalPrice = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total");

// Essential Functions

/* ====== Memory Function  ====== */
function memoryCost(memory, cost) {
  if (memory == "8gb") {
    memoryUIUpdate(cost);
  } else {
    memoryUIUpdate(cost);
  }
}
/* == Memory UI Update  */
function memoryUIUpdate(cost) {
  extraMemoryCost.innerText = cost;
  totalCost();
}

/* ====== Storage Function  ====== */
function storageCost(storage, cost) {
  if (storage == "256gb") {
    storageUIUpdate(cost);
  } else if (storage == "512gb") {
    storageUIUpdate(cost);
  } else {
    storageUIUpdate(cost);
  }
}
/*  ===== Storage UI Update ====== */
function storageUIUpdate(cost) {
  extraStorageCost.innerText = cost;
  totalCost();
}

/* ====== Delivery Function  ====== */
function deliveryCost(delivery, cost) {
  if (delivery == "free") {
    deliveryUIUpdate(cost);
  } else {
    deliveryUIUpdate(cost);
  }
}
/*  ===== Delivery UI Update ====== */
function deliveryUIUpdate(cost) {
  extradeliveryCost.innerText = cost;
  totalCost();
}

/*  Total Cost Function */
function totalCost() {
  totalPrice.innerText =
    parseInt(bestPrice.innerText) +
    parseInt(extraMemoryCost.innerText) +
    parseInt(extraStorageCost.innerText) +
    parseInt(extradeliveryCost.innerText);
  grandTotal.innerText = parseInt(totalPrice.innerText);
}

// Button Actions

/* ====== Memory Button Actions ====== */

memory8.addEventListener("click", function () {
  memoryCost("8gb", 0);
});

memory16.addEventListener("click", function () {
  memoryCost("16gb", 180);
});

/* ====== Storage Button Actions ====== */
storage256.addEventListener("click", function () {
  storageCost("256gb", 0);
});
storage512.addEventListener("click", function () {
  storageCost("512gb", 100);
});
storage1tb.addEventListener("click", function () {
  storageCost("1tb", 180);
});

/* ====== Delivery Charge Button Actions ====== */
freeDelivery.addEventListener("click", function () {
  deliveryCost("free", 0);
});
expressDelivery.addEventListener("click", function () {
  deliveryCost("express", 20);
});

/* ====== Promo Button Action ====== */
promoBtn.addEventListener("click", function () {
  let inputValue = promoInput.value;
  if (inputValue == "stevekaku") {
    let previousTotal = parseInt(totalPrice.innerText);
    let newPrice = previousTotal - previousTotal * 0.2;
    grandTotal.innerText = newPrice;
  }

  //   Clear Input Value
  promoInput.value = "";
});
