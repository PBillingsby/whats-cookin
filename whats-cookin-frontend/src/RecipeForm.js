import React from "react";

const RecipeForm = props => {
  // let ingredientsArr = [];
  // let count;

  return (
    <form className="w-50" onSubmit={event => props.handleForm(event)}>
      <div className="form-group">
        <label>Recipe Name:</label>
        <input name="name" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" name="prep" min="0" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" name="cook" min="0" />
      </div>
      <div className="form-group">
        <label>Number of ingredients:</label>
        <select
          onChange={e => props.renderIngredients(parseInt(e.target.value))}
        >
          <option selected disabled>
            -
          </option>
          {[...Array(11).keys()].slice(1).map(num => (
            <option>{num}</option>
          ))}
          {/* <option>1</option>
          <option>2</option>
          <option>3</option> */}
        </select>
      </div>
      {props.ingredientsArr}

      <input type="submit" />
    </form>
  );
};

export default RecipeForm;
