let money = 100;
let totalp = 0;

BuyToalP = (y) => {
  if (y > 0) {
    MoorBuyToalP(y);
    console.log("money " + y + " appple " + totalp);
  } else {
    console.log("can not buy more than" + totalp + " appple");
  }
};
MoorBuyToalP = (y) => {
  BuyToalP(y - 10);
  totalp++;
};

console.log(BuyToalP(money));
