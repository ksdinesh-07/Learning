
const initial_roads = [
    ["Chennai", "Vellore", 140],
    ["Chennai", "Coimbatore", 500],
    ["Vellore", "Salem", 180],
    ["Vellore", "Erode", 250],
    ["Salem", "Erode", 65],
    ["Erode", "Coimbatore", 100]
];

const initial_positions = {
    Chennai: { x: 90, y: 90 },
    Vellore: { x: 300, y: 60 },
    Salem: { x: 530, y: 100 },
    Erode: { x: 450, y: 280 },
    Coimbatore: { x: 150, y: 300 }
};

let graph = new Map();
let positions = {};
let active_route = [];

const start_city = document.querySelector("#start-city");
const end_city = document.querySelector("#end-city");
const road_from = document.querySelector("#road-from");
const road_to = document.querySelector("#road-to");
const result = document.querySelector("#result");
const message = document.querySelector("#message");
const graph_svg = document.querySelector("#graph");
const adjacency_list = document.querySelector("#adjacency-list");

function add_city(city_name) {
    const name = city_name.trim();

    if (!name) {
        throw new Error("Enter a city name.");
    }

    if (find_city(name)) {
        throw new Error("This city already exists.");
    }

    graph.set(name, new Map());

    const index = graph.size - 1;
    const angle = index * 2.4;

    positions[name] = {
        x: 350 + Math.cos(angle) * 240,
        y: 200 + Math.sin(angle) * 135
    };

    active_route = [];
}

function find_city(city_name) {
    return [...graph.keys()].find(
        city => city.toLowerCase() === city_name.trim().toLowerCase()
    );
}

function add_road(from_name, to_name, distance) {
    const from = find_city(from_name);
    const to = find_city(to_name);

    if (!from || !to) {
        throw new Error("Select existing cities.");
    }

    if (from === to) {
        throw new Error("Choose two different cities.");
    }

    if (!Number.isFinite(distance) || distance <= 0) {
        throw new Error("Distance must be greater than zero.");
    }

    graph.get(from).set(to, distance);
    graph.get(to).set(from, distance);

    active_route = [];
}

function bfs(start, destination) {
    const queue = [start];
    let queue_index = 0;

    const visited = new Set([start]);
    const previous = new Map();

    while (queue_index < queue.length) {
        const current = queue[queue_index++];

        if (current === destination) {
            break;
        }

        for (const neighbour of graph.get(current).keys()) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                previous.set(neighbour, current);
                queue.push(neighbour);
            }
        }
    }

    return build_path(previous, start, destination, visited);
}

function dijkstra(start, destination) {
    const distances = new Map();
    const previous = new Map();
    const unvisited = new Set(graph.keys());

    for (const city of graph.keys()) {
        distances.set(city, Infinity);
    }

    distances.set(start, 0);

    while (unvisited.size > 0) {
        let current = null;
        let smallest_distance = Infinity;

        for (const city of unvisited) {
            if (distances.get(city) < smallest_distance) {
                current = city;
                smallest_distance = distances.get(city);
            }
        }

        if (current === null) {
            break;
        }

        if (current === destination) {
            break;
        }

        unvisited.delete(current);

        for (const [neighbour, road_distance] of graph.get(current)) {
            if (!unvisited.has(neighbour)) {
                continue;
            }

            const new_distance = smallest_distance + road_distance;

            if (new_distance < distances.get(neighbour)) {
                distances.set(neighbour, new_distance);
                previous.set(neighbour, current);
            }
        }
    }

    if (distances.get(destination) === Infinity) {
        return null;
    }

    const path = build_path(
        previous,
        start,
        destination,
        new Set(graph.keys())
    );

    return {
        path,
        distance: distances.get(destination)
    };
}

