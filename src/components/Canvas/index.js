import React, { Component } from "react";
import { Container } from "./styles";

export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
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

      // POSIÇÃO ESTÁ NO ELSE, POR ÚLTIMO
      // VELOCIDADE ######################################################################
      if (this.props.waveType === "velocidade") {
        // Estilização ---------
        ctx.fillStyle = "rgb(25, 23, 37)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgb(204, 51, 153)";
        ctx.lineWidth = 2;
        // ---------------------

        ctx.moveTo(0, height / 2);
        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            height / 2 +
              -(
                this.props.amplitude *
                (2 * Math.PI * (1 / (this.props.periodo * 10))) *
                Math.sin(
                  2 * Math.PI * (1 / (this.props.periodo * 10)) * i -
                    this.props.fase
                )
              )
          );
        }
        // ACELERAÇÃO ######################################################################
      } else if (this.props.waveType === "aceleracao") {
        // Estilização ---------
        ctx.fillStyle = "rgb(25, 23, 37)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgb(0, 176, 80)";
        ctx.lineWidth = 2;
        // ---------------------

        ctx.moveTo(0, height / 2);
        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            height / 2 +
              -(
                this.props.amplitude *
                Math.pow(2 * Math.PI * (1 / (this.props.periodo * 10)), 2) *
                Math.cos(
                  2 * Math.PI * (1 / (this.props.periodo * 10)) * i -
                    this.props.fase
                )
              )
          );
        }
        // CINÉTICA ######################################################################
      } else if (this.props.waveType === "cinetica") {
        // Estilização ---------
        ctx.fillStyle = "rgb(25, 23, 37)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgb(0, 112, 192)";
        ctx.lineWidth = 2;
        // ---------------------

        ctx.moveTo(0, height / 2);
        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            height / 2 -
              Math.pow(this.props.amplitude, 2) / 23 +
              0.5 *
                Math.pow(this.props.amplitude, 2) *
                Math.pow(this.props.freqAngular, 2) *
                this.props.massa *
                Math.pow(
                  Math.sin(this.props.freqAngular * i - this.props.fase),
                  2
                )
          );
        }
        // POTENCIAL ######################################################################
      } else if (this.props.waveType === "potencial") {
        // Estilização ---------
        ctx.fillStyle = "rgb(25, 23, 37)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgb(191, 144, 0)";
        ctx.lineWidth = 1;
        // ---------------------

        ctx.moveTo(0, height / 2);
        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            height / 2 -
              Math.pow(this.props.amplitude, 2) / 23 +
              0.5 *
                Math.pow(this.props.amplitude, 2) *
                this.props.mola *
                Math.pow(
                  Math.cos(
                    2 * Math.PI * (1 / (this.props.periodo * 10)) * i -
                      this.props.fase
                  ),
                  2
                )
          );
        }
      }
      // POSIÇÃO ######################################################################
      else {
        ctx.moveTo(0, height / 2);
        // Estilização ---------
        ctx.fillStyle = "rgb(25, 23, 37)";
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = "rgb(201, 94, 67)";
        ctx.lineWidth = 2;
        // ---------------------

        ctx.moveTo(0, height / 2);
        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            height / 2 +
              this.props.amplitude *
                Math.cos(
                  2 * Math.PI * (1 / (this.props.periodo * 10)) * i -
                    this.props.fase
                )
          );
        }
      }

      ctx.stroke();
    };

    console.log("> " + this.props.waveType);
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
