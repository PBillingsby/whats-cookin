import React from "react";

const RecipeCard = props => {
  const { name } = props.recipe;
  console.log(props);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default RecipeCard;
