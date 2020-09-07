import React from "react";
import RecipeForm from "./RecipeForm";
import RecipeCard from "./RecipeCard";
class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      ingredientsArr: []
    };
  }
  handleForm = event => {
    event.preventDefault();
    let ingredientNodeList = [];
    for (let i = 0; i < [...event.target.ingredient].length; i++) {
      ingredientNodeList.push([...event.target.ingredient][i].value);
    }
    const recipeObject = {
      name: event.target.name.value,
      serving_size: event.target.serving.value,
      prep_time: event.target.prep.value,
      cook_time: event.target.cook.value,
      ingredients: ingredientNodeList
    };
    fetch("http://localhost:3001/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeObject)
    }).then(resp => resp.json().then(recipe => console.log(recipe)));
  };
  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then(resp => resp.json())
      .then(returnedRecipes => this.setState({ recipes: returnedRecipes }));
  }

  renderIngredients = count => {
    let newArr = [];
    for (let i = 0; i < count; i++) {
      let ingredientPlaceholder = `Ingredient ${i + 1}`;
      newArr.push(
        <div key={i + 1} className="form-group">
          <input
            key={i + 1}
            type="text"
            name="ingredient"
            placeholder={ingredientPlaceholder}
          />
        </div>
      );
      this.setState({ ingredientsArr: newArr });
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <RecipeForm
            handleForm={e => this.handleForm(e)}
            renderIngredients={count => this.renderIngredients(count)}
            ingredientsArr={this.state.ingredientsArr}
          />
        </div>
        <div>
          {this.state.recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    );
  }
}

export default Recipes;
