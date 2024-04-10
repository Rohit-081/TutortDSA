class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    hasCycle() {
        const visited = new Set();

        const isCyclic = (vertex, parent) => {
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    if (isCyclic(neighbor, vertex)) {
                        return true;
                    }
                } else if (neighbor !== parent) {
                    return true;
                }
            }
            return false;
        };

        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                if (isCyclic(vertex, null)) {
                    return true;
                }
            }
        }
        return false;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A'); // introducing cycle A -> D -> C -> B -> A

console.log("Does the graph have a cycle?", graph.hasCycle()); // Output: true
