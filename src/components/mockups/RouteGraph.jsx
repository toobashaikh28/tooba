const nodes = {
  a: [40, 120], b: [120, 50], c: [130, 150], d: [220, 90], e: [230, 170], f: [320, 60], g: [330, 140],
};
const edges = [['a', 'b'], ['a', 'c'], ['b', 'd'], ['c', 'd'], ['c', 'e'], ['d', 'f'], ['d', 'g'], ['e', 'g'], ['f', 'g']];
const path = [['a', 'b'], ['b', 'd'], ['d', 'g']];

const isOnPath = (u, v) => path.some(([x, y]) => (x === u && y === v) || (x === v && y === u));

export default function RouteGraph() {
  return (
    <svg viewBox="0 0 370 210" className="route" role="img" aria-label="Graph of bus stops with the shortest route highlighted from stop A to stop G">
      {edges.map(([u, v]) => (
        <line
          key={u + v}
          x1={nodes[u][0]} y1={nodes[u][1]} x2={nodes[v][0]} y2={nodes[v][1]}
          className={isOnPath(u, v) ? 'route__edge route__edge--path' : 'route__edge'}
        />
      ))}
      {Object.entries(nodes).map(([k, [x, y]]) => {
        const onPath = path.flat().includes(k);
        return (
          <g key={k}>
            <circle cx={x} cy={y} r="13" className={onPath ? 'route__node route__node--path' : 'route__node'} />
            <text x={x} y={y + 4} textAnchor="middle" className={onPath ? 'route__label route__label--path' : 'route__label'}>
              {k.toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
