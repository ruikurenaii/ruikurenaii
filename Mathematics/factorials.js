Math.factorial = function (n) {
  // Proposed mathematical javascript function I guess
  let value = 1;
  
  // For loop
  for (let i = 0; i <= n; i++) {
    value * i;
  }

  // Return the value
  return value;
}

// Usages
console.log(Math.factorial(5)); // This should return the value 120
console.log(Math.factorial(25)); // This should return the value 15,511,210,043,330,985,984,000,000 (which is abou5 15.511 Septillion)