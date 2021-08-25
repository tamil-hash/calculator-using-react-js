import Close from "./close.png";

const History = ({ showHistory, setShowHistory, history }) => {
  const sections = [
    { class: "MC", text: "Mixed Calculation" },
    { class: "add", text: "Addition" },
    { class: "sub", text: "Subtraction" },
    { class: "mul", text: "Multiplication" },
    { class: "div", text: "Division" },
    { class: "mod", text: "Modulus" },
  ];
  return (
    <section className={`history ${showHistory && "show"}`}>
      <div className="head">
        <h2>Previous Calculations</h2>
        <img
          className="close-btn"
          src={Close}
          alt="close-btn"
          onClick={() => setShowHistory(!showHistory)}
        />
      </div>
      <div className="calculations">
        {sections.map((section, index) => (
          <div key={index} className={`cal ${section.class}`}>
            <h1>{section.text}</h1>
            {history[index].map((his, index) => (
              <h2 className="calculation">{his}</h2>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
