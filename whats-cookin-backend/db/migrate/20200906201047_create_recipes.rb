class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.integer :serving_size
      t.integer :prep_time
      t.integer :cook_time

      t.timestamps
    end
  end
end
