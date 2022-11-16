export function plus(a, b) {
  return a + b;
}

const JestTesting = () => {
  return (
    <div>
      <h1>H1</h1>
      <div>
        <p>text</p>
        <button onClick={plus(-1, -2)} placeholder="placeholder">
          button
        </button>
      </div>
    </div>
  );
};

export default JestTesting;
