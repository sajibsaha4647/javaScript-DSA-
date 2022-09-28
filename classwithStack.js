class Stack {
  array = [];
  currentsize;
  maxsize;
  constructor(val) {
    this.maxsize = val;
    this.currentsize = this.array.length;
  }

  push = (newval) => {
    if (this.currentsize >= this.maxsize) {
      console.log("this stack is full");
    } else {
      this.array[this.currentsize] = newval;
      this.currentsize++;
    }
  };

  pop = () => {
    if (this.currentsize !== 0) {
      this.currentsize--;
      this.array.length = this.currentsize;
    }
  };

  display = () => {
    console.log(this.array);
  };
}

let st = new Stack(5);

st.push(40);
st.push(20);
st.push(30);
st.push(10);
st.push(100);
st.pop(100);
st.display();
