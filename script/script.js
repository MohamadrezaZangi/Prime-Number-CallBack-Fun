function isPrime(number) {
  if (typeof number !== "number") return "invalid argument";
  else {
    let check = 0;
    for (let i = 2; i < number; i++)
      if (number % i === 0) {
        check++;
        break;
      }

    if (check === 0) return true;
    else return false;
  }
}
console.log("14 = " + isPrime(14));
console.log("13 = " + isPrime(13));

function find(str, char, callback) {
  let charCount = 0;
  for (const i of str) if (i === char) charCount++;

  callback(charCount);
}

find("wekjwhjkhwjkh", "w", (item) => {
  console.log(item);
});