function build_path(previous, start, destination, visited) {
    if (!visited.has(destination)) {
        return null;
    }

    const path = [];
    let current = destination;

    while (current !== undefined) {
        path.unshift(current);

        if (current === start) {
            break;
        }

        current = previous.get(current);
    }

    return path[0] === start ? path : null;
}

function calculate_distance(path) {
    let total_distance = 0;

    for (let index = 0; index < path.length - 1; index++) {
        total_distance += graph
            .get(path[index])
            .get(path[index + 1]);
    }

    return total_distance;
}

function update_selects() {
    const cities = [...graph.keys()];

    for (const select of [
        start_city,
        end_city,
        road_from,
        road_to
    ]) {
        const previous_value = select.value;

        select.replaceChildren();

        for (const city of cities) {
            const option = document.createElement("option");

            option.value = city;
            option.textContent = city;

            select.appendChild(option);
        }

        if (cities.includes(previous_value)) {
            select.value = previous_value;
        }
    }

    if (cities.length > 1) {
        if (start_city.value === end_city.value) {
            end_city.selectedIndex = 1;
        }

        if (road_from.value === road_to.value) {
            road_to.selectedIndex = 1;
        }
    }
}

function render_graph() {
    graph_svg.replaceChildren();

    const defs = document.createElementNS(svg_namespace, "defs");
const marker = document.createElementNS(svg_namespace, "marker");

marker.setAttribute("id", "arrow");
marker.setAttribute("markerWidth", "10");
marker.setAttribute("markerHeight", "10");
marker.setAttribute("refX", "8");
marker.setAttribute("refY", "3");
marker.setAttribute("orient", "auto");

const arrow_head = document.createElementNS(svg_namespace, "path");
arrow_head.setAttribute("d", "M0,0 L0,6 L9,3 Z");
arrow_head.setAttribute("fill", "#64748b");

marker.appendChild(arrow_head);
defs.appendChild(marker);

    const svg_namespace = "http://www.w3.org/2000/svg";
    const active_nodes = new Set(active_route);
    const active_edges = new Set();

    for (let index = 0; index < active_route.length - 1; index++) {
        active_edges.add(
            edge_key(active_route[index], active_route[index + 1])
        );
    }

    for (const [from, neighbours] of graph) {
        for (const [to, distance] of neighbours) {
            if (from.localeCompare(to) >= 0) {
                continue;
            }

            const start = positions[from];
            const end = positions[to];

            const line = document.createElementNS(
                svg_namespace,
                "line"
            );

            line.setAttribute("x1", start.x);
            line.setAttribute("y1", start.y);
            line.setAttribute("x2", end.x);
            line.setAttribute("y2", end.y);

            line.setAttribute(
                "class",
                active_edges.has(edge_key(from, to))
                    ? "edge active"
                    : "edge"
            );

            graph_svg.appendChild(line);

            const label = document.createElementNS(
                svg_namespace,
                "text"
            );

            label.setAttribute("x", (start.x + end.x) / 2);
            label.setAttribute("y", (start.y + end.y) / 2 - 8);
            label.setAttribute("class", "edge-label");
            label.textContent = `${distance} km`;

            graph_svg.appendChild(label);
        }
    }

    for (const city of graph.keys()) {
        const position = positions[city];

        const circle = document.createElementNS(
            svg_namespace,
            "circle"
        );

        circle.setAttribute("cx", position.x);
        circle.setAttribute("cy", position.y);
        circle.setAttribute("r", 10);

        circle.setAttribute(
            "class",
            active_nodes.has(city) ? "node active" : "node"
        );

        graph_svg.appendChild(circle);

        const label = document.createElementNS(
            svg_namespace,
            "text"
        );

        label.setAttribute("x", position.x);
        label.setAttribute("y", position.y + 26);
        label.setAttribute("class", "node-label");
        label.textContent = city;

        graph_svg.appendChild(label);
    }

    const road_count = [...graph.values()].reduce(
        (total, neighbours) => total + neighbours.size,
        0
    ) / 2;

    document.querySelector("#city-count").textContent = graph.size;
    document.querySelector("#road-count").textContent = road_count;

    render_adjacency_list();
}

