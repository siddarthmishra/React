export default function Log({ truns }) {
  return (
    <ol id="log">
      {truns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected [{turn.square.row + 1},{turn.square.col + 1}]
        </li>
      ))}
    </ol>
  );
}
