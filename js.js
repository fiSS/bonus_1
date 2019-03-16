'use strict';
function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i == 0)
            return false;
    }
    return true;
}

function getPrimes(max) {
  for (var i = 0; i < max; i++) {
      if (isPrime(i)) {
          console.log('Делители этого числа: 1 и ' + i);
        }
  }
}
getPrimes(100)