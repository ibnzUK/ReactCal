import React, { Component } from 'react';
import classes from './App.module.css';
import Result from './Components/Result/Result';

import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

class App extends Component {
  state = {
    currentResult: [],
    currentNumber: 0,
    secondNumber: 0,
    operator: '',
    tempNum: 0,
    firstButtonState: classes.ThemeEnabled,
    secondButtonState: classes.ThemeDisabled,
    calcTheme: classes.CalcShapeDark
  };

  //Numbers
  buttonClickHandler = tempNum => {
    if (this.state.currentResult.length < 16) {
      const tempArray = this.state.currentResult;
      tempArray.push(tempNum);
      this.setState({
        currentResult: [...tempArray],
        currentNumber: this.state.currentResult.join('')
      });
    } else {
    }
  };

  // +
  buttonClickHandlerOperator = op => {
    let tempOp = op;
    if (this.state.firstNumber === null) {
      this.setState({
        tempNum: this.state.currentNumber,
        currentResult: [],
        operator: tempOp
      });
    } else {
      this.setState({
        tempNum: this.state.currentNumber,
        currentResult: [],
        operator: tempOp
      });
    }
  };

  // =
  buttonClickHandlerResult = () => {
    if (this.state.operator === '+') {
      let calculation =
        parseInt(this.state.tempNum) + parseInt(this.state.currentNumber);
      this.setState({
        currentNumber: calculation
      });
    } else if (this.state.operator === '-') {
      let calculation =
        parseInt(this.state.tempNum) - parseInt(this.state.currentNumber);
      this.setState({
        currentNumber: calculation
      });
    } else if (this.state.operator === '*') {
      let calculation =
        parseInt(this.state.tempNum) * parseInt(this.state.currentNumber);
      this.setState({
        currentNumber: calculation
      });
    } else {
      let calculation =
        parseInt(this.state.tempNum) / parseInt(this.state.currentNumber);
      this.setState({
        currentNumber: calculation
      });
    }
  };
  // RESET CE
  buttonClickHandlerReset = () => {
    this.setState({
      currentResult: [],
      currentNumber: 0,
      secondNumber: 0,
      operator: '',
      tempNum: 0
    });
  };
  //change theme 
  buttonClickChangeTheme(mode) {
    if (mode === 'Dark') {
      this.setState({
        firstButtonState: classes.ThemeEnabled,
        secondButtonState: classes.ThemeDisabled,
        calcTheme: classes.CalcShapeDark
      });
    } else {
      this.setState({
        firstButtonState: classes.ThemeDisabled,
        secondButtonState: classes.ThemeEnabled,
        calcTheme: classes.CalcShapeLight
      });
    }
    console.log(mode);
  }

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Toggle}>
          <div
            className={this.state.firstButtonState}
            onClick={() => this.buttonClickChangeTheme('Dark')}
          >
            <FaMoon />
          </div>
          <div
            className={this.state.secondButtonState}
            onClick={() => this.buttonClickChangeTheme('Light')}
          >
            <FaSun />
          </div>
        </div>
        <h2> JS Calculator</h2>

        <div className={this.state.calcTheme}>
          <div className={classes.CalcNavBar}></div>
          <div className={classes.CalcGridTop}>
            <h1>
              <Result result={this.state.currentNumber} />
            </h1>
          </div>
          <div className={classes.CalcGridBottom}>
            <div onClick={() => this.buttonClickHandler(7)}>7</div>
            <div onClick={() => this.buttonClickHandler(8)}>8</div>
            <div onClick={() => this.buttonClickHandler(9)}>9</div>
            <div onClick={() => this.buttonClickHandlerOperator('*')}>*</div>

            <div onClick={() => this.buttonClickHandler(4)}>4</div>
            <div onClick={() => this.buttonClickHandler(5)}>5</div>
            <div onClick={() => this.buttonClickHandler(6)}>6</div>
            <div onClick={() => this.buttonClickHandlerOperator('-')}>-</div>

            <div onClick={() => this.buttonClickHandler(1)}>1</div>
            <div onClick={() => this.buttonClickHandler(2)}>2</div>
            <div onClick={() => this.buttonClickHandler(3)}>3</div>
            <div onClick={() => this.buttonClickHandlerOperator('+')}>+</div>

            <div className={classes.Ce} onClick={this.buttonClickHandlerReset}>
              CE
            </div>
            <div onClick={() => this.buttonClickHandler(0)}>0</div>
            <div onClick={() => this.buttonClickHandlerOperator('/')}>/</div>
            <div onClick={() => this.buttonClickHandlerResult()}>=</div>
          </div>
          {/* <div div className={classes.Result}>
              <h1>Result</h1>
            </div> */}
        </div>
      </div>
    );
  }
}

export default App;
