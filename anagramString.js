const checkanaGram = (str1, str2) => {
  let obj1 = {};

  if (str1.length != str2.length) {
    return false;
  }
  for (ch of str1) {
    obj1[ch] = obj1[ch] ? obj1[ch] + 1 : 1;
  }

  for (ch of str2) {
    if (!obj1[ch]) {
      return false;
    }
    obj1[ch]--;
  }
  return true;
};

console.log(checkanaGram("nila", "anil"));
