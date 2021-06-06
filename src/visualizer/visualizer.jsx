import { Component } from "react";
import "./visualizer.css"

export default class Visualizer extends Component {
  addCircle(e) {
    const c = document.getElementById('myCanvas')
    let rect = c.getBoundingClientRect();
    let y = e.clientY - rect.top
    let x = e.clientX - rect.left

    const ctx = c.getContext('2d')
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2* Math.PI);
    ctx.stroke()

  }
  render() {
    return (
        <div>
          <h1>Visualizer</h1>
          <canvas id="myCanvas" onClick={e => this.addCircle(e)}></canvas>
        </div>
    )
  }
}
