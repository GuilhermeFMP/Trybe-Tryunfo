import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text">
          Nome:
          <input type="text" id="text" data-testid="name-input" />
        </label>
        <label htmlFor="textarea">
          Descrição:
          <textarea id="textarea" data-testid="description-input" />
        </label>
        <label htmlFor="number1">
          Força:
          <input type="number" id="number1" data-testid="attr1-input" />
        </label>
        <label htmlFor="number2">
          Velocidade:
          <input type="number" id="number2" data-testid="attr2-input" />
        </label>
        <label htmlFor="number3">
          Resistência:
          <input type="number" id="number3" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          URL:
          <input type="text" id="image" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select id="rarity" name="select" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          Super Trunfo
          <input type="checkbox" id="check" data-testid="trunfo-input" />
        </label>
        <button type="button" id="btn" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
