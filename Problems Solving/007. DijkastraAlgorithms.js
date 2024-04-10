class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.sort();
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.queue.shift().node;
        }
        return null;
    }

    sort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, new Map());
        }
    }

    addEdge(node1, node2, weight) {
        if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
            console.log("Node does not exist");
            return;
        }
        this.nodes.get(node1).set(node2, weight);
        this.nodes.get(node2).set(node1, weight); // For undirected graph
    }

    dijkstra(startNode) {
        const distances = new Map();
        const visited = new Set();
        const pq = new PriorityQueue();

        // Initialize distances with Infinity and startNode with 0
        for (const node of this.nodes.keys()) {
            distances.set(node, Infinity);
        }
        distances.set(startNode, 0);
        pq.enqueue(startNode, 0);

        while (!pq.isEmpty()) {
            const currentNode = pq.dequeue();
            visited.add(currentNode);

            const neighbors = this.nodes.get(currentNode);
            for (const [neighbor, weight] of neighbors) {
                if (!visited.has(neighbor)) {
                    const totalDistance = distances.get(currentNode) + weight;
                    if (totalDistance < distances.get(neighbor)) {
                        distances.set(neighbor, totalDistance);
                        pq.enqueue(neighbor, totalDistance);
                    }
                }
            }
        }

        return distances;
    }
}

// Example usage:
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 5);
graph.addEdge('B', 'D', 10);
graph.addEdge('C', 'D', 3);
graph.addEdge('C', 'E', 7);
graph.addEdge('D', 'E', 9);

const startNode = 'A';
const distances = graph.dijkstra(startNode);

console.log("Shortest distances from node", startNode + ":");
for (const [node, distance] of distances) {
    console.log("To node", node + ":", distance);
}
