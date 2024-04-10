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
    }

    hasCycle() {
        const visited = new Set();
        const recursionStack = new Set();

        const isCyclic = (vertex) => {
            if (!visited.has(vertex)) {
                visited.add(vertex);
                recursionStack.add(vertex);

                const neighbors = this.adjacencyList.get(vertex);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor) && isCyclic(neighbor)) {
                        return true;
                    } else if (recursionStack.has(neighbor)) {
                        return true;
                    }
                }
            }
            recursionStack.delete(vertex);
            return false;
        };

        for (const vertex of this.adjacencyList.keys()) {
            if (isCyclic(vertex)) {
                return true;
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
graph.addEdge('D', 'A'); // introducing cycle A -> B -> C -> D -> A

console.log("Does the graph have a cycle?", graph.hasCycle()); // Output: true
