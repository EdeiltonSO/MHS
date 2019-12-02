import React, { Component } from "react";
import { Container } from "./styles";

export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const c = document.querySelector("canvas");
    const ctx = c.getContext("2d");

    const width = 500;
    const height = 250;

    c.width = width;
    c.height = height;

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      for (let i = 0; i < width; i++) {
        ctx.lineTo(
          i,
          height / 2 +
            this.props.amplitude *
              Math.cos(
                2 * Math.PI * (1 / this.props.periodo) * i - this.props.fase
              )
        );
      }
      ctx.stroke();
    };

    animate();
  }
  render() {
    return (
      <Container>
        <canvas ref="canvas" />
      </Container>
    );
  }
}
