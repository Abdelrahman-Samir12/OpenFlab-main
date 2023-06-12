class AddExercisesTypeToExercise < ActiveRecord::Migration[7.0]
  def change
    add_column :exercises, :exercises_type, :string
  end
end
