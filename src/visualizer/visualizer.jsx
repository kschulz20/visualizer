import { Component } from "react";
import "./visualizer.css"

export default class Visualizer extends Component {
  render() {
    return (
        <div>
          <h1>Visualizer</h1>
          <canvas id="myCanvas"></canvas>
        </div>
    )
  }
}

