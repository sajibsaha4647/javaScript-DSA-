let str = "hello";
let maxkey = "";
let strobj = {};

getmultiplechar = () => {
  for (let i = 0; i < str.length; i++) {
    let key = str[i];
    strobj[key] = strobj[key] ? strobj[key] + 1 : 1;
    if (maxkey == "" || strobj[key] > strobj[maxkey]) {
      maxkey = key;
    }
  }
};

getmultiplechar();

console.log(maxkey);
