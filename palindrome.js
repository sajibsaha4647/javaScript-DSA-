const palindrome = (str) => {
  let result = true;
  let start = 0;
  let end = str.length - 1;

  while (end > start) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return result;
};

const str = "1214";
console.log(palindrome(str));
