class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.text :details
      t.boolean :public, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :boards, :user_id
  end
end
