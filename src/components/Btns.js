const Btns = ({ displayInput, calculate, deleteInput }) => {
  const BtnData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "+", "-", "*", "/", "%"];
  return (
    <section className="btns">
      {BtnData.map((btn, index) => (
        <button
          key={index}
          className="btn calc-btn"
          onClick={() => displayInput(btn, true)}
          value={btn}
        >
          {btn}
        </button>
      ))}
      <button className="btn clear-btn" onClick={deleteInput}>
        Clear
      </button>
      <button className="btn equal-btn" onClick={calculate}>
        =
      </button>
    </section>
  );
};

export default Btns;
