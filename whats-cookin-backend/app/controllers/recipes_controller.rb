class RecipesController < ApplicationController
  def create
    recipe = Recipe.create(recipe_params)
    params[:ingredients].each do |ingredient|
      recipe.ingredients.create(ingredient: ingredient)
    end
    render json: recipe
  end

  def recipe_params
    params.require(:recipe).permit(:name, :serving_size, :prep_time, :cook_time)
  end
end
