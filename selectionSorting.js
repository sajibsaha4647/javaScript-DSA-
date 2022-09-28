let data = [5, 90, 13, 17, 80, 85, 90];

// desanding sorting

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] < data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);

//ascending sorting
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);
