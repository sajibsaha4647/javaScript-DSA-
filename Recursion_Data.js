// get factorial number with recursion function

getfactorialNumber = (item) => {
  if (item == 0) {
    return 1;
  } else {
    return item * getfactorialNumber(item - 1);
  }
};

console.log(getfactorialNumber(3));
