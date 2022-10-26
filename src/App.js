import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'raro',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.buttonCheck = this.buttonCheck.bind(this);
    this.numberCheck = this.numberCheck.bind(this);
    this.isNegative = this.isNegative.bind(this);
  }

  onInputChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.buttonCheck();
      },
    );
  }

  isNegative() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const att1 = Number(cardAttr1) < 0;
    const att2 = Number(cardAttr2) < 0;
    const att3 = Number(cardAttr3) < 0;
    const state = att1 || att2 || att3;
    return state;
  }

  numberCheck() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxNumber = 90;
    const maxSum = 210;
    const negative = this.isNegative();
    const sumAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    return !!(Number(cardAttr1) > maxNumber
      || Number(cardAttr2) > maxNumber
      || Number(cardAttr3) > maxNumber
      || sumAtt > maxSum || negative === true);
  }

  buttonCheck() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const name = cardName.length === 0;
    const description = cardDescription.length === 0;
    const image = cardImage.length === 0;
    const rare = cardRare.length === 0;
    const length = name || description || image || rare;
    const func = this.numberCheck();
    const valid = length || func;
    this.setState({
      isSaveButtonDisabled: valid,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1> Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
