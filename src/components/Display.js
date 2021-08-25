const Display = ({ input, displayInput }) => {
  return (
    <section className="display">
      <input
        type="text"
        className="display-input"
        value={input}
        onChange={(e) => displayInput(e.target.value, false)}
      />
    </section>
  );
};

export default Display;
