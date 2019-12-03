import React, { Component, Fragment } from "react";
import Header from "../src/components/Header";
import Canvas from "../src/components/Canvas";
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
    fase: 0
  };

  render() {
    const freq = 1 / this.state.periodo;
    const freqAngular = 2 * Math.PI * freq;
    const mola = this.state.massa * Math.pow(freqAngular, 2);
    const velocMax = (this.state.amplitude / 100) * freqAngular;
    const acelerMax = (this.state.amplitude / 100) * Math.pow(freqAngular, 2);
    const energiaMec = (mola * Math.pow(this.state.amplitude / 100, 2)) / 2;

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
                  <div class="field">
                    <p>
                      Amplitude <span>≥ -120 e ≤ 120</span>
                    </p>
                    <input
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
                    />
                  </div>
                  <div class="field">
                    <p>
                      Período <span>> 0 e ≤ 500</span>
                    </p>
                    <input
                      id="periodo"
                      type="number"
                      min="0.0001"
                      max="500"
                      placeholder="s"
                      value={this.state.periodo}
                      onChange={e =>
                        this.setState({
                          periodo: e.target.value
                        })
                      }
                    />
                  </div>
                  <div class="field">
                    <p>
                      Massa <span>≥ 0</span>
                    </p>
                    <input
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
                    />
                  </div>
                  <div class="field">
                    <p class="sup">
                      Fase{" "}
                      <span>
                        ≥ 0 e ≤ 1x10<sup>14</sup>
                      </span>
                    </p>
                    <input
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
                    />
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
              fase={this.state.fase}
            />
          </Wrapper>
        </Viewport>
      </div>
    );
  }
}

export default App;
