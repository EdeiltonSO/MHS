import React, { Component } from "react";

import { Container } from "../Outputs/styles";

export default class Outputs extends Component {
  render() {
    return (
      <Container>
        <h2>Saídas</h2>
        <div className="field">
          <span className="name">Frequência:</span>{" "}
          <p>
            {this.props.freq.toFixed(4)} <span className="unid">Hz</span>
          </p>
        </div>
        <div className="field">
          <span className="name">Constante da Mola:</span>{" "}
          <p>
            {this.props.mola.toFixed(4)} <span className="unid">N/m²</span>
          </p>
        </div>
        <div className="field">
          <span className="name">Frequência Angular:</span>{" "}
          <p>
            {this.props.freqAngular.toFixed(4)}{" "}
            <span className="unid">rad/s</span>
          </p>
        </div>
        <div className="field">
          <span className="name">Velocidade Máxima:</span>{" "}
          <p>
            {this.props.velocMax.toFixed(4)} <span className="unid">m/s</span>
          </p>
        </div>
        <div className="field">
          <span className="name">Aceleração Máxima:</span>{" "}
          <p>
            {this.props.acelerMax.toFixed(4)} <span className="unid">m/s²</span>
          </p>
        </div>
        <div className="field">
          <span className="name">Energia Mecânica:</span>{" "}
          <p>
            {this.props.energiaMec.toFixed(4)} <span className="unid">J</span>
          </p>
        </div>
      </Container>
    );
  }
}
