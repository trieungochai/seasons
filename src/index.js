import React from "react";
import ReactDOM from "react-dom";

// Live reloading
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (location) => console.log(location),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
