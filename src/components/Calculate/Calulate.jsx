import React, { Component } from 'react';
import './calculate.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      output: "0",
    };
  }

  appendToOutput = (value) => {
    if (this.state.output === "0") {
      this.setState({ output: value });
    } else {
      this.setState({ output: this.state.output + value });
    }
  };

  clearOutput = () => {
    this.setState({ output: "0" });
  };

  backSpace = () => {
    if (this.state.output.length > 1) {
      this.setState({
        output: this.state.output.substring(0, this.state.output.length - 1),
      });
    } else {
      this.setState({ output: "0" });
    }
  };

  calculate = () => {
    if (this.state.output.includes("√")) {
      const num = this.state.output.substring(1, this.state.output.length);
      this.setState({ output: String(eval(Math.sqrt(num))) });
    } else if (this.state.output.includes("%")){
      let parts = this.state.output.split("%");
      if(parts.length === 2){
        let number = parseFloat(parts[0]);
        if(!isNaN(number)){
          let result = number / 100;
          this.setState({ output: result });
        }
      }
    } else {
      this.setState({ output: String(eval(this.state.output)) });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="output" id="output">
          {this.state.output}
        </div>
        <button className="buttonOfAD" onClick={this.clearOutput}>
          AC
        </button>
        <button className="buttonOfAD" onClick={this.backSpace}>
          DEL
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('%')}>
          %
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('√')}>
          √
        </button>
        <button className="button" onClick={() => this.appendToOutput('7')}>
          7
        </button>
        <button className="button" onClick={() => this.appendToOutput('8')}>
          8
        </button>
        <button className="button" onClick={() => this.appendToOutput('9')}>
          9
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('/')}>
          /
        </button>
        <button className="button" onClick={() => this.appendToOutput('4')}>
          4
        </button>
        <button className="button" onClick={() => this.appendToOutput('5')}>
          5
        </button>
        <button className="button" onClick={() => this.appendToOutput('6')}>
          6
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('*')}>
          *
        </button>
        <button className="button" onClick={() => this.appendToOutput('1')}>
          1
        </button>
        <button className="button" onClick={() => this.appendToOutput('2')}>
          2
        </button>
        <button className="button" onClick={() => this.appendToOutput('3')}>
          3
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('-')}>
          -
        </button>
        <button className="button" onClick={() => this.appendToOutput('.')}>
          .
        </button>
        <button className="button" onClick={() => this.appendToOutput('0')}>
          0
        </button>
        <button className="button equals" onClick={this.calculate}>
          =
        </button>
        <button className="buttonOfOperation" onClick={() => this.appendToOutput('+')}>+</button>
      </div>
    );
  }
}

export default Calculator;
