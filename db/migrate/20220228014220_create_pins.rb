class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.text :details
      t.integer :user_id, null: false
      t.integer :board_id

      t.timestamps
    end
    add_index :pins, :user_id
    add_index :pins, :board_id
  end
end
