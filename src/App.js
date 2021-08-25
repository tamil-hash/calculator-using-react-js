import { useState } from "react";
import Alert from "./components/Alert.js";
import Display from "./components/Display.js";
import Btns from "./components/Btns.js";
import History from "./components/History";

const getLocalStorage = () => {
  let PC = localStorage.getItem("PC");
  if (PC) {
    return (PC = JSON.parse(localStorage.getItem("PC")));
  } else {
    return [[], [], [], [], [], []];
  }
};

function App() {
  const [input, setInput] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(getLocalStorage());

  //setInput
  const displayInput = (value, action) => {
    if (action) {
      setInput(input + value);
    } else {
      setInput(value);
    }
  };

  //do calculation

  const calculate = () => {
    const answer = eval(input);
    setInput(answer.toString());
    const calc = `${input} = ${answer}`;
    setLocalStorage(calc);
  };

  const setLocalStorage = (calculation) => {
    let newHistory;
    if (
      (calculation.indexOf("+") !== -1 && calculation.indexOf("-") !== -1) ||
      (calculation.indexOf("+") !== -1 && calculation.indexOf("*") !== -1) ||
      (calculation.indexOf("+") !== -1 && calculation.indexOf("/") !== -1) ||
      (calculation.indexOf("+") !== -1 && calculation.indexOf("%") !== -1) ||
      (calculation.indexOf("-") !== -1 && calculation.indexOf("+") !== -1) ||
      (calculation.indexOf("-") !== -1 && calculation.indexOf("*") !== -1) ||
      (calculation.indexOf("-") !== -1 && calculation.indexOf("/") !== -1) ||
      (calculation.indexOf("-") !== -1 && calculation.indexOf("%") !== -1) ||
      (calculation.indexOf("*") !== -1 && calculation.indexOf("+") !== -1) ||
      (calculation.indexOf("*") !== -1 && calculation.indexOf("-") !== -1) ||
      (calculation.indexOf("*") !== -1 && calculation.indexOf("/") !== -1) ||
      (calculation.indexOf("*") !== -1 && calculation.indexOf("%") !== -1) ||
      (calculation.indexOf("/") !== -1 && calculation.indexOf("+") !== -1) ||
      (calculation.indexOf("/") !== -1 && calculation.indexOf("-") !== -1) ||
      (calculation.indexOf("/") !== -1 && calculation.indexOf("*") !== -1) ||
      (calculation.indexOf("/") !== -1 && calculation.indexOf("%") !== -1) ||
      (calculation.indexOf("%") !== -1 && calculation.indexOf("+") !== -1) ||
      (calculation.indexOf("%") !== -1 && calculation.indexOf("-") !== -1) ||
      (calculation.indexOf("%") !== -1 && calculation.indexOf("*") !== -1) ||
      (calculation.indexOf("%") !== -1 && calculation.indexOf("/") !== -1)
    ) {
      newHistory = [...history, history[0].push(calculation)];
    } else if (calculation.indexOf("+") !== -1) {
      newHistory = [...history, history[1].push(calculation)];
    } else if (calculation.indexOf("-") !== -1) {
      newHistory = [...history, history[2].push(calculation)];
    } else if (calculation.indexOf("*") !== -1) {
      newHistory = [...history, history[3].push(calculation)];
    } else if (calculation.indexOf("/") !== -1) {
      newHistory = [...history, history[4].push(calculation)];
    } else if (calculation.indexOf("%") !== -1) {
      newHistory = [...history, history[5].push(calculation)];
    }
    setHistory(newHistory);
    localStorage.setItem("PC", JSON.stringify(history));
  };

  //delete input
  const deleteInput = () => {
    const newInput = input.substring(0, input.length - 1);
    setInput(newInput);
  };
  return (
    <main className="container">
      <button
        className="btn history-btn"
        onClick={() => setShowHistory(!showHistory)}
      >
        History
      </button>
      <Alert />
      <Display input={input} displayInput={displayInput} />
      <Btns
        displayInput={displayInput}
        calculate={calculate}
        deleteInput={deleteInput}
      />

      <History
        history={history}
        showHistory={showHistory}
        setShowHistory={setShowHistory}
      />
    </main>
  );
}

export default App;
