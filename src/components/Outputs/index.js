import React, { Component } from "react";

import { Container } from "../Outputs/styles";

export default class Outputs extends Component {
  render() {
    return (
      <Container>
        <h2>Saídas</h2>
        <div class="field">
          <span class="name">Frequência:</span>{" "}
          <p>
            {this.props.freq.toFixed(4)} <span class="unid">Hz</span>
          </p>
        </div>
        <div class="field">
          <span class="name">Constante da Mola:</span>{" "}
          <p>
            {this.props.mola.toFixed(4)} <span class="unid">N/m²</span>
          </p>
        </div>
        <div class="field">
          <span class="name">Frequência Angular:</span>{" "}
          <p>
            {this.props.freqAngular.toFixed(4)} <span class="unid">rad/s</span>
          </p>
        </div>
        <div class="field">
          <span class="name">Velocidade Máxima:</span>{" "}
          <p>
            {this.props.velocMax.toFixed(4)} <span class="unid">m/s</span>
          </p>
        </div>
        <div class="field">
          <span class="name">Aceleração Máxima:</span>{" "}
          <p>
            {this.props.acelerMax.toFixed(4)} <span class="unid">m/s²</span>
          </p>
        </div>
        <div class="field">
          <span class="name">Energia Mecânica:</span>{" "}
          <p>
            {this.props.energiaMec.toFixed(4)} <span class="unid">J</span>
          </p>
        </div>
      </Container>
    );
  }
}
