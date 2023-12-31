import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    const trunfo = (
      <label htmlFor="check">
        Super Trunfo
        <input
          type="checkbox"
          id="check"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          data-testid="trunfo-input"
        />
      </label>);
    const other = <div>Você já tem um Super Trunfo em seu baralho</div>;
    return (
      <form>
        <label htmlFor="text">
          Nome:
          <input
            type="text"
            id="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="textarea">
          Descrição:
          <textarea
            id="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="number1">
          Força:
          <input
            type="number"
            id="number1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="number2">
          Velocidade:
          <input
            type="number"
            id="number2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="number3">
          Resistência:
          <input
            type="number"
            id="number3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          URL:
          <input
            type="text"
            id="image"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
            id="rarity"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {
          hasTrunfo === true
            ? other
            : trunfo
        }
        <button
          type="button"
          id="btn"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
