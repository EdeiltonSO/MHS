import React, { Component, Fragment } from "react";
import Header from "../src/components/Header";
import Canvas from "../src/components/Canvas";
import InputNumber from "../src/components/InputNumber";
import {
  Viewport,
  Wrapper,
  DataView,
  ContainerInputs
} from "./styles/components";
import GlobalStyle from "./styles/global";
// import Inputs from "./components/Inputs";
import Outputs from "./components/Outputs";

class App extends Component {
  state = {
    amplitude: 20,
    periodo: 15,
    massa: 1,
    fase: 0,
    waveType: "posicao"
  };

  // AMPLITUDE ######################################
  oneLessClickAmplitude = min => {
    const atual = this.state.amplitude;
    const novo = atual - 1;
    novo >= min &&
      this.setState({
        amplitude: novo
      });
  };

  oneMoreClickAmplitude = max => {
    const atual = this.state.amplitude;
    const novo = atual - -1;
    novo <= max &&
      this.setState({
        amplitude: novo
      });
  };

  // PERÍODO ######################################
  oneLessClickPeriodo = min => {
    const atual = this.state.periodo;
    const novo = atual - 1;
    novo >= min &&
      this.setState({
        periodo: novo
      });
  };

  oneMoreClickPeriodo = max => {
    const atual = this.state.periodo;
    const novo = atual - -1;
    novo <= max &&
      this.setState({
        periodo: novo
      });
  };

  // MASSA ######################################
  oneLessClickMassa = min => {
    const atual = this.state.massa;
    const novo = atual - 1;
    novo >= min &&
      this.setState({
        massa: novo
      });
  };

  oneMoreClickMassa = () => {
    const atual = this.state.massa;
    const novo = atual - -1;
    this.setState({
      massa: novo
    });
  };

  // FASE ######################################
  oneLessClickFase = min => {
    const atual = this.state.fase;
    const novo = atual - 1;
    novo >= min &&
      this.setState({
        fase: novo
      });
  };

  oneMoreClickFase = max => {
    const atual = this.state.fase;
    const novo = atual - -1;
    novo <= max &&
      this.setState({
        fase: novo
      });
  };

  render() {
    const freq = 1 / this.state.periodo;
    const freqAngular = 2 * Math.PI * freq;
    const mola = this.state.massa * Math.pow(freqAngular, 2);
    const velocMax = this.state.amplitude * freqAngular;
    const acelerMax = this.state.amplitude * Math.pow(freqAngular, 2);
    const energiaMec = (mola * Math.pow(this.state.amplitude, 2)) / 2;

    return (
      <div className="App">
        <GlobalStyle />
        <Viewport>
          <Wrapper>
            <Header />
            <DataView>
              {/* ******************************** INPUTS ******************************** */}
              <ContainerInputs>
                <h2>Entradas</h2>
                <Fragment>
                  <div className="field">
                    <p>
                      Amplitude <span>≥ -120 e ≤ 120</span>
                    </p>
                    <InputNumber
                      id="amplitude"
                      type="number"
                      min="-120"
                      max="120"
                      placeholder="cm"
                      value={this.state.amplitude}
                      onChange={e =>
                        this.setState({
                          amplitude: e.target.value
                        })
                      }
                      oneLessClick={this.oneLessClickAmplitude}
                      oneMoreClick={this.oneMoreClickAmplitude}
                    />
                  </div>
                  <div className="field">
                    <p>
                      Período <span>> 0 e ≤ 100</span>
                    </p>
                    <InputNumber
                      id="periodo"
                      type="number"
                      min="0.001"
                      max="100"
                      placeholder="s"
                      value={this.state.periodo}
                      onChange={e =>
                        this.setState({
                          periodo: e.target.value
                        })
                      }
                      oneLessClick={this.oneLessClickPeriodo}
                      oneMoreClick={this.oneMoreClickPeriodo}
                    />
                  </div>
                  <div className="field">
                    <p>
                      Massa <span>≥ 0</span>
                    </p>
                    <InputNumber
                      id="massa"
                      type="number"
                      min="0"
                      placeholder="kg"
                      value={this.state.massa}
                      onChange={e =>
                        this.setState({
                          massa: e.target.value
                        })
                      }
                      oneLessClick={this.oneLessClickMassa}
                      oneMoreClick={this.oneMoreClickMassa}
                    />
                  </div>
                  <div className="field">
                    <p className="sup">
                      Fase{" "}
                      <span>
                        ≥ 0 e ≤ 1x10<sup>14</sup>
                      </span>
                    </p>
                    <InputNumber
                      id="fase"
                      type="number"
                      min="0"
                      max="100000000000000"
                      placeholder="rad"
                      value={this.state.fase}
                      onChange={e =>
                        this.setState({
                          fase: e.target.value
                        })
                      }
                      oneLessClick={this.oneLessClickFase}
                      oneMoreClick={this.oneMoreClickFase}
                    />
                  </div>
                  <div className="field">
                    <p>Tipo de onda</p>
                    <select
                      id="wave-type"
                      value={this.state.waveType}
                      onChange={e =>
                        this.setState({
                          waveType: e.target.value
                        })
                      }
                    >
                      <option value="posicao">Posição</option>
                      <option value="velocidade">Velocidade</option>
                      <option value="aceleracao">Aceleração</option>
                    </select>
                  </div>
                </Fragment>
              </ContainerInputs>{" "}
              {/* ******************************** INPUTS ******************************** */}
              <Outputs
                amplitude={this.state.amplitude}
                periodo={this.state.periodo}
                massa={this.state.massa}
                fase={this.state.fase}
                freq={freq}
                freqAngular={freqAngular}
                mola={mola}
                velocMax={velocMax}
                acelerMax={acelerMax}
                energiaMec={energiaMec}
              />
            </DataView>
            <Canvas
              amplitude={this.state.amplitude}
              periodo={this.state.periodo}
              massa={this.state.massa}
              fase={this.state.fase}
              waveType={this.state.waveType}
              mola={mola}
              freqAngular={freqAngular}
            />
          </Wrapper>
        </Viewport>
      </div>
    );
  }
}

export default App;
