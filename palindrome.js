function palindrome(str) {
  let pal = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(pal, "");

  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("Race Car"));
console.log(palindrome("Eye"));
console.log(palindrome("Soccer"));
console.log(palindrome("Civic"));
console.log(palindrome("Cannon"));
console.log(palindrome("Level"));