function edge_key(city_a, city_b) {
    return [city_a, city_b]
        .sort((a, b) => a.localeCompare(b))
        .join("::");
}

function render_adjacency_list() {
    adjacency_list.replaceChildren();

    for (const [city, neighbours] of graph) {
        const item = document.createElement("li");

        if (neighbours.size === 0) {
            item.textContent = `${city}: No roads`;
        } else {
            const connections = [...neighbours]
                .map(([neighbour, distance]) =>
                    `${neighbour} (${distance} km)`
                )
                .join(", ");

            item.textContent = `${city}: ${connections}`;
        }

        adjacency_list.appendChild(item);
    }
}

function show_message(text, is_error = false) {
    message.textContent = text;
    message.style.color = is_error ? "#b91c1c" : "#15803d";
}

function find_route() {
    const start = start_city.value;
    const destination = end_city.value;
    const algorithm = document.querySelector("#algorithm").value;

    if (!start || !destination) {
        result.textContent = "Add at least two cities first.";
        return;
    }

    if (start === destination) {
        active_route = [start];
        result.textContent = `You are already in ${start}.`;
        render_graph();
        return;
    }

    if (algorithm === "bfs") {
        const path = bfs(start, destination);

        if (!path) {
            active_route = [];
            result.textContent = "No route exists between these cities.";
            render_graph();
            return;
        }

        active_route = path;

        const distance = calculate_distance(path);

        result.textContent =
            `BFS route: ${path.join(" → ")}. ` +
            `Roads: ${path.length - 1}. ` +
            `Distance: ${distance} km. ` +
            "BFS finds the fewest roads, not necessarily the shortest distance.";
    } else {
        const route = dijkstra(start, destination);

        if (!route) {
            active_route = [];
            result.textContent = "No route exists between these cities.";
            render_graph();
            return;
        }

        active_route = route.path;

        result.textContent =
            `Shortest route: ${route.path.join(" → ")}. ` +
            `Total distance: ${route.distance} km. ` +
            `Roads: ${route.path.length - 1}.`;
    }

    render_graph();
}

document.querySelector("#find-route").addEventListener(
    "click",
    find_route
);

document.querySelector("#city-form").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        try {
            add_city(document.querySelector("#new-city").value);

            document.querySelector("#new-city").value = "";

            update_selects();
            render_graph();

            show_message("City added successfully.");
        } catch (error) {
            show_message(error.message, true);
        }
    }
);

document.querySelector("#road-form").addEventListener(
    "submit",
    event => {
        event.preventDefault();

        try {
            add_road(
                road_from.value,
                road_to.value,
                Number(document.querySelector("#distance").value)
            );

            update_selects();
            render_graph();

            show_message("Road added successfully.");
        } catch (error) {
            show_message(error.message, true);
        }
    }
);

document.querySelector("#reset-graph").addEventListener(
    "click",
    () => {
        graph = new Map();
        positions = {};
        active_route = {};

        for (const [city, position] of Object.entries(initial_positions)) {
            graph.set(city, new Map());
            positions[city] = { ...position };
        }

        for (const [from, to, distance] of initial_roads) {
            graph.get(from).set(to, distance);
            graph.get(to).set(from, distance);
        }

        active_route = [];

        update_selects();
        render_graph();

        result.textContent = "Graph reset to the original city network.";
        show_message("Graph reset successfully.");
    }
);

function initialize_graph() {
    for (const [city, position] of Object.entries(initial_positions)) {
        graph.set(city, new Map());
        positions[city] = { ...position };
    }

    for (const [from, to, distance] of initial_roads) {
        graph.get(from).set(to, distance);
        graph.get(to).set(from, distance);
    }

    update_selects();
    render_graph();
}

initialize_graph();
