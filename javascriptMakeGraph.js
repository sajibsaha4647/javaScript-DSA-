//Make a graph

class Graph {
  constructor() {
    this.data = {};
  }

  addvertex = (vertex) => {
    if (
      !this.data[vertex] &&
      vertex !== null &&
      vertex !== "" &&
      vertex !== typeof String
    ) {
      this.data[vertex] = [];
    }
  };

  addAdge = (v1, v2) => {
    if (!this.data[v1]) {
      this.addvertex(v1);
    }
    if (!this.data[v2]) {
      this.addvertex(v2);
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  };

  RemoveEdges = (v1, v2) => {
    if (!this.data[v1] || !this.data[v2]) {
      console.log("Wrong value !");
    } else {
      this.data[v1] = this.data[v1].filter((item) => {
        return item != v2;
      });
      this.data[v2] = this.data[v2].filter((item) => {
        return item != v1;
      });
    }
  };

  RemoveVertex = (vertex) => {
    if (!this.data[vertex]) {
      console.log("Wrong value !");
    } else {
      for (let item of this.data[vertex]) {
        this.RemoveEdges(vertex, item);
        //first deleted vertex "A" and with items like [B,C]
      }
      delete this.data[vertex];
    }
  };
}

let graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addAdge("A", "C");
graph.addAdge("A", "B");
graph.addAdge("B", "C");
graph.addAdge("B", "D");
// graph.RemoveEdges("A", "B");
// graph.RemoveEdges("C", "B");
// graph.RemoveEdges("D", "B");
// graph.RemoveEdges("C", "A");
graph.RemoveVertex("A");
console.log(graph);
//Ans
// data: {
//     A: [ 'C', 'B' ],
//     B: [ 'A', 'C', 'D' ],
//     C: [ 'A', 'B' ],
//     D: [ 'B' ]
//   }
