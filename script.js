// Recharge token counts
let basic = 0;
let smart = 0;
let prime = 0;

// Update UI
function updateUI() {
  document.getElementById('basic-count').textContent = basic;
  document.getElementById('smart-count').textContent = smart;
  document.getElementById('prime-count').textContent = prime;
}

// Use Recharge
function useRecharge() {
  if (basic + smart + prime === 0) {
    alert("No recharges available!");
    return;
  }

  if (prime > 0) {
    prime--;
    alert("Used 1 Prime (₹99) Recharge ✅");
  } else if (smart > 0) {
    smart--;
    alert("Used 1 Smart (₹75) Recharge ✅");
  } else if (basic > 0) {
    basic--;
    alert("Used 1 Basic (₹50) Recharge ✅");
  }

  updateUI();
}

// Buy Recharge
function buyRecharge() {
  const choice = prompt(
    "Which recharge would you like to buy?\n1. Basic (₹50)\n2. Smart (₹75)\n3. Prime (₹99)"
  );

  if (choice === "1") {
    basic++;
    alert("Purchased 1 Basic Recharge");
  } else if (choice === "2") {
    smart++;
    alert("Purchased 1 Smart Recharge");
  } else if (choice === "3") {
    prime++;
    alert("Purchased 1 Prime Recharge");
  } else {
    alert("Invalid choice.");
  }

  updateUI();
}

// Recycle Battery
function recycleBattery() {
  const roll = Math.random();
  if (roll < 0.5) {
    basic++;
    alert("♻ Battery recycled! You earned 1 Basic Recharge");
  } else {
    smart++;
    alert("♻ Battery recycled! You earned 1 Smart Recharge");
  }
  updateUI();
}

// Scan QR Demo
function scanQR() {
  basic += 2;
  alert("🎉 QR Scanned! You received 2 Basic Recharges.");
  updateUI();
}

// Initialize UI on page load
updateUI();
