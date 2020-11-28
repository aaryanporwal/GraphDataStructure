const airport = 'IGI DXB AMD MAA BOM COK CJB LAX'.split(' ');

const routes = [
    ['IGI', 'DXB'],
    ['IGI', 'AMD'],
    ['AMD', 'MAA'],
    ['BOM', 'MAA'],
    ['COK', 'CJB'],
    ['CJB', 'LAX'],
];

// Let's implement an adjacency list instead of matrix cuz our matrix will become sparse as we have less routes compared to the combinations of combinations airports can have, hence will take a lot of unnecessary space.

// Adjacency list as key value pair

// Key name of the airport (or the node) and value is an array of edges or the airport its connected to.


const adjacencyList = new Map(); // Map is like a dictionary or hashmap

// Function that adds node to our map
function addNode(airport) { 
    adjacencyList.set(airport, []);
}

// Function that adds an edge between two nodes and is undirected (which means it can go both ways)
function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Creating the graph
airport.forEach(addNode);
routes.forEach(route => addEdge(...route))

// console.log(adjacencyList);
console.log(airport)