import React from "react";
import ReactDOM from "react-dom";

// Live reloading
if (module.hot) {
  module.hot.accept();
}

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Hey Jude!!!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
