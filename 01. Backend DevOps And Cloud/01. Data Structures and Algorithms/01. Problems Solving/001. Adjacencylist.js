class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    } else {
      console.log("Vertex", vertex, "already exists in the graph.");
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1)) {
      console.log("Vertex", vertex1, "does not exist in the graph.");
      return;
    }
    if (!this.adjacencyList.has(vertex2)) {
      console.log("Vertex", vertex2, "does not exist in the graph.");
      return;
    }
    if (!this.adjacencyList.get(vertex1).includes(vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
    if (!this.adjacencyList.get(vertex2).includes(vertex1)) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) {
      console.log("One or both vertices do not exist in the graph.");
      return;
    }
    this.adjacencyList.set(
      vertex1,
      this.adjacencyList.get(vertex1).filter((v) => v !== vertex2)
    );
    this.adjacencyList.set(
      vertex2,
      this.adjacencyList.get(vertex2).filter((v) => v !== vertex1)
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log("Vertex", vertex, "does not exist in the graph.");
      return;
    }
    this.adjacencyList.delete(vertex);
    for (const [key, value] of this.adjacencyList.entries()) {
      this.adjacencyList.set(
        key,
        value.filter((v) => v !== vertex)
      );
    }
  }

  display() {
    console.log("Graph:");
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(vertex, "->", neighbors.join(", "));
    }
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.display();

graph.removeEdge("C", "D");
graph.removeVertex("C");
graph.display();
