import React from "react";
import ReactDOM from "react-dom";

// Live reloading
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return <div>Hey Jude!!!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
