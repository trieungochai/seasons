import React from "react";
import ReactDOM from "react-dom";

// Live reloading
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
     // we called setState
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
