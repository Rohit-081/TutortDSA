class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjMatrix = [];

    // Initialize the adjacency matrix with zeros
    for (let i = 0; i < this.numVertices; i++) {
      this.adjMatrix.push(Array(this.numVertices).fill(0));
    }
  }

  // Function to add an edge between two vertices
  addEdge(source, destination) {
    // Since the graph is undirected, we mark both entries as 1
    this.adjMatrix[source][destination] = 1;
    this.adjMatrix[destination][source] = 1;
  }

  // Function to display the adjacency matrix
  displayAdjacencyMatrix() {
    console.log("Adjacency Matrix:");
    for (let i = 0; i < this.numVertices; i++) {
      console.log(this.adjMatrix[i].join(" "));
    }
  }
}

// Example usage:
// Create a graph with 6 vertices
const graph = new Graph(6);

// Add edges between vertices
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(4, 5);

// Display the adjacency matrix
graph.displayAdjacencyMatrix();
