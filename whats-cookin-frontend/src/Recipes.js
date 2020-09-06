import React from "react";
import RecipeForm from "./RecipeForm";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsArr: []
    };
  }
  handleForm = event => {
    event.preventDefault();
  };

  renderIngredients = count => {
    let newArr = [];
    for (let i = 0; i < count; i++) {
      let ingredientPlaceholder = `Ingredient ${i + 1}`;
      newArr.push(
        <div key={i + 1} className="form-group">
          <input key={i + 1} type="text" placeholder={ingredientPlaceholder} />
        </div>
      );
      this.setState({ ingredientsArr: newArr });
    }
  };

  render() {
    return (
      <div className="container">
        <RecipeForm
          handleForm={e => this.handleForm(e)}
          renderIngredients={count => this.renderIngredients(count)}
          ingredientsArr={this.state.ingredientsArr}
        />
      </div>
    );
  }
}

export default Recipes;
