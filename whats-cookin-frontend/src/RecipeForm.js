import React from "react";

const RecipeForm = props => {
  return (
    <div className="row">
      <form className="w-50 grid" onSubmit={event => props.handleForm(event)}>
        <div className="form-group">
          <label>Recipe Name:</label>
          <input name="name" />
        </div>
        <div className="form-group">
          <label>Serving Size:</label>
          <input type="number" name="serving" min="0" />
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
            defaultValue="-"
            onChange={e => props.renderIngredients(parseInt(e.target.value))}
          >
            {[...Array(11).keys()].slice(1).map(num => (
              <option key={num}>{num}</option>
            ))}
          </select>
        </div>
        {props.ingredientsArr}

        <input type="submit" />
      </form>
      <div>He</div>
    </div>
  );
};

export default RecipeForm;
