import React from "react";
import ReactDOM from "react-dom";
import Paso from "./Paso";

class App extends React.Component {
  state = { hour: null };
  step = ["correo", "papeleo1", "llamadas", "descanso", "papeleo2"];

  isCurrentHour() {
    if (this.state.hour !== new Date().getHours()) {
      this.setState({ hour: new Date().getHours() });
    }
  }
  componentDidMount() {
    setInterval(this.isCurrentHour(), 1000);
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.hour) {
      return (
        <div className="ui vertical steps">
          <Paso hour={this.state.hour} step={this.step[0]} />
          <Paso hour={this.state.hour} step={this.step[1]} />
          <Paso hour={this.state.hour} step={this.step[2]} />
          <Paso hour={this.state.hour} step={this.step[3]} />
          <Paso hour={this.state.hour} step={this.step[4]} />
        </div>
      );
    } else {
      return <div>Por favor, espera</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
