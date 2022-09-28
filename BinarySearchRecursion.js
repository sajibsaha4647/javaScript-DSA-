let data = [5, 9, 13, 17, 80, 85, 90];
let find = 80;
let start = 0;
let end = data.length - 1;
let position = undefined;

getSearch = (data, start, end) => {
  let mid = Math.floor((start + end) / 2);

  if (data[mid] == find) {
    position = mid;
    return true;
  } else if (data[mid] < find) {
    start = mid + 1;
    getSearch(data, start, end);
  } else {
    end = mid - 1;
    getSearch(data, start, end);
  }
};

getSearch(data, start, end);

console.log(position);
